import regex from "../../utils/regex";

interface element {
  num: number;
  content: string;
}

export default function regTest(e: element) {
  let result = false;
  if (e.num === 1) {
    const reg = new RegExp(regex.nickname);
    result = reg.test(e.content);
  } else if (e.num === 2) {
    const reg = new RegExp(regex.email);
    result = reg.test(e.content);
  } else if (e.num === 3) {
    const reg = new RegExp(regex.password);
    result = reg.test(e.content);
  }


  return result;
}
