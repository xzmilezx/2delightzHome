function initData() { console.log("Loading Page") ; }

function goToAbout()
{
	console.log("about clicked") ;
	scrollToAnchor('about') ;
}

function goToFlavor()
{
	console.log("flavors clicked") ;
	scrollToAnchor('flavor') ;
}

function goToGift()
{
	console.log("gift boxes clicked") ;
	scrollToAnchor('gift') ;
}

function goToCustom()
{
	console.log("custom macs clicked") ;
	scrollToAnchor('custom') ;
}

function goToContact()
{
	console.log("contact us clicked") ;
	scrollToAnchor('contact') ;
}

function scrollToAnchor(aid)
{
	var aTag = $("div[ref='"+ aid +"']") ;
	$('html,body').animate({scrollTop: aTag.offset().top},'fast');
}

function showAllFlavors()
{
	console.log("showing all flavors");
	document.getElementById("viewAllFlavors").style.display = "none";
	document.querySelectorAll(".extraChildren").forEach(a=>a.style.display = "inline-block") ;
}

function collapseFlavors()
{
	console.log("collapsing extra flavors");
	document.getElementById("viewAllFlavors").style.display = "inline-block";
	document.querySelectorAll(".extraChildren").forEach(a=>a.style.display = "none") ;
}


function showAllGifts()
{
	console.log("showing all gifts");
	document.getElementById("viewAllGifts").style.display = "none";
	document.querySelectorAll(".extraGift").forEach(a=>a.style.display = "inline-block");
}

function collapseGifts()
{
	console.log("collapsing extra gifts");
	document.getElementById("viewAllGifts").style.display = "inline-block";
	document.querySelectorAll(".extraGift").forEach(a=>a.style.display = "none") ;
}

function showAllCustoms()
{
	console.log("showing all Customs");
	document.getElementById("viewAllCustoms").style.display = "none";
	document.querySelectorAll(".extraCustom").forEach(a=>a.style.display = "inline-block");
}

function collapseCustoms()
{
	console.log("collapsing extra Customs");
	document.getElementById("viewAllCustoms").style.display = "inline-block";
	document.querySelectorAll(".extraCustom").forEach(a=>a.style.display = "none") ;
}
