var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

const openLeetCode = document.getElementById('openLeetCode');
const closeLeetCode = document.getElementById('closeLeetCode');
const modal_container_1 = document.getElementById('modal_container1');

openLeetCode.addEventListener('click', ()=> {
  modal_container_1.classList.add('showLeetCode');
});

closeLeetCode.addEventListener('click', ()=> {
  modal_container_1.classList.remove('showLeetCode');
});

const openAssignments = document.getElementById('openAssignments');
const closeAssignments = document.getElementById('closeAssignments');
const modal_container_2 = document.getElementById('modal_container2');

openAssignments.addEventListener('click', ()=> {
  modal_container_2.classList.add('showAssignments');
});

closeAssignments.addEventListener('click', ()=> {
  modal_container_2.classList.remove('showAssignments');
});

const openProjects = document.getElementById('openProjects');
const closeProjects = document.getElementById('closeProjects');
const modal_container_3 = document.getElementById('modal_container3');

openProjects.addEventListener('click', ()=> {
  modal_container_3.classList.add('showProjects');
});

closeProjects.addEventListener('click', ()=> {
  modal_container_3.classList.remove('showProjects');
});