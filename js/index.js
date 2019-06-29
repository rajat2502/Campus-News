document.getElementById('sidebar').addEventListener('mouseover', function(){
  document.querySelectorAll('.name').forEach(function(element){
    element.style.display = "inline";
  })
  document.getElementsByClassName('overlay')[0].style.display = "block";
});

document.getElementById('sidebar').addEventListener('mouseout', function(){
  document.querySelectorAll('.name').forEach(function(element){
    element.style.display = "none";
  })
  document.getElementsByClassName('overlay')[0].style.display = "none";
});