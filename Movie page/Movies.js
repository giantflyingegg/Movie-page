let movieData = {
    "The Darjeeling Limited": {
      plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
      cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
      runtime: 151,
      rating: 7.2,
      year: 2007,
    },
    "The Royal Tenenbaums": {
      plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
      rating: 7.6,
      year: 2001,
      cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
      runtime: 170,
    },
    "Fantastic Mr. Fox": {
      year: 2009,
      plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
      cast: [
        "George Clooney",
        "Meryl Streep",
        "Bill Murray",
        "Jason Schwartzman",
      ],
      runtime: 147,
      rating: 7.9,
    },
    "The Grand Budapest Hotel": {
      rating: 8.1,
      runtime: 159,
      year: 2014,
      plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
      cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
    },
  };


//didnt work  document.getElementById("movietxt").innerHTML = movieData  
//does work ?? console.log(movieData)

//doesnt work, console shows empty arrays
// for (const movNam in movieData) {
//   const movArray = Object.values(movieData[movNam].year);
//   console.log(movArray);
//   document.getElementById("movietxt").innerHTML = movArray
// }

//doesnt work, displays object object but console.log works
// for (const movNam in movieData) {
//   console.log(movieData[movNam]);
//   document.getElementById("movietxt").innerHTML = movieData[movNam];
// }

//doesnt work, shows just one plot
// for (const movNam in movieData) {
//   console.log(movieData[movNam].plot);
//   document.getElementById("movietxt").innerHTML = movieData[movNam].plot;
// };

// let txt = "";

//Works, displays all data no formatting
// for (const movNam in movieData) {
//   for (const x in movieData[movNam]){
//     txt += movieData[movNam][x] + " ";
//   }
// };

//doesnt work shows object object
// document.getElementById("movietxt").innerHTML = movieData["The Darjeeling Limited"];

//works
// document.getElementById("movietxt").innerHTML = movieData["The Darjeeling Limited"].plot;

const tdl = document.getElementById("tdl")
const trt = document.getElementById("trt")
const fmf = document.getElementById("fmf")
const tgbh = document.getElementById("tgbh")

const plot = document.getElementById("Plot");
const cast = document.getElementById("Cast");
const rating = document.getElementById("Rating");
const year = document.getElementById("Year");
const runtime = document.getElementById("Runtime");

console.log(trt);


trt.addEventListener("click", function(){
  console.log("hello");
  plot.innerHTML = movieData["The Royal Tenenbaums"].plot;
  cast.innerHTML = movieData["The Royal Tenenbaums"].cast[0] + ", " + movieData["The Royal Tenenbaums"].cast[1] + ", " + movieData["The Royal Tenenbaums"].cast[2];
  rating.innerHTML = movieData["The Royal Tenenbaums"].rating + "/10";
  year.innerHTML = movieData["The Royal Tenenbaums"].year;
  runtime.innerHTML = movieData["The Royal Tenenbaums"].runtime + " mins";
  });

tdl.addEventListener("click", function(){
  console.log("hello");
  plot.innerHTML = movieData["The Darjeeling Limited"].plot;
  cast.innerHTML = movieData["The Darjeeling Limited"].cast[0] + ", " + movieData["The Darjeeling Limited"].cast[1] + ", " + movieData["The Darjeeling Limited"].cast[2];
  rating.innerHTML = movieData["The Darjeeling Limited"].rating + "/10";
  year.innerHTML = movieData["The Darjeeling Limited"].year;
  runtime.innerHTML = movieData["The Darjeeling Limited"].runtime + " mins";
  });
   
fmf.addEventListener("click", function(){
  console.log("hello");
  plot.innerHTML = movieData["Fantastic Mr. Fox"].plot;
  cast.innerHTML = movieData["Fantastic Mr. Fox"].cast[0] + ", " + movieData["Fantastic Mr. Fox"].cast[1] + ", " + movieData["Fantastic Mr. Fox"].cast[2] + ", " + movieData["Fantastic Mr. Fox"].cast[3];
  rating.innerHTML = movieData["Fantastic Mr. Fox"].rating + "/10";
  year.innerHTML = movieData["Fantastic Mr. Fox"].year;
  runtime.innerHTML = movieData["Fantastic Mr. Fox"].runtime + " mins";
  });    

tgbh.addEventListener("click", function(){
  plot.innerHTML = movieData["The Grand Budapest Hotel"].plot;
  cast.innerHTML = movieData["The Grand Budapest Hotel"].cast[0] + ", " + movieData["The Grand Budapest Hotel"].cast[1] + ", " + movieData["The Grand Budapest Hotel"].cast[2];
  rating.innerHTML = movieData["The Grand Budapest Hotel"].rating + "/10";
  year.innerHTML = movieData["The Grand Budapest Hotel"].year;
  runtime.innerHTML = movieData["The Grand Budapest Hotel"].runtime + " mins";
  });

// search for movie
const search = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function(){
  console.log("hello");
  plot.innerHTML = movieData[search.value].plot;
  cast.innerHTML = movieData[search.value].cast[0] + ", " + movieData[search.value].cast[1] + ", " + movieData[search.value].cast[2];
  rating.innerHTML = movieData[search.value].rating + "/10";
  year.innerHTML = movieData[search.value].year;
  runtime.innerHTML = movieData[search.value].runtime + " mins";
  });
  





const subPrac = document.getElementById("practiceSubmit");

subPrac.addEventListener("click", pracFunc) 

function pracFunc(e) {
  
  e.preventDefault;
  let namPrac = document.getElementById("practiceName").value;
  // let keyVal = document.getElementById("keyVal").value;
  
  document.getElementById('output').innerHTML = namPrac + keyVal;
  
  movieData.keyVal;
  console.log(movieData);
 
   let udMov = movieData["namPrac"];
   console.log(udMov);

  // creates prototype object
  Object.assign({}, movieData,{namPrac});
  console.log(movieData);

};





document.getElementById("subImp").addEventListener("click", appendObj())

//function to append new object to movieData
function appendObj() {
  let keyVal = document.getElementById("keyVal").value;
  let titInp = document.getElementById("titInp").value;
  let pltInp = document.getElementById("pltInp").value;
  let cstInp = document.getElementById("cstInp").value;
  let runInp = document.getElementById("runInp").value;
  let ratInp = document.getElementById("ratInp").value;
  let newMovDat = {plot: pltInp, cast: cstInp, runtime: runInp, rating: ratInp};
  Object.assign({}, movieData, {[keyVal]: newMovDat});
  console.log(movieData);
}

//function to append new object to movieData
function appendObj() {
  let keyVal = document.getElementById("keyVal").value;
  let titInp = document.getElementById("titInp").value;
  let pltInp = document.getElementById("pltInp").value;
  let cstInp = document.getElementById("cstInp").value;
  let runInp = document.getElementById("runInp").value;
  let ratInp = document.getElementById("ratInp").value;
  let newMovDat = {plot: pltInp, cast: cstInp, runtime: runInp, rating: ratInp};
  Object.assign({}, movieData, {[keyVal]: newMovDat});
  console.log(movieData);
}

//order movies by rating
function orderMoviesRat() {
  let movArr = Object.entries(movieData);
  movArr.sort(function(a, b) {
    return b[1].rating - a[1].rating;
  });
  console.log(movArr);
}

//order movies by runtime
function orderMoviesRun() {
  let movArr = Object.entries(movieData);
  movArr.sort(function(a, b) {
    return b[1].runtime - a[1].runtime;
    });
    console.log(movArr);
    }

//order movies by year
function orderMoviesYr() {
  let movArr = Object.entries(movieData);
  movArr.sort(function(a, b) {
    return b[1].year - a[1].year;
  });
  console.log(movArr);
};

