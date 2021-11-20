function setActiveClass() {
  var path = window.location.pathname;
  var element = $("#navbar a[href='" + path + "']");
  var cabinetLink = $("#cabinet-sidebar a[href='" + path + "']");
  $(".activeLink").removeClass("activeLink");
  element.addClass("activeLink");
  if (!cabinetLink.hasClass("btn-declare")) cabinetLink.addClass("activeLink");
}
setActiveClass();

$(document).ready(function () {
  if (window.matchMedia("(max-width: 500px)").matches) {
    function setToggleActiveClass() {
      var path = window.location.pathname;
      var element = $("#toggle-menu a[href='" + path + "']");
      var cabinetLink = $("#cabinet-sidebar a[href='" + path + "']");
      $(".activeLink").removeClass("activeLink");
      element.addClass("activeLink");
      if (!cabinetLink.hasClass("btn-declare"))
        cabinetLink.addClass("activeLink");
    }

    setToggleActiveClass();
    $("#toggle-navbar").click(function (e) {
      e.preventDefault();
      $(".toggle-menu").slideToggle();
    });

    setToggleActiveClass();
    $("#toggle-navbar2").click(function (e) {
      e.preventDefault();
      $(".toggle-menu").slideToggle();
    });
  }
});

$(document).ready(function () {
  if (window.matchMedia("(max-width: 500px)").matches) {
    function setToggleActiveClass() {
      var path = window.location.pathname;
      var element = $("#toggle-menu-reg a[href='" + path + "']");
      var cabinetLink = $("#cabinet-sidebar a[href='" + path + "']");
      $(".activeLink").removeClass("activeLink");
      element.addClass("activeLink");
      if (!cabinetLink.hasClass("btn-declare"))
        cabinetLink.addClass("activeLink");
    }

    setToggleActiveClass();
    $("#toggle-navbar-reg").click(function (e) {
      e.preventDefault();
      $(".toggle-menu-reg").slideToggle();
    });
  }
});

function toggleAnswer(questionId) {
  if ($(`#${questionId}`).hasClass("fa-minus")) {
    $(`#${questionId}`).addClass("fal");
    $(`#${questionId}`).addClass("fa-plus");
    $(`#${questionId}`).removeClass("far");
    $(`#${questionId}`).removeClass("fa-minus");
  } else {
    $(`#${questionId}`).removeClass("fal");
    $(`#${questionId}`).removeClass("fa-plus");
    $(`#${questionId}`).addClass("far");
    $(`#${questionId}`).addClass("fa-minus");
  }

  $(`#${questionId}`).parent().siblings().slideToggle();
}

function changeTab(event, countryName, activeTabClass, tabContent) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName(tabContent);
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName(activeTabClass);
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(
      ` ${activeTabClass}`,
      ""
    );
  }
  document.getElementById(countryName).style.display = "flex";
  event.currentTarget.className += ` ${activeTabClass}`;
}

function openFileBrowser(inputId, elementId, type) {
  document.getElementById(inputId).click();
  document.getElementById(inputId).addEventListener("change", function (e) {
    if (type == 1) $(`#${elementId}`).html($(this).val());
    else $(`#${elementId}`).val($(this).val());
  });
}

$("#tbodyturkey").on("click", ".toolstd", function () {
  clickedDivId = $(this).siblings([HTMLDivElement]).attr("id");
  $(`#${clickedDivId}`).slideToggle();
  hideToolkits(clickedDivId);
});
$("#tbodyusa").on("click", ".toolstd", function () {
  clickedDivId = $(this).siblings([HTMLDivElement]).attr("id");
  $(`#${clickedDivId}`).slideToggle();
  hideToolkits(clickedDivId);
});
$("#tbodychine").on("click", ".toolstd", function () {
  clickedDivId = $(this).siblings([HTMLDivElement]).attr("id");
  $(`#${clickedDivId}`).slideToggle();
  hideToolkits(clickedDivId);
});

function hideToolkits(id) {
  var toolkits = document.getElementsByClassName("toolkit");
  for (var i = 0; i < toolkits.length; i++) {
    if (toolkits[i].attributes["id"].nodeValue !== id)
      toolkits[i].style.display = "none";
    else toolkits[i].style.display = "block";
  }
}

$("#tbodyturkey").on("click", ".toolstd-order", function () {
  clickedDivId = $(this).siblings([HTMLDivElement]).attr("id");
  $(`#${clickedDivId}`).slideToggle();
  hideToolkits(clickedDivId);
});
$("#tbodyusa").on("click", ".toolstd-order", function () {
  clickedDivId = $(this).siblings([HTMLDivElement]).attr("id");
  $(`#${clickedDivId}`).slideToggle();
  hideToolkits(clickedDivId);
});
$("#tbodychine").on("click", ".toolstd-order", function () {
  clickedDivId = $(this).siblings([HTMLDivElement]).attr("id");
  $(`#${clickedDivId}`).slideToggle();
  hideToolkits(clickedDivId);
});
function hideToolkits(id) {
  var toolkits = document.getElementsByClassName("toolkit-order");
  for (var i = 0; i < toolkits.length; i++) {
    if (toolkits[i].attributes["id"].nodeValue !== id)
      toolkits[i].style.display = "none";
    else toolkits[i].style.display = "block";
  }
}

$(document).ready(function () {
  $(".multi_select").selectpicker();
});
