// 最长回文字符串

const extendsFromCenter = (str, left, right) => {
  let start = left;
  let end = right;
  while (start >= 0 && end < str.length && str[start] === str[end]) {
    start -= 1;
    end += 1;
  }
  return (end - start) - 1;
};

export const longestPalindrome = (s) => {
  let max = 0;
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i += 1) {
    const lengthOdd = extendsFromCenter(s, i, i);
    const lengthEven = extendsFromCenter(s, i, i + 1);
    let length;
    if (lengthOdd > lengthEven) {
      length = lengthOdd;
      if (length > max) {
        max = length;
        start = i - ((length - 1) / 2);
        end = i + ((length - 1) / 2);
      }
    } else {
      length = lengthEven;
      if (length > max) {
        max = length;
        start = i - ((length - 2) / 2);
        end = i + (length / 2);
      }
    }
  }
  return s.substring(start, end + 1);
};

export default {};
