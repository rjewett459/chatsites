const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/generate-speech', async (req, res) => {
    try {
        const response = await fetch("https://api-inference.huggingface.co/models/kokoro-ai/kokoro-onnx", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.HF_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ inputs: req.body.text })
        });

        if (!response.ok) {
            throw new Error("API request failed");
        }

        const audioData = await response.blob();
        res.status(200).send(audioData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
