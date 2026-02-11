const express = require('express');
const app = express();
app.use(express.json());

app.post('/health/bmi', (req, res) => {
    const { weight, height } = req.body; const bmi = weight / (height * height); res.json({ bmi });
});

app.post('/health/bmr', (req, res) => {
    const { weight, height, age, gender } = req.body; let bmr = 10 * weight + 6.25 * height - 5 * age + (gender === 'male' ? 5 : -161); res.json({ bmr });
});

app.post('/health/water', (req, res) => {
    const { weight } = req.body; res.json({ water_liters: weight * 0.033 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
