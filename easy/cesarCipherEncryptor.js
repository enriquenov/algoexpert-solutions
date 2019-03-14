let letters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

function caesarCipherEncryptor(string, key) {
  return string.split('').map(e => {
    let index = letters.indexOf(e);
    let newIndex = index + (key % 26);

    return newIndex <= 25 ? letters[newIndex] : letters[newIndex % 26];
  });
}

console.log(caesarCipherEncryptor('xyz', 2));
