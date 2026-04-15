const express = require('express');
const multer = require('multer');
const { alignmentFunction } = require('./alignment');

const app = express();
const port = 3000;

// Middleware for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

// Endpoint for file upload
app.post('/upload', upload.single('file'), (req, res) => {
    // File has been uploaded
    res.send('File uploaded successfully.');
});

// Endpoint for alignment
app.post('/align', express.json(), (req, res) => {
    const { text } = req.body;
    const alignedText = alignmentFunction(text);
    res.json({ alignedText });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});