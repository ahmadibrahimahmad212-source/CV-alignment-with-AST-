const fs = require('fs');

class CVParser {
    constructor(cvContent) {
        this.cvContent = cvContent;
    }

    extractSkills() {
        const skillsRegex = /(\b\w+\b)(?=\s*[:;,.])/g;
        const skills = this.cvContent.match(skillsRegex);
        return skills ? skills : [];
    }

    extractExperience() {
        const experienceRegex = /Experience:([\s\S]*?)(Education:|$)/;
        const experienceMatch = this.cvContent.match(experienceRegex);
        return experienceMatch ? experienceMatch[1].trim() : '';
    }

    extractEducation() {
        const educationRegex = /Education:([\s\S]*)$/;
        const educationMatch = this.cvContent.match(educationRegex);
        return educationMatch ? educationMatch[1].trim() : '';
    }
}

module.exports = CVParser;