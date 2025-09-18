const question = document.querySelector(".question")
const gif = document.querySelector(".gif")
const audio = document.querySelector(".audio")
const flower = document.querySelector(".flower")
const yesBtn = document.querySelector(".yes-Btn")
const noBtn = document.querySelector(".no-Btn")

yesBtn.addEventListener("click", ()=>{
    question.innerHTML = "Yesiiiii😍";
    gif.src="https://www.bing.com/th/id/OGC.d3c8e9843169bea0c33f2a04b3d9bdb1?r=0&o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fi.pinimg.com%2foriginals%2f15%2f1d%2fa9%2f151da98ceef9a9a54a7eac4af04be712.gif&ehk=srVY6cCrvNfJMo8o9wvFZU6wW%2bvmzzSEHxDYipSTBng%3d"
    audio.src="AudioCutter_Vini-x-Papaoutai.mp3 alt" 
    flower.src="https://th.bing.com/th/id/OIP.-otkz9JQMfQiBnyBwkX75QHaHa?w=192&h=192&c=7&r=0&o=7&pid=1.7&rm=3"
})

noBtn.addEventListener("click", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    ower.style.backgroundImage = url('${randomImage}');

  
 
})
 