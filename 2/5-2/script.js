// Age per days calculator

var userBirthday, userAgeInDays, thisYear;
// get data from user
userBirthday = prompt("What is your year of birth?", "1374");
thisYear = prompt("What year is it now?", "1401");

userAgeInDays = (thisYear - userBirthday) * 365;

// show results to user
alert("Your age in days is: " + userAgeInDays);
alert("Are you older than 25? : " + (userAgeInDays > 9125));
