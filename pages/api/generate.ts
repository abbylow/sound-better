import { Configuration, OpenAIApi } from "openai";
import FormData from "form-data";
import fetch from "node-fetch";
import { RequestInit } from "node-fetch";

const KEY_IDENTIFIER = "sourgrapes";
const KV_URL = `https://api.cloudflare.com/client/v4/accounts/${process.env.ACCOUNT_IDENTIFIER}/storage/kv/namespaces/${process.env.NAMESPACE}/values/${KEY_IDENTIFIER}`;
const KV_AUTH_TOKEN = `Bearer ${process.env.CF_TOKEN}`;

const fetchApiKeys = async () => {
	return await fetch(
		KV_URL,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: KV_AUTH_TOKEN
			},
		}
	)
		.then((response) => response.text())
		.then((result) => {
			return JSON.parse(result);
		})
		.catch((error) => {
			console.error("Fail to get API keys from KV", error);
			return [];
		});
};

const updateApiKeys = async (updatedKeys: string) => {
	const formdata = new FormData();
	formdata.append("metadata", "{}");
	formdata.append("value", updatedKeys);

	const requestOptions: RequestInit = {
		method: "PUT",
		headers: {
			Authorization: KV_AUTH_TOKEN,
		},
		body: formdata,
	};

	fetch(
		KV_URL,
		requestOptions
	)
		.then((response) => response.text())
		.then((result) => console.log(result))
		.catch((error) => console.log("Fail to update API keys to KV", error));
};

const basePromptPrefix = `Given an input sentence, rephrase it to be polite and professional sentence. Ensure the meaning is conveyed in decent manner. When the input contains curse words, convert it to express the emotion and don't apologize for it. Check the example below:
Input: Fuck you
Output: I respect your perspective, but I disagree. I would like to discuss this further at a later time when we can both give it our full attention.
Input: If you have me scheduled in meetings all day when do you expect me to get this work done?
Output: My calendar is currently heavily scheduled with meetings. To ensure appropriate time is available to get this done I can sit out of lower priority meetings this week or extend the deadline on this project. Please let me know which is preferred.
Input: You're not my boss, stop trying to assign me work
Output: Have you connected with [insert managers hame] in regards to me taking this on? As it has not been communicated to me that I will be working on this.
Input: I am getting underpaid for what my role has evolved into
Output: As my role has organically evolved, can we schedule time to review my overall compensation and discuss whether or not it is still aligned with my current role and responsibilities?
Input: How many times do I need to tell you this?
Output: I encourage you to write down this information to refer back to in the future instead of relying on me to communicate it again.
Input: Why would I go into the office if I can do my job from here?
Output: Can you help me understand why I am required to be in the office when I can effectively execute my job responsibilities remotely?
Input: I told you so and now this is your problem
Output: I did previously note that this was a likely outcome. How do you plan to resolve this?
Input: Try problem solving on your own before you come to me
Output: I encourage you to brainstorm possible solutions prior to looping me in for additional support
Input: You are wasting my time
Output: Being respectful of time let's regroup when more details become available
Input: While I'm on vacation don't try to contact me. Pretend I don' exists
Output: While I am off I will not be reachable so please do not expect a response. I have CC'd [insert name] as a contact point while l'm off
Input: Stop following up every 20 minutes. I’ll get back to you when I can
Output: I would appreciate your patience, as I need time to address this. I will provide an update once one is available
Input: `;

const MAX_RETRY = 3;
let retryCount = 0;
let needRetry = false;

const resetCounter = () => {
	retryCount = 0;
	needRetry = false;
};

const callOpenApi = async (keys: string[], userInput: string) => {
	const randomIndex = Math.floor(Math.random() * keys.length);
	const randomKey = keys[randomIndex] || keys[0];

	try {
		const configuration = new Configuration({
			apiKey: randomKey,
		});

		const openai = new OpenAIApi(configuration);

		const baseCompletion = await openai.createCompletion({
			model: "text-davinci-003",
			prompt: `${basePromptPrefix}${userInput}\n${`Output: `}`,
			temperature: 0.7,
			max_tokens: 1000,
		});
		const basePromptOutput = baseCompletion.data.choices.pop();

		resetCounter();

		return basePromptOutput;
	} catch (err) {
		console.error(
			`API key error ${randomKey} ${err?.response?.status} ${err?.response?.statusText}`
		);
		if (err?.response?.status === 429) {
			if (keys.includes(randomKey)) {
				const updatedKeys = keys.filter((el) => el !== randomKey);
				updateApiKeys(JSON.stringify(updatedKeys));
			}
		}
		retryCount++;
		needRetry = true;
	}
};

const generateAction = async (req: { body: { userInput: string } }, res) => {
	console.log(`API Input: ${req.body.userInput}`);

	const keys = await fetchApiKeys();

	let basePromptOutput;
	basePromptOutput = await callOpenApi(keys, req.body.userInput);

	while (needRetry && retryCount < MAX_RETRY) {
		basePromptOutput = await callOpenApi(keys, req.body.userInput);
	}

	if (basePromptOutput) {
		console.log(`API Output: ${basePromptOutput?.text}`);
		res.status(200).json({ output: basePromptOutput });
	} else {
		resetCounter();
		console.error("API Error: Failed to generate output");
		res.status(500).json({ error: "Fail to generate output" });
	}
};

export default generateAction;
