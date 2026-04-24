//your JS code here. If required.

let width=document.querySelector('.wid');
let height=document.querySelector('.hei');

window.addEventListener('resize',()=>{
let w=window.innerWidth;
let h=window.innerHeight;
		
width.innerText=`Width: ${w}`
height.innerText=`and Height: ${h}`
})




