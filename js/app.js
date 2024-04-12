// var navbarContent = ["О НАС", "КАТАЛОГ", "НАШИ РАБОТЫ", "КОНТАКТЫ"]

var navbarContent = [
    {
        title: "О НАС",
        link: "about/"
    },
    {
        title: "КАТАЛОГ",
        link: "catalog/"
    },
    {
        title: "НАШИ РАБОТЫ",
        link: "works/"
    },
    {
        title: "КОНТАКТЫ",
        link: "contacts/"
    },
]


var navbar = document.querySelector(".navbar")

navbarContent.forEach(function(item) {
    var linkEl = document.createElement("a")
    linkEl.textContent = item.title
    linkEl.setAttribute("href", `/${item.link}`)
    navbar.append(linkEl)
})

//null number string bool(true/false) undef obj


// if([]){
//     console.log('true')
// }else{
//     console.log('false')
// }

// var myVar = 8

// myVar = 10 + myVar

// console.log(myVar)

// for(var i = 0; i <= 100; i++){
//     console.log(i)
// }

// if(){} switch(){case: break} ?:
// var myVar = 4

// if(myVar){ 
//     console.log('true')
// } else{
//     console.log('false')
// }

// switch(myVar){
//     case 4: 
//         console.log('its 4')
//         break;
//     case 5: 
//         console.log('5')
//         break;
//     default:
//         console.log('its not 4 or 5')
// }

// myVar === 4 ? console.log('true') : console.log('false')

// console.log(true && true) 
// // 1*1=1 1*0=0
// console.log(false || false) 
// // 1+0=1 0+0=0


// var myVar = 1
// var secondVar = 0

// // if(myVar === 0 && secondVar){
// //     console.log('true')
// // }else{
// //     console.log('false')
// // }

// if(myVar === 0 || secondVar){
//     console.log('true')
// }else{
//     console.log('false')
// }

// function myFunc(...param) {
//     console.log(param[3])
// }

// myFunc(40, 'hello', true, { a: '1'})

// var obj1 = { name: "Ilya", number: 1 }
// var obj2 = { ...obj1 }

// obj2.age = 22

// console.log(obj1)
// console.log(obj2)