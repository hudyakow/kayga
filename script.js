let bg = document.querySelector('.mouse-parallax-bg');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});

/*a = onclick="document.getElementById('player').play()"
b = onclick="document.getElementById('player').pause()"

if (onclick = a) {
    document.getElementById('player').play()
} else {
    document.getElementById('player').pause()
}*/
