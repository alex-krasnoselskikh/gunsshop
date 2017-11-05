'use strict';

document.addEventListener('DOMContentLoaded', function(){ 
  loadGoods();
}, false);


function loadGoods() {
  fetch('goods.json').then(function(response){
    if (response.status !== 200) {
      console.log('Something went wrong. Status code: ' +
        response.status);
      return;
    }
    console.log('Content type: ' + response.headers.get('Content-Type'));
    console.log('Status: ' + response.status);
    return response.json();
  })
    .then(function(item){
    console.log(item);
  })

  /* +(string concatenation operator) with object will
   call the toString method on the object and
   a string will be returned.
  So, '' + object is equivalent to object.toString().
    And toString on object returns "[object Object]".
    With , the object is passed as separate argument
    to the log method.*/

  .catch(function(err){
    console.log('Fetch Error: ', err);
  });
}
//TODO: LEARN JSON GET POST