/*
	This file is part of The StevenSYS Homepage.

	The StevenSYS Homepage is free software: you can redistribute it and/or modify
	it under the terms of the GNU Lesser General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

    The StevenSYS Homepage is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

	You should have received a copy of the GNU Lesser General Public License along with The StevenSYS Homepage.
	If not, see <https://www.gnu.org/licenses/>.
*/

var cmClosed = 1;

if (localStorage.getItem("darkmode") == "enabled") {
	$("body").addClass("dark");
} else {
	$("body").removeClass("dark");
}

addEventListener("contextmenu", (event) => {
	rcSrc = event.target.getAttribute("src");
	rcHref = event.target.getAttribute("href");
	selectionType = window.getSelection();
	event.preventDefault();
	$(".contextmenu").css("display", "block");
	
	if ($("body").hasClass("dark")) {
		$(".darkmode").html("Light Mode");
	} else {
		$(".darkmode").html("Dark Mode");
	}
	
	if (selectionType.type == "Range") {
		$(".text").css("display", "block");
	} else {
		$(".text").css("display", "none");
	}
	
	if (rcHref != null) {
		$(".ctext").css("display", "block");
	} else {
		$(".ctext").css("display", "none");
	}
	
	if (event.target.nodeName == "IMG") {
		$(".image").css("display", "block");
	} else {
		$(".image").css("display", "none");}
	if (new Date().getMonth() >= 10) {
		$(".christmas").css("display", "block");
	} else {
		$(".christmas").css("display", "none");
	}
	
	if (new Date().getMonth() == 9) {
		$(".halloween").css("display", "block");
	} else {
		$(".halloween").css("display", "none");
	}
	
	$(".contextmenu").css("left", event.clientX);
	$(".contextmenu").css("top", event.clientY);
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
