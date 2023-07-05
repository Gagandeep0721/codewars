/*In this kata you will create a function that takes in a list and returns a list with the reverse order.

Examples (Input -> Output)
* [1, 2, 3, 4]  -> [4, 3, 2, 1]
* [9, 2, 0, 7]  -> [7, 0, 2, 9]*/

function reverseList(list) {
  return list.reverse();
  }
  console.log(reverseList([1, 2, 3, 4]));
  console.log(reverseList([9, 2, 0, 7]));

  /*Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"*/

function reverseWords(str) {
  return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}
console.log(reverseWords("This is an example!"));
console.log(reverseWords("double  spaces"));

/*A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcissistic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1652 (4 digits), which isn't:

    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938*/

    function narcissistic(value) {
      let strDigits = value.toString();
      let power = strDigits.length;
      let arrayDigits = strDigits.split('')
      let sum =0; powerValue = 0;
      for (let i = 0; i < power; i++){
        powerValue = Number(arrayDigits[i])**power;
        sum += powerValue;
      }
      if (sum === value){
        return true;
      }else{
        return false;
        
      }
    }  
      console.log(narcissistic(153))
      console.log(narcissistic(1652))

      /*Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8*/
function rowSumOddNumbers(n) {
	return n*n*n
}
console.log(rowSumOddNumbers(2))
console.log(rowSumOddNumbers(1))


/*Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'*/

function findMissingLetter(array){
  let alphabetArr = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
  let alphabetSlice = alphabetArr.slice(alphabetArr.indexOf(array[0]),alphabetArr.indexOf(array[array.length - 1]) + 1);
  let missingLetter = alphabetSlice.find((e, i) => e !== array[i]); 
          return missingLetter;
}
console.log(findMissingLetter['a','b','c','d','f'])

console.log(findMissingLetter['O','Q','R','S'])

     