(() => {
  'use strict';

  const list = document.getElementById('additional-publications');
  const pagination = document.getElementById('publication-pagination');
  const previous = document.getElementById('publications-previous');
  const next = document.getElementById('publications-next');
  const status = document.getElementById('publications-page');

  // Leave the complete list visible if the pagination markup is unavailable.
  if (!list || !pagination || !previous || !next || !status) return;

  const papers = Array.from(list.querySelectorAll('article.compact-paper'));
  const pageSize = 2;
  const pageCount = Math.ceil(papers.length / pageSize);
  let currentPage = 0;

  if (pageCount <= 1) return;

  function render() {
    const firstPaper = currentPage * pageSize;

    papers.forEach((paper, index) => {
      paper.hidden = index < firstPaper || index >= firstPaper + pageSize;
    });

    previous.disabled = currentPage === 0;
    next.disabled = currentPage === pageCount - 1;
    status.textContent = `${currentPage + 1} / ${pageCount}`;
  }

  function changePage(direction, button) {
    const newPage = Math.max(0, Math.min(pageCount - 1, currentPage + direction));
    if (newPage === currentPage) return;

    const hadFocus = document.activeElement === button;
    currentPage = newPage;
    render();

    // Keep keyboard focus usable when the activated button reaches a boundary.
    if (hadFocus && button.disabled) {
      const availableButton = button === previous ? next : previous;
      availableButton.focus({ preventScroll: true });
    }
  }

  previous.addEventListener('click', () => changePage(-1, previous));
  next.addEventListener('click', () => changePage(1, next));
  render();
  pagination.hidden = false;
})();
