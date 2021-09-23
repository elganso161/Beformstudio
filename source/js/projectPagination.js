"use strict";

let current_page = 1;
let records_per_page = 6;

let objJson = [
  {
    title: "umecos",
    subtitle: "Магазин азиатской косметики",
    link: "./project-page-umecos.html",
    img: "./img/6-projects-main/desctop/img-1-desctop.jpg",
    imgX2: "./img/6-projects-main/desctop/img-1-desctop-x2.jpg",
    imgW: "./img/6-projects-main/desctop/img-1-desctop.webp",
    imgWx2: "./img/6-projects-main/desctop/img-1-desctop-x2.webp",
    imgfull: "./img/6-projects-main/full/img-1-full.jpg",
    imgfullX2: "./img/6-projects-main/full/img-1-full-x2.jpg",
    imgfullW: "./img/6-projects-main/full/img-1-full.webp",
    imgfullWx2: "./img/6-projects-main/full/img-1-full-x2.webp",
    img1024: "./img/6-projects-main/1024px/img-1-1024.jpg",
    img1024X2: "./img/6-projects-main/1024px/img-1-1024-x2.jpg",
    img1024W: "./img/6-projects-main/1024px/img-1-1024.webp",
    img1024Wx2: "./img/6-projects-main/1024px/img-1-1024-x2.webp",
    imgtab: "./img/6-projects-main/tab/img-1-tab.jpg",
    imgtabX2: "./img/6-projects-main/tab/img-1-tab-x2.jpg",
    imgtabW: "./img/6-projects-main/tab/img-1-tab.webp",
    imgtabWx2: "./img/6-projects-main/tab/img-1-tab-x2.webp",
    imgmob: "./img/6-projects-main/mob/img-1-mob.jpg",
    imgmobX2: "./img/6-projects-main/mob/img-1-mob-x2.jpg",
    imgmobW: "./img/6-projects-main/mob/img-1-mob.webp",
    imgmobWx2: "./img/6-projects-main/mob/img-1-mob-x2.webp",
  },
  {
    title: "GROCERY",
    subtitle: "Эко магазин продуктов",
    link: "./project-page-grocery.html",
    img: "./img/6-projects-main/desctop/img-2-desctop.jpg",
    imgX2: "./img/6-projects-main/desctop/img-2-desctop-x2.jpg",
    imgW: "./img/6-projects-main/desctop/img-2-desctop.webp",
    imgWx2: "./img/6-projects-main/desctop/img-2-desctop-x2.webp",
    imgfull: "./img/6-projects-main/full/img-2-full.jpg",
    imgfullX2: "./img/6-projects-main/full/img-2-full-x2.jpg",
    imgfullW: "./img/6-projects-main/full/img-2-full.webp",
    imgfullWx2: "./img/6-projects-main/full/img-2-full-x2.webp",
    img1024: "./img/6-projects-main/1024px/img-2-1024.jpg",
    img1024X2: "./img/6-projects-main/1024px/img-2-1024-x2.jpg",
    img1024W: "./img/6-projects-main/1024px/img-2-1024.webp",
    img1024Wx2: "./img/6-projects-main/1024px/img-2-1024-x2.webp",
    imgtab: "./img/6-projects-main/tab/img-2-tab.jpg",
    imgtabX2: "./img/6-projects-main/tab/img-2-tab-x2.jpg",
    imgtabW: "./img/6-projects-main/tab/img-2-tab.webp",
    imgtabWx2: "./img/6-projects-main/tab/img-2-tab-x2.webp",
    imgmob: "./img/6-projects-main/mob/img-2-mob.jpg",
    imgmobX2: "./img/6-projects-main/mob/img-2-mob-x2.jpg",
    imgmobW: "./img/6-projects-main/mob/img-2-mob.webp",
    imgmobWx2: "./img/6-projects-main/mob/img-2-mob-x2.webp",
  },
  {
    title: "5ESSENCE 3.0",
    subtitle: "Сеть магазинов обуви",
    link: "./project-page-5essence-3.0.html",
    img: "./img/6-projects-main/desctop/img-3-desctop.jpg",
    imgX2: "./img/6-projects-main/desctop/img-3-desctop-x2.jpg",
    imgW: "./img/6-projects-main/desctop/img-3-desctop.webp",
    imgWx2: "./img/6-projects-main/desctop/img-3-desctop-x2.webp",
    imgfull: "./img/6-projects-main/full/img-3-full.jpg",
    imgfullX2: "./img/6-projects-main/full/img-3-full-x2.jpg",
    imgfullW: "./img/6-projects-main/full/img-3-full.webp",
    imgfullWx2: "./img/6-projects-main/full/img-3-full-x2.webp",
    img1024: "./img/6-projects-main/1024px/img-3-1024.jpg",
    img1024X2: "./img/6-projects-main/1024px/img-3-1024-x2.jpg",
    img1024W: "./img/6-projects-main/1024px/img-3-1024.webp",
    img1024Wx2: "./img/6-projects-main/1024px/img-3-1024-x2.webp",
    imgtab: "./img/6-projects-main/tab/img-3-tab.jpg",
    imgtabX2: "./img/6-projects-main/tab/img-3-tab-x2.jpg",
    imgtabW: "./img/6-projects-main/tab/img-3-tab.webp",
    imgtabWx2: "./img/6-projects-main/tab/img-3-tab-x2.webp",
    imgmob: "./img/6-projects-main/mob/img-3-mob.jpg",
    imgmobX2: "./img/6-projects-main/mob/img-3-mob-x2.jpg",
    imgmobW: "./img/6-projects-main/mob/img-3-mob.webp",
    imgmobWx2: "./img/6-projects-main/mob/img-3-mob-x2.webp",
  },
  {
    title: "5ESSENCE 2.0",
    subtitle: "Сеть магазинов обуви",
    link: "./project-page-5essence-2.0.html",
    img: "./img/6-projects-main/desctop/img-4-desctop.jpg",
    imgX2: "./img/6-projects-main/desctop/img-4-desctop-x2.jpg",
    imgW: "./img/6-projects-main/desctop/img-4-desctop.webp",
    imgWx2: "./img/6-projects-main/desctop/img-4-desctop-x2.webp",
    imgfull: "./img/6-projects-main/full/img-4-full.jpg",
    imgfullX2: "./img/6-projects-main/full/img-4-full-x2.jpg",
    imgfullW: "./img/6-projects-main/full/img-4-full.webp",
    imgfullWx2: "./img/6-projects-main/full/img-4-full-x2.webp",
    img1024: "./img/6-projects-main/1024px/img-4-1024.jpg",
    img1024X2: "./img/6-projects-main/1024px/img-4-1024-x2.jpg",
    img1024W: "./img/6-projects-main/1024px/img-4-1024.webp",
    img1024Wx2: "./img/6-projects-main/1024px/img-4-1024-x2.webp",
    imgtab: "./img/6-projects-main/tab/img-4-tab.jpg",
    imgtabX2: "./img/6-projects-main/tab/img-4-tab-x2.jpg",
    imgtabW: "./img/6-projects-main/tab/img-4-tab.webp",
    imgtabWx2: "./img/6-projects-main/tab/img-4-tab-x2.webp",
    imgmob: "./img/6-projects-main/mob/img-4-mob.jpg",
    imgmobX2: "./img/6-projects-main/mob/img-4-mob-x2.jpg",
    imgmobW: "./img/6-projects-main/mob/img-4-mob.webp",
    imgmobWx2: "./img/6-projects-main/mob/img-4-mob-x2.webp",
  },
  {
    title: "5ESSENCE 1.0",
    subtitle: "Сеть магазинов обуви",
    link: "./project-page-5essence-1.0.html",
    img: "./img/6-projects-main/desctop/img-5-desctop.jpg",
    imgX2: "./img/6-projects-main/desctop/img-5-desctop-x2.jpg",
    imgW: "./img/6-projects-main/desctop/img-5-desctop.webp",
    imgWx2: "./img/6-projects-main/desctop/img-5-desctop-x2.webp",
    imgfull: "./img/6-projects-main/full/img-5-full.jpg",
    imgfullX2: "./img/6-projects-main/full/img-5-full-x2.jpg",
    imgfullW: "./img/6-projects-main/full/img-5-full.webp",
    imgfullWx2: "./img/6-projects-main/full/img-5-full-x2.webp",
    img1024: "./img/6-projects-main/1024px/img-5-1024.jpg",
    img1024X2: "./img/6-projects-main/1024px/img-5-1024-x2.jpg",
    img1024W: "./img/6-projects-main/1024px/img-5-1024.webp",
    img1024Wx2: "./img/6-projects-main/1024px/img-5-1024-x2.webp",
    imgtab: "./img/6-projects-main/tab/img-5-tab.jpg",
    imgtabX2: "./img/6-projects-main/tab/img-5-tab-x2.jpg",
    imgtabW: "./img/6-projects-main/tab/img-5-tab.webp",
    imgtabWx2: "./img/6-projects-main/tab/img-5-tab-x2.webp",
    imgmob: "./img/6-projects-main/mob/img-5-mob.jpg",
    imgmobX2: "./img/6-projects-main/mob/img-5-mob-x2.jpg",
    imgmobW: "./img/6-projects-main/mob/img-5-mob.webp",
    imgmobWx2: "./img/6-projects-main/mob/img-5-mob-x2.webp",
  },
  {
    title: "jewellery",
    subtitle: "Магазин ювелиных уркашений",
    link: "./project-page-jewellery.html",
    img: "./img/6-projects-main/desctop/img-6-desctop.jpg",
    imgX2: "./img/6-projects-main/desctop/img-6-desctop-x2.jpg",
    imgW: "./img/6-projects-main/desctop/img-6-desctop.webp",
    imgWx2: "./img/6-projects-main/desctop/img-6-desctop-x2.webp",
    imgfull: "./img/6-projects-main/full/img-6-full.jpg",
    imgfullX2: "./img/6-projects-main/full/img-6-full-x2.jpg",
    imgfullW: "./img/6-projects-main/full/img-6-full.webp",
    imgfullWx2: "./img/6-projects-main/full/img-6-full-x2.webp",
    img1024: "./img/6-projects-main/1024px/img-6-1024.jpg",
    img1024X2: "./img/6-projects-main/1024px/img-6-1024-x2.jpg",
    img1024W: "./img/6-projects-main/1024px/img-6-1024.webp",
    img1024Wx2: "./img/6-projects-main/1024px/img-6-1024-x2.webp",
    imgtab: "./img/6-projects-main/tab/img-6-tab.jpg",
    imgtabX2: "./img/6-projects-main/tab/img-6-tab-x2.jpg",
    imgtabW: "./img/6-projects-main/tab/img-6-tab.webp",
    imgtabWx2: "./img/6-projects-main/tab/img-6-tab-x2.webp",
    imgmob: "./img/6-projects-main/mob/img-6-mob.jpg",
    imgmobX2: "./img/6-projects-main/mob/img-6-mob-x2.jpg",
    imgmobW: "./img/6-projects-main/mob/img-6-mob.webp",
    imgmobWx2: "./img/6-projects-main/mob/img-6-mob-x2.webp",
  },
  {
    title: "sochi airport",
    subtitle: "Отделы розничной торговли",
    link: "./project-page-airport.html",
    img: "./img/6-projects-main/desctop/img-7-desctop.jpg",
    imgX2: "./img/6-projects-main/desctop/img-7-desctop-x2.jpg",
    imgW: "./img/6-projects-main/desctop/img-7-desctop.webp",
    imgWx2: "./img/6-projects-main/desctop/img-7-desctop-x2.webp",
    imgfull: "./img/6-projects-main/full/img-7-full.jpg",
    imgfullX2: "./img/6-projects-main/full/img-7-full-x2.jpg",
    imgfullW: "./img/6-projects-main/full/img-7-full.webp",
    imgfullWx2: "./img/6-projects-main/full/img-7-full-x2.webp",
    img1024: "./img/6-projects-main/1024px/img-7-1024.jpg",
    img1024X2: "./img/6-projects-main/1024px/img-7-1024-x2.jpg",
    img1024W: "./img/6-projects-main/1024px/img-7-1024.webp",
    img1024Wx2: "./img/6-projects-main/1024px/img-7-1024-x2.webp",
    imgtab: "./img/6-projects-main/tab/img-7-tab.jpg",
    imgtabX2: "./img/6-projects-main/tab/img-7-tab-x2.jpg",
    imgtabW: "./img/6-projects-main/tab/img-7-tab.webp",
    imgtabWx2: "./img/6-projects-main/tab/img-7-tab-x2.webp",
    imgmob: "./img/6-projects-main/mob/img-7-mob.jpg",
    imgmobX2: "./img/6-projects-main/mob/img-7-mob-x2.jpg",
    imgmobW: "./img/6-projects-main/mob/img-7-mob.webp",
    imgmobWx2: "./img/6-projects-main/mob/img-7-mob-x2.webp",
  },
  {
    title: "HUSBAND",
    subtitle: "Офис студии интерьера",
    link: "./project-page-husband.html",
    img: "./img/6-projects-main/desctop/img-8-desctop.jpg",
    imgX2: "./img/6-projects-main/desctop/img-8-desctop-x2.jpg",
    imgW: "./img/6-projects-main/desctop/img-8-desctop.webp",
    imgWx2: "./img/6-projects-main/desctop/img-8-desctop-x2.webp",
    imgfull: "./img/6-projects-main/full/img-8-full.jpg",
    imgfullX2: "./img/6-projects-main/full/img-8-full-x2.jpg",
    imgfullW: "./img/6-projects-main/full/img-8-full.webp",
    imgfullWx2: "./img/6-projects-main/full/img-8-full-x2.webp",
    img1024: "./img/6-projects-main/1024px/img-8-1024.jpg",
    img1024X2: "./img/6-projects-main/1024px/img-8-1024-x2.jpg",
    img1024W: "./img/6-projects-main/1024px/img-8-1024.webp",
    img1024Wx2: "./img/6-projects-main/1024px/img-8-1024-x2.webp",
    imgtab: "./img/6-projects-main/tab/img-8-tab.jpg",
    imgtabX2: "./img/6-projects-main/tab/img-8-tab-x2.jpg",
    imgtabW: "./img/6-projects-main/tab/img-8-tab.webp",
    imgtabWx2: "./img/6-projects-main/tab/img-8-tab-x2.webp",
    imgmob: "./img/6-projects-main/mob/img-8-mob.jpg",
    imgmobX2: "./img/6-projects-main/mob/img-8-mob-x2.jpg",
    imgmobW: "./img/6-projects-main/mob/img-8-mob.webp",
    imgmobWx2: "./img/6-projects-main/mob/img-8-mob-x2.webp",
  },
  {
    title: "baira",
    subtitle: "Магазин обуви",
    img: "./img/6-projects-main/desctop/img-9-desctop.jpg",
    imgX2: "./img/6-projects-main/desctop/img-9-desctop-x2.jpg",
    imgW: "./img/6-projects-main/desctop/img-9-desctop.webp",
    imgWx2: "./img/6-projects-main/desctop/img-9-desctop-x2.webp",
    imgfull: "./img/6-projects-main/full/img-9-full.jpg",
    imgfullX2: "./img/6-projects-main/full/img-9-full-x2.jpg",
    imgfullW: "./img/6-projects-main/full/img-9-full.webp",
    imgfullWx2: "./img/6-projects-main/full/img-9-full-x2.webp",
    img1024: "./img/6-projects-main/1024px/img-9-1024.jpg",
    img1024X2: "./img/6-projects-main/1024px/img-9-1024-x2.jpg",
    img1024W: "./img/6-projects-main/1024px/img-9-1024.webp",
    img1024Wx2: "./img/6-projects-main/1024px/img-9-1024-x2.webp",
    imgtab: "./img/6-projects-main/tab/img-9-tab.jpg",
    imgtabX2: "./img/6-projects-main/tab/img-9-tab-x2.jpg",
    imgtabW: "./img/6-projects-main/tab/img-9-tab.webp",
    imgtabWx2: "./img/6-projects-main/tab/img-9-tab-x2.webp",
    imgmob: "./img/6-projects-main/mob/img-9-mob.jpg",
    imgmobX2: "./img/6-projects-main/mob/img-9-mob-x2.jpg",
    imgmobW: "./img/6-projects-main/mob/img-9-mob.webp",
    imgmobWx2: "./img/6-projects-main/mob/img-9-mob-x2.webp",
  },
  {
    title: "harris daddy",
    subtitle: "Семейный барбершоп",
    img: "./img/6-projects-main/desctop/img-10-desctop.jpg",
    imgX2: "./img/6-projects-main/desctop/img-10-desctop-x2.jpg",
    imgW: "./img/6-projects-main/desctop/img-10-desctop.webp",
    imgWx2: "./img/6-projects-main/desctop/img-10-desctop-x2.webp",
    imgfull: "./img/6-projects-main/full/img-10-full.jpg",
    imgfullX2: "./img/6-projects-main/full/img-10-full-x2.jpg",
    imgfullW: "./img/6-projects-main/full/img-10-full.webp",
    imgfullWx2: "./img/6-projects-main/full/img-10-full-x2.webp",
    img1024: "./img/6-projects-main/1024px/img-10-1024.jpg",
    img1024X2: "./img/6-projects-main/1024px/img-10-1024-x2.jpg",
    img1024W: "./img/6-projects-main/1024px/img-10-1024.webp",
    img1024Wx2: "./img/6-projects-main/1024px/img-10-1024-x2.webp",
    imgtab: "./img/6-projects-main/tab/img-10-tab.jpg",
    imgtabX2: "./img/6-projects-main/tab/img-10-tab-x2.jpg",
    imgtabW: "./img/6-projects-main/tab/img-10-tab.webp",
    imgtabWx2: "./img/6-projects-main/tab/img-10-tab-x2.webp",
    imgmob: "./img/6-projects-main/mob/img-10-mob.jpg",
    imgmobX2: "./img/6-projects-main/mob/img-10-mob-x2.jpg",
    imgmobW: "./img/6-projects-main/mob/img-10-mob.webp",
    imgmobWx2: "./img/6-projects-main/mob/img-10-mob-x2.webp",
  },
];

let btn_next = document.getElementById("btn_next");
let btn_prev = document.getElementById("btn_prev");
let listing_table = document.getElementById("listingTable");
let page_span = document.getElementById("page");

btn_prev.addEventListener("click", () => {
  if (current_page > 1) {
    current_page--;
    changePage(current_page);
    onloadWindow();
  }
});

btn_next.addEventListener("click", () => {
  if (current_page < numPages()) {
    current_page++;
    changePage(current_page);
    onloadWindow();
  }
});

function onloadWindow() {
  window.onload = window.scroll({
    top: 0,
    behavior: "smooth",
  });
}

function changePage(page) {
  if (page < 1) page = 1;
  if (page > numPages()) page = numPages();

  listing_table.innerHTML = "";

  for (
    let i = (page - 1) * records_per_page;
    i < page * records_per_page && i < objJson.length;
    i++
  ) {
    listing_table.innerHTML += `<li class="project__list-item">
      <div class="project__list-item-title">
        <div><h3>${objJson[i].title}</h3></div>
        <div>
          <p>${objJson[i].subtitle}</p>
          <a href="${objJson[i].link}">Посмотреть проект</a>
        </div>
      </div>
      <div class="project__list-item-img">
        <picture>
        <source type="image/webp" media="(max-width: 480px)"
        srcset="
        ${objJson[i].imgmobW}    1x,
        ${objJson[i].imgmobWx2} 2x
        "><source media="(max-width: 480px)"
        srcset="
        ${objJson[i].imgmob}    1x,
        ${objJson[i].imgmobX2} 2x
        "><source type="image/webp" media="(max-width: 768px)"
        srcset="
        ${objJson[i].imgtabW}    1x,
        ${objJson[i].imgtabWx2} 2x
        "><source media="(max-width: 768px)"
        srcset="
        ${objJson[i].imgtab}    1x,
        ${objJson[i].imgtabX2} 2x
        "><source type="image/webp" media="(max-width: 1024px)"
        srcset="
        ${objJson[i].img1024W}    1x,
        ${objJson[i].img1024Wx2} 2x
        "><source media="(max-width: 1024px)"
        srcset="
        ${objJson[i].img1024}    1x,
        ${objJson[i].img1024X2} 2x
        "><source media="(min-width: 1920px)"
        srcset="
        ${objJson[i].imgfullW}    1x,
        ${objJson[i].imgfullWx2} 2x
        "><source media="(min-width: 1920px)"
        srcset="
        ${objJson[i].imgfull}    1x,
        ${objJson[i].imgfullX2} 2x
        "><source type="image/webp"
        srcset="
        ${objJson[i].imgW}    1x,
        ${objJson[i].imgWx2} 2x
        "><img src="${objJson[i].img}"
        srcset="
        ${objJson[i].img}    1x,
        ${objJson[i].imgX2} 2x
        " alt="img">
        </picture>
      </div>
    </li>`;
  }
  page_span.innerHTML = page + "/" + numPages();

  if (page == 1) {
    btn_prev.style.opacity = "0.2";
  } else {
    btn_prev.style.opacity = "1";
  }

  if (page == numPages()) {
    btn_next.style.opacity = "0.2";
  } else {
    btn_next.style.opacity = "1";
  }
}

function numPages() {
  return Math.ceil(objJson.length / records_per_page);
}

window.onload = function () {
  changePage(1);
};
