// Age per days calculator


let userBirthday, userAgeInDays, thisYear;
// get data from user
userBirthday = parseInt(prompt("What is your year of birth?", "1374"));
userBirthday += 622;  // converting Persian date to Georgian Date (shamsi to miladi) 
thisYear = new Date();

userAgeInDays = (thisYear.getFullYear() - userBirthday) * 365;

// show results to user
alert("Your age in days is: " + userAgeInDays);
alert("Are you older than 25? : " + (userAgeInDays > 9125));
