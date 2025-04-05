const express = require('express');
const axios = require('axios');
const app = express();

app.post('/api/ai-advice', async (req, res) => {
    const { bmi, category, language } = req.body;
    
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: "gpt-4",
        messages: [{
            role: "user",
            content: `Provide ${language} health advice for BMI ${bmi} (${category}). Keep it under 100 characters.`
        }]
    }, {
        headers: { Authorization: `Bearer ${process.env.OPENAI_KEY}` }
    });

    res.json({ advice: response.data.choices[0].message.content });
});
