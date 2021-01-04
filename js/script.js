window.addEventListener('DOMContentLoaded', () => {
  const progressBarsCompleted = document.querySelectorAll(
    '.skill__list__item__progress-bar div'
  );

  progressBarsCompleted.forEach((progressBarCompleted) => {
    const width = progressBarCompleted.dataset['value'];
    progressBarCompleted.style['width'] = `${width}%`;
  });

  VanillaTilt.init(document.querySelectorAll('.glass-card'), {
    max: 10,
    speed: 250,
    scale: 0.95,
    glare: true,
    'max-glare': 0.2,
  });
});
