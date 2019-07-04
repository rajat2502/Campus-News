
// js for handling the sidebar hover events
document.getElementById('sidebar').addEventListener('mouseover', function(){
  document.querySelectorAll('.name').forEach(function(element){
    element.style.display = "inline";
  })

  document.getElementsByClassName('overlay')[0].style.display = "block";

  document.querySelectorAll('#sidebar ul li').forEach(function(element){
    element.style.padding = "4px 12px 4px 12px";
  })
});

document.getElementById('sidebar').addEventListener('mouseout', function(){
  document.querySelectorAll('.name').forEach(function(element){
    element.style.display = "none";
  })

  document.getElementsByClassName('overlay')[0].style.display = "none";

  document.querySelectorAll('#sidebar ul li').forEach(function(element){
    element.style.padding = "4px 12px 4px 13px";
  })
});

// modal-box-js

// to open a modal-box
document.querySelectorAll('.event-box > div').forEach(function(box){
  box.addEventListener('click', function(){
    this.parentElement.nextElementSibling.style.display = "block";
    // this.nextElementSibling.style.display = "block";
  })
})

// to close the modal-box
document.querySelectorAll('.modal-box').forEach(function(box){
  box.addEventListener('click', function(e){
    if(e.target == box){
      box.style.display = "none";
    }
  })
})