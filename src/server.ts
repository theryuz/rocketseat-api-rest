import express from "express"

const PORT = 3333

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(PORT, () =>
    console.log(`Server is running on port ${PORT}`)
)