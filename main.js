let mega_menu = document.getElementById("mega-menu");

let hover_to_show_mega_menu = document.getElementById("show-mega-menu");

let a = 0;
hover_to_show_mega_menu.onclick = () => {
  a++;
  if (a % 2 === 0) {
    mega_menu.style.display = "none";
  } else {
    mega_menu.style.display = "block";
  }
  mega_menu.style.transition = "0.3s";
};

// window.onscroll = () => {
//   console.log(window.scrollY);
// };

// let spans = document.querySelectorAll("..our-skills .skill .the-progress span");

// for (let i = 0; i < spans.length; i++) {
//   spans[i].style.display = "none";
// }

// console.log(spans);

// function handleIntersection(entries, observer) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       for (let i = 0; i < spans.length; i++) {
//         spans[i].style.display = "block";
//       }
//     }
//   });
// }

// // Options for the Intersection Observer
// const options = {
//   root: null,
//   rootMargin: "0px",
//   threshold: 0.5,
// };

// const observer = new IntersectionObserver(handleIntersection, options);

// const targetElement = document.querySelector("#our-skills");
// observer.observe(targetElement);

let pointsParent = document.getElementById("points");

for (let i = 0; i < 132; i++) {
  let div = document.createElement("div");
  pointsParent.appendChild(div);
  div.textContent = "";
}

let langs = document.querySelectorAll(".lan");

langs.forEach((e) => {
  e.addEventListener("click", () => {
    document.documentElement.lang = e.getAttribute("atr");
    window.localStorage.setItem("language", document.documentElement.lang);
  });
});

setInterval(() => {
  let lang = window.localStorage.getItem("language");
  fetch(`./${lang}.json`)
    .then((res) => res.json())
    .then((response) => {
      console.log(lang);
      console.log(response[0]);
      let divs = document.querySelectorAll(".translate");
      for (let i = 0; i < divs.length; i++)
        if (response[0].hasOwnProperty(divs[i].getAttribute("arabic"))) {
          divs[i].textContent = response[0][divs[i].getAttribute("arabic")];
        }
    })
    .catch((err) => console.log(err));
});
