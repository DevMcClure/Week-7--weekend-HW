// // var sports = [];
// // var sports = ['football','tennis','rugby'];
// // console.log(sports);


// // var numberOfElements = sports.length;
// // console.log('number of elements:',numberOfElements);


// // var firstSport = sports[1];
// // console.log('first sport:', firstSport)
// // sports.push('curling');
// // sports.push('snooker');
// // sports.push('darts');
// // sports.push('sports:', sports);

// // var removedSports = sports.pop();
// // sports.push('sports:', sports);
// // console.log('removed sports', removedSports);



// // // sports.unshift('basketball');
// // // console.log('sports:', sports);

// // // var removedSports = sports.shift();
// // // sports.push('sports:', sports);
// // // console.log('removed sports', removedSports);


// // // var removedSports = sports.splice(2, 1);
// // // console.log('removed sports', removedSports);


// // var removedSports = sports.pop();
// // console.log('sports:', sports);
// // console.log('Removed sports: ', removedSports);
// // sports.unshift('basketball');
// // console.log('sports:', sports);
// // var removedSports = sports.shift();
// // console.log('sports:', sports);
// // console.log('Removed sports: ', removedSports);


// // // var upper = currentSport.toUpperCase();

// // for (var currentSport of sports) {
// //     var uppercasedSport = currentSport.toUpperCase();
// //     console.log(uppercasedSport);
// // }

// // for (var i=0; i <sports.length; i=i+2) {
// //     var currentSport = sports[i];
// //     var uppercasedSport = currentSport.toUpperCase();
// //     console.log(uppercasedSport);
// // }console.log('sports:', sports);

// var movies = [
// {
//     title: 'It\'s a wonderful life',
//     year: 2005,
//     language:'English'
// },
// {
//     title: 'Black Panther',
//     year: 2018,
//     langauge: 'German'
// }
// ];
// // console.log("title:", movie.title)

// // movie.cast = ['James Stewart', 'Donna Reed'];
// // movie.language = 'German';
// // movie.subtitle = 'Spanish';
// // console.log('movie', movie);


// // delete movie.year;
// // movie.ratings = {
// //     critic: 94,
// //     audience: 95
// // }
// // console.log('movie:', movie);
// // console.log('audience rating', movie.ratings.audience)

// // for (var key in movie) {
// //     var value = movie[key];
// //     console.log(`The ${key} is ${value}`);
// // }
// //  var keys = Object.keys(movie);
// //  console.log('keys:', keys);


//  for (var movie in movies) {
//      var title = movie.title;
//      var capsTitle = title.toUpperCase();
//      movie.title = capsTitle;

//  }

// console.log('movies:',movies);



var movies = [
    {
      title: 'It\'s a Wonderful Life',
      year: 1946,
      director: 'Frank Capra',
      cast: [
        'James Stewart',
        'Donna Reed'
      ],
      ratings: {
        critic: 94,
        audience: 95
      }
    },
    {
      title: 'Black Panther',
      year: 2018,
      director: 'Ryan Coogler',
      cast: [
        'Chadwick Boseman',
        'Michael B. Jordan'
      ],
      ratings: {
        critic: 97,
        audience: 77
      }
    },
    {
      title: 'Star Wars: The Last Jedi',
      year: 2017,
      director: 'Rian Johnson',
      cast: [
        'Mark Hamill',
        'Carrie Fisher'
      ],
      ratings: {
        critic: 91,
        audience: 48
      }
    },
    {
      title: 'Citizen Kane',
      year: 1941,
      director: 'Orson Welles',
      cast: [
        'Joseph Cotten',
        'Dorothy Comingore'
      ],
      ratings: {
        critic: 100,
        audience: 90
      }
    },
  ];

for (var movie in movies)
    var title = movie.title;
    var capsTitle = title.toUpperCase();
    movie.title = capsTitle;
    console.log('movies:',movie)


// for (var movie of movies){
//     if (movie.title === 'Citizen Kane'){
//         console.log('year of release:', movie.year);
//     }
// }


// for (var i=0; i < movies.length; i++) {
//     var movie = movies[i]
//     var audienceRating = movie.ratings.audience;
//     console.log(`${movie.title} has an audience rating of ${movie.ratings.audience}`);
// }



