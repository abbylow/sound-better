const slackGenerate = async (req, res) => {
  const input = req.body.text?.trim();
  console.log('input ', input)
  res.status(200).text(`I received input ${input}`);
};

export default slackGenerate;
