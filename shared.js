let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let modalNoBtn = document.querySelector('.modal__action--negative');
let toggleBtn = document.querySelector('.toggle-button');
let moblieNav = document.querySelector('.mobile-nav');
let selectPlanButtons = document.querySelectorAll('.plan-button');

// for (var i = 0; i < selectPlanButtons.length; i++) {
//   selectPlanButtons[i].addEventListener('click', function() {
//     backdrop.style.display = 'block';
//     modal.style.display = 'block';
//   });
// }

function closeModal() {
  // backdrop.style.display = 'none';
  // modal.style.display = 'none';
  backdrop.classList.remove('open');
  if (modal) {
    modal.classList.remove('open');
  }
}

if (selectPlanButtons) {
  Array.from(selectPlanButtons).map((planBtn) => {
    planBtn.addEventListener('click', () => {
      // backdrop.style.display = 'block';
      // modal.style.display = 'block';
      modal.classList.add('open');
      backdrop.classList.add('open');
    })
  });
}

backdrop.addEventListener('click', () => {
  moblieNav.classList.remove('open');
  closeModal();
});

if (modalNoBtn){
  modalNoBtn.addEventListener('click', closeModal);
}

toggleBtn.addEventListener('click', () => {
  // moblieNav.style.display = 'block';
  // backdrop.style.display = 'block';
  moblieNav.classList.add('open');
  backdrop.classList.add('open');
})