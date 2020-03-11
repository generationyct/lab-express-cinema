document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

const btn = document.getElementById('button-check-movies')
btn.onclick = () => {
  location.assign('/movies')
}