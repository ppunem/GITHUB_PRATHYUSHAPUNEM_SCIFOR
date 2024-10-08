//logo animation
let logoImg = document.getElementById('logo');

// Define paths for the static and animated images
const staticImage = 'images/logo.jpg';
const animatedImage = 'images/animated.jpg';

// Event listeners to change the logo image on hover
logoImg.addEventListener('mouseover', () => {
    logoImg.src = animatedImage;  // Change to animated image on hover
});

logoImg.addEventListener('mouseout', () => {
    logoImg.src = staticImage;  // Change back to static image when not hovering
});


//Contact Form Validation
let contactForm=document.getElementById("contact-form");

contactForm.addEventListener("submit",(event)=>{
    event.preventDefault();

    if (nameEl.value===""){
        nameErrEl.textContent="Required*";
    }else if(nameEl.value.length<6){
        nameErrEl.textContent="Give atleast 6 characters";
    }
    else if (emailEl.value===""){
        nameErrEl.textContent="Required*";
    }else if(emailEl.length<6){
        nameErrEl.textContent="Give atleast 6 characters";
    }else if(subjectEl.value===''){
        subjectErrEl.textContent="Required*"
    }
    
})

let nameEl=document.getElementById("name");
let nameErrEl=document.getElementById('nameErr');
nameEl.addEventListener("blur",(event)=>{
    if (event.target.value===""){
        nameErrEl.textContent="Required*";
    }else if(event.target.value.length<6){
        nameErrEl.textContent="Give atleast 6 characters";
    }else{
        nameErrEl.textContent='';
    }
})
let emailEl=document.getElementById("email");
let emailErrEl=document.getElementById('emailErr');
emailEl.addEventListener("blur",(event)=>{
    if (event.target.value===""){
        emailErrEl.textContent="Required*";
    }else if(event.target.value.includes("@" && ".com")===false){
        emailErrEl.textContent="Enter valid email";
    }else{
        emailErrEl.textContent='';
    }
})

let subjectEl=document.getElementById("subject");
let subjectErrEl=document.getElementById('subjectErr');
subjectEl.addEventListener("blur",(event)=>{
    if (event.target.value===""){
        subjectErrEl.textContent="Required*";
    }else{
        subjectErrEl.textContent='';
    }
})

let detailsEl=document.getElementById("projectdetails");
let detailsErrEl=document.getElementById('detailsErr');
detailsEl.addEventListener("blur",(event)=>{
    if (event.target.value===""){
        detailsErrEl.textContent="Required*";
    }else{
        detailsErrEl.textContent='';
    }
})

//propositions animation
let head=document.querySelectorAll('.l1');
head.forEach(each=>{
    each.innerHTML=each.textContent.split("").map((text,wave)=>`<span style="transition-delay:${wave * 25}ms">${text}</span>`).join(' ');
  });
  
let desc=document.querySelectorAll('.l2');
desc.forEach(each=>{
    each.innerHTML=each.textContent.split("").map((text,wave)=>`<span style="margin-top:15px;transition-delay:${wave * 25}ms">${text}</span>`).join(' ');
  });


//   about section animation
  let animations=document.querySelectorAll(".about-content");

  window.onscroll=()=>{
    animations.forEach(each=>{
        let top=window.scrollY;
        let offset=each.offsetTop - 150;
        let height=each.offsetHeight;

        if (top>=offset && top < offset + height){
            each.classList.add('showanimate');
        }else{
            each.classList.remove('showanimate');
        }
    })
    
  }
