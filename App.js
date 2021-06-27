const parallex = (ele, distance, speed) => {
  const item = document.querySelector(ele);
  item.style.transform = `translateY(${distance * speed}px)`;
};

const reverseparallex = (ele, distance, speed) => {
    const item = document.querySelector(ele);
    item.style.transform = `translateY(-${distance * speed}px)`;
  };

window.addEventListener("scroll", () => {
  parallex("header", window.scrollY, .8);
  // if(scrollY > 700)
  // {
  //   cursor('#ff8303');
  // }else{
  //   cursor('#81b214');
  // }
  reverseparallex('.section',window.screenY,.5);
});

// parallex('header')
    
const shoes = document.getElementById('shoes');
const shoes__text = document.getElementById('shoes__text');

const bgchange = (id)=>{
  shoes.style.background = document.getElementById(id).innerHTML;
  // if(id==='e'){
  // alert(shoes__text.style.color);
  // shoes__text.style.color = white;
  // }
}

/**** CURSOR */

// const cursor = (ink)=>{
//   new kursor({
//   type: 2,
//   removeDefaultCursor: true,
//   color:ink
// })
// }

new kursor({
  type: 2,
  removeDefaultCursor: true,
  color:'#81b214'
})



