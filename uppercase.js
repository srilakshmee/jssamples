isUpperCase = function(char) {
  return !!/[A-Z]/.exec(char[0]);
};
console.log('Does Asd starts with UpperCase ? '+isUpperCase('Asd'));
console.log('Does 123 starts with UpperCase ? '+isUpperCase('123'));
console.log('Does sDDstarts with UpperCase ? '+isUpperCase('Asd'));