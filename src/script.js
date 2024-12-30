document.querySelectorAll('.expandable').forEach(expandable => {
    const header = expandable.querySelector('.header');
    const toggle = expandable.querySelector('.toggle');
    const content = expandable.querySelector('.content');

    header.addEventListener('click', () => {
        const isOpen = content.style.display === 'block';
        content.style.display = isOpen ? 'none' : 'block';
        toggle.textContent = isOpen ? '+' : '-';
    });
});