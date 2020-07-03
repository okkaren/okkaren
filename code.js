// TODO: rotate thru background colors
// TODO: pick random karens

let karens = [
  {
    user: "CPKaren83",
    age: "37",
    location: "New York, NY",
    summary_title: "My self-summary",
    summary:
      "I enjoy long walks in Central Park with my cocker spaniel, Henry. Pet peeves include African-American bird-watchers, doorman, and people filming me.",
    link:
      "https://www.nytimes.com/2020/06/14/nyregion/central-park-amy-cooper-christian-racism.html",
    image: "images/karen_cp_1_320x280.jpg",
  },
  {
    user: "KarenOakley",
    age: "61",
    location: "St. Louis, MO",
    summary_title: "What I'm doing with my life",
    summary:
      "Monday thru Friday I am a personal-injury lawyer. On the weekend I like going to the gun range and dispersing BLM protesters.",
    link:
      "https://www.nytimes.com/video/us/politics/100000007214585/trump-white-couple-guns-st-louis.html",
    image: "images/karen_stl_1_320x280.jpg",
  },
  {
    user: "KaronaVirus19",
    age: "27",
    location: "Dallas, TX",
    summary_title: "I'm really good at",
    summary:
      "Tossing groceries, cursing, and not wearing a mask in public during a global pandemic.",
    link: "https://www.youtube.com/watch?v=b9oJtSpOQhY",
    image: "images/karen_dallas_1_320x280.jpg",
  },
  {
    user: "BBQBecky",
    age: "43",
    location: "Oakland, CA",
    summary_title: "I spend a lot of time thinking about",
    summary:
      "Other people's business and park rules and ordinances regarding charcoal grills.",
    link:
      "https://www.nytimes.com/2018/10/22/opinion/calling-police-racism-wyt-fear.html",
    image: "images/karen_oakland_1_320x280.jpg",
  },
];

$(function () {
  setBGColor();
  shuffle(karens);
  for (k of karens) {
    html = getHTML(k);
    $(".boxes").append(html);
  }
});

function getHTML(k) {
  const percent = Math.floor(Math.random() * 101);
  return `
<div class="box">
  <img src="${k.image}" />
  <div class="info">
    <div class="match_percent">
      <div class="match">match</div>
      <div class="percent">${percent}%</div>
    </div>
    <div class="user_age_loc">
      <div class="user">${k.user}</div>
      <div class="age_loc">${k.age} &bullet; ${k.location}</div>
    </div>
  </div>
  <div class="summary_div">
    <div class="summary_title">${k.summary_title}</div>
    <div class="summary">${k.summary}</div>
  </div>
</div>`;
}

function setBGColor() {
  const colors = ["#f7c7e0", "#e6a4c0", "#5ac1f7", "#63d4ee", "#57b96f"];
  const i = Math.floor(Math.random() * colors.length);
  $("html").css("background-color", colors[i]);
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
