const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello DevOps 🚀');
});
// testing pr and branching in git actions
app.listen(3000, () => {
  console.log('Server running');

  setTimeout(() => {
    process.exit(0);
  }, 3000);
});