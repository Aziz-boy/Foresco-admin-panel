console.log('Train.js is running...');
/*
TASK G:

Yagona parametrga ega function tuzing.
Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.
Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.

MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 sonini
Yuqoridagi misolda, birinchi indeksda 21 joylashgan.
Va bu 21 soni arrayning tarkibidagi birinchi eng katta son hisobladi va bizga uning indeksi 1 qaytadi.

*/

function getHighestIndex(arr) { 

  if (arr.every(Number.isInteger)) {
    let maxIndex = 0; 
    for (let i = 1; i < arr.length; i++) { 
      if (arr[i] > arr[maxIndex]) {
        maxIndex = i; 
      }
    }
    return maxIndex; 

    


  } else {
    console.log('Your array is not consist of integers !');
  }

}

const result = getHighestIndex([5, 21, 12, 21 ,8]);

console.log(result);