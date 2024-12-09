console.log("Train.ts is running......")

/*
H-TASK: 

shunday function tuzing, u integerlardan iborat arrayni argument sifatida 
qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
MASALAN: getPositive([1, -4, 2]) return qiladi "12"

*/


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