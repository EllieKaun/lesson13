// var navbarContent = ["О НАС", "КАТАЛОГ", "НАШИ РАБОТЫ", "КОНТАКТЫ"]

var navbarContent = [
  {
    title: "О НАС",
    link: "about/",
  },
  {
    title: "КАТАЛОГ",
    link: "catalog/",
  },
  {
    title: "НАШИ РАБОТЫ",
    link: "works/",
  },
  {
    title: "КОНТАКТЫ",
    link: "contacts/",
  },
];

var navbar = document.querySelector(".navbar");

navbarContent.forEach(function (item) {
  var linkEl = document.createElement("a");
  linkEl.textContent = item.title;
  linkEl.setAttribute("href", `/${item.link}`);
  navbar.append(linkEl);
});

// //null number string bool(true/false) undef obj

// // if([]){
// //     console.log('true')
// // }else{
// //     console.log('false')
// // }

// // var myVar = 8

// // myVar = 10 + myVar

// // console.log(myVar)

// // for(var i = 0; i <= 100; i++){
// //     console.log(i)
// // }

// // if(){} switch(){case: break} ?:
// // var myVar = 4

// // if(myVar){
// //     console.log('true')
// // } else{
// //     console.log('false')
// // }

// // switch(myVar){
// //     case 4:
// //         console.log('its 4')
// //         break;
// //     case 5:
// //         console.log('5')
// //         break;
// //     default:
// //         console.log('its not 4 or 5')
// // }

// // myVar === 4 ? console.log('true') : console.log('false')

// // console.log(true && true)
// // // 1*1=1 1*0=0
// // console.log(false || false)
// // // 1+0=1 0+0=0

// // var myVar = 1
// // var secondVar = 0

// // // if(myVar === 0 && secondVar){
// // //     console.log('true')
// // // }else{
// // //     console.log('false')
// // // }

// // if(myVar === 0 || secondVar){
// //     console.log('true')
// // }else{
// //     console.log('false')
// // }

// // function myFunc(...param) {
// //     console.log(param[3])
// // }

// // myFunc(40, 'hello', true, { a: '1'})

// // var obj1 = { name: "Ilya", number: 1 }
// // var obj2 = { ...obj1 }

// // obj2.age = 22

// // console.log(obj1)
// // console.log(obj2)

// var blockWrapper = document.querySelector(".blockWrapper");

// var blockArr = [
//   {
//     img: "assets/call.svg",
//     text: "first block",
//   },
//   {
//     img: "assets/call.svg",
//     text: "second block",
//   },
// ];


// var tableObj = {
//   quantity: ['5-10', '11-20', '5-10', '5-10', '5-10', '5-10', '5-10', '5-10', '5-10'],
//   price: ['2000 сом', '2000 сом', '2000 сом', '2000 сом', '2000 сом', '2000 сом', '2000 сом', '2000 сом', '2000 сом']
// }

// var tableQuantity = document.querySelector(".tableQuantity")
// var tablePrice = document.querySelector(".tablePrice")

// function tableMaker(arr, tableRow){
//   arr.forEach(function(item){
//     var tCell = document.createElement("td")
//     tCell.textContent = item
//     tableRow.append(tCell)
//   })
// }
// for(var key in tableObj){
//   tableMaker(tableObj[key], key === 'quantity' ? tableQuantity : tablePrice)
// }

var tableObj = {
  table1: {
      quantity: ['5-10', '11-20', '5-10', '5-10', '5-10', '5-10', '5-10', '5-10', '5-10'],
      price: ['2000 сом', '2000 сом', '2000 сом', '2000 сом', '2000 сом', '2000 сом', '2000 сом', '2000 сом', '2000 сом']
  },
  table2: {
      quantity: ['5-10', '11-20', '5-10', '5-10', '5-10', '5-10', '5-10', '5-10', '5-10'],
      price: ['2000 сом', '2000 сом', '2000 сом', '2000 сом', '2000 сом', '2000 сом', '2000 сом', '2000 сом', '2000 сом']
  },
  table3: {
      quantity: ['5-10', '11-20', '5-10', '5-10', '5-10', '5-10', '5-10', '5-10', '5-10'],
      price: ['2000 сом', '2000 сом', '2000 сом', '2000 сом', '2000 сом', '2000 сом', '2000 сом', '2000 сом', '2000 сом']
  }
}

var tableWrapper = document.querySelector('.tableWrapper')

function tableMaker(){
  var table = document.createElement('table')

  var tableHead = document.createElement('thead')
  var tableHeadTitle = document.createElement('th')
  tableHeadTitle.textContent = 'Худи стандарт'
  tableHead.append(tableHeadTitle)

  var tableBody = document.createElement('tbody')

  table.append(tableHead)
  table.append(tableBody)

  tableWrapper.append(table)
}
tableMaker()









// //obj null str num bool undef

// //truly falsy
// // 0 "" null undef false NaN
// // 1 "hello" {} [] true

// // var myVal = 5
// // var myVal2 = myVal * 10

// // console.log(myVal)
// // console.log(myVal2)

// // var myObj = {
// //   name: "Ilya",
// //   age: 23
// // }

// // console.log(Object.entries(myObj))

// // var myObj2 = {...myObj}
// // myObj2.age = 23

// // console.log(myObj)
// // console.log(myObj2)




// // var arr = ['1','2','3', '4']

// // var arr2 = arr.map(function(item, index){
// //   return item + index
// // })
// // console.log(arr)
// // console.log(arr2)

// // var arr3 = arr.filter(function(item, index){
// //   return item > 3
// // })

// // console.log(arr3)

// // var myArr = [1, 2, 3, 4, 5, 6, 7]

// // reduce(function(acc, curr){}, 0)

// // console.log(arr.slice(2, 4))

// // console.log(arr)

// // arr.unshift(0)

// // console.log(arr)

// // console.log('12345'.split("3").join("3"))

// // var arr = [
// //   [1, 4, 8],
// //   [5, 19, 0],
// //   [6, 3, 1]
// // ]

// // //1 создаем новый массив 
// // //2 посчитать результат

// // function myFunc(oldArr){
// //   var newArr = []
// //   oldArr.forEach(function(item){
// //     item.forEach(function(item){
// //       newArr.push(item)
// //     })
// //   })

// //   return newArr.reduce(function(acc, curr){
// //     return acc + curr
// //   }, 0)
// // }

// // console.log(myFunc(arr))

// // var myObj = {
// //   name: "Ilya",
// //   number: 1
// // }

// // for(var key in myObj){
// //   console.log(key)
// // }

// var people = {
//   john: {
//     age: 14,
//     parents: {
//       scott: {
//         age: 40,
//         parents: {
//           logan: {
//             age: 70,
//              parents: {
//               logan: {
//                 age: 70,
//                     parents: {
//                       logan: {
//                         age: 70,
//                         parents: {
//                       logan: {
//                         age: 70,
//                         parents: {
//                       logan: {
//                         age: 70
//                       }
//                     }
//           }
//         }
//           }
//         }
//           }
//         }
//           }
//         }
//       },
//       mary: {
//         age: 37
//       }
//     }
//   },
//   sam: {
//     age: 17,
//     parents: {
//       stive: {
//         age: 45
//       },
//       amy: {
//         age: 42
//       }
//     }
//   },
// }

// function parentList (obj) {
//   console.log(obj)
//   if(obj.parents){
//     for(var parent in obj.parents){
//       console.log(parent, obj.parents[parent].age)
//       if(obj.parents[parent].parents){
//         parentList(obj.parents[parent])
//       }
//     }
//   }else{
//     console.log('not found!')
//   }
// }

// for(var key in people){
//   parentList(people[key])
// }


// var i = 0

// function plusOne (){
//   i++
//   console.log(i)
//   plusOne()
// }

// plusOne()
// console.log("hello")