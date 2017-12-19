$(function(){
  //SCOPE
  //GLOBAL VS LOCAL VARIABLES
  //PROPER WAY
  
  var qty
  
  $(".calculate").click(function(){
      
    //INPUT
    qty = parseInt($("#qty").val());
    
    //CALCULATE
    var total = 95 * qty / 0.7
    
    //OUTPUT
    $(".total").css("font-size", "28px")
    $(".total").html(total);
    
  })
    

});