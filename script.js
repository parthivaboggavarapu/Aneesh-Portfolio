const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
document.getElementById("about").classList.add("active");

links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    sections.forEach(sec => sec.classList.remove('active'));
    const target = link.getAttribute('data-section');
    document.getElementById(target).classList.add('active');
  });
});
