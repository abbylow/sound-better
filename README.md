# Sound Better
A tool for people who struggle with speaking difficult topics at work.
We turn your thoughts to professional messages - speak up while maintain good impression.

This product is built with Buildspace NWS2 

## Behind the scene
Since SoundBetter was launched on Product Hunt, I am gladful for the attention received but unable to afford the expensive API cost. 
Instead of monetizing the application, I would love to share how this application work and I believe that the users can get similar or even better effects with ChatGPT. 

The technical implementation: 
1. Collect user's input
2. Prepend the examples to the user input and parse them as prompt to GPT-3
3. Return the GPT-3 response to user

If you are interested in the prepended examples, feel free to check `basePromptPrefix` in the [generate API](https://github.com/abbylow/sound-better/blob/main/pages/api/generate.ts).
