document.addEventListener('DOMContentLoaded', () => {
  const enquiryForm = document.getElementById('custom-enquiry-form');

  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = new FormData(enquiryForm);
      console.log('Commission Request Submitted:');
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }

      alert('Thank you for your enquiry! Studio.Medo will review your custom specs and get back to you shortly.');
      enquiryForm.reset();
    });
  }
});
