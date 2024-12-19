/*TASK J:

Shunday function tuzing, u string qabul qilsin.
Va string ichidagi eng uzun so'zni qaytarsin.

MASALAN: findLongestWord("I came from Uzbekistan!"); return "Uzbekistan!"

Yuqoridagi text tarkibida 'Uzbekistan'
eng uzun so'z bo'lganligi uchun 'Uzbekistan'ni qaytarmoqda */

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
  