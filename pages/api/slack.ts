const slackGenerate = async (req, res) => {
	console.log('req', req)
  console.log('req.body', req.body)
  res.status(200).json({ output: 'test success' });
};

export default slackGenerate;
