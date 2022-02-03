eles = ["rahul", "shivam", "kavay", "manoj", "nitin", "deepanshu", "dhannu", "tara", "shakru", "suraj"]

update();

function update() {
var j = Math.floor(Math.random()* eles.length);

document.getElementById("firstPerson").innerHTML = eles[j];

j = Math.floor(Math.random()* eles.length);

document.getElementById("secondPerson").innerHTML = eles[j];
  
}