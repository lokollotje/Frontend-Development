/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

function veranderImage() {
    document.getElementsByClassName('favorited').src = "favorited.svg";
}

document.getElementsByClassName('star').addEventListener('click', veranderImage);