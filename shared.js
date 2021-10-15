let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let modalNoBtn = document.querySelector('.modal__action--negative');
let toggleBtn = document.querySelector('.toggle-button');
let moblieNav = document.querySelector('.mobile-nav');
let selectPlanButtons = document.querySelectorAll('.plan-button');
let ctaButton = document.querySelector('.main-nav__item--cta');

// for (var i = 0; i < selectPlanButtons.length; i++) {
//   selectPlanButtons[i].addEventListener('click', function() {
//     backdrop.style.display = 'block';
//     modal.style.display = 'block';
//   });
// }

function closeModal() {
  // backdrop.style.display = 'none';
  // modal.style.display = 'none';
  if (modal) {
    modal.classList.remove('open');
  }
  backdrop.classList.remove('open');
  setTimeout(() => {
    backdrop.style.display = 'none';
  }, 200);
}

if (selectPlanButtons) {
  Array.from(selectPlanButtons).map((planBtn) => {
    planBtn.addEventListener('click', () => {
      // backdrop.style.display = 'block';
      // modal.style.display = 'block';
      modal.classList.add('open');
      backdrop.style.display = 'block';
      setTimeout(() => {
        backdrop.classList.add('open');
      }, 10);
    })
  });
}

backdrop.addEventListener('click', () => {
  setTimeout(() => {
    moblieNav.classList.remove('open');
  }, 10);
  closeModal();
});

if (modalNoBtn){
  modalNoBtn.addEventListener('click', closeModal);
}

toggleBtn.addEventListener('click', () => {
  // moblieNav.style.display = 'block';
  // backdrop.style.display = 'block';
  moblieNav.classList.add('open');
  backdrop.style.display = 'block';
  setTimeout(() => {
    backdrop.classList.add('open');
  }, 10);
})


// Events related to CSS animation

// ctaButton.addEventListener('animationstart', function(event) {
//   console.log('Animation started', event);
// })

// ctaButton.addEventListener('animationend', function(event) {
//   console.log('Animation ended', event);
// })

// ctaButton.addEventListener('animationiteration', function(event) {
//   console.log('Animation iterated', event);
// })