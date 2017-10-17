
 if (window.frameElement) {
             // in frame
 }
 else {
  // not in frame
     var element = document.getElementById('photoform-submit');
     element.onclick = function () {
     document.getElementById('photoformsubmit').click();
     return false;
    }
 }
        
