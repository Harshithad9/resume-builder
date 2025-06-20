document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const form = document.getElementById('resumeForm');
    const preview = document.getElementById('resumePreview');
    const progressBar = document.getElementById('progress');
    
    // Form elements
    const fullNameInput = document.getElementById('fullName');
    // Add other form element references...
    
    // Dynamic section handlers
    const addEducationBtn = document.getElementById('addEducation');
    // Add other dynamic section buttons...
    
    // Clear form button
    const clearFormBtn = document.getElementById('clearForm');
    
    // Event Listeners
    form.addEventListener('input', updateResumePreview);
    addEducationBtn.addEventListener('click', addEducationEntry);
    // Add other event listeners...
    clearFormBtn.addEventListener('click', clearForm);
    
    // Initialize
    updateResumePreview();
    
    // Functions
    function updateResumePreview() {
        // Get all form values
        const formData = {
            fullName: fullNameInput.value,
            // Add other form values...
        };
        
        // Calculate completion percentage
        updateProgressBar();
        
        // Generate HTML for preview
        const resumeHTML = generateResumeHTML(formData);
        
        // Update preview section
        preview.innerHTML = resumeHTML;
        
        // Add animation class
        preview.classList.add('updated');
        setTimeout(() => preview.classList.remove('updated'), 500);
    }
    
    function addEducationEntry() {
        // Create new education entry fields
        const newEntry = document.createElement('div');
        newEntry.className = 'education-entry';
        newEntry.innerHTML = `
            <div class="form-control">
                <label>Institution</label>
                <input type="text" class="institution">
            </div>
            <!-- More education fields... -->
            <button type="button" class="remove-btn">Remove</button>
        `;
        
        // Insert before the add button
        addEducationBtn.before(newEntry);
        
        // Add event listener to remove button
        newEntry.querySelector('.remove-btn').addEventListener('click', function() {
            newEntry.remove();
            updateResumePreview();
        });
    }
    
    function updateProgressBar() {
        // Calculate percentage of completed fields
        const totalFields = document.querySelectorAll('input[required], textarea[required]').length;
        const completedFields = Array.from(document.querySelectorAll('input[required], textarea[required]'))
            .filter(field => field.value.trim() !== '').length;
        
        const percentage = Math.round((completedFields / totalFields) * 100);
        progressBar.style.width = `${percentage}%`;
        progressBar.setAttribute('data-percentage', `${percentage}%`);
    }
    
    function clearForm() {
        form.reset();
        updateResumePreview();
    }
    
    function generateResumeHTML(data) {
        return `
            <div class="resume-header">
                <h2>${data.fullName || 'Your Name'}</h2>
                <!-- Other personal info... -->
            </div>
            <div class="resume-section">
                <h3>Education</h3>
                <!-- Generated education entries... -->
            </div>
            <!-- Other resume sections... -->
        `;
    }
});