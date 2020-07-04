// TODO: rotate thru background colors
// TODO: pick random karens

let karens = [
  {
    user: "AnnieOakley",
    age: "61",
    location: "St. Louis, MO",
    answers: [
      {
        question: "What I'm doing with my life",
        answer:
          "Monday thru Friday I am a personal-injury lawyer. On the weekend I like going to the gun range and dispersing BLM protesters.",
      },
    ],
    links: [
      {
        link:
          "https://www.nytimes.com/video/us/politics/100000007214585/trump-white-couple-guns-st-louis.html",
        icon:
          "https://www.nytimes.com/vi-assets/static-assets/favicon-4bf96cb6a1093748bf5b3c429accb9b4.ico",
      },
      {
        link:
          "https://www.washingtonpost.com/nation/2020/07/01/mccloskey-st-louis-guns-protest/",
        icon:
          "https://www.washingtonpost.com/pf/resources/images/favicon.ico?d=263",
      },
    ],
    image: "images/karen_stl_1_320x280.jpg",
  },
  {
    user: "BBQBecky",
    age: "43",
    location: "Oakland, CA",
    answers: [
      {
        question: "I spend a lot of time thinking about",
        answer:
          "Other people's business and park rules and ordinances regarding charcoal grills.",
      },
    ],
    links: [
      {
        link: "https://www.bbc.com/news/newsbeat-44167760",
        icon: "https://www.bbc.com/favicon.ico",
      },
      {
        link:
          "https://www.nytimes.com/2018/10/22/opinion/calling-police-racism-wyt-fear.html",
        icon:
          "https://www.nytimes.com/vi-assets/static-assets/favicon-4bf96cb6a1093748bf5b3c429accb9b4.ico",
      },
    ],
    image: "images/karen_oakland_1_320x280.jpg",
  },
  {
    user: "CornerstoreCaroline",
    age: "55",
    location: "Brooklyn, NY",
    answers: [
      {
        question: "On a typical Friday night I am",
        answer:
          "At my local corner deli accusing children of sexual assualt and berating bystands who are telling me to go home.",
      },
    ],
    links: [
      {
        link: "https://heavy.com/news/2018/10/teresa-sue-klein/",
        icon:
          "https://heavy.com/wp-content/themes/heavy/assets/images/icons/heavy/android-chrome-36x36.png",
      },
      {
        link:
          "https://nypost.com/2018/10/12/white-woman-calls-cops-on-black-child-she-says-touched-her-butt/",
        icon:
          "https://nypost.com/wp-content/themes/nypost-2016/static/images/favicon-nypost/favicon.ico",
      },
      {
        link:
          "https://www.nytimes.com/2018/10/12/nyregion/woman-calls-police-black-boy-brooklyn.html",
        icon:
          "https://www.nytimes.com/vi-assets/static-assets/favicon-4bf96cb6a1093748bf5b3c429accb9b4.ico",
      },
    ],
    image: "images/karen_bk_1_320x280.jpg",
  },
  {
    user: "CPKaren83",
    age: "37",
    location: "New York, NY",
    answers: [
      {
        question: "My self-summary",
        answer:
          "I enjoy long walks in Central Park with my cocker spaniel, Henry. Pet peeves include African-American bird-watchers, doorman, and people filming me.",
      },
    ],
    links: [
      {
        link:
          "https://nypost.com/2020/06/15/central-park-karen-amy-cooper-tried-to-have-doorman-fired-report/",
        icon:
          "https://nypost.com/wp-content/themes/nypost-2016/static/images/favicon-nypost/favicon.ico",
      },
      {
        link:
          "https://www.nytimes.com/2020/06/14/nyregion/central-park-amy-cooper-christian-racism.html",
        icon:
          "https://www.nytimes.com/vi-assets/static-assets/favicon-4bf96cb6a1093748bf5b3c429accb9b4.ico",
      },
    ],
    image: "images/karen_cp_1_320x280.jpg",
  },
  {
    user: "KaronaVirus19",
    age: "27",
    location: "Dallas, TX",
    answers: [
      {
        question: "I'm really good at",
        answer:
          "Tossing groceries, cursing, and not wearing a mask in public during a global pandemic.",
      },
    ],
    links: [
      {
        link:
          "https://nypost.com/2020/06/29/dallas-karen-tosses-food-during-mask-meltdown/",
        icon:
          "https://nypost.com/wp-content/themes/nypost-2016/static/images/favicon-nypost/favicon.ico",
      },
      {
        link: "https://www.youtube.com/watch?v=b9oJtSpOQhY",
        icon: "https://s.ytimg.com/yts/img/favicon-vfl8qSV2F.ico",
      },
    ],
    image: "images/karen_dallas_1_320x280.jpg",
  },
  {
    user: "PermitPatty",
    age: "46",
    location: "San Francisco, CA",
    answers: [
      {
        question: "The first thing people notice about me",
        answer:
          "A faint whiff of cannabis, paranoia, and the self-entitlement to call the police on an 8-year-old girl selling water.",
      },
    ],
    links: [
      {
        link:
          "https://www.cnn.com/2018/06/25/us/permit-patty-san-francisco-trnd/index.html",
        icon: "https://www.cnn.com/favicon.ico",
      },
      {
        link:
          "https://www.nytimes.com/2018/06/25/us/permit-patty-black-girl-water.html",
        icon:
          "https://www.nytimes.com/vi-assets/static-assets/favicon-4bf96cb6a1093748bf5b3c429accb9b4.ico",
      },
    ],
    image: "images/karen_sf_1_320x280.jpg",
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
  let html = `
<div class="box">
  <img class="img_karen" src="${k.image}" />
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
  <div class="summary_div">`;
  html += `
    <div class="summary_title">${k.answers[0].question}</div>
    <div class="summary">${k.answers[0].answer}</div>
`;
  html += `
  </div>
  <div class="links">`;
  for (const l of k.links) {
    html += `<div class="link"><a href="${l.link}"><img src="${l.icon}"/></a></div>`;
  }
  html += `
  </div>
</div>`;
  return html;
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
