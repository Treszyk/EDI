const buttons = document.querySelectorAll('.tablink');
const tabs = document.querySelectorAll('.tabcontent');
const nav_buttons = document.querySelectorAll('.tablink');
let curr_active = null;

const hide_tabs = () => {
  tabs.forEach(tab => {
    tab.style.display = "none";
  });
}

hide_tabs()

const openPage = (pageName, clicked) => {
  if(curr_active) {
    curr_active.classList.remove('active');
    clicked.classList.add('active');
  }
  curr_active = clicked;
  //console.log(pageName);
  hide_tabs();
  document.getElementById(pageName).style.display = "flex";

  for (let i = 0; i < nav_buttons.length; i++) {
    nav_buttons[i].style.backgroundColor = "";
  }
}

buttons.forEach(element => {
  element.addEventListener('click', (e) => {
    openPage(e.target.value, e.target);
  });
});

// Get the element with id="defaultOpen" and click on it
document.querySelector('#defaultOpen').click();