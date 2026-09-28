document.addEventListener('DOMContentLoaded', () => {
  console.log('Studio.Medo site loaded successfully.');

  // Example Lightbox / Click functionality for Portfolio Images
  const cards = document.querySelectorAll('.portfolio-card');
  
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('.portfolio-item-title').innerText;
      console.log(`Opening gallery detail for: ${title}`);
    });
  });
});
