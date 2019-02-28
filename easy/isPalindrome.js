function isPalindrome(string) {
  let reversedString = string
    .split('')
    .reverse()
    .join('');

  return string === reversedString;
}

console.log(isPalindrome('abcdcba'));
