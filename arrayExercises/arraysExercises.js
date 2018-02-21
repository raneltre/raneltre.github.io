$(function() {

    var arr = [2, 5, 8, 10, 16, 7, 8];
    var shapes = ["Circle", "Square", "Rectangle", "Trapezoid", "Triangle", "Rhombus", "Octagon"];

    $(".q1-function").click(function() {
        //CALL OUTPUT
        output();
    });

    $(".q2-function").click(function() {
       //GET NUMBER FROM INPUT BOX
       var shapes2 = $(".numElements").val();
       //CALL listElements
        listElements(shapes2);
    });
    $(".q3-function").click(function() {
        var fillArray2 = $(".fillArray").text();
        //CALL fillArray
        fillArray(fillArray2);
    });
    $(".q4-function").click(function() {
        //CALL pairingArrays
        pairingArrays();
    });
});

var output = function() {
    var arr = [2, 5, 8, 10, 16, 7, 8];
    for(i = 0; i < arr.length; i+=2){
        $(".q1-output").append(arr[i] + "<br>");
    }
};

var listElements = function(n) {
    var shapes = ["Circle", "Square", "Rectangle", "Trapezoid", "Triangle", "Rhombus", "Octagon"];
    for(i = 0; i < n; i++){
        $(".q2-output").append(shapes[i] + "<br>");
    }

};

var fillArray = function() {
    var fill = ["Orange, Yellow, Green,"];
    for(i = 0; i < 1; i++){
        $(".q3-output").append(fill[i] + ' .fillArray' +"<br>");
    }
};
var pairingArrays = function() {
    var response = " ";
    for(i = 0; ; i++){
        response = prompt("");
        
    }

};