const express = require("express");
const app = express();



//middleware

app.use('/test', function(req,res) {
  res.send('This is a message from the test endpoint on the server!')
})

app.listen(5000, () => {
  console.log("sever has started on port 5000");
});