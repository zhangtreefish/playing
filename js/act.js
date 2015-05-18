var storyButton = document.getElementById("after-story");

var onClick= function() {
	var storyArea=document.getElementById("story-display");
	var storyView=document.getElementById("story");
	storyArea.innerHTML +=storyView.value;

};
storyButton.addEventListener("click", onClick);//this is vanilla js style

$("h3").click(function(){
	$(this).toggleClass("background-pic");
}); //this is jQuery-dependent