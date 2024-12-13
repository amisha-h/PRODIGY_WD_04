

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#45a049';
    });
    
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#FFD700';
    });
});
