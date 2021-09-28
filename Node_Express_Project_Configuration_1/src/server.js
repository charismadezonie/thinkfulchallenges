const { PORT = 5000 } = process.env;
const app = require("./app");

const listener = () => console.log(`Hey hey it's ${PORT}!`);
app.listen(PORT, listener);
