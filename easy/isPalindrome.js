function isPalindrome(string) {
  if (string.length === 1 || !string.length) return true;

  return (
    string[0] === string[string.length - 1] &&
    isPalindrome(string.slice(1, string.length - 1))
  );
}

console.log(isPalindrome('abcdcba'));
