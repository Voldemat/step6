const express = require("express")
const http = require("http");


const PORT = process.env.port || 3000;
const app = express()
app.use(express.static("static"))

app.get("/", (req, res) => {
    res.sendFile('index.html', { root: __dirname });
})


http.createServer(app).listen(PORT, () => {
    console.log(`Server started at ${PORT} http://localhost:${PORT}`);
})