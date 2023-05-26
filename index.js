document.addEventListener('mousemove', function(event) {
    const blurCircle = document.createElement('div');
    blurCircle.classList.add('blur-circle');
    blurCircle.style.top = (event.clientY - 10) + 'px';
    blurCircle.style.left = (event.clientX - 10) + 'px';
    document.body.appendChild(blurCircle);

    setTimeout(function() {
        blurCircle.remove();
    }, 1000);
});
