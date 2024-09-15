const bookmarkEl = document.getElementById('bookmark');

bookmarkEl.addEventListener('click', () => {
  bookmarkEl.classList.toggle('bookmarked');
  const bookmarkText = document.querySelector('.bookmark__text').innerText;

  if (bookmarkText === 'Bookmarked') {
    document.querySelector('.bookmark__text').innerText = 'Bookmark';
  } else {
    document.querySelector('.bookmark__text').innerText = 'Bookmarked';
  }
});

const subscribe = document.getElementById('subscribe');

subscribe.addEventListener('click', () => {
  const modal = document.getElementById('feedback-modal');
  if (!modal) return;
  const body = document.querySelector('body');
  body.classList.add('modal-open');
  modal.classList.add('is-open');

  closeModal(modal);
});

const gotItBtn = document.getElementById('got-it-btn');

gotItBtn.addEventListener('click', () => {
  const modal = document.getElementById('feedback-modal');
  const body = document.querySelector('body');
  body.classList.remove('modal-open');
  modal.classList.remove('is-open');
});

const backThisProjectBtn = document.getElementById('back-this-project');

backThisProjectBtn.addEventListener('click', () => {
  const modal = document.getElementById('project-modal');
  const body = document.querySelector('body');

  body.classList.add('modal-open');
  modal.classList.add('is-open');

  closeModal(modal);
});

function closeModal(modal) {
  const modalOverlay = modal.querySelector('.modal__overlay');
  const body = document.querySelector('body');
  const closeModalBtn = modal.querySelector('[data-modal-close]');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', () => {
      modal.classList.remove('is-open');
      body.classList.remove('modal-open');
    });
  }
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('is-open');
      body.classList.remove('modal-open');
    });
  }
}

const contributionСardInputsList = document.querySelectorAll('.contribution-card__input');
const contributionCardsList = document.querySelectorAll('.contribution-card');

contributionСardInputsList.forEach((item) => {
  item.addEventListener('click', (e) => {
    if (
      e.target.closest('.contribution-card').classList.contains('checked') ||
      e.target.closest('.contribution-card').classList.contains('not-active')
    )
      return;
    contributionCardsList.forEach((item) => {
      if (!item.classList.contains('checked')) return;
      item.classList.remove('checked');
    });
    item.closest('.contribution-card').classList.toggle('checked');
  });
});

(function headerMenu() {
  const menuBtnEl = document.getElementById('menu-btn');
  const menuEl = document.getElementById('menu');

  document.addEventListener('scroll', () => {
    menuEl.classList.toggle('scrolled', window.scrollY > 0);
  });

  menuBtnEl.addEventListener('click', function () {
    menuEl.classList.toggle('menu-open');
    document.body.classList.toggle('scroll-disabled');
    menuBtnEl.classList.toggle('active');
  });
})();
