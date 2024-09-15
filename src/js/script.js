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

const selectReward = document.getElementById('select-reward-1');

selectReward.addEventListener('click', () => {
  const modal = document.getElementById('feedback-modal');
  if (!modal) return;
  const body = document.querySelector('body');
  // body.classList.add('modal-open');
  modal.classList.add('is-open');
});

const gotItBtn = document.getElementById('got-it-btn');

gotItBtn.addEventListener('click', () => {
  const modal = document.getElementById('feedback-modal');
  const body = document.querySelector('body');
  // body.classList.remove('modal-open');
  modal.classList.remove('is-open');
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
