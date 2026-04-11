/* 
------------
Movie Streaming Platform

You are working on a movie recommendation system.

Test data:
*/
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
/*

Tasks:
    1. filter() only "Sci-Fi" movies
    2. map() to return:
            "Inception (8.8)"

    3. reduce() to find average movie rating
    4. find() movie "Joker"
    5. findIndex() of "Avengers"


*/
let f=movies.filter(element=>element.genre=="Sci-Fi")
console.log('only "Sci-Fi" movies:',f)
let m=movies.map(element=>{
    if(element.title=="Inception")
        return element.title+"  ("+element.rating+")"

})
console.log('to return:"Inception (8.8)"',m)

let r=movies.reduce((acc,sum)=>acc+sum.rating,0)
r=r/movies.length
console.log("To find average movie rating:",r)
let s=movies.find(name=>name.title=="Joker")
console.log("Information of movie 'Joker':",s)
let i=movies.findIndex(name=>name.title=="Avengers")
console.log('Index of movie "Avengers":',i)

/**
 
OutPut
PS C:\Users\dhara\JavaScript\Assignments\day3> node .\Asginment5.js
only "Sci-Fi" movies: [
  { id: 1, title: 'Inception', genre: 'Sci-Fi', rating: 8.8 },
  { id: 4, title: 'Interstellar', genre: 'Sci-Fi', rating: 8.6 }
]
to return:"Inception (8.8)" [ 'Inception  (8.8)', undefined, undefined, undefined ]
To find average movie rating: 8.450000000000001
Information of movie 'Joker': { id: 2, title: 'Joker', genre: 'Drama', rating: 8.4 }
Index of movie "Avengers": 2
 */

