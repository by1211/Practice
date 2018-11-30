const TypeWriter = function (txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt (wait, 10);
    this.type();
    this.isDeleting = false;
}

// Type Method

// Init On DOM Load

document.addEventListener('DOMContentLoaded', init);

// Initialize Loop

function init () {
    const txtElement = document.querySelector('.txt-type');
    const words = txtElement.getAttribute('data-words');
}