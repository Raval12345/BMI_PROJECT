const bmiCalculateRouter = require('express').Router()


app.post('/bmi', (req, res) => {
    const { height, weight } = req.body;
    
    if (!height || !weight) {
        return res.status(400).json({ error: 'Height and weight are required' });
    }

    const heightMeters = parseFloat(height);
    const weightKg = parseFloat(weight);

    if (isNaN(heightMeters) || isNaN(weightKg)) {
        return res.status(400).json({ error: 'Invalid height or weight values' });
    }

    const bmi = weightKg / (heightMeters * heightMeters);

    res.json({ bmi });
});

module.exports = bmiCalculateRouter
