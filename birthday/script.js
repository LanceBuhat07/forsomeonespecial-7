function nextPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function showPopup(imgSrc, msg) {
  document.getElementById('popup').style.display = 'flex';
  document.getElementById('popup-img').src = imgSrc;
  document.getElementById('popup-msg').innerText = msg;
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
