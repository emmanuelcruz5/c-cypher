// function decryption(encryptedWord) {
//   const alphabet = "abcdefghijklmnopkrstuvwxyz";
//   let decryptedWord = "";
//   let decryptedWordBank = [];

//   for (let i = 0; i < 25; i++) {
//     for (letter in encryptedWord) {
//       if (!alphabet.includes(encryptedWord[letter].toLowerCase())) {
//         decryptedWord += encryptedWord[letter];
//         console.log("letter:", letter);
//         continue;
//       }

//       let letterPosition = alphabet.indexOf(letter.toLowerCase());

//       if (letterPosition + i > 25) {
//         letterPosition -= 25;
//       }

//       decryptedWord += alphabet[letterPosition + i];
//     }
//     decryptedWordBank.push(decryptedWord);
//     decryptedWord = "";
//   }

//   console.log(decryptedWordBank);
// }

function decryption(encryptedWord) {
  //const alphabet = "abcdefghijklmnopkrstuvwxyz";

  const alphabet = {
    1: "a",
    2: "b",
    3: "c",
    4: "d",
    5: "e",
    6: "f",
    7: "g",
    8: "h",
    9: "i",
    10: "j",
    11: "k",
    12: "l",
    13: "m",
    14: "n",
    15: "o",
    16: "p",
    17: "q",
    18: "r",
    19: "s",
    20: "t",
    21: "u",
    22: "v",
    23: "w",
    24: "x",
    25: "y",
    26: "z",
  };

  let decryptedWord = "";
  let decryptedWordBank = [];
  let count = 0;

  while (count < 26) {
    count++;
    for (let i = 0; i < encryptedWord.length; i++) {
      let char = encryptedWord[i];
      let alphIdx = 0;
      //console.log("char:", char);
      for (idx in alphabet) {
        if (char === alphabet[idx]) {
          alphIdx = Number(idx);
        }
      }
      if (alphIdx === 0) {
        decryptedWord += char;
      } else {
        alphIdx += count;
        if (alphIdx > 26) alphIdx -= 26;
        let newChar = alphabet[alphIdx];
        decryptedWord += newChar;
      }
    }
    decryptedWordBank.push(decryptedWord);
    decryptedWord = "";

    console.log(decryptedWordBank);
  }
  return decryptedWordBank;
}

//decryption("abc");
decryption("lw zrunv!");


