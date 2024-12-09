console.log('Train.js is running...');

//TASK SRC PAPKASINI ICHIDAGI train.ts da Bekzod aka  shu yerga yozishimiz kerak ekanligini videoda aytdilar








/*
TASK G:

Yagona parametrga ega function tuzing.
Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.
Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.

MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 sonini
Yuqoridagi misolda, birinchi indeksda 21 joylashgan.
Va bu 21 soni arrayning tarkibidagi birinchi eng katta son hisobladi va bizga uning indeksi 1 qaytadi.


function getHighestIndex(arr) { 
    const largest = Math.max(...arr);
    return arr.indexOf(largest); 
}  

function getHighestIndex(arr) { 
    let a = arr[0];
    for(let i = 0; i < arr.length; i++) {
       if (arr[i] > a){
      a= arr[i];
      index = i;
    }
}
 return index;
}  

  

const result = getHighestIndex([5, 21, 12, 21 ,8,]);

console.log(result);





function highAndLow(numbers){
  const numbers_array = numbers.split(" ").map(Number);
  const hihestNum = Math.max(...numbers_array)
  const lowestNum = Math.min(...numbers_array)
  
  return `${hihestNum} ${lowestNum}`

}

console.log(highAndLow("1 2 3 4 5")); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"




function paperwork(n, m) {
  if(m < 0) {
    return 0
  } else {
    return m*n
  }
}

console.log(paperwork(5,5))
console.log(paperwork(-5,-5))



function filter_list(l) {
  for (i=0; i < l.length; i++) {
    if (typeof l[i] === number) {
      console.log("fuck u ");
    }      
  }    
}

filter_list([1,2,'a','b'])



for(i=0 //global variable, forni nechi marta ishlashi, har iterate boganda bitta qoshsin)





function getHighestIndex(arr) { 
  let max = 0;

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max= arr[i];
    }
    // console.log(`${i} chi index da max:`,max);  
    // console.log(`arrayning i chi elemti ${arr[i]}`)
  }
  return arr.indexOf(max);

}  

const result = getHighestIndex([5, 21, 12, 21 ,8, 88]);
console.log(result);


function binary(madi) {
   for(let n = madi; n > 0; n--) {
    //  const madiya_bolak = n/2;
    //  console.log(madiya_bolak)
      //  console.log(n = n /2)
     console.log((Math.floor(n = n/2)))
    
   }
}

// console.log(binary(25))


// "I\n I\n  I"
function drawStairs(n) {
  let result = "";
  let space = "";
 for(let i=1; i <= n-1;i++ ) {
    result = result + "I\n";
    space = space + ' ';
    result = result+space;
    
 }
  return result+'I'

}

drawStairs(3)

function createPhoneNumber(numbers){
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
  
}


console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) )



function booleanToString(b){
  return (String(b))
}
 booleanToString(false) 


 You were camping with your friends far away from home, but when it's time to go back, 
 you realize that your fuel is running out and the nearest pump is 50 miles away!
 You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
 Considering these factors, write a function that tells you if it is possible to get to the pump or not.

 Function should return true if it is possible and false if not.



const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
      const nechi_mile = mpg *fuelLeft
      if(nechi_mile >= distanceToPump) {

        return true
      }else {
        return false
      }
  
};

zeroFuel(50,25,1)

function areYouPlayingBanjo(name) {
  if(name[0] !== "R" && name[0] !== "r") {
    return name+ " does not play banjo"
   

  } else {
     return name+ " plays banjo"
  }
  
}

console.log(areYouPlayingBanjo("rAdam"))





function getGrade(s1, s2, s3) {
  // Validate that scores are between 0 and 100
  if (s1 >= 0 && s2 >= 0 && s3 >= 0 && s1 <= 100 && s2 <= 100 && s3 <= 100) {
    // Calculate the average score
    const score = (s1 + s2 + s3) / 3;

    // Determine grade based on the average score
    if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
  } else {
    // Handle invalid scores
    return "Invalid scores. Each score must be between 0 and 100.";
  }
}

console.log(getGrade (67,29,90))



//qoldiqni yig'ish kerak

function binary(number) {
  let qoldiq = [];
  for(let n = number; n > 1; n= n/2) {
    qoldiq.unshift(number%2);
    console.log(qoldiq)
    number = Math.floor(number/2)
    console.log("number:", number);

    // console.log(n%2)
  }
  return qoldiq.join("")
}

console.log(binary(1234))





*/

/* 
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"


function bmi(weight, height) {
   

}



function bmi(weight:number, height:number) {
    let bmi_num = weight / (height**2)
   if (bmi_num <= 18.5) {
        return "Underweight"
   } else if (bmi_num <=25.0) {
        return "Normal"
   }else if (bmi_num <=30.0 ) {
        return "Overweight"
   }else if (bmi_num > 30) {
        return "Obese"
   }

}

console.log(bmi(90,1.80))

*/

/* 
Implement a function that adds two numbers together and returns their sum in binary.
The conversion can be done before, or after the addition.
The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)


Write down the number.
Divide it by 2 and note the remainder.
Divide the quotient obtained by 2 and note the remainder.
Repeat the same process till we get 0 as the quotient.
Write the values of all the remainders starting from the bottom to the top. That will be the required answer.

function addBinary(a:number,b:number) {
    let sum = a+b;
    console.log(sum)
    for(let i = sum; i <= 0;i--) {
         console.log(i);
    }
  console.log('hello horlw')
}

addBinary (20,25)



let gitara_brat: any = true;
console.log(gitara_brat)
gitara_brat = "string"

console.log(gitara_brat)
gitara_brat = 98

console.log(gitara_brat)
*/

// any static type checking boladi js oxshab qoladi luboy narsani oladi 
// unknown luboy narsani oladi lkn safer chunki uni ustida operation bajarishdan typeof bilan typeni define qilishni soarydi   

// let w: unknown = 1;
// w = "string";
// w = true;
// w = "azizbek";

// if ( typeof w === "string") {
// console.log( w.toUpperCase())

// }


// if (typeof w === "boolean") {
//     console.log(w)
// }


// let y: null = null;
// let x:undefined = undefined;

// const names: string[] = ["Adam", "Thomas aka ", "Lisa"];
// const ages : number[] = [18, 20, 20 ]
// const nulls :null[] = [null, null, null, null]


// readonlyni bersak bu bizga arrayni himoya qilishga yordam berar ekan yani bu bilan biz protect qilamiz bu degani bu arrayga nisbatan mutable method ishlatib bomaydi
// const names: readonly string[] = ["Dylan"];
// console.log(names.slice(0,1)); 
 



// tuple is types predefined array yani bu orqali arrayimizni qaysi indexida nima malumot turishini aytishimiz mumkin ekan

// let tuplecha:[string, number, boolean ];

// tuplecha = ["azizbek",23,true]

// console.log(tuplecha)

//bi tupleda ham readonlyni ishlatishimiz mumkin 
// let kattatuple : readonly [string,number, null] 

// kattatuple= ["hello",77777,null]

// console.log(kattatuple.slice(0,2))


// const car: {type:string, model?:string,year:number} = {

//     type: "BMW",
//     year: 2024
// }

// console.log(car.type)

// const nameAgeMap: { [index: symbol]: undefined } = {};
// const mySymbol = Symbol("key1"); // Create a symbol
// nameAgeMap[mySymbol] = undefined; // Valid
// console.log(nameAgeMap);
// // Output: { [Symbol(key1)]: undefined }


// enum Yonalish{
//    notFund = "north",
//    badRequest = "bad" ,
//    test = "good",
//    sharq = 4,
//    garb
// }

// console.log(Yonalish.notFund)


// function wordSearch(query, seq){
//   let lowerCaseQuery = query.toLowerCase()
//   let lowerCaseString = seq. map(function toLower(sequ) {
//     return sequ.toLowerCase();
//     });

//  let yangi = lowerCaseString.filter(item => item.includes(lowerCaseQuery))
 
//   return yangi
// }

// let result = wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"])
// console.log(result)