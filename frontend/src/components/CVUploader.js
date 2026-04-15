import React, { useState } from 'react';

const CVUploader = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = () => {
        // Handle file upload logic here
        console.log('File uploaded:', file);
    };

    return (
        <div>
            <h1>Upload Your CV</h1>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default CVUploader;