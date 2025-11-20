
document.addEventListener('DOMContentLoaded', function() {
  const pages = ['page1', 'page2', 'page3'];
  let currentPage = 0;

  const showPage = (index) => {
    if (index < 0) index = 0;
    if (index >= pages.length) index = pages.length - 1;
    currentPage = index;

    pages.forEach((page, i) => {
      document.getElementById(page).style.display = i === index ? 'block' : 'none';
    });
  };

  document.getElementById('next-btn').addEventListener('click', () => {
    showPage(currentPage + 1);
  });

  document.getElementById('prev-btn').addEventListener('click', () => {
    showPage(currentPage - 1);
  });

  document.getElementById('next-btn-2').addEventListener('click', () => {
    showPage(currentPage + 1);
  });

  document.getElementById('prev-btn-2').addEventListener('click', () => {
    showPage(currentPage - 1);
  });

  showPage(currentPage);
});
