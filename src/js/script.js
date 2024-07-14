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
