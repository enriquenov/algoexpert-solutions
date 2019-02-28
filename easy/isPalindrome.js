function isPalindrome(string) {
  return (
    string ===
    string
      .split('')
      .reverse()
      .join('')
  );
}

console.log(isPalindrome('abcdcba'));
