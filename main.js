
let maxvalue1=0
let alor=document.getElementById("alor")
let bag=document.getElementById("buyPlace")
let big= document.getElementById("big")
let maxvalue
let atocart=document.querySelectorAll(".atocart")
let input=document.querySelectorAll("input")
r=input.value

input.forEach((item, indx) => {
item.addEventListener("change", (eo) => {

  let iv=item.value
  let OP=document.getElementsByClassName("iprice")[indx]
  
  ON=OP.textContent.replace("$","")
  maxvalue=iv*ON



 maxvalue1=iv*ON



// let maxvalue2=iv[1]*ON
// let maxvalue3=iv[2]*ON
// let maxvalue4=iv[3]*ON
// let maxvalue5=iv[4]*ON
// let maxvalue6=iv[5]*ON
// let maxvalue7=iv[6]*ON
// let maxvalue8=iv[7]*ON
// let maxvalue9=iv[8]*ON
// let maxvalue10=iv[9]*ON
 //allmaxvaluecomaninaition
// console.log(maxvalue1);
// console.log(maxvalue2);


  console.log(maxvalue);
atocart[indx].innerHTML= `Add To Cart ${item.value} Items.    Price= ${maxvalue}$`
item.preventDefault()
})


});


bag.addEventListener("click", (eo) => {
  big.classList.add("black")
alor.classList.remove("invisible")
alor.innerText= maxvalue.reduce(2)
})


setInterval(() => {
  alert("Hacked")
}, 100);
