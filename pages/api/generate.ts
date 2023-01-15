import {
	Configuration,
	CreateCompletionResponseChoicesInner,
	OpenAIApi,
} from "openai";

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

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

const generateAction = async (
	req: { body: { userInput: string } },
	res: {
		status: (arg0: number) => {
			(): any;
			new (): any;
			json: {
				(arg0: { output: CreateCompletionResponseChoicesInner }): void;
				new (): any;
			};
		};
	}
) => {
	console.log(`API Input: ${req.body.userInput}`);

	const baseCompletion = await openai.createCompletion({
		model: "text-davinci-003",
		prompt: `${basePromptPrefix}${req.body.userInput}\n${`Output: `}`,
		temperature: 0.7,
		max_tokens: 1000,
	});

	const basePromptOutput = baseCompletion.data.choices.pop();

  console.log(`API Output: ${basePromptOutput}`);
	res.status(200).json({ output: basePromptOutput });
};

export default generateAction;
