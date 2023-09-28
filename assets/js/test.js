

console.log('hi')


function registerHandlers() {
  
    var as = document.querySelectorAll('a');
  
  
    for (var i = 0; i < as.length; i++) {
      (function(index) {
        as[i].onclick = function(event) {
        event.preventDefault()
        alert(i);
        return false;
      }
      })(i);
      
    }
  }
  
  registerHandlers()
  