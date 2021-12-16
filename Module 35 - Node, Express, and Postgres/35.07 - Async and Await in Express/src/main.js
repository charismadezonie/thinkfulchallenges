const {
  generateMessage,
  goodbye,
  generateSlogan,
} = require("../utils/slogan-generator");

async function getSlogan(request) {
  const data = await generateSlogan(request)
  console.log(`Your request was: ${request}`);
  console.log(`Your slogan is: ${data.slogan}`)
}

async function fullSession(request) {
  const data = await generateMessage();
  console.log(data);
  const slogan = await getSlogan(request);
  console.log(await goodbye())
}

module.exports = { getSlogan, fullSession };
