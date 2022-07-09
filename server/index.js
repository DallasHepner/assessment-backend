const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, createFortune, submitFunc, deleteFortune } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post('/api/fortune', createFortune);
app.get('/api/submit', submitFunc);//gives error
app.delete("/api/delete", deleteFortune);

app.listen(4000, () => console.log("Server running on 4000"));
