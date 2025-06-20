// Initialize jsPDF
const { jsPDF } = window.jspdf;

document.getElementById('generatePDF').addEventListener('click', function() {
    // Get the resume preview HTML
    const resumePreview = document.getElementById('resumePreview');
    
    // Create a new PDF instance
    const doc = new jsPDF();
    
    // Add content to PDF
    doc.html(resumePreview, {
        callback: function(doc) {
            // Save the PDF
            doc.save('resume.pdf');
        },
        x: 10,
        y: 10,
        width: 190, // A4 width in mm
        windowWidth: resumePreview.offsetWidth
    });
});