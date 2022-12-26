import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix = `Rephrase the sentence that expresses the thoughts to the co-worker professionally. Don’t curse and belittle anyone. Check the example below:
Original: If you have me scheduled in meetings all day when do you expect me to get this work done?
Rephrased: My calendar is currently heavily scheduled with meetings. To ensure appropriate time is available to get this done I can sit out of lower priority meetings this week or extend the deadline on this project. Please let me know which is preferred.
Original: You are wasting my time
Rephrased: Being respectful of time let's regroup when more details become available
Original: You're not my boss, stop trying to assign me work
Rephrased: Have you connected with (insert managers hame] in regards to me taking this on? As it has not been communicated to me that I will be working on this.
Original: does taking on all this extra work come with extra pay?
Rephrased: With my role expanding is there a plan to review my title and compensation to better reflect these additional responsibilities?
Original: I am getting underpaid for what my role has evolved into 
Rephrased: As my role has organically evolved, can we schedule time to review my overall compensation and discuss whether or not it is still aligned with my current role and responsibilities?
Original: How many times do I need to tell you this?
Rephrased: I encourage you to write down this information to refer back to in the future instead of relying on me to communicate it again.
Original: I told you so and now this is your problem
Rephrased: I did previously note that this was a likely outcome. How do you plan to resolve this?
Original: While I'm on vacation don't try to contact me. Pretend I don' exists
Rephrased: While I am off I will not be reachable so please do not expect a response. I have CC'd insert name as a contact point while l'm off
Original: That timeline is ridiculous why would you commit us to that?
Rephrased: Thank you for sharing that timeline with me. Can you help me understand how this amount of work is achievable in such a short period of time?
Original: If I'm doing your job for you, then what are you doing all day?
Rephrased: Is there a higher priority task that is consuming all of your capacity at the moment?
Original: Stop following up every 20 minutes. I’ll get back to you when I can
Rephrased: I would appreciate your patience, as I need time to address this. I will provide an update once one is available
Original: try problem solving on your own before you come to me
Rephrased: I encourage you to brainstorm possible solutions prior to looping me in for additional support
Original: If you want it done your way then just do it yourself?
Rephrased: As you seem to have a very clear vision for the execution of this, I encourage you to take the lead here and l am happy to support where necessary.
Original: maybe if you communicated that with us sooner, we wouldn't be in this mess
Rephrased: It is important to share information like this with the team sooner, so we might mitigate these sort of issues
Original: why would I go into the office if I can do my job from here?
Rephrased: Can you help me understand why I am required to be in the office when I can effectively execute my job responsibilities remotely?
Original: `;

const generateAction = async (req, res) => {
  console.log(`API: ${basePromptPrefix}${req.body.userInput}\n${`Rephrased:`}`)

  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${basePromptPrefix}${req.body.userInput}\n${`Rephrased:`}`,
    temperature: 0.7,
    max_tokens: 1000,
  });
  
  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;