//   var ans=confirm("are you an adult ??")
//   console.log(ans)

//   var detail=prompt("enter your name here ?")
//   console.log(detail)

// var a=1

// while(a <= 10){
//     console.log(a)
//     a++
// }


// var a =10
// var b ="10"

// if(a===b){
//     console.log("sahi hai")
// }
// else{
//     console.log("galat hai")
// }

// function hey(){
//     console.log("hey i am sagar")
// }
// hey()

// function hello(a){
//     console.log("hey i am sagar",a)
// }
// hello("i live in mumbai")

// function back(){
//     console.log("hello")
//     return 40
// }
//  var b=back()
//  console.log(b)

//  back()

// var abc = ()=>{
//     console.log('hello im back')
// }
// abc()

// array 

// let arr=[10,20,30,40,50]

// console.log(arr)


// let arr1=[10,'sagar',30,'maheshTechnicals',50]

// console.log(arr1.length)

// arr1.push(85)
// console.log(arr1)

// arr1.pop()
// console.log(arr1)

// for each array 

// let arr = [10,24,35,67,76]
// arr.forEach(function(r){
//   console.log(r)
// })

// objects 

// let user= {
//     username:"sagar",
//     age:30,
//     division:"B",
//     birth:"december"

// }
// console.log(user)

// let user2= {
//     username:"suraj",
//     age:50,
//     division:"a",
//     birth:"april",
//     wave:function(){
//         console.log("good morning")
//         return 10
//     }

// }
// console.log(user2.wave())

// array of objects 
//  let arr = [
//    {name:"sagar",age:20},
//    {name:"sarthak",age:23},
//    {name:"amit",age:41},
//    {name:"suraj",age:33}

//  ]
//  console.log(arr[2].age)

 // DOM {DOCUMENT OBJECT MOEL }........

 /*  
   4  pillars of DOM
   ---Selection of an Element.
   ---Changing HTML.
   ---Changing CSS.
   ---Handling Event Listener.
   
 */
// 1... selection of an element 

//   let a= document.querySelector("h1")    
//   console.log(a)
 
 // 2... changing HTML

//  let b =document.querySelector('h1')
//  b.innerHTML=('changed')

 // 3... changing CSS

//  let c = document.querySelector('h1')
//  c.style.color='red'

 // 4... Event Listener 

 let d = document.querySelector('h1')

  d.addEventListener('dblclick',function(){
   d.style.backgroundColor='white'
   d.style.Color='red'
    d.innerHTML=("changed")
  })