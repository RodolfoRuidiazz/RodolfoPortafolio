/* ===== EMAILJS ===== */
(function(){
emailjs.init("TU_PUBLIC_KEY"); // 👈 pega aquí tu PUBLIC KEY
})();

document.getElementById("contactForm").addEventListener("submit",function(e){
e.preventDefault();
emailjs.sendForm(
"TU_SERVICE_ID",    // 👈 SERVICE ID
"TU_TEMPLATE_ID",   // 👈 TEMPLATE ID
this
).then(()=>{
alert("Mensaje enviado correctamente 🚀");
this.reset();
},()=>{
alert("Error al enviar 😢");
});
});

/* ===== GALAXIA ===== */
const canvas=document.getElementById("galaxy");
const ctx=canvas.getContext("2d");
let w,h,stars=[];

function resize(){
w=canvas.width=innerWidth;
h=canvas.height=innerHeight;
}
window.addEventListener("resize",resize);
resize();

for(let i=0;i<160;i++){
stars.push({x:Math.random()*w,y:Math.random()*h,s:Math.random()*2+0.5});
}

function animate(){
ctx.clearRect(0,0,w,h);
ctx.fillStyle="white";
stars.forEach(s=>{
s.y+=s.s;
if(s.y>h) s.y=0;
ctx.globalAlpha=s.s/2;
ctx.fillRect(s.x,s.y,2,2);
});
requestAnimationFrame(animate);
}
animate();

/* ===== GSAP ===== */
gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-card",{opacity:0,scale:.8,duration:1});

gsap.utils.toArray(".section").forEach(sec=>{
gsap.from(sec,{
scrollTrigger:{trigger:sec,start:"top 80%"},
opacity:0,
y:100,
rotateX:15,
duration:1.2
});
});

/* ===== HOVER 3D AVANZADO ===== */
document.querySelectorAll(".deep-3d").forEach(card=>{
card.addEventListener("mousemove",e=>{
const r=card.getBoundingClientRect();
const x=(e.clientX-r.left)/r.width-0.5;
const y=(e.clientY-r.top)/r.height-0.5;
card.style.transform=
`rotateY(${x*30}deg) rotateX(${-y*30}deg) translateZ(20px)`;
});
card.addEventListener("mouseleave",()=>{
card.style.transform="rotateY(0) rotateX(0) translateZ(0)";
});
});


