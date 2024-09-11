function modalFunction() {
    var modal = document.getElementsByClassName("modal");
    var modalBtn = document.getElementsByClassName("modal-btn");
    var closeClick = document.getElementsByClassName("close");
    modalBtn.onclick = function() {
      modal.style.display = "block";
    }
    closeClick.onclick = function() {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
}