

const workExperienceDiv = document.querySelector(".work-experience")
workExperienceDiv.addEventListener("click", function(e){
const expanderButton = e.target.closest('button')
if(expanderButton){      
expanderButton.nextElementSibling.classList.toggle("expander")
} 
})
