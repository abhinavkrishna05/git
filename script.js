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
// const div=document.querySelector("container")
// const div2=document.querySelector("outer")
// const btn=document.querySelector("button")

// div.addEventListener("click",(event)=>{console.log("clicked the div")},false)
// div2.addEventListener("click",(event)=>{console.log("clicked the outer div")},false)
// btn.addEventListener("click",(event)=>{console.log("clicked the button")},true)

// console.log(a)
// // console.log(b)

// var a=678
// let b=567

// console.log(a)
// console.log(b)

// function print(){
//     let c=63
//     console.log(c)
//     console.log("inside function")
// }

// print()

// debugger
// function first(){
//     second()
// }
// function second(){
//     third()
// }
// function third(){
//     console.trace()
// }

// first()



// setTimeout(()=>{
//     alert("after 3 seconds");
// },3000)
 
// setInterval(() => {
//    console.log("hello")
// },3000 )
// console.log(timerId)
// setTimeout(() => {
//   clearInterval(timerId)
// },10*1000)

// for(let i=1;i<=10;i++) {
//     setTimeout(()=>{
//         console.log(i)
//     },i*1000)

// let count=1
// const timerID=setInterval(()=>{
//     if(count==10)clearInterval(timerID)
//     console.log(count)
//     count+=1
// },1000) 


const name=document.querySelector("#name")
const btn=document.querySelector(".btn")
const list=document.querySelector(".list")

btn.addEventListener("click",()=>{
    if(name.value==="")return
    const li=document.createElement("li")
    const dlt=document.createElement("button")
    dlt.innerText="Delete"
    li.innerText=name.value;
    dlt.addEventListener("click",()=>{
        list.removeChild(li)
    })
    list.appendChild(li)
    li.appendChild(dlt)
    name.value=""
})
