/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/
var star = document.querySelector(".star");

function favorited() {
	star.src = "images/favorited.svg";
}

star.addEventListener("click", favorited);