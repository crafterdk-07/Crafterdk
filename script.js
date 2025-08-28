// customise yahan
const CRUSH_NAME = "Ansuriya";
const TYPE_TEXT  = `hi ${CRUSH_NAME} — mujhe tumse ek baat kehni hai…`;

document.getElementById("crush-name").textContent = CRUSH_NAME;
document.getElementById("note-name").textContent = CRUSH_NAME;

const typeEl = document.getElementById("typewriter");
const openBtn = document.getElementById("open-note");
const noteCard = document.getElementById("note-card");
const flipBtn = document.getElementById("flip-note");
const flipBackBtn = document.getElementById("flip-back");
const noteFlip = document.getElementById("note-flip");
const yesBtn = document.getElementById("btn-yes");
const maybeBtn = document.getElementById("btn-maybe");
const noBtn = document.getElementById("btn-no");
const modal = document.getElementById("result-modal");
const modalTitle = document.getElementById("result-title");
const modalText = document.getElementById("result-text");
const closeModal = document.getElementById("close-modal");

// typewriter effect
async function typeWriter(node, text, speed = 60){
  node.textContent = "";
  for(let i=0;i<text.length;i++){
    node.textContent += text[i];
    await new Promise(r=>setTimeout(r, 50));
  }
}
typeWriter(typeEl, TYPE_TEXT);

// show note
openBtn.addEventListener("click", () => {
  noteCard.style.display = "block";
  openBtn.disabled = true;
  confettiBurst();
});

// flip
flipBtn.addEventListener("click", ()=> noteFlip.classList.add("flipped"));
flipBackBtn.addEventListener("click", ()=> noteFlip.classList.remove("flipped"));

// evasive No
noBtn.addEventListener("mouseenter", () => {
  const x = Math.random()*200-100;
  const y = Math.random()*100-50;
  noBtn.style.transform = `translate(${x}px,${y}px)`;
});

// modal result
function openResult(title, text){
  modalTitle.textContent = title;
  modalText.textContent = text;
  modal.showModal();
  confettiBurst(200);
}
yesBtn.addEventListener("click", ()=>openResult("Yay! 🎉","Coffee date fixed ☕✨"));
maybeBtn.addEventListener("click", ()=>openResult("No pressure 😊","Chalo pehle walk ya ice-cream? 🍦"));
closeModal.addEventListener("click", ()=>modal.close());

// confetti
const canvas=document.getElementById("confetti-canvas");
const ctx=canvas.getContext("2d");
function resize(){canvas.width=innerWidth;canvas.height=innerHeight}
resize();window.addEventListener("resize",resize);
let pieces=[];
function makePieces(n){let arr=[];for(let i=0;i<n;i++){arr.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:5+Math.random()*5,c:`hsl(${Math.random()*360},100%,60%)`,vx:-2+Math.random()*4,vy:-2+Math.random()*4});}return arr;}
function draw(){ctx.clearRect(0,0,canvas.width,canvas.height);pieces.forEach(p=>{ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=p.c;ctx.fill();p.x+=p.vx;p.y+=p.vy;p.vy+=0.05;if(p.y>canvas.height)p.y=0;});requestAnimationFrame(draw);}
function confettiBurst(n=150){pieces=makePieces(n);}
draw();