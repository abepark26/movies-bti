/******************************************************************************
 * logic
 ******************************************************************************/
function calculateMBTI(answerList, question_type, ans_type) {
  if (question_type == 1) {
    if (ans_type == "I") {
      answerList[question_type]++;
    } else {
      answerList[question_type]--;
    }
  } else if (question_type == 2) {
    if (ans_type == "S") {
      answerList[question_type]++;
    } else {
      answerList[question_type]--;
    }
  } else if (question_type == 3) {
    if (ans_type == "F") {
      answerList[question_type]++;
    } else {
      answerList[question_type]--;
    }
  } else if (question_type == 4) {
    if (ans_type == "P") {
      answerList[question_type]++;
    } else {
      answerList[question_type]--;
    }
  }

  return answerList;
}

function getMBTI(answerList) {
  let mbti = "";

  if (answerList[1] > 0) mbti += "I";
  else mbti += "E";

  if (answerList[2] > 0) mbti += "S";
  else mbti += "N";

  if (answerList[3] > 0) mbti += "F";
  else mbti += "T";

  if (answerList[4] > 0) mbti += "P";
  else mbti += "J";

  return mbti;
}

/******************************************************************************
 * loading
 ******************************************************************************/
function populateQuestion(array) {
  let obj = "";
  obj =
    "<div class='slide'>" +
    "<div class='question-container'>" +
    "<span class='question-image'>" +
    "<img src='/svgs/" +
    array.image_name +
    "'>" +
    "</span>" +
    "<p class='question-text'>" +
    array.question +
    "</p>" +
    "</div>" +
    "<div class='answer-container'>" +
    "<button class='answer' data-num=" +
    array.id +
    " data-type=" +
    array.question_type +
    " data-answer=" +
    array.ans1_type +
    ">" +
    array.ans1 +
    "</button'>" +
    "<button class='answer' data-num=" +
    array.id +
    " data-type=" +
    array.question_type +
    " data-answer=" +
    array.ans2_type +
    ">" +
    array.ans2 +
    "</button'>" +
    "</div>" +
    "</div>";
  return obj;
}

async function loadJson(path) {
  let response = await fetch(path);
  let jsondata = await response.json();
  return jsondata;
}

function loadCarousel(jsondata) {
  for (let i in jsondata) {
    let obj = populateQuestion(jsondata[i]);
    $(obj).appendTo($(".carousel"));
  }
  $(".carousel .slide:first-child").addClass("slide-visible");
}

/******************************************************************************
 * transition
 ******************************************************************************/
function moveToNextSlide(slidePosition, slides, totalSlides) {
  if (slidePosition < totalSlides) updateSlidePostion(slidePosition, slides);
}

function updateSlidePostion(slidePosition, slides) {
  for (let slide of slides) {
    slide.classList.remove("slide-visible");
    slide.classList.add("slide-hidden");
  }
  slides[slidePosition].classList.add("slide-visible");
}

function validate() {
  return true;
}

/******************************************************************************
 * main
 ******************************************************************************/
$(document).ready(function () {
  let answerList = [0, 0, 0, 0, 0];
  let gauge = 1;
  let slidePosition = 0;

  /* load mbti questions */
  loadJson("./../json/mbtiQuestionnaire.json")
    .then((response) => {
      loadCarousel(response);
    })
    .then(() => {
      let slides = document.getElementsByClassName("slide");
      let totalSlides = slides.length;
      let percentage = (gauge / totalSlides).toFixed(2) * 100;
      $(".gauge").width("percentage + " % "");

      $("button").click(function () {
        console.log(answerList);
        slidePosition++;
        var temp_data_type = $(this).attr("data-type");
        var temp_data_answer = $(this).attr("data-answer");

        calculateMBTI(answerList, temp_data_type, temp_data_answer);
        moveToNextSlide(slidePosition, slides, totalSlides);

        gauge++;
        percentage = (gauge / totalSlides).toFixed(2) * 100;
        $(".gauge").width(percentage + "%");

        if (slidePosition == totalSlides) {
          var user_mbti = getMBTI(answerList);
          var form_mbti =
            "<form name='mbti_form' onsubmit='return validate()' methods='get'\
            action='result.php'>" +
            "<input type='text' name='mbti' id='mbti' value='" +
            user_mbti +
            "' style='display: none'>" +
            "</form>";
          $(form_mbti).appendTo($(".main-container"));
          $("form").submit();
        }
      });
    });
});

/******************************************************************************
 * reload page when pressed back
 ******************************************************************************/
window.addEventListener("pageshow", function (event) {
  var historyTraversal =
    event.persisted ||
    (typeof window.performance != "undefined" &&
      window.performance.getEntriesByType("navigation")[0].type === "back");
  if (historyTraversal) {
    /* Handle page restore. */
    window.location.reload();
  }
});
