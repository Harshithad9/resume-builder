document.getElementById('resumeForm').addEventListener('input', updatePreview);
document.getElementById('addEducation').addEventListener('click', addEducation);
document.getElementById('addExperience').addEventListener('click', addExperience);
document.getElementById('clearForm').addEventListener('click', clearForm);

function updatePreview() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const summary = document.getElementById('summary').value;
    const skills = Array.from(document.querySelectorAll('#skillsContainer input:checked')).map(el => el.value).join(', ');

    let education = '';
    document.querySelectorAll('.education').forEach((edu) => {
        education += `<p>${edu.value}</p>`;
    });

    let experience = '';
    document.querySelectorAll('.experience').forEach((exp) => {
        experience += `<p>${exp.value}</p>`;
    });

    document.getElementById('previewContent').innerHTML = `
        <h3>${name}</h3>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>${summary}</p>
        <h4>Education</h4>
        ${education}
        <h4>Skills</h4>
        <p>${skills}</p>
        <h4>Experience</h4>
        ${experience}
    `;
}

function addEducation() {
    const container = document.createElement('div');
    container.classList.add('education');
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Education';
    input.addEventListener('input', updatePreview);
    container.appendChild(input);
    document.getElementById('educationContainer').appendChild(container);
}

function addExperience() {
    const container = document.createElement('div');
    container.classList.add('experience');
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Experience';
    input.addEventListener('input', updatePreview);
    container.appendChild(input);
    document.getElementById('experienceContainer').appendChild(container);
}

function clearForm() {
    document.getElementById('resumeForm').reset();
    document.getElementById('previewContent').innerHTML = '';
    document.querySelectorAll('.education, .experience').forEach(el => el.remove());
}
