var contactus= document.querySelector("#contactus")
var contact_sales= document.querySelector("#buton1")

function colour(){
       contactus.style.backgroundColor="rgb(4, 158, 11)"  
       contact_sales.style.backgroundColor="rgb(4, 158, 11)"  
   }
   function switchColor2(){
       contactus.style.backgroundColor="rgb(16, 180, 24)" 
       contact_sales.style.backgroundColor="rgb(16, 180, 24)"
   }
   document.querySelector("button").addEventListener('mouseover', colour);
   document.querySelector("button").addEventListener('mouseout', switchColor2)

   document.querySelector("#buton1").addEventListener('mouseover', colour);
   document.querySelector("#buton1").addEventListener('mouseout', switchColor2)

//    navigation bar function
   function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}