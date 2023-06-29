function caesar(str, factor) {
  const charCodes = str.split("").map((letter) => letter.charCodeAt(0));
  const newChars = charCodes.map((code) => {
    if (code >= 65 && code <= 90) {
      code += factor;
      if (code > 90) code -= 26;
      return String.fromCharCode(code);
    } else if (code >= 97 && code <= 122) {
      code += factor;
      if (code > 122) code -= 26;
      return String.fromCharCode(code);
    } else return String.fromCharCode(code);
  });
  return newChars.join("");
}

module.exports = caesar;