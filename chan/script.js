
const toggleIcon = document.querySelector('.toggle-icon');
const createThreadSection = document.querySelector('.create-thread form');

toggleIcon.addEventListener('click', () => {
  createThreadSection.classList.toggle('collapsed');
  toggleIcon.textContent = createThreadSection.classList.contains('collapsed') ? '+' : '-';
});