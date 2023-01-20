// solution 1
function currentDate() {
  var date = new Date();
  console.log(date);
}
currentDate();

// solution 2

function greet(firstName, lastName) {
  let fullName = firstName + " " + lastName;
  alert("hello " + fullName);
}
greet(prompt("enter the first name"), prompt("enter the last name"));

// solution 3

function add(x, y) {
  return x + y;
}
let sum = add(3, 4);
console.log(sum);

// solution 4

function calculator(num1, operator, num2) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "x") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  } else if (operator === "%") {
    return num1 % num2;
  } else {
    alert("enter the correct operator");
  }
}
let result = calculator(
  Number(prompt("enter first number")),
  prompt("enter a operator +-x/%"),
  Number(prompt("enter second number"))
);
alert(result);

// solution 5

function suqare(num) {
  console.log("The square of the your value is  " + num ** 2);
}
suqare(Number(prompt("enter a number")));

// solution 6

function fectorial(num) {
  let res = 1;
  for (let i = 1; i <= num; i++) {
    res *= i;
  }
  console.log(res);
}
fectorial(4);

// solution 7

function counting(a, b) {
  for (let i = a; i <= b; i++) {
    document.write(i + "<br>");
  }
}
counting(Number(prompt("enter a number")), Number(prompt("enter a number")));

// solution 8

function calculateHypotenuse(base, perpendicular) {
  function calculateSquare() {
    base **= 2;
    perpendicular **= 2;
  }
  calculateSquare();
  let squareHypotenuse = base + perpendicular;
  console.log(squareHypotenuse);
}
calculateHypotenuse(
  Number(prompt("enter a value of base")),
  Number(prompt("enter a value of perpendicular"))
);

// solution 9

function areaOfRactangle(width, height) {
  return width * height;
}
let res = areaOfRactangle(
  Number(prompt("enter a value of width")),
  Number(prompt("enter a value of height"))
);
console.log(res);

// solution 10

function palendrom(str) {
  let bool = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[str.length - 1 - i]) {
      bool = true;
    }
  }
  if (bool === false) {
    console.log("it is not a palendrom");
  }
  console.log("it is a palendrom");
}
palendrom(prompt("enter a sting"));

// solution 11

function toTittelCase(str) {
  let strInArr = str.split(" ");
  let nstr = "";
  let arrStr = [];
  let strNew = "";
  for (let i = 0; i < strInArr.length; i++) {
    nstr = strInArr[i].slice(0, 1).toUpperCase() + strInArr[i].slice(1);
    arrStr.push(nstr);
    strNew = arrStr.join(" ");
  }

  console.log(strNew);
}
toTittelCase(prompt("enter a string "));

// solution 12

function pail(str) {
  let arrStr = str.split("");
  console.log(arrStr);
  let arrreve = arrStr.reverse().join("");
  console.log(arrStr);
  if (str === arrreve) {
    console.log("it is a pailendrom");
  } else {
    console.log("it is not a pailendrom");
  }
}
pail(prompt("enter string"));

// solution 13

function longWord(str) {
  let longWordArr = str.split(" ");
  console.log(longWordArr);
  let maxlength = 0;
  let longestWord = "";
  for (let i = 0; i < longWordArr.length; i++) {
    if (longWordArr[i].length > maxlength) {
      maxlength = longWordArr[i].length;
      longestWord = longWordArr[i];
    }
    console.log(longestWord);
  }
}
longWord(prompt("enter a string "));

// solution 14

function occurance(str, word) {
  let repeatedLetter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === word) {
      repeatedLetter += 1;
    }
  }
  console.log(repeatedLetter);
}
occurance(
  prompt("write a string in which you find"),
  prompt("enter a letter you want to find the occurance")
);

// solution 15

function calcCircumference(radius) {
  return 2 * 3.14 * radius;
}
let res = calcCircumference(Number(prompt("enter the radius value")));
console.log("the Circumference of circle is " + res);

function calcArea(radius) {
  return 3.14 * radius ** 2;
}
let res2 = calcArea(Number(prompt("enter the radius value")));
console.log("the area is " + res2);

// solution 16

function power(a, b) {
  let res = a * b;
  return res;
}
let resPower = power(
  Number(prompt("enter a number")),
  Number(prompt("enter a the value of power "))
);
console.log(resPower);

// solution 17

function leapYear(year) {
  let startdate = new Date(year, 0, 0);
  let enddate = new Date(year, 11, 31);
  let days = (enddate.getTime() - startdate.getTime()) / (1000 * 60 * 60 * 24);
  if (days === 366) {
    alert(year + " it is a leap year");
  } else {
    alert(year + " it is not a leap year");
  }
  console.log(startdate);
  console.log(enddate);
  console.log(days);
}
leapYear(Number(prompt("enter the year ")));

// solution 18

function valueS(a, b, c) {
  let s = a + b + c / 2;
  console.log(s);
  function areatriangle() {
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log(area);
  }
  areatriangle();
}
valueS(2, 2, 2);

// solution 19

function mainFunction(sub1, sub2, sub3) {
  function avge() {
    let avarage = sub1 + sub2 + sub3 / 3;
    console.log("avarege is " + avarage);
    function prcentage() {
      let percent = ((sub1 + sub2 + sub3) / 300) * 100;
      console.log(percent);
    }
    prcentage();
  }
  avge();
}
mainFunction(
  Number(prompt("enter marks 1")),
  Number(prompt("enter marks 1")),
  Number(prompt("enter marks 1"))
);

// solution 20

function indexoff(str, indexChar) {
  let position = 0;
  for (let i = 0; i < str.length; i++) {
    if (indexChar === str[i]) {
      position = i;
    }
  }
  console.log(position);
}
indexoff(prompt("enter a str and Arry"), prompt("enter a charector"));

// solution 21

function delVowels(str) {
  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      str = str.slice(0, i) + str.slice(i, i + 1);
    }
  }
  console.log(str);
}
delVowels(prompt("enter a string "));

function withOutVowel(str) {
  let str1 = str.replace(/[aeiou]/gi, "");
  console.log(str1);
}
withOutVowel(prompt("enter a string "));

// solution 22

function occuranceOfVolwe(str) {
  str = str.toLowerCase();
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      num += 1;
    }
  }
  console.log(num);
}
occuranceOfVolwe(prompt("enter the string"));

// solution 23

function kmToMeter(km) {
  let meter = km * 1000;
  console.log("in meter =" + meter);
  function MetertoFeet(meter) {
    let feet = meter * 3.281;
    console.log("in feet = " + feet);
    function feetToInches(feet) {
      let inches = feet * 12;
      console.log("in inches = " + inches);
      function inchesToCentimeter() {
        let centimeter = inches * 2.54;
        console.log("in centemeter = " + centimeter);
      }
      inchesToCentimeter(inches);
    }
    feetToInches(feet);
  }
  MetertoFeet(meter);
}
kmToMeter(Number(prompt("enter the distance in km")));

// solution 24

function overTimePaid(hours) {
  let totalOverHours = hours - 40;
  let paid = totalOverHours * 12;
  console.log(paid + "Rs paid to the employee for over time");
}
overTimePaid(Number(prompt("enter the over time hours")));

// solution 25

function cashReturn(val) {
  let hundredNote = val[0] * 100;
  let tenNote = 0;
  let fiftyNote = val - hundredNote;
  let numberOfNotesfif = 1;
  if (fiftyNote >= 50) {
    tenNote = fiftyNote - 50;
    tenNote = tenNote / 10;
    console.log(tenNote);
  }
  if (fiftyNote < 50) {
    numberOfNotesfif = 0;
    tenNote = fiftyNote / 10;
    console.log(tenNote);
  }

  let numberOfNotesHun = hundredNote / 100;
  console.log(numberOfNotesHun);
  console.log(numberOfNotesfif);
  console.log(tenNote);
  console.log(
    "you will have " +
      numberOfNotesHun +
      " Hundred notes " +
      numberOfNotesfif +
      " Fifty notes " +
      tenNote +
      " Ten notes "
  );
}
cashReturn(prompt("enter the amount"));
