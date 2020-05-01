
let showMenu = false;
$(document).ready(function(){
 $('.hamburger').on('click', function () {
  // Action to execute once the collapsible area is expanded
  
  if (!showMenu) 
  	{
 showMenu=true;
  $('#myImage').attr('src', 'images/icon-close.svg');
 // $('nav').css("background-color","hsl(229, 31%, 21%)");

}
else{
	   showMenu = false;
	    $('#myImage').attr('src', 'images/icon-hamburger.svg');
//$('nav').css("background-color", "white");

}
 
$('nav ul').toggleClass('show1');

});
});