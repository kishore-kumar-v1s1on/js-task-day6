//1.Class Movie
/*a.Write a constructor for the class Movie, which takes a String representing 
the title of the movie, a String representing the studio, and a String representing 
the rating as its arguments, and sets the respective class properties to these values.*/

class movie { 
    constructor(title, studio, rating) { 
      this.title = title; 
      this.studio =  studio; 
      this.rating = rating; 
    } 
}

const movieDetails = new movie("Starwars","Lucas studios", "PG-18");
console.log(movieDetails);

//output
/*
rating: "PG-18" 
studio: "Lucas studios"
title: "Starwars"
*/


//------------------------------------------------------------------------------------------------

//b.The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

class movies { 

    constructor(title, studio, rating = "PG") { 
      this.title = title; 
      this.studio =  studio; 
      this.rating = rating; 
    } 
}

const movieDetails1 = new movies("Starwars","Lucas studios");
console.log(movieDetails1);

//output
/*
rating: "PG" 
studio: "Lucas studios"
title: "Starwars"
*/

const movieDetails2 = new movies("Starwars","Lucas studios", "PG-18");
console.log(movieDetails2);

//output
/*
rating: "PG-18" 
studio: "Lucas studios"
title: "Starwars"
*/

//----------------------------------------------------------------------------------------------------


/*c.Write a method getPG, which takes an array of base type Movie as its argument, and returns a 
new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances.
 The returned array need not be full.*/

 class Movieslist {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(input) {
        let out = input.filter(movie => movie.rating === "PG");
        return out;
    }
}

let Movieslist1 = new Movieslist("Starwars", "Lucas studios", "PG");
let Movieslist2 = new Movieslist("Iron Man", "Marvels studios", "PG");
let movie3 = new Movieslist("Death Race", "Universal Studios", "PG");
let movie4 = new Movieslist("True Lies", "New Line Cinema", "PG-13");
let movie5 = new Movieslist("Ghost Rider", "Columbia Pictures", "PG");

let movieArray = [Movieslist1, Movieslist2, movie3, movie4, movie5];
let pgMovies = Movieslist.getPG(movieArray);
console.log(pgMovies); 

// Output: 
/*
[ Movieslist { title: 'Starwars', studio: 'Lucas studios', rating: 'PG' },
[ Movieslist { title: 'Iron Man', studio: 'Marvels studios', rating: 'PG' },
  Movieslist { title: 'Death Race', studio: 'Universal Studios', rating: 'PG' },
  Movieslist { title: 'Ghost Rider', studio: 'Columbia Pictures', rating: 'PG' } ]
  */

//--------------------------------------------------------------------------------------------------



/*d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
the studio “Eon Productions”, and the rating “PG­13”*/

class Movie {
    constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
    }
    }
    
    let casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

    console.log(casinoRoyale);

    /*OUTPUT:
    rating: "PG-13"
    studio: "Eon Productions"
    title: "Casino Royale"*/


//---------------------------------------------------------------------------------------------

    //2.Circle Class

    class Circle {
        constructor(radius = 1.0, color = "white") {
          this._radius = radius;
          this._color = color;
        }
      
        get radius() {
          return this._radius;
        }
      
        set radius(radius) {
          this._radius = radius;
        }
      
        get color() {
          return this._color;
        }
      
        set color(color) {
          this._color = color;
        }
      
        toString() {
          return `Circle [radius = ${this._radius} , color = ${this._color}]`;
        }
      
        getArea() {
          return Math.PI * Math.pow(this._radius, 2);
        }
      
        getCircumference() {
          return 2 * Math.PI * this._radius;
        }
      }
      
      const circle1 = new Circle(2, "red");
      const circle2 = new Circle(5, "green");
      const circle3 = new Circle(7, "blue");
      
      console.log(circle1.toString());
      console.log("Area:", circle1.getArea());
      console.log("Circumference:", circle1.getCircumference());
      
      console.log(circle2.toString());
      console.log("Area:", circle2.getArea());
      console.log("Circumference:", circle2.getCircumference());
	  
	  console.log(circle3.toString());
      console.log("Area:", circle3.getArea());
      console.log("Circumference:", circle3.getCircumference());
      
      //circle 1
      /*
      Circle [radius = 2 , color = green]
      Area: 12.566370614359172
      Circumference: 12.566370614359172
      */
      
      //circle 1
      /*
      Circle [radius = 5 , color = Yellow]
      Area: 78.53981633974483
      Circumference: 31.41592653589793
      */
	  
		//circle 1
		/*
		Circle [radius = 2 , color = red]
		Area: 12.566370614359172
		Circumference: 12.566370614359172
		*/

		//circle 2
		/*
		Circle [radius = 5 , color = green]
		Area: 78.53981633974483
		Circumference: 31.41592653589793
		*/

		//circle 3
		/*
		Circle [radius = 7 , color = blue]
		Area: 153.93804002589985
		Circumference: 43.982297150257104
		*/

      
    //----------------------------------------------------------------------------------------

      //3.Write a “person” class to hold all the details.

      class Person {
        constructor(firstName, lastName, age, department, email, mobile, city,bg){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.department=department;
            this.email=email;
            this.mobile=mobile;
            this.city = city;
            this.bg =bg;
        }
        getPersonDetails(){
            return `Name: ${this.firstName} ${this.lastName}
            age: ${this.age}
            department: ${this.department}
            email: ${this.email}
            mobile: ${this.mobile}
            city: ${this.city}
            bg: ${this.bg}`;
        }
    }
    let person1 = new Person("priya", "mohan",23, "media", "priyamohan@gmail.com", 9894567861, "vellore","pve");
    let person2 = new Person("kousalya","rajesh", 27, "HR", "kousalyarajesh@gmail.com", 8784905632, "bangalore","nve");
    
    console.log(person1.getPersonDetails());
    console.log(person2.getPersonDetails());
  
	 //output
    /*
	person1		
		
		Name: priya mohan
		age: 23
		department: media
		email: priyamohan@gmail.com
		mobile: 9894567861
		city: vellore
		bg: pve"
	*/

	/*
	person2	
		Name: kousalya rajesh
		age: 27
		department: HR
		email: kousalyarajesh@gmail.com
		mobile: 8784905632
		city: bangalore
		bg: nve"
	*/
 //--------------------------------------------------------------------------------------------

 //4.write a class to calculate the uber price

 class UberPrice {
    constructor(distance, duration, baseFare, costPerMile, costPerMinute) {
      this.distance = distance;
      this.duration = duration;
      this.baseFare = baseFare;
      this.costPerMile = costPerMile;
      this.costPerMinute = costPerMinute;
    }
  
    totalPrice() {
      return this.baseFare + (this.distance * this.costPerMile) + (this.duration * this.costPerMinute);
    }
  }
  
  const myUber = new UberPrice(7, 18, 90, 19, 5);
  console.log(myUber.totalPrice());
  
  //output
  //313
//----------------------------------------------------------------------------------------------------------