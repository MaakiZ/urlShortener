const Express = require('Express');
const app = Express();

// Server Setup
const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});