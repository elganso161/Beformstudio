const anyProjectListFirst = document.querySelector(".any-project__list-first");
const anyProjectListLast = document.querySelector(".any-project__list-last");

const database = [
    {
    titleLink: "Fluffy&Puffy 2.0",
    link: "./project-page-furniture-2.0.html",
    img: "./img/6-projects-main/desctop/img-13-desctop.jpg",
  },
  {
    titleLink: "5ESSENCE 4.0",
    link: "./project-page-5essence-4.0.html",
    img: "./img/6-projects-main/desctop/img-12-desctop.jpg",
  },
  {
    titleLink: "Fluffy&Puffy",
    link: "./project-page-furniture.html",
    img: "./img/6-projects-main/desctop/img-11-desctop.jpg",
  },
  {
    titleLink: "umecos",
    link: "./project-page-umecos.html",
    img: "./img/6-projects-main/desctop/img-1-desctop.jpg",
  },
  {
    titleLink: "GROCERY",
    link: "./project-page-grocery.html",
    img: "./img/6-projects-main/desctop/img-2-desctop.jpg",
  },
  {
    titleLink: "5ESSENCE 3.0",
    link: "./project-page-5essence-3.0.html",
    img: "./img/6-projects-main/desctop/img-3-desctop.jpg",
  },
  {
    titleLink: "5ESSENCE 2.0",
    link: "./project-page-5essence-2.0.html",
    img: "./img/6-projects-main/desctop/img-4-desctop.jpg",
  },
  {
    titleLink: "5ESSENCE 1.0",
    link: "./project-page-5essence-1.0.html",
    img: "./img/6-projects-main/desctop/img-5-desctop.jpg",
  },
  {
    titleLink: "jewellery",
    link: "./project-page-jewellery.html",
    img: "./img/6-projects-main/desctop/img-6-desctop.jpg",
  },
  {
    titleLink: "sochi airport",
    link: "./project-page-airport.html",
    img: "./img/6-projects-main/desctop/img-7-desctop.jpg",
  },
  {
    titleLink: "HUSBAND",
    link: "./project-page-husband.html",
    img: "./img/6-projects-main/desctop/img-8-desctop.jpg",
  },
  {
    titleLink: "Biara",
    link: "./project-page-biara.html",
    img: "./img/6-projects-main/desctop/img-9-desctop.jpg",
  },
  // {
  //   titleLink: "barbershop",
  //   link: "./project-page-harris-daddy.html",
  //   img: "./img/6-projects-main/desctop/img-10-desctop.jpg",
  // },
];

function shuffle(a) {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
  return a;
}

function getRandomFromObject(count) {
  let newArr = shuffle([].concat(...database.map((elem) => elem))).slice(
    0,
    count
  );
  newArr.forEach((elem, index) => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    const linkText = document.createElement("p");

    if (index % 2 == 0) {
      item.classList.add("item");
      link.classList.add("oneLink");
      linkText.classList.add("linkText");
      link.href = elem.link;
      link.style.backgroundImage = `url(${elem.img})`;
      linkText.textContent = elem.titleLink;
      item.appendChild(link);
      link.appendChild(linkText);
      anyProjectListFirst.appendChild(item);
    } else {
      item.classList.add("item");
      link.classList.add("oneLink");
      linkText.classList.add("linkText");
      link.href = elem.link;
      link.style.backgroundImage = `url(${elem.img})`;
      linkText.textContent = elem.titleLink;
      item.appendChild(link);
      link.appendChild(linkText);
      anyProjectListLast.appendChild(item);
    }
  });
}

getRandomFromObject(6);
