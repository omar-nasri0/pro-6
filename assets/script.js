// ============================== Task 1 ============================
const background = document.querySelector(".task-one-container")
const img = document.querySelectorAll("img")
img[1].addEventListener("click" , ()=>{ 
    background.style.backgroundColor = "#c82525";
    img[0].src="./assets/images/4.png"
}
)
img[2].addEventListener("click" , ()=>{ 
    background.style.backgroundColor = "lightblue";
    img[0].src="./assets/images/1.png"
}
)
img[3].addEventListener("click" , ()=>{ 
    background.style.backgroundColor = "#646464";
    img[0].src="./assets/images/2.png"
}
)
img[4].addEventListener("click" , ()=>{ 
    background.style.backgroundColor = "#dfaf49";
    img[0].src="./assets/images/3.png"
}
)
img[5].addEventListener("click" , ()=>{ 
    background.style.backgroundColor = "#dbe735";
    img[0].src="./assets/images/0.png"
}
)

// ============================== Task 2 ============================

let isLight = 0;
const background_two = document.querySelector(".dark-theme")
img[6].addEventListener("click" , ()=>{
    isLight = (isLight == 0) ? 1 : 0;     
    background_two.classList.toggle("light-theme")
    if (isLight == 1)
        img[6].src="./assets/images/icons/moon.svg"
    else 
        img[6].src="./assets/images/icons/sun.svg"
})


// ============================== Task 3 ============================
const fas = document.querySelectorAll(".fas")
const answer = document.querySelectorAll(".answer")
answer[0].style.display="none"
answer[1].style.display="none"
answer[2].style.display="none"
fas[0].addEventListener("click" , ()=>{
        
        if (answer[0].style.display!="block") {
            answer[0].style.display="block"
        }
        else{(answer[0].style.display="none")}
})
fas[1].addEventListener("click" , ()=>{
        
    if (answer[1].style.display!="block") {
        answer[1].style.display="block"
    }
    else{(answer[1].style.display="none")}
})
fas[2].addEventListener("click" , ()=>{
        
    if (answer[2].style.display!="block") {
        answer[2].style.display="block"
    }
    else{(answer[2].style.display="none")}
})

// ============================== Task 4 ============================
const test_9 = document.querySelector("#star_1")
const test_2=document.querySelector("#star_2")
const test_3=document.querySelector("#star_3")
const test_4=document.querySelector("#star_4")
const test_5=document.querySelector("#star_5")
const description=document.querySelector(".description")
test_9.addEventListener("click" , ()=>{
description.innerHTML="I Just Hate It  &#129324;"
})
test_2.addEventListener("click" , ()=>{
description.innerHTML="I dont Like It  &#x1F612;"
})
test_3.addEventListener("click" , ()=>{
description.innerHTML="It's awesome &#x1F917;"
})
test_4.addEventListener("click" , ()=>{
description.innerHTML="I love It  &#x1F60D;"
})
test_5.addEventListener("click" , ()=>{
description.innerHTML="I love It  &#x1F60D;"
})
const test = document.querySelectorAll(".stars i")
test.forEach((test_1 , index1)=>{
    test_1.addEventListener("click" , ()=>{
        test.forEach((pop , index_2)=>{
            index1>=index_2 ? pop.classList.add('active'):pop.classList.remove('active');
        })
    })
})
// ============================== Task 5 ============================
const male =document.querySelector("ul li.male")
const both =document.querySelector("ul li.both")
const female =document.querySelector("ul li.female")
const man =document.querySelectorAll("ul li.dnone")
const woman =document.querySelectorAll("ul li.wnone")
male.addEventListener("click" , ()=>{
    woman[0].style.display="none"
    woman[1].style.display="none"
    man[0].style.display="block"
    man[1].style.display="block"
    male.classList.add("active")
    female.classList.remove("active")
    both.classList.remove("active")
})
female.addEventListener("click" , ()=>{
    man[0].style.display="none"
    man[1].style.display="none"
    woman[0].style.display="block"
    woman[1].style.display="block"
    male.classList.remove("active")
    female.classList.add("active")
    both.classList.remove("active")
})
both.addEventListener("click" , ()=>{
    man[0].style.display="block"
    man[1].style.display="block"
    woman[0].style.display="block"
    woman[1].style.display="block"
    male.classList.remove("active")
    female.classList.remove("active")
    both.classList.add("active")
})
// ============================== Task 6 ============================

// ============================== Task 7 ============================
