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
