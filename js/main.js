const tabItems = document.querySelectorAll('.tab-item');
const contentItems = document.querySelectorAll('.content-item');

function selectItem(e) {
    removeTransform();
    removeShow();
    this.classList.add('active');

    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show');
}

function removeTransform() {
    tabItems.forEach(item => item.classList.remove('active'));
}
function removeShow() {
    contentItems.forEach(item => item.classList.remove('show'));
}

tabItems.forEach(item => item.addEventListener('click', selectItem));