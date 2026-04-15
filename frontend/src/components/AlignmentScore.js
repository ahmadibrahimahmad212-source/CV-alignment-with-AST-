import React from 'react';

const AlignmentScore = ({ score }) => {
    // Ensure the score is between 0 and 100
    const validScore = Math.min(Math.max(score, 0), 100);

    return (
        <div>
            <h2>Alignment Score</h2>
            <div style={{ width: '100%', background: '#eee', borderRadius: '5px', overflow: 'hidden' }}>
                <div style={{ width: `${validScore}%`, background: validScore >= 75 ? 'green' : validScore >= 50 ? 'yellow' : 'red', height: '30px' }} />
            </div>
            <p>{validScore} / 100</p>
        </div>
    );
};

export default AlignmentScore;