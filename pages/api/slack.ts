// TODO: Verifying requests from Slack
// TODO: test what if it is escaping username, channel 
// TODO: process the input with AI and return 
// TODO: catch error 
const slackGenerate = async (req, res) => {
  const input = req.body.text?.trim();
  console.log('input ', input)
  res.status(200).json({
    text: `I received input ${input}`,
    replace_original: "true",
  });
};

export default slackGenerate;
