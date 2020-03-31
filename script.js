var menuDoc = document.getElementsByClassName('link-nav-arrow')[0];
var listSecond = document.querySelector('.list-nav-second');

menuDoc.addEventListener('click', function(){
  var teste = listSecond.classList.toggle('hide');
  menuDoc.classList.toggle('arrow');
  console.log(teste);
});