var cmClosed = 1;
if (localStorage.getItem("darkmode") == "enabled") {$("body").addClass("dark");} else {$("body").removeClass("dark");}

addEventListener("contextmenu", (event) => {
  rcSrc = event.target.getAttribute("src");
  rcHref = event.target.getAttribute("href");
  selectionType = window.getSelection();
  event.preventDefault();
  $(".contextmenu").css("display", "block");
  if ($("body").hasClass("dark")) {$(".darkmode").html("Light Mode");} else {$(".darkmode").html("Dark Mode");}
  if (selectionType.type == "Range") {$(".text").css("display", "block");} else {$(".text").css("display", "none");}
  if (rcHref != null) {$(".ctext").css("display", "block");} else {$(".ctext").css("display", "none");}
  if (event.target.nodeName == "IMG") {$(".image").css("display", "block");} else {$(".image").css("display", "none");}
  if (new Date().getMonth() >= 10) {$(".christmas").css("display", "block");} else {$(".christmas").css("display", "none");}
  if (new Date().getMonth() == 9) {$(".halloween").css("display", "block");} else {$(".halloween").css("display", "none");}
  $(".contextmenu").css("left", event.clientX+"px");
  $(".contextmenu").css("top", event.clientY+"px");
  $(".contextmenu").effect("slide", 200, cmClosed = 0);
})

addEventListener("mousedown", (event) => {
  if (event.button == 0 && $(".contextmenu").css("display") != "none" && cmClosed == 0) {
      cmClosed = 1;
      $(".contextmenu").effect("drop", 250, $(".contextmenu").css("display", "none"));
}})

function moveable(object) {
  $(object).css("position", "absolute");
  $(object).draggable();
  $(object).draggable("destroy");
  $(object).draggable();
  $(object).css("display", "block");
  $(object).css("left", $(".contextmenu").css("left"));
  $(object).css("top", $(".contextmenu").css("top"));
}

function darkmode() {
  if ($("body").hasClass("dark")) {
    $("body").removeClass("dark");
    localStorage.setItem("darkmode","disabled")
  } else {
    $("body").addClass("dark");
    localStorage.setItem("darkmode","enabled")
}}