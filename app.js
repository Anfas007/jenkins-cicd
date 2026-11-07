
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Testing automatic Jenkins CI/CD triggering
app.get('/', (req, res) => {
    res.send('Hello! Welcome to my CI/CD Pipeline Demo.');
});

app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        message: 'Application is running successfully'
    });
});

// Start server only when running app.js directly
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;
