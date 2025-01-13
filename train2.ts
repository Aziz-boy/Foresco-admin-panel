/* TASK-S:

Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin
va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin

MASALAN: missingNumber([3, 0, 1]) return 2 
*/

function missingNumber(nums: number[]): number {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((sum: number, num: number) => sum + num, 0);
  return expectedSum - actualSum;
}


console.log(missingNumber([3, 0, 1])); 


/* TASK R

Shunday function yozing, u string parametrga ega bo'lsin.
Agar argument sifatida berilayotgan string, "1 + 2" bo'lsa,
string ichidagi sonlarin yig'indisni hisoblab, number holatida qaytarsin

MASALAN: calculate("1 + 3"); return 4;
1 + 3 = 4, shu sababli 4 natijani qaytarmoqda.



function calculate(expression: string): number {
    const parts = expression.split(' ');
    const num1: number = parseFloat(parts[0]); 
    const operator: string = parts[1];         
    const num2: number = parseFloat(parts[2]); 

    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === '/') {
        return num1 / num2;
    } else {
        return NaN; // Agar noto‘g‘ri operator bo‘lsa
    }
}

console.log(calculate("1 + 3")); // 4
*/

/* TASK-Q:

Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, 
ikkinchisi string. Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin.

MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true; hasProperty({name: "BMW", model: "M3"}, "year") return false

function hasProperty(obj: any, key: string): boolean {
  if (obj[key] !== undefined) {
    return true;
  } else {
    return false;
  }
}

console.log(hasProperty({ name: "BMW", model: "M3" }, "model")); // true
console.log(hasProperty({ name: "BMW", model: "M3" }, "year"));  // false
*/

/*TASK-P:

Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib arrayni qaytarsin qaytarsin.
MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]


function objectToArray(obj: { [key: string]: any }): [string, any][] {
  return Object.keys(obj).map(key => [key, obj[key]]);
}

console.log(objectToArray({ a: 10, b: 20 }));
*/

/* TASK-O:

Shunday function yozing, u har xil valuelardan iborat 
array qabul qilsin va array ichidagi sonlar
yigindisini hisoblab chiqqan javobni qaytarsin.

MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45



function calculateSumOfNumbers(input: any[]): number {
  let sum = 0; 

  for (let i = 0; i < input.length; i++) {
    if (typeof input[i] === "number") {
      sum += input[i]; 
    }
  }

  return sum;
}

console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35])); 
*/

/* TASK-N: 

Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, 
orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.

MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;



function palindromCheck(str: string){
     let reversed: string = str.split("").reverse().join("");
     if(reversed === str) {
         return true
     } else {
         return false
     }
}

console.log(palindromCheck("dad"))

*/

/* TASK M:

Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi 
har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil 
topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
MASALAN:     getSquareNumbers([1, 2, 3]) 
             return [ {number: 1, square: 1}, 
                      {number: 2, square: 4}, 
                      {number: 3, square: 9}
                    ];



function getSquareNumbers(arr_num: number[]): { number: number, square: number }[] {
  const arr_box: { number: number, square: number }[] = [];
  for (let i = 0; i < arr_num.length; i++) {
      arr_box.push({ number: arr_num[i], square: arr_num[i] ** 2 });
  }
  return arr_box;
  
}

console.log(getSquareNumbers([1, 2, 3]));

*/

/*TASK L: 

Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni 
chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";


function reverseSentence(sentence: string) {
  const result: string[] = [];
  const splitted_arr = sentence.split(" ");
  for (let i = 0; i < splitted_arr.length; i++) {
    let cleaned_word = splitted_arr[i].replace(/[!$#@&*()_+]/g, "");
    let reversed_word = cleaned_word.split("").reverse().join("");
    result.push(reversed_word);
  }
  const final = result.join(" ");
  return final
}

console.log(reverseSentence("we like coding!"));
*/

/*TASK K: 

Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
MASALAN: countVowels("string") return 1;

function countVowels ( string_txt:string ) {
  let count = 0;
  const vowels = "aeiouAEIOU";
    for (let i = 0; i < string_txt.length; i++){
       if(vowels.includes(string_txt[i])) {
        count++
       }

      }
      return count
    }



console.log(countVowels("string"))

*/





/*

TASK I:

Shunday function tuzing, u parametrdagi array ichida eng ko'p
takrorlangan raqamni topib qaytarsin.

MASALAN: majorityElement([1, 2, 3, 4, 5, 4, 3, 4]); return 4

Yuqoridag misolda argument sifatida kiritilayotgan array tarkibida 4 soni ko'p takrorlanganligi uchun 4'ni return qilmoqda.
  


  function majorityElement(arr: number[]): number | null {
    const count: Record<number, number> = {}; 
    let maxCount = 0; 
    let majority: number | null = null; 

    for (const num of arr) {
        count[num] = (count[num] || 0) + 1; 
        if (count[num] > maxCount) {
            maxCount = count[num];
            majority = num;
        }
    }

    return majority;
}

console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4]));

*/


/*H2-TASK: 

Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
MASALAN: getDigits("m14i1t") return qiladi "141" 


// Step-by-step approach to extract digits from a string
function getDigits(inputString: string): string {
  let result = "";
  for (let i = 0; i < inputString.length; i++) {
      const char = inputString[i];
      if (char >= '0' && char <= '9') {
          result += char;
      }
  }

  return result;
}


console.log(getDigits("m14i1t")); 


*/





/*
H-TASK: 

shunday function tuzing, u integerlardan iborat arrayni argument sifatida 
qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
MASALAN: getPositive([1, -4, 2]) return qiladi "12"


function getPositive (int_arr:number[]) {
const positive_array = int_arr.filter(isPositive);
 function isPositive(num:number):boolean {
     return num>0
  }

  return positive_array

}

const result = getPositive([1, -4, 2]);
console.log(result);







function getPositive (int_arr:number[]) {
  let positive_arr :number []=[]
 for (let i=0; i < int_arr.length; i++) {
   if (int_arr[i]>0) {
      positive_arr.push(int_arr[i])
   } else continue
 }
 return positive_arr.join("")
}

let result = getPositive([1, -4, 2,]);
console.log(result);

*/


/*

class BankAccount {
  //# private 
  //_ protected
  //  public
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  // Public method to access and modify the balance
  deposit(amount: number): void {
    if (amount <= 0) {
      console.log("Deposit amount must be greater than 0.");
      return;
    }
    this.balance += amount;
    console.log(`Deposited: ${amount}. Current Balance: ${this.getBalance()}`);
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log("Insufficient funds.");
      return;
    }
    this.balance -= amount;
    console.log(`Withdrew: ${amount}. Current Balance: ${this.getBalance()}`);
  }

  // Protected method to get the balance (read-only for external classes)
  getBalance(): number {
    return this.balance;
  }
}

// Usage
const account = new BankAccount(100);
account.deposit(50);  // Deposited: 50. Current Balance: 150
account.withdraw(30); // Withdrew: 30. Current Balance: 120
// account.balance = 1000; // Error: Cannot access private property





let int_arr:(number | string | boolean )[] = [4,2,3,4]
console.log(int_arr)
int_arr.push("Azizbek", true)
console.log(int_arr)









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
*/

/*TASK J:

Shunday function tuzing, u string qabul qilsin.
Va string ichidagi eng uzun so'zni qaytarsin.

MASALAN: findLongestWord("I came from Uzbekistan!"); return "Uzbekistan!"

Yuqoridagi text tarkibida 'Uzbekistan'
eng uzun so'z bo'lganligi uchun 'Uzbekistan'ni qaytarmoqda 

function findLongestWord(input: string): string {
  
    const words = input.split(" ").map(word => 
      word.replace(/[^a-zA-Z0-9]/g, "") //undovni olib tashashga 
    );
  
    let longestWord = "";
    for (const word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
  
    return longestWord;
  }
  
  
  console.log(findLongestWord("I came from Uzbekistan!")); // "Uzbekistan"
  
  console.log('Train.js is running...');
*/
//TASK SRC PAPKASINI ICHIDAGI train.ts da Bekzod aka  shu yerga yozishimiz kerak ekanligini videoda aytdilar


/*  
function largest(n, array) {
  let sorted_array = array.sort((a, b) => a - b).reverse();
  let final_array =[]
  console.log(sorted_array)
  final_array=final_array.concat(sorted_array.slice(0,n).reverse());
  return (final_array)

}

console.log(largest(2, [7,6,5,4,3,2,1,10,11]))



function hello(name = "") {
  if (name !== "") {
    const capitalized_name = name[0].toUpperCase() + name.slice(1, name.length).toLowerCase();
    return `Hello, ${capitalized_name}`;
  } else {
    return "Hello, Luboy kishi"; 
  }
}

console.log(hello())



 

function findOdd(numbers) {

  // 1step bir xil sonlani ajratish 
  let uniqueNumbers = Array.from(new Set(numbers));
  console.log(uniqueNumbers);
  console.log(numbers)

  
  for (let i = 0; i < uniqueNumbers.length; i++) {
      
      function isEqual(num) {
          return num === uniqueNumbers[i];
      }

      let count = numbers.filter( (num) => { num === uniqueNumbers[i] } ).length;
      console.log(count ,"true qaytaropti");

      
      if (count % 2 !== 0) {
          return uniqueNumbers[i];
      }
  }

}


console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))

function findOdd(numbers) {
   let currentGroup= [numbers[0]]
   for (i=0; i>numbers.length; i++) {
       if(numbers[i]===0||numbers[i]==[numbers[i-1]]) {
         currentGroup.push(numbers[i])

       }

   }
   console.log(currentGroup)
  

  

}

console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))


function friend(friends){
    filter()
}

let result = friend(["Ryan", "Kieran", "Jason", "Yous"])

console.log(result)

function friend(friends){
    let myfriends = []
    for (let i=0; i < friends.length; i++) {
      if(friends[i].length == 4) {
        myfriends.push(friends[i])
      }else continue

    }
      return myfriends
}

let result = friend(["Ryan", "Kieran", "Jason", "Yous"])

console.log(result)



function getPositive (int_arr:number[]) {
  let positive_arr :number []=[]
 for (let i=0; i < int_arr.length; i++) {
   if (int_arr[i]>0) {
      positive_arr.push(int_arr[i])
   } else continue
 }
 return positive_arr.join("")
}

let result = getPositive([1, -4, 2,]);
console.log(result);
/*





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