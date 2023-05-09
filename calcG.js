let gconst = 6.6743 * Math.pow(10,-11);
document.getElementById("button1").addEventListener('click', gcalc1);
function gcalc1(){
    var radius1 = $("#r1").val()* Math.pow(10,$("#r1pow").val());
    var mass1 = $("#m1").val() * Math.pow(10, $("#m1pow").val());
    let gf1= gconst*mass1/Math.pow(radius1,2);
    $("#gaf1").val(gf1);   
}
document.getElementById("button2").addEventListener('click', gcalc2);
function gcalc2(){
    var radius2 = $("#r2").val()* Math.pow(10,$("#r2pow").val());
    var mass2 = $("#m2").val() * Math.pow(10, $("#m2pow").val());
    let gf2= gconst*mass2/Math.pow(radius2,2);
    $("#gaf2").val(gf2);   
}