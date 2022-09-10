/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/


function reverse(str) {
    if (str.length === 0) return '';
    //console.log(reverse(str.substring(1)) + str[0])
    console.log(str.substring(1), 'Substring 1');
    console.log(str[0], 'String 0')
    return reverse(str.substring(1)) + str[0]
}


reverse("house"); // "esuoh"
// reverse("dog"); // "god"
// reverse("atom"); // "mota"
// reverse("q"); // "q"
// reverse("id"); // "di"
// reverse(""); // ""

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}