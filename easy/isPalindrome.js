// function isPalindrome(s) {
//   if (s.length === 1 || !s.length) return true;

//   return s[0] === s[s.length - 1] && isPalindrome(s.slice(1, s.length - 1));
// }

function isPalindrome(s) {
  let first = 0;
  let last = s.length - 1;
  let isPal = true;

  while (isPal && first < last && s.length > 1) {
    if (s[first] !== s[last]) {
      isPal = false;
    }

    first++;
    last--;
  }

  return isPal;
}

console.log(isPalindrome('abcdcba'));
