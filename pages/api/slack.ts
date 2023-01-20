const slackGenerate = async (req, res) => {
	console.log(`Slack API Input: ${req}`);
  res.status(200).json({ output: 'test success' });
};

export default slackGenerate;
