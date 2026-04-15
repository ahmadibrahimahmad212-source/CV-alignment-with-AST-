import React from 'react';

const JDInput = () => {
    const [jobDescription, setJobDescription] = React.useState('');

    const handleChange = (event) => {
        setJobDescription(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Submit form logic here
        console.log('Job Description submitted:', jobDescription);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="job-description">Job Description:</label>
                <textarea
                    id="job-description"
                    value={jobDescription}
                    onChange={handleChange}
                    rows="5"
                    cols="33"
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default JDInput;