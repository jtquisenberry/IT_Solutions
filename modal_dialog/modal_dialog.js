// When the modal is shown, we want a fixed body
document.body.style.position = 'fixed';
document.body.style.top = `-${window.scrollY}px`;

// When the modal is hidden, we want to remain at the top of the scroll position
document.body.style.position = '';
document.body.style.top = '';
