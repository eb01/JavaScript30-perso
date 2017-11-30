"use strict";

function addContent() {
  var showcase = document.getElementById('showcase');

  return data.map(function (data) {
    var render = "<div class='box'>\n      <a target='_blank' href='" + data.url + "'>\n        <img alt='" + data.title + "' src='" + data.img + "'>\n        <div class='title-grad'>\n          <span class='title'>" + data.title + "</span>\n        </div>\n      </a>\n    </div>";

    showcase.insertAdjacentHTML("beforeend", render);
  });
}

window.onload = addContent;

var data = [{
  title: "JavaScript Drum Kit",
  url: "01 - JavaScript Drum Kit/index.html",
  img: "01 - JavaScript Drum Kit/img/day1.jpg"
}, {
  title: "JS and CSS Clock",
  url: "02 - JS and CSS Clock/index.html",
  img: "02 - JS and CSS Clock/img/day2.jpg"
}, {
  title: "Update CSS Variables with JS",
  url: "03 - CSS Variables/index.html",
  img: "03 - CSS Variables/img/day3.jpg"
}];