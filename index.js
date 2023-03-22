let p = document.querySelector(".numrate");

let rates = document.querySelectorAll(".rates .rate");

let submit = document.querySelector(".submit");

let head = document.querySelector(".head")


let finish = document.querySelector(".finish .container")

rates.forEach(rate =>{
    rate.addEventListener("click",(e)=>{
    
        e.target.parentElement.querySelectorAll(".active").forEach(ele=>{
            ele.classList.remove("active")
        })
        e.target.classList.add("active")
        let newrate =e.target.parentElement.querySelector(".active")
        p.innerHTML = `You selected ${newrate.dataset.rate} out of 5`
        submit.onclick = function(){
            
            if(newrate=== null){
                console.log("fal")
            }else{
    
            head.classList.add("disactive")
            finish.classList.add("active")
        }
        }
    })
   
})



