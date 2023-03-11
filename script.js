let btn = document.getElementById("btn");
let joketexts = document.getElementById("joketexts")

let jokeapi = `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`;
 btn.addEventListener("click",function get(){
    

 fetch(jokeapi)
 .then(data => data.json())
 .then(item => joketexts.innerHTML = (item.joke+ "😂") )

 btn.innerHTML = "Get New Joke"
}
)


// function get(){
    

//  fetch(jokeapi)
//  .then(data => data.json())
//  .then(item => console.log(item.joke))
// }

// get()
 
