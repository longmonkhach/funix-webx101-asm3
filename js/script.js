'use strict';


// ----------------- Check Email --------------------
const formCheck = document.querySelector('.form');
const btnSubmit = document.querySelector('#btnSubmit');
const infoDiv = document.querySelector('.info-person');
const emailHelp = document.querySelector('#emailHelp');
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};


btnSubmit.addEventListener('click', function () {
  const inputEmail = document.querySelector('#email').value;
  if (validateEmail(inputEmail)) {
    infoDiv.classList.remove('hidden');
    formCheck.classList.add('hidden');
  } else {
    emailHelp.style.color = '#FF0000';
    emailHelp.textContent = 'Không đúng định dạng email. Vui lòng nhập lại';
  }

});

// ----------------- Check Email --------------------


//--------------- View More - View less -------------
let more = document.querySelectorAll('.more');

for (let i = 0; i < more.length; i++) {
  more[i].addEventListener('click', function () {
    let nextNode = more[i].nextElementSibling;
    if (nextNode.classList.contains('hidden')) {
      nextNode.classList.remove('hidden');
      more[i].textContent = '▲ View Less';
    } else {
      nextNode.classList.add('hidden');
      more[i].textContent = '▼ View More';
    }
  });
}

//--------------- View More - View less -------------