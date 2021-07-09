const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
});

scrollReveal.reveal(
  `#product-info h3, #product-info p, #product-info .btn-group,
  #fund-info .text-container .text,
  #fund-options header h2, #fund-options header p, #fund-options .card`,
  { interval: 100 }
);

export { scrollReveal };
