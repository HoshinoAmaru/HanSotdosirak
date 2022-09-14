const array1 = [1, 2, 3];
// pass a function to map
const map1 = array1.map(x => `<li> ${x} </li>`);
console.log(map1);
// expected output: Array [2, 8, 18, 32]

/***********************************************************************************************/
/*사진 강조 애니메이션 2*/

window.onload = () => {

    let bg = document.querySelector(".main_hansot .main_hansot_bg");
    
    console.log(bg);
    
    bg.addEventListener("mouseenter", (event) => {
    
    event.target.classList.add("on");
    
    console.log("mouseenter");
    
    });
    
    bg.addEventListener("mouseleave", (event) => {
    
    event.target.classList.remove("on");
    
    console.log("mouseleave");
    
    });
    
};

/***********************************************************************************************/