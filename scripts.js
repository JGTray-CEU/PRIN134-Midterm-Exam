document.addEventListener('DOMContentLoaded', function() {
    const petButtons = document.querySelectorAll('.btn-full');
    const petAllButton = document.querySelector('#btn-select-all');
    const unpetAllButton = document.querySelector('#btn-unselect-all');
    const lastButton = document.querySelector('#btn-select-last');
    const firstButton = document.querySelector('#btn-select-first');
    const nextButton = document.querySelector('#btn-select-next');
    const prevButton = document.querySelector('#btn-select-previous');
    const siteLogo = document.querySelector('.banner-content');
    const cards = document.querySelectorAll('.card');
    
let currentHighlightedIndex = 0;
    
highlightCard(currentHighlightedIndex);
    
petButtons.forEach(button => {
    button.addEventListener('click', function() {
        const icon = this.querySelector('i');
        icon.classList.toggle('fa-regular');
        icon.classList.toggle('fa-solid');
    });
});
    
petAllButton.addEventListener('click', function() {
    petButtons.forEach(button => {
        const icon = button.querySelector('i');
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
    });
});
    
unpetAllButton.addEventListener('click', function() {
    petButtons.forEach(button => {
        const icon = button.querySelector('i');
        icon.classList.remove('fa-solid');
        icon.classList.add('fa-regular');
    });
});
    
lastButton.addEventListener('click', function() {
    currentHighlightedIndex = cards.length - 1;
    highlightCard(currentHighlightedIndex);
});
    
firstButton.addEventListener('click', function() {
    currentHighlightedIndex = 0;
    highlightCard(currentHighlightedIndex);
});
    
nextButton.addEventListener('click', function() {
    currentHighlightedIndex = (currentHighlightedIndex + 1) % cards.length;
    highlightCard(currentHighlightedIndex);
});
    
prevButton.addEventListener('click', function() {
    currentHighlightedIndex = (currentHighlightedIndex - 1 + cards.length) % cards.length;
    highlightCard(currentHighlightedIndex);
});
    
siteLogo.addEventListener('click', function() {

    this.classList.add('animate__animated', 'animate__lightSpeedInLeft');
    this.addEventListener('animationend', function() {
    this.classList.remove('animate__animated', 'animate__lightSpeedInLeft');
        }, { once: true });
});
    
function highlightCard(index) {
    
    cards.forEach(card => {
        card.classList.remove('card-selected', 'active');
    });
        
    cards[index].classList.add('card-selected', 'active');
    currentHighlightedIndex = index;
    }
});