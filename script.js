document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const resumeForm = document.getElementById('resumeForm');
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
    
    // Skills management
    let selectedSkills = [];
    
    // Initialize the form
    initForm();
    
    // Event Listeners
    resumeForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent actual form submission
    });
    
    // Input events for real-time updates
    nameInput.addEventListener('input', updatePreview);
    emailInput.addEventListener('input', updatePreview);
    phoneInput.addEventListener('input', updatePreview);
    summaryInput.addEventListener('input', updatePreview);
    customSkillInput.addEventListener('keypress', handleCustomSkillInput);
    
    // Button events
    addEducationBtn.addEventListener('click', addEducationField);
    addExperienceBtn.addEventListener('click', addExperienceField);
    clearFormBtn.addEventListener('click', clearForm);
    downloadPDFBtn.addEventListener('click', downloadPDF);
    
    // Skill checkbox events
    document.querySelectorAll('.skills-container input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', updateSkills);
    });
    
    // Dynamic field updates
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
    
    // Initialize form with default fields
    function initForm() {
        // Add one empty education and experience field by default
        addEducationField();
        addExperienceField();
        
        // Set default skills
        selectedSkills = ['HTML', 'CSS', 'JavaScript'];
        document.getElementById('html').checked = true;
        document.getElementById('css').checked = true;
        document.getElementById('js').checked = true;
        
        // Update preview and progress
        updatePreview();
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
            const field = entry.querySelector('.field').value || '';
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
                <h4>Your Education</h4>
                <p>Add your education history</p>
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
                <h4>Your Experience</h4>
                <p>Add your work experience</p>
            </div>
        `;
        
        // Update progress bar
        updateProgressBar();
    }
    
    // Handle custom skill input
    function handleCustomSkillInput(e) {
        if (e.key === 'Enter' && customSkillInput.value.trim() !== '') {
            const skill = customSkillInput.value.trim();
            if (!selectedSkills.includes(skill)) {
                selectedSkills.push(skill);
                updateSkills();
            }
            customSkillInput.value = '';
            e.preventDefault();
        }
    }
    
    // Update skills list
    function updateSkills() {
        selectedSkills = [];
        
        // Add checked skills
        document.querySelectorAll('.skills-container input[type="checkbox"]:checked').forEach(checkbox => {
            selectedSkills.push(checkbox.value);
        });
        
        // Update skills preview
        previewSkills.innerHTML = selectedSkills.map(skill => 
            `<span>${skill}</span>`
        ).join('') || '<span>No skills selected</span>';
        
        // Update selected skills display in form
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
                
                // Uncheck if it's a checkbox skill
                const checkbox = document.querySelector(`.skills-container input[value="${skillToRemove}"]`);
                if (checkbox) {
                    checkbox.checked = false;
                }
                
                updateSkills();
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
        
        // Add input listeners to new fields
        newEntry.querySelectorAll('input').forEach(input => {
            input.addEventListener('input', updatePreview);
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
        
        // Add input listeners to new fields
        newEntry.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('input', updatePreview);
        });
        
        updatePreview();
    }
    
    // Clear form
    function clearForm() {
        // Reset form inputs
        resumeForm.reset();
        
        // Clear dynamic fields
        document.getElementById('educationFields').innerHTML = '';
        document.getElementById('experienceFields').innerHTML = '';
        document.getElementById('selectedSkills').innerHTML = '';
        
        // Reset skills
        selectedSkills = [];
        document.querySelectorAll('.skills-container input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = false;
        });
        
        // Reinitialize with default fields
        initForm();
    }
    
    // Download PDF
    function downloadPDF() {
        const element = document.getElementById('resumePreview');
        const opt = {
            margin: 10,
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { 
                scale: 2,
                logging: true,
                useCORS: true
            },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        
        // Show loading state
        downloadPDFBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating PDF...';
        downloadPDFBtn.disabled = true;
        
        // Generate PDF
        html2pdf().set(opt).from(element).save()
            .then(() => {
                console.log('PDF generated successfully');
            })
            .catch(err => {
                console.error('PDF generation error:', err);
            })
            .finally(() => {
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
        const progress = Math.min(100, Math.round((filledFields / totalFields) * 100));
        
        progressBar.style.width = `${progress}%`;
        
        // Change color based on completion
        if (progress < 30) {
            progressBar.style.backgroundColor = '#e74c3c'; // Red
        } else if (progress < 70) {
            progressBar.style.backgroundColor = '#f39c12'; // Orange
        } else {
            progressBar.style.backgroundColor = '#2ecc71'; // Green
        }
    }
});