const menuOpenBtn = document.getElementsByClassName('menu-btn');
const navbar = document.getElementsByClassName('nav')[0];
const overlay = document.getElementsByClassName('overlay')[0];
const courses = Array.from(document.getElementsByClassName('courses'));
const courseDetail = Array.from(document.getElementsByClassName('course-detail-container-small'));
const courseDetailLarge = Array.from(document.getElementsByClassName('course-detail-container-large'));
const faq = Array.from(document.getElementsByClassName('faq-container'));
const cbseR = document.getElementById('cbse-r');
const upR = document.getElementById('up-r');

function toggleNav() {
  navbar.classList.toggle('active');
  overlay.classList.toggle('active');
}

function toggleCourse(tab, id) {
  //if (cbseR.checked && tab.id == 'up') {
    courses.forEach(item => {
      item.classList.remove('active');
    });
    
    if(innerWidth < 786){ //small devices
      const course = document.getElementById(id);
      courseDetail.forEach(item => {
        item.classList.remove('active');
      });
      course.classList.add('active');
      tab.classList.add('active');
    } else {
      const course = document.getElementById(id + `-large`);
      courseDetailLarge.forEach(item => {
        item.classList.remove('active');
      });
      course.classList.toggle('active');
      tab.classList.toggle('active');
    }
  //}
}
faq.forEach(item => {
  item.onclick = function() {
    this.classList.toggle('active');
  }
});
if (innerWidth < 786) {
  document.getElementById('cbse').classList.add('active');
  document.getElementsByClassName('courses')[0].classList.add('active');
} else {
  document.getElementsByClassName('courses')[0].classList.add('active');
  document.getElementById('cbse-large').classList.add('active');
}