document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

const button = document.getElementById('button-check-movies')
button.addEventListener('click', (e) => {
  location.assign('/movies')
})