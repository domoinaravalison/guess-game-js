const number = 10;
const numUser = prompt('choisi un chiffre');

if (numUser < number) {
  alert('trop petit!');
} else if (numUser > number) {
  alert('trop grand!');
} else {
  alert('good job !');
}
