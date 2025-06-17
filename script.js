document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const resumeForm = document.getElementById('resumeForm');
    const resumePreview = document.getElementById('resumePreview');
    const progressBar = document.getElementById('progressBar');
    
    // Form fields
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const summaryInput = document.getElementById('summary');
    const customSkillInput = document.getElementById('customSkill');
    
    // Preview elements
    const previewName = document.getElementById('previewName');
    const previewEmail = document.getElementById('previewEmail');
    const previewPhone = document.getElementById('previewPhone');
    const previewSummary = document.getElementById('previewSummary');
    const previewEducation = document.getElementById('previewEducation');
    const previewSkills = document.getElementById('previewSkills');
    const previewExperience = document.getElementById('previewExperience');
    
    // Buttons
    const addEducationBtn = document.getElementById('addEducation');
    const addExperienceBtn = document.getElementById('addExperience');
    const clearFormBtn = document.getElementById('clearForm');
    const downloadPDFBtn = document.getElementById('downloadPDF');
    
    // Selected skills array
    let selectedSkills = ['HTML', 'CSS', 'JavaScript'];
    
    // Initialize the form
    initForm();
    
    // Event Listeners
    nameInput.addEventListener('input', updatePreview);
    emailInput.addEventListener('input', updatePreview);
    phoneInput.addEventListener('input', updatePreview);
    summaryInput.addEventListener('input', updatePreview);
    
    addEducationBtn.addEventListener('click', addEducationField);
    addExperienceBtn.addEventListener('click', addExperienceField);
    clearFormBtn.addEventListener('click', clearForm);
    downloadPDFBtn.addEventListener('click', downloadPDF);
    
    // Skill selection
    document.querySelectorAll('.skills-container input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', updateSkills);
    });
    
    customSkillInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && this.value.trim() !== '') {
            const skill = this.value.trim();
            if (!selectedSkills.includes(skill)) {
                selectedSkills.push(skill);
                updateSkills();
                renderSelectedSkills();
            }
            this.value = '';
            e.preventDefault();
        }
    });
    
    // Dynamic form field updates
    document.addEventListener('input', function(e) {
        if (e.target.classList.contains('institution') || 
            e.target.classList.contains('degree') || 
            e.target.classList.contains('field') || 
            e.target.classList.contains('years') ||
            e.target.classList.contains('jobTitle') || 
            e.target.classList.contains('company') || 
            e.target.classList.contains('duration') || 
            e.target.classList.contains('description')) {
            updatePreview();
        }
    });
    
    // Initialize the form and preview
    function initForm() {
        updatePreview();
        renderSelectedSkills();
        updateProgressBar();
    }
    
    // Update the resume preview
    function updatePreview() {
        // Personal Information
        previewName.textContent = nameInput.value || 'Your Name';
        previewEmail.textContent = emailInput.value || 'email@example.com';
        previewPhone.textContent = phoneInput.value || '(123) 456-7890';
        previewSummary.textContent = summaryInput.value || 'Brief summary about yourself and your professional background.';
        
        // Education
        const educationEntries = document.querySelectorAll('.education-entry');
        let educationHTML = '';
        
        educationEntries.forEach(entry => {
            const institution = entry.querySelector('.institution').value || 'University Name';
            const degree = entry.querySelector('.degree').value || 'Bachelor of Science';
            const field = entry.querySelector('.field').value || 'Field of Study';
            const years = entry.querySelector('.years').value || 'Years Attended';
            
            educationHTML += `
                <div class="education-item">
                    <h4>${institution}</h4>
                    <p class="degree">${degree}${field ? ' in ' + field : ''}</p>
                    <p class="years">${years}</p>
                </div>
            `;
        });
        
        previewEducation.innerHTML = educationHTML || `
            <div class="education-item">
                <h4>University Name</h4>
                <p class="degree">Bachelor of Science in Computer Science</p>
                <p class="years">2015-2019</p>
            </div>
        `;
        
        // Experience
        const experienceEntries = document.querySelectorAll('.experience-entry');
        let experienceHTML = '';
        
        experienceEntries.forEach(entry => {
            const jobTitle = entry.querySelector('.jobTitle').value || 'Job Title';
            const company = entry.querySelector('.company').value || 'Company Name';
            const duration = entry.querySelector('.duration').value || 'Duration';
            const description = entry.querySelector('.description').value || 'Job responsibilities and achievements.';
            
            experienceHTML += `
                <div class="experience-item">
                    <h4>${jobTitle}</h4>
                    <p class="company">${company}</p>
                    <p class="duration">${duration}</p>
                    <p class="description">${description}</p>
                </div>
            `;
        });
        
        previewExperience.innerHTML = experienceHTML || `
            <div class="experience-item">
                <h4>Software Developer</h4>
                <p class="company">Tech Corp</p>
                <p class="duration">2020-Present</p>
                <p class="description">Job responsibilities and achievements.</p>
            </div>
        `;
        
        updateProgressBar();
    }
    
    // Update skills preview
    function updateSkills() {
        selectedSkills = [];
        
        // Add checked skills
        document.querySelectorAll('.skills-container input[type="checkbox"]:checked').forEach(checkbox => {
            selectedSkills.push(checkbox.value);
        });
        
        renderSelectedSkills();
    }
    
    // Render selected skills
    function renderSelectedSkills() {
        let skillsHTML = '';
        
        selectedSkills.forEach(skill => {
            skillsHTML += `<span>${skill}</span>`;
        });
        
        previewSkills.innerHTML = skillsHTML || '<span>HTML</span><span>CSS</span><span>JavaScript</span>';
        
        // Update the skills tags in the form
        const selectedSkillsContainer = document.getElementById('selectedSkills');
        selectedSkillsContainer.innerHTML = '';
        
        selectedSkills.forEach(skill => {
            const skillTag = document.createElement('div');
            skillTag.className = 'skill-tag';
            skillTag.innerHTML = `
                ${skill}
                <span class="remove-skill" data-skill="${skill}">&times;</span>
            `;
            selectedSkillsContainer.appendChild(skillTag);
        });
        
        // Add event listeners to remove buttons
        document.querySelectorAll('.remove-skill').forEach(button => {
            button.addEventListener('click', function() {
                const skillToRemove = this.getAttribute('data-skill');
                selectedSkills = selectedSkills.filter(skill => skill !== skillToRemove);
                
                // Also uncheck if it's a checkbox skill
                const checkbox = document.querySelector(`.skills-container input[value="${skillToRemove}"]`);
                if (checkbox) {
                    checkbox.checked = false;
                }
                
                renderSelectedSkills();
                updatePreview();
            });
        });
    }
    
    // Add education field
    function addEducationField() {
        const educationFields = document.getElementById('educationFields');
        const newEntry = document.createElement('div');
        newEntry.className = 'education-entry';
        newEntry.innerHTML = `
            <div class="input-group">
                <label>Institution</label>
                <input type="text" class="institution" placeholder="University Name">
            </div>
            <div class="input-group">
                <label>Degree</label>
                <input type="text" class="degree" placeholder="Bachelor of Science">
            </div>
            <div class="input-group">
                <label>Field of Study</label>
                <input type="text" class="field" placeholder="Computer Science">
            </div>
            <div class="input-group">
                <label>Years Attended</label>
                <input type="text" class="years" placeholder="2015-2019">
            </div>
            <button type="button" class="remove-entry">&times;</button>
        `;
        
        educationFields.appendChild(newEntry);
        
        // Add event listener to remove button
        newEntry.querySelector('.remove-entry').addEventListener('click', function() {
            educationFields.removeChild(newEntry);
            updatePreview();
        });
        
        updatePreview();
    }
    
    // Add experience field
    function addExperienceField() {
        const experienceFields = document.getElementById('experienceFields');
        const newEntry = document.createElement('div');
        newEntry.className = 'experience-entry';
        newEntry.innerHTML = `
            <div class="input-group">
                <label>Job Title</label>
                <input type="text" class="jobTitle" placeholder="Software Developer">
            </div>
            <div class="input-group">
                <label>Company</label>
                <input type="text" class="company" placeholder="Tech Corp">
            </div>
            <div class="input-group">
                <label>Duration</label>
                <input type="text" class="duration" placeholder="2020-Present">
            </div>
            <div class="input-group">
                <label>Description</label>
                <textarea class="description" rows="3" placeholder="Job responsibilities..."></textarea>
            </div>
            <button type="button" class="remove-entry">&times;</button>
        `;
        
        experienceFields.appendChild(newEntry);
        
        // Add event listener to remove button
        newEntry.querySelector('.remove-entry').addEventListener('click', function() {
            experienceFields.removeChild(newEntry);
            updatePreview();
        });
        
        updatePreview();
    }
    
    // Clear form
    function clearForm() {
        resumeForm.reset();
        document.getElementById('educationFields').innerHTML = '';
        document.getElementById('experienceFields').innerHTML = '';
        document.getElementById('selectedSkills').innerHTML = '';
        
        // Add one empty education and experience field
        addEducationField();
        addExperienceField();
        
        // Reset skills
        selectedSkills = [];
        document.querySelectorAll('.skills-container input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = false;
        });
        
        updatePreview();
    }
    
    // Download PDF
    function downloadPDF() {
        const element = document.getElementById('resumePreview');
        const opt = {
            margin: 10,
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        
        // Show loading state
        downloadPDFBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating PDF...';
        downloadPDFBtn.disabled = true;
        
        // Generate PDF
        html2pdf().from(element).set(opt).save().then(() => {
            // Reset button state
            downloadPDFBtn.innerHTML = 'Download PDF';
            downloadPDFBtn.disabled = false;
        });
    }
    
    // Update progress bar
    function updateProgressBar() {
        const fields = [
            nameInput, emailInput, phoneInput, summaryInput,
            ...document.querySelectorAll('.institution, .degree, .field, .years'),
            ...document.querySelectorAll('.jobTitle, .company, .duration, .description')
        ];
        
        const filledFields = fields.filter(field => field.value.trim() !== '').length;
        const totalFields = fields.length;
        const progress = (filledFields / totalFields) * 100;
        
        progressBar.style.width = `${progress}%`;
    }
});