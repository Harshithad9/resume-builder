
let educationCounter = 1
let experienceCounter = 1
let certificationCounter = 1
let selectedSkills = []

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  updateResume()
  updateProgress()
})

// Update resume preview in real-time
function updateResume() {
  updatePersonalInfo()
  updateSummary()
  updateEducation()
  updateExperience()
  updateCertifications()
  updateSkills()
  updateProgress()
}

// Update personal information
function updatePersonalInfo() {
  const name = document.getElementById("name").value || "Your Name"
  const email = document.getElementById("email").value
  const phone = document.getElementById("phone").value
  const github = document.getElementById("github").value
  const linkedin = document.getElementById("linkedin").value

  document.getElementById("previewName").textContent = name

  // Update email
  const emailElement = document.getElementById("previewEmail")
  if (email) {
    emailElement.innerHTML = `<a href="mailto:${email}" class="contact-link"><i class="fas fa-envelope"></i>${email}</a>`
  } else {
    emailElement.textContent = ""
  }

  // Update phone
  const phoneElement = document.getElementById("previewPhone")
  if (phone) {
    phoneElement.innerHTML = `<a href="tel:${phone}" class="contact-link"><i class="fas fa-phone"></i>${phone}</a>`
  } else {
    phoneElement.textContent = ""
  }

  // Update GitHub
  const githubElement = document.getElementById("previewGithub")
  if (github) {
    githubElement.innerHTML = `<a href="${github}" target="_blank" class="contact-link"><i class="fab fa-github"></i>GitHub</a>`
  } else {
    githubElement.textContent = ""
  }

  // Update LinkedIn
  const linkedinElement = document.getElementById("previewLinkedin")
  if (linkedin) {
    linkedinElement.innerHTML = `<a href="${linkedin}" target="_blank" class="contact-link"><i class="fab fa-linkedin"></i>LinkedIn</a>`
  } else {
    linkedinElement.textContent = ""
  }

  // Show/hide contact info
  const contactInfo = document.querySelector(".contact-info")
  const hasContact = email || phone || github || linkedin
  contactInfo.style.display = hasContact ? "flex" : "none"
}

// Update summary section
function updateSummary() {
  const summary = document.getElementById("summary").value
  const summarySection = document.getElementById("previewSummary")
  const summaryText = document.getElementById("summaryText")

  if (summary.trim()) {
    summaryText.textContent = summary
    summarySection.style.display = "block"
    summarySection.style.animation = "fadeIn 0.5s ease-out"
  } else {
    summarySection.style.display = "none"
  }
}

// Update education section
function updateEducation() {
  const educationContainer = document.getElementById("educationContainer")
  const educationSections = educationContainer.querySelectorAll(".dynamic-section")
  const educationList = document.getElementById("educationList")
  const educationPreview = document.getElementById("previewEducation")

  let hasEducation = false
  let educationHTML = ""

  educationSections.forEach((section, index) => {
    const inputs = section.querySelectorAll("input")
    const degree = inputs[0].value
    const school = inputs[1].value
    const year = inputs[2].value

    if (degree || school) {
      hasEducation = true
      educationHTML += `
                <div class="education-item">
                    <div class="education-header">
                        <div>
                            <div class="education-title">${degree || "Degree"}</div>
                            <div class="education-school">${school || "School/University"}</div>
                        </div>
                        <div class="education-year">${year}</div>
                    </div>
                </div>
            `
    }
  })

  educationList.innerHTML = educationHTML
  educationPreview.style.display = hasEducation ? "block" : "none"
  if (hasEducation) {
    educationPreview.style.animation = "fadeIn 0.5s ease-out"
  }
}

// Update experience section
function updateExperience() {
  const experienceContainer = document.getElementById("experienceContainer")
  const experienceSections = experienceContainer.querySelectorAll(".dynamic-section")
  const experienceList = document.getElementById("experienceList")
  const experiencePreview = document.getElementById("previewExperience")

  let hasExperience = false
  let experienceHTML = ""

  experienceSections.forEach((section, index) => {
    const inputs = section.querySelectorAll("input")
    const textarea = section.querySelector("textarea")
    const position = inputs[0].value
    const company = inputs[1].value
    const duration = inputs[2].value
    const description = textarea.value

    if (position || company) {
      hasExperience = true
      experienceHTML += `
                <div class="experience-item">
                    <div class="experience-header">
                        <div>
                            <div class="experience-title">${position || "Position"}</div>
                            <div class="experience-company">${company || "Company"}</div>
                        </div>
                        <div class="experience-duration">${duration}</div>
                    </div>
                    ${description ? `<div class="experience-description">${description}</div>` : ""}
                </div>
            `
    }
  })

  experienceList.innerHTML = experienceHTML
  experiencePreview.style.display = hasExperience ? "block" : "none"
  if (hasExperience) {
    experiencePreview.style.animation = "fadeIn 0.5s ease-out"
  }
}

// Update certifications section
function updateCertifications() {
  const certificationsContainer = document.getElementById("certificationsContainer")
  const certificationSections = certificationsContainer.querySelectorAll(".dynamic-section")
  const certificationsList = document.getElementById("certificationsList")
  const certificationsPreview = document.getElementById("previewCertifications")

  let hasCertifications = false
  let certificationsHTML = ""

  certificationSections.forEach((section, index) => {
    const inputs = section.querySelectorAll("input")
    const certName = inputs[0].value
    const organization = inputs[1].value
    const issueDate = inputs[2].value
    const expiryDate = inputs[3].value
    const credentialUrl = inputs[4].value

    if (certName || organization) {
      hasCertifications = true
      const dates = issueDate && expiryDate ? `${issueDate} - ${expiryDate}` : issueDate ? `Issued: ${issueDate}` : ""

      certificationsHTML += `
        <div class="certification-item">
          <div class="certification-header">
            <div>
              <div class="certification-title">${certName || "Certification Name"}</div>
              <div class="certification-org">${organization || "Issuing Organization"}</div>
            </div>
          </div>
          ${dates ? `<div class="certification-dates">${dates}</div>` : ""}
          ${credentialUrl ? `<div><a href="${credentialUrl}" target="_blank" class="certification-url"><i class="fas fa-external-link-alt"></i> View Credential</a></div>` : ""}
        </div>
      `
    }
  })

  certificationsList.innerHTML = certificationsHTML
  certificationsPreview.style.display = hasCertifications ? "block" : "none"
  if (hasCertifications) {
    certificationsPreview.style.animation = "fadeIn 0.5s ease-out"
  }
}

// Update skills section
function updateSkills() {
  const skillsList = document.getElementById("skillsList")
  const skillsPreview = document.getElementById("previewSkills")

  if (selectedSkills.length > 0) {
    let skillsHTML = ""
    selectedSkills.forEach((skill, index) => {
      skillsHTML += `<span class="skill-badge" style="animation-delay: ${index * 0.1}s">${skill}</span>`
    })
    skillsList.innerHTML = skillsHTML
    skillsPreview.style.display = "block"
    skillsPreview.style.animation = "fadeIn 0.5s ease-out"
  } else {
    skillsPreview.style.display = "none"
  }
}

// Add education section
function addEducation() {
  educationCounter++
  const educationContainer = document.getElementById("educationContainer")
  const newEducation = document.createElement("div")
  newEducation.className = "dynamic-section"
  newEducation.setAttribute("data-id", `edu-${educationCounter}`)
  newEducation.innerHTML = `
        <div class="section-header">
            <h4>Education ${educationCounter}</h4>
            <button class="remove-btn" onclick="removeEducation('edu-${educationCounter}')">
                <i class="fas fa-trash"></i>
            </button>
        </div>
        <div class="form-row">
            <input type="text" placeholder="Degree" oninput="updateResume()">
            <input type="text" placeholder="School/University" oninput="updateResume()">
        </div>
        <div class="form-group">
            <input type="text" placeholder="Year" oninput="updateResume()">
        </div>
    `

  educationContainer.appendChild(newEducation)
  updateRemoveButtons("educationContainer")
  updateResume()
}

// Remove education section
function removeEducation(id) {
  const element = document.querySelector(`[data-id="${id}"]`)
  if (element) {
    element.style.animation = "fadeOut 0.3s ease-out"
    setTimeout(() => {
      element.remove()
      updateRemoveButtons("educationContainer")
      updateResume()
    }, 300)
  }
}

// Add experience section
function addExperience() {
  experienceCounter++
  const experienceContainer = document.getElementById("experienceContainer")
  const newExperience = document.createElement("div")
  newExperience.className = "dynamic-section"
  newExperience.setAttribute("data-id", `exp-${experienceCounter}`)
  newExperience.innerHTML = `
        <div class="section-header">
            <h4>Experience ${experienceCounter}</h4>
            <button class="remove-btn" onclick="removeExperience('exp-${experienceCounter}')">
                <i class="fas fa-trash"></i>
            </button>
        </div>
        <div class="form-row">
            <input type="text" placeholder="Position" oninput="updateResume()">
            <input type="text" placeholder="Company" oninput="updateResume()">
        </div>
        <div class="form-group">
            <input type="text" placeholder="Duration (e.g., Jan 2020 - Present)" oninput="updateResume()">
        </div>
        <div class="form-group">
            <textarea placeholder="Job Description" rows="3" oninput="updateResume()"></textarea>
        </div>
    `

  experienceContainer.appendChild(newExperience)
  updateRemoveButtons("experienceContainer")
  updateResume()
}

// Remove experience section
function removeExperience(id) {
  const element = document.querySelector(`[data-id="${id}"]`)
  if (element) {
    element.style.animation = "fadeOut 0.3s ease-out"
    setTimeout(() => {
      element.remove()
      updateRemoveButtons("experienceContainer")
      updateResume()
    }, 300)
  }
}

// Add certification management functions:
function addCertification() {
  certificationCounter++
  const certificationsContainer = document.getElementById("certificationsContainer")
  const newCertification = document.createElement("div")
  newCertification.className = "dynamic-section"
  newCertification.setAttribute("data-id", `cert-${certificationCounter}`)
  newCertification.innerHTML = `
    <div class="section-header">
      <h4>Certification ${certificationCounter}</h4>
      <button class="remove-btn" onclick="removeCertification('cert-${certificationCounter}')">
        <i class="fas fa-trash"></i>
      </button>
    </div>
    <div class="form-row">
      <input type="text" placeholder="Certification Name" oninput="updateResume()">
      <input type="text" placeholder="Issuing Organization" oninput="updateResume()">
    </div>
    <div class="form-row">
      <input type="text" placeholder="Issue Date" oninput="updateResume()">
      <input type="text" placeholder="Expiry Date (Optional)" oninput="updateResume()">
    </div>
    <div class="form-group">
      <input type="url" placeholder="Credential URL (Optional)" oninput="updateResume()">
    </div>
  `

  certificationsContainer.appendChild(newCertification)
  updateRemoveButtons("certificationsContainer")
  updateResume()
}

function removeCertification(id) {
  const element = document.querySelector(`[data-id="${id}"]`)
  if (element) {
    element.style.animation = "fadeOut 0.3s ease-out"
    setTimeout(() => {
      element.remove()
      updateRemoveButtons("certificationsContainer")
      updateResume()
    }, 300)
  }
}

// Update remove button visibility
function updateRemoveButtons(containerId) {
  const container = document.getElementById(containerId)
  const sections = container.querySelectorAll(".dynamic-section")

  sections.forEach((section, index) => {
    const removeBtn = section.querySelector(".remove-btn")
    if (removeBtn) {
      removeBtn.style.display = sections.length > 1 ? "block" : "none"
    }
  })
}

// Handle skill input
function handleSkillEnter(event) {
  if (event.key === "Enter") {
    addSkill()
  }
}

// Add skill
function addSkill() {
  const skillInput = document.getElementById("skillInput")
  const skill = skillInput.value.trim()

  if (skill && !selectedSkills.includes(skill)) {
    selectedSkills.push(skill)
    skillInput.value = ""
    updateSelectedSkills()
    updateSkills()
    updateProgress()
  }
}

// Toggle skill from predefined options
function toggleSkill(skill) {
  const button = event.target

  if (selectedSkills.includes(skill)) {
    selectedSkills = selectedSkills.filter((s) => s !== skill)
    button.classList.remove("selected")
  } else {
    selectedSkills.push(skill)
    button.classList.add("selected")
  }

  updateSelectedSkills()
  updateSkills()
  updateProgress()
}

// Update selected skills display
function updateSelectedSkills() {
  const selectedSkillsContainer = document.getElementById("selectedSkills")
  let skillsHTML = ""

  selectedSkills.forEach((skill) => {
    skillsHTML += `<span class="skill-tag" onclick="removeSkill('${skill}')">${skill} ×</span>`
  })

  selectedSkillsContainer.innerHTML = skillsHTML

  // Update skill option buttons
  const skillOptions = document.querySelectorAll(".skill-option")
  skillOptions.forEach((button) => {
    const skill = button.textContent
    if (selectedSkills.includes(skill)) {
      button.classList.add("selected")
    } else {
      button.classList.remove("selected")
    }
  })
}

// Remove skill
function removeSkill(skill) {
  selectedSkills = selectedSkills.filter((s) => s !== skill)
  updateSelectedSkills()
  updateSkills()
  updateProgress()
}

// Update progress bar
function updateProgress() {
  const fields = [
    document.getElementById("name").value,
    document.getElementById("email").value,
    document.getElementById("phone").value,
    document.getElementById("github").value,
    document.getElementById("linkedin").value,
    document.getElementById("summary").value,
    selectedSkills.join(""),
  ]

  // Add education fields
  const educationSections = document.querySelectorAll("#educationContainer .dynamic-section")
  educationSections.forEach((section) => {
    const inputs = section.querySelectorAll("input")
    inputs.forEach((input) => fields.push(input.value))
  })

  // Add experience fields
  const experienceSections = document.querySelectorAll("#experienceContainer .dynamic-section")
  experienceSections.forEach((section) => {
    const inputs = section.querySelectorAll("input")
    const textarea = section.querySelector("textarea")
    inputs.forEach((input) => fields.push(input.value))
    fields.push(textarea.value)
  })

  // Add certification fields
  const certificationSections = document.querySelectorAll("#certificationsContainer .dynamic-section")
  certificationSections.forEach((section) => {
    const inputs = section.querySelectorAll("input")
    inputs.forEach((input) => fields.push(input.value))
  })

  const filledFields = fields.filter((field) => field.trim() !== "").length
  const totalFields = fields.length
  const progressPercentage = totalFields > 0 ? Math.round((filledFields / totalFields) * 100) : 0

  document.getElementById("progressFill").style.width = progressPercentage + "%"
  document.querySelector(".progress-percentage").textContent = progressPercentage + "%"
}

// Clear form
function clearForm() {
  if (confirm("Are you sure you want to clear all form data?")) {
    // Clear all inputs
    document.querySelectorAll("input, textarea").forEach((input) => {
      input.value = ""
    })

    // Reset skills
    selectedSkills = []
    updateSelectedSkills()

    // Reset dynamic sections
    const educationContainer = document.getElementById("educationContainer")
    const experienceContainer = document.getElementById("experienceContainer")
    const certificationsContainer = document.getElementById("certificationsContainer")

    // Keep only first sections
    const educationSections = educationContainer.querySelectorAll(".dynamic-section")
    for (let i = 1; i < educationSections.length; i++) {
      educationSections[i].remove()
    }

    const experienceSections = experienceContainer.querySelectorAll(".dynamic-section")
    for (let i = 1; i < experienceSections.length; i++) {
      experienceSections[i].remove()
    }

    const certificationSections = certificationsContainer.querySelectorAll(".dynamic-section")
    for (let i = 1; i < certificationSections.length; i++) {
      certificationSections[i].remove()
    }

    // Reset counters
    educationCounter = 1
    experienceCounter = 1
    certificationCounter = 1

    // Update remove buttons
    updateRemoveButtons("educationContainer")
    updateRemoveButtons("experienceContainer")
    updateRemoveButtons("certificationsContainer")

    // Update resume
    updateResume()
  }
}

// Download PDF
function downloadPDF() {
  const element = document.getElementById("resumePreview")
  const name = document.getElementById("name").value || "resume"

  const opt = {
    margin: 0.5,
    filename: `${name}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  }

  // Show loading state
  const downloadBtn = document.querySelector(".download-btn")
  const originalText = downloadBtn.innerHTML
  downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating PDF...'
  downloadBtn.disabled = true

  // Check if html2pdf is defined
  if (typeof html2pdf === "function") {
    html2pdf()
      .set(opt)
      .from(element)
      .save()
      .then(() => {
        // Reset button
        downloadBtn.innerHTML = originalText
        downloadBtn.disabled = false
      })
      .catch((error) => {
        console.error("Error generating PDF:", error)
        alert("Error generating PDF. Please try again.")
        downloadBtn.innerHTML = originalText
        downloadBtn.disabled = false
      })
  } else {
    console.error("html2pdf is not defined. Make sure the library is included.")
    alert("Error: PDF generation library not found. Please ensure it is properly included.")
    downloadBtn.innerHTML = originalText
    downloadBtn.disabled = false
  }
}

const style = document.createElement("style")
style.textContent = `
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-10px);
        }
    }
`
document.head.appendChild(style)
