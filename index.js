
const sunX = window.innerWidth / 2 ;
const sunY = window.innerHeight*(1/2 -0.1);
const sun = document.querySelector('.sun');
sun.style.left = `${sunX - (0.01*window.innerWidth)}px`;
sun.style.top = `${sunY - (0.01*window.innerWidth)}px`;
sun.id=0;
sun.name = "SUN";
sun.gforce = 274;
const mercury = {
    name: "MERCURY",
    gforce: 3.7,
    width: 1,
    speed: 0.005,
    theta: Math.random() * 2 * Math.PI,
    radius:  window.innerWidth * 0.02,
    el: document.querySelector('.mercury')
}
const venus = {
    name: "Venus",
    gforce: 8.8,
    width: 1.5,
    speed: 0.004,
    theta: Math.random() * 2 * Math.PI,
    radius:  window.innerWidth * 0.035,
    el: document.querySelector('.venus')
}
const earth = {
    name:'EARTH',
    gforce: 9.8,
    width:1.6, 
    speed: 0.003,
    theta: Math.random() * 2 * Math.PI,
    radius: window.innerWidth * 0.055,
    el: document.querySelector('.earth')
}
const mars = {
    name: "MARS",
    gforce: 3.7,
    width: 1.5,
    speed: 0.0025,
    theta: Math.random() * 2 * Math.PI,
    radius: window.innerWidth * 0.075,
    el: document.querySelector('.mars')
}
const jupiter = {
    name: "JUPITER",
    gforce: 24.7,
    width: 2,
    speed: 0.002,
    theta: Math.random() * 2 * Math.PI,
    radius: window.innerWidth * 0.12,
    el: document.querySelector('.jupiter')
}
const saturn = {
    name: "SATURN",
    gforce: 10.5,
    width: 1.8,
    speed: 0.001,
    theta: Math.random() * 2 * Math.PI,
    radius: window.innerWidth * 0.15,
    el: document.querySelector('.saturn')
}
const uranus = {
    name: "URANUS",
    gforce: 9,
    width: 1.7,
    speed: 0.0009,
    theta: Math.random() * 2 * Math.PI,
    radius: window.innerWidth * 0.17,
    el: document.querySelector('.uranus')
}
const neptune = {
    name: "NEPTUNE",
    gforce: 11.7,
    width: 1.6,
    speed: 0.00085,
    theta: Math.random() * 2 * Math.PI,
    radius: window.innerWidth * 0.19,
    el: document.querySelector('.neptune')
}
const orbit1 = {
    width: 4,
    speed: 0,
    theta: 0,
    radius: 0,
    el: document.querySelector('.orbit1')
}
const orbit2 = {
    width: 7,
    speed: 0,
    theta: 0,
    radius: 0,
    el: document.querySelector('.orbit2')
}
const orbit3 = {
    width: 11,
    speed: 0,
    theta: 0,
    radius: 0,
    el: document.querySelector('.orbit3')
}
const orbit4 = {
    width: 15,
    speed: 0,
    theta: 0,
    radius: 0,
    el: document.querySelector('.orbit4')
}
const orbit5 = {
    width: 24,
    speed: 0,
    theta: 0,
    radius: 0,
    el: document.querySelector('.orbit5')
}
const orbit6 = {
    width: 30,
    speed: 0,
    theta: 0,
    radius: 0,
    el: document.querySelector('.orbit6')
}
const orbit7 = {
    width: 34,
    speed: 0,
    theta: 0,
    radius: 0,
    el: document.querySelector('.orbit7')
}
const orbit8 = {
    width: 38,
    speed: 0,
    theta: 0,
    radius: 0,
    el: document.querySelector('.orbit8')
}
const astroid = {
    width: 20,
    speed: 0.001,
    theta: 0,
    radius: 0,
    el: document.querySelector('.astroid')
}
const suno = {
    name: "SUN",
    gforce: 274,
    width: 0,
    speed: 0,
    theta: 0,
    radius: 0,
    el: document.querySelector('.solar')
}
let gconst = 6.6743 * Math.pow(10,-11);
const planets = [
    suno,
    mercury,
    venus,
    earth,
    mars,
    jupiter,
    saturn,
    uranus,
    neptune, 
    orbit1,
    orbit2,
    orbit3,
    orbit4,
    orbit5,
    orbit6,
    orbit7,
    orbit8,
    astroid,
]
function update(planet) {
    planet.theta += planet.speed;
    planet.el.style.left = `${Math.cos(planet.theta) * planet.radius +sunX - ((planet.width*window.innerWidth)/200)}px`;
    planet.el.style.top = `${Math.sin(planet.theta) * planet.radius +sunY - ((planet.width*window.innerWidth)/200)}px`;
}
var cli=1;
var g1=0;
var g1=0;
var id1=10;
function myFunction(clicked_id){
    for(let i = 0 ; i < 9 ; i++){
        if(clicked_id == i){
            if(cli == 1){
                document.getElementById("planet1").innerHTML = planets[i].name +"<br><br>";
                gf1 = planets[i].gforce;
                id1 = clicked_id;
                cli++;
            }else if(cli == 2 && clicked_id != id1){
                document.getElementById("planet2").innerHTML = planets[i].name +"<br><br>";
                gf2 = planets[i].gforce;
                cli++;
            }
            
        }
    }
}
function calculate(){
    var weight = $("#pl1").val();
    weight = weight*gf2/gf1;
    $("#pl2").val(weight);
}
document.getElementById("reset").addEventListener('click', reset);
function reset(){
    document.getElementById("pl1").value="";
    document.getElementById("pl2").value="";
    document.getElementById("planet1").innerHTML = "Planet1<br><br>"
    document.getElementById("planet2").innerHTML = "Planet2<br><br>"
    cli = 1;
    gf1 = gf2 = 0;
    id1=10;
}
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
setInterval(() => {
    planets.forEach(update);
},10)