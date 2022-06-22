async function loadJson(path) {
  let response = await fetch(path);
  let jsondata = await response.json();
  return jsondata;
}

function loadResult(array) {
  let found = array.filter(function (item) {
    return item.MBTI === user_data;
  });
  return found[0];
}

$(document).ready(function () {
  loadJson("../json/mbtiResults.json")
    .then((response) => {
      return loadResult(response);
    })
    .then((result) => {
      const values = Object.values(result).map((str) => {
        return "<p>" + str + "</p>"
      });
      $(values[1]).appendTo(".genre")
      $(values[2]).appendTo(".adjectives")
      $(values[3]).appendTo(".description")

    });
});