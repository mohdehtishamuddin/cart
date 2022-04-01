var row = 1;
var add = document.getElementById("add");
function click(){
    var id= parseInt(document.getElementById(id).value);
    var name= document.getElementById(name).innerHTML;
    var price= parseInt(document.getElementById(price).value);
 console.log(typeof(id));
 console.log(typeof(name)); 
var display=document.getElementById('display');
var newRow = display.insertRow(Row);
var Cell1 = newRow.insertCell(0);
var Cell2 = newRow.insertCell(1);
var Cell3 = newRow.insertCell(2);
Cell1.innerHTML=productid;
Cell2.innerHTML=productname;
Cell3.innerHTML=productprice;
row++;
}