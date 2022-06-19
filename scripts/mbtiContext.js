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
  var mbti = "";

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

function populateQuestion(array) {
  var obj = "";
  obj =
    "<div class='slide'>" +
    "<div class='question-container'>" +
    "<span class='question-image'>" +
    "<img src='/public/icons/" +
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
    "<p>" +
    array.ans1 +
    "</p>" +
    "</button>" +
    "<button class='answer' data-num=" +
    array.id +
    " data-type=" +
    array.question_type +
    " data-answer=" +
    array.ans2_type +
    ">" +
    "<p>" +
    array.ans2 +
    "</p>" +
    "</button>" +
    "</div>" +
    "</div>";
  return obj;
}

let slidePosition = 0;

$(document).ready(function () {
  for (var i = 0; i < questions.length; i++) {
    var obj = populateQuestion(questions[i]);
    $(obj).appendTo($(".carousel"));
  }
  $(".carousel .slide:first-child").addClass("slide-visible");
  var answerList = [0, 0, 0, 0, 0];

  const slides = document.getElementsByClassName("slide");
  const totalSlides = slides.length;

  // gauge bar
  var gauge = 1;
  var percentage = (gauge / totalSlides).toFixed(2) * 100;
  $(".gauge").width("percentage + " % "");

  $("button").click(function () {
    var temp_data_type = $(this).attr("data-type");
    var temp_data_answer = $(this).attr("data-answer");

    calculateMBTI(answerList, temp_data_type, temp_data_answer);
    moveToNextSlide(slides, totalSlides);

    gauge++;
    percentage = (gauge / totalSlides).toFixed(2) * 100;
    $(".gauge").width(percentage + "%");

    if (slidePosition == totalSlides) {
      var user_mbti = getMBTI(answerList);
      var form_mbti =
        "<form name='mbti_form' onsubmit='return validate()' methods='get' action='result.php'>" +
        "<input type='text' name='mbti' id='mbti' value='" +
        user_mbti +
        "' style='display: none'>" +
        "</form>";
      $(form_mbti).appendTo($(".main-container"));
      $("form").submit();
    }
  });
});

function moveToNextSlide(slides, totalSlides) {
  slidePosition++;
  if (slidePosition < totalSlides) updateSlidePostion(slides);
}

function updateSlidePostion(slides) {
  for (let slide of slides) {
    slide.classList.remove("slide-visible");
    slide.classList.add("slide-hidden");
  }
  slides[slidePosition].classList.add("slide-visible");
}

function validate() {
  return true;
}
