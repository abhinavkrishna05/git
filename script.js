// const click=document.queryselector("#click")
// // const stop=document.queryselector("#stop")

// function message(event){
//     console.log(event.key)
//     console.log("button clicked!")
// }


// // click.addEventListener("mouseover",message)
// // click.addEventListener('keydown', 'message')  
// click.addEventListener('keyup',message)

// const form=document.querySelector("form")
// form.addEventListener("submit",(event)=>{
//     event.preventDefault()
//     console.log("form submitted")
// })
const div=document.querySelector("container")
const div2=document.querySelector("outer")
const btn=document.querySelector("button")

div.addEventListener("click",(event)=>{console.log("clicked the div")},false)
div2.addEventListener("click",(event)=>{console.log("clicked the outer div")},false)
btn.addEventListener("click",(event)=>{console.log("clicked the button")},true)