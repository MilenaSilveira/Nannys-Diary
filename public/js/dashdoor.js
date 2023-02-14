var submit = document.querySelector(".submitChild") 
submit.addEventListener("click", function(event){event.preventDefault()
    var childName = document.querySelector("#child-name").value
    console.log(childName);
})