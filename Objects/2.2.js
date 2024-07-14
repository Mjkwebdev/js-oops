// Factories Function
function createCircle(radius){
      return {
        radius,
        draw: function(){
            console.log("draw");
        }
      }
}

console.log(createCircle(1));