let btn = document.querySelectorAll(".aheader");

btn.forEach((ele) => {
    ele.onclick = function () {
    btn.forEach((ele) => {
    ele.classList.remove("activeed");
    });
    this.classList.add("activeed");
    };
});

let scheduleli = document.querySelectorAll(".scheduleli")


scheduleli.forEach((ele) => {
    ele.onclick = function () {
    scheduleli.forEach((ele) => {
    ele.classList.remove("activesch");
    });
    this.classList.add("activesch");
    };
});


let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".ulheader");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".aheader").forEach((e) => {
    e.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});


let boxgear = document.querySelector(".box-icone");
let iconegear = document.querySelector(".icone-gear");
let settingbox = document.querySelector(".setting-box")

boxgear.addEventListener("click", () => {
    settingbox.classList.toggle("activebox")
    iconegear.classList.toggle("fa-spin")
});




let licolor = document.querySelectorAll(".color-list li")

if(window.localStorage.getItem("color")) {
    document.documentElement.style.setProperty('--mine-color', window.localStorage.getItem("color"))

    licolor.forEach(li => {
        li.classList.remove("activee")

        if (li.dataset.color === window.localStorage.getItem("color")) {
            li.classList.toggle("activee")
        }

    })
}

licolor.forEach(li => {

    li.addEventListener("click", (e) => {
        window.localStorage.setItem('color', e.target.dataset.color)
        document.documentElement.style.setProperty('--mine-color',e.target.dataset.color)
        licolor.forEach(li => {
            li.classList.remove("activee")
        })
        li.classList.toggle("activee")
    })
});  



let tabs = document.querySelectorAll(".taabs li");
let ArreyTabs = Array.from(tabs);
let article = document.querySelectorAll(".tabs-content article");
let ArreyArticle = Array.from(article);

tabs.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        tabs.forEach((ele) => {
            ele.classList.remove("actiivve")
        });
        e.currentTarget.classList.add("actiivve");

        ArreyArticle.forEach((article) => {
            article.style.display = "none";
        })

        document.querySelector(e.currentTarget.dataset.cont).style.display = "block";

    })
})


let colortabsa = document.querySelectorAll(".taabs li a");


colortabsa.forEach((eae) => {
    eae.addEventListener("click", (e) => {
        colortabsa.forEach((eae) => {
            eae.classList.remove("coloractive")

        });

        eae.classList.add("coloractive")


    });
});



let schodul = document.querySelectorAll(".schodul li");
let Arreyschodul = Array.from(schodul);
let div = document.querySelectorAll(".tbody-content > div");
let Arreyboxtr = Array.from(div);



schodul.forEach((ele) => {
    ele.addEventListener("click", (a) => {
        schodul.forEach((ele) => {
            ele.classList.remove("activesch")
        });
        a.currentTarget.classList.add("activesch")

        Arreyboxtr.forEach((div) => {
            div.style.display = "none!important";
        })

        document.querySelector(a.currentTarget.dataset.contt).style.display = "block";
    });
});


let upto = document.querySelector(".upto")






let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector('.section7');
let started = false;

window.onscroll = function() {

    if (window.scrollY >= section.offsetTop - 350) {
        if(!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }

    if(scrollY >= 550) {
        upto.classList.add("show")
    } else{
        upto.classList.remove("show")
    }
}

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count)
        }
    }, 2300 / goal);
}


let scrool = document.querySelector(".scrooll");

let hegt = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
    let scrolltop = document.documentElement.scrollTop;
    scrool.style.width = `${(scrolltop / hegt) * 100}%`;
})


upto.onclick = function () {
    scrollTo({
        top: 0,
        behavior: "smooth",
    })
}