let noButton = document.getElementById('noButton');
let yesButton = document.getElementById('yesButton');
let message = document.getElementById('message');

yesButton.addEventListener('click', function() {
    message.textContent = "Seni çok seviyorum!";
});

let clickCount = 0;

noButton.addEventListener('click', function() {
    clickCount++;
    message.textContent = "Hayır butonuna tekrar tıklamak zorundasın!";
    let noButtonPosition = getRandomPosition();
    noButton.style.position = "absolute";
    noButton.style.top = noButtonPosition.top;
    noButton.style.left = noButtonPosition.left;
});

function getRandomPosition() {
    let top = Math.random() * 80 + '%';
    let left = Math.random() * 80 + '%';
    return { top: top, left: left };
}
