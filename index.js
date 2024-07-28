$(document).ready(function(){
  $("#icon").click(function (){
   $("#icon").css("backgroundColor" , "red");
  });
  });
  
  $("#icon2").click(function(){
    $("#icon2").css("backgroundColor" , "red");
  });
  
  $("#icon3").click(function(){
    $("#icon3").css("backgroundColor" , "red");;
  });
  
  $("#icon4").click(function (){
    $("#icon4").css("color" , "royalBlue")
  });
  
  $("#icon5").click(function(){
    $("#icon5").css("color" , "red");
  });
  
  $("#icon6").click(function (){
    $("#icon6").css("color" , "royalBlue"); $("#icon7").click(function(){
    $("#icon7").css("color" , "red");
  });
  
  $("#cart").click(function(){
    $("#cart").css("backgroundColor" , "royalBlue");
    alert("Added to cart.");
  });
});
  $("#cart2").click(function(){
    $("#cart2").css("backgroundColor" , "royalBlue");
    alert("Added to cart.")
  });
  
  $("#cart3").click(function(){
    $("#cart3").css("backgroundColor" , "royalBlue");
    alert("Added to cart.");
    
    $("#view").click(function(){
      $("#view2").load("index2.html")
    })
    
});



function openNav() {
  document.getElementById("mySidenav").style.width = "260px";
};

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
};

