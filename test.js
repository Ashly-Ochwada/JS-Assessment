// 1)
// On the contact us page, ask the user for the following details(5 marks):
// Company Name
// Phone number
// Location
// Booking dates -- i should choose date from a calendar

//2)
// Display this information with the filled in details. I.e grab the user input then
// display is on the screen(5 marks)


//3)
// In your own words, explain how the script for moving the carousel works. (5
//     marks)


// 4)
// What will the code below output to the console and why?
var myObject = {
name: "Adalab",
func: function() {
var self = this;
console.log("outer func: this.name = " + this.name);
console.log("outer func: self.name = " + self.name);
(function() {
console.log("inner func: this.name = " + this.name);
console.log("inner func: self.name = " + self.name);
}());
}
};
myObject.func();


// var myIndex = 0;
// carousel();
// function carousel() {
//     var i;
//     var x = document.getElementsByClassName("mySlides");
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     myIndex++;
//     if (myIndex > x.length) {myIndex = 1}
//     x[myIndex-1].style.display = "block";}