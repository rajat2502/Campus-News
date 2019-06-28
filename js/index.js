document.getElementById('sidebar').addEventListener('mouseover', function(){
  document.querySelectorAll('.name').forEach(function(element){
    element.style.display = "inline";
  })
  document.getElementById('main').style.gridTemplateColumns = "360px auto";
  document.getElementsByClassName('overlay')[0].style.display = "block";
});

document.getElementById('sidebar').addEventListener('mouseout', function(){
  document.querySelectorAll('.name').forEach(function(element){
    element.style.display = "none";
  })
  document.getElementById('main').style.gridTemplateColumns = "105px auto";
  document.getElementsByClassName('overlay')[0].style.display = "none";
});