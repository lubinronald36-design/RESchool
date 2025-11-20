document.addEventListener('DOMContentLoaded', function() {
 const nextBtn = document.getElementById('next-btn');
 const prevBtn = document.getElementById('prev-btn');
 const nextBtn2 = document.getElementById('next-btn-2');
 const prevBtn2 = document.getElementById('prev-btn-2');
 const page1 = document.getElementById('page1');
 const page2 = document.getElementById('page2');
 const page3 = document.getElementById('page3');

 nextBtn.addEventListener('click', () => {
 page1.style.display = 'none';
 page2.style.display = 'block';
 });

 prevBtn.addEventListener('click', () => {
 page1.style.display = 'block';
 page2.style.display = 'none';
 });

 nextBtn2.addEventListener('click', () => {
 page2.style.display = 'none';
 page3.style.display = 'block';
 });
 prevBtn2.addEventListener('click', () => {
 page2.style.display = 'block';
 page3.style.display = 'none';
 });
});
