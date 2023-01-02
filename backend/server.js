const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 4000;
const {MONGODB_URI} = require('./config');
const { routes } = require("./routes/authentication");
const cors = require("cors");
const corsOpts = {
origin: "*",
  credentials: true,
};

app.use(cors(corsOpts));
mongoose.connect(MONGODB_URI)
require('./models/user_model')
require('./models/post_model')
mongoose.connection.on('connected',()=>{
    console.log("db connected")
})

mongoose.connection.on('error',(error)=>{
    console.log("some error",error)
})


app.use(express.json())
app.use(require('./routes/authentication'))
app.use(require('./routes/postRoute'))


app.listen(PORT, () => {
  console.log("server running");
});
