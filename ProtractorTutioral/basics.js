//In JavaScript to print to the log use the following command
console.log('hello world');

//JavaScript is a dynamic typs language, means you don't need to specify the type of variable because it is used by JavaScript
//engine.  You need to use var here to specify the data type.  It can hold any type of value such as numbers, strings, etc...

//int a=4;  Java
var a=4; //JavaScript
var b = "Hello";
console.log (a);
console.log(b);

//Conditional Statments
//If Statment
//condition True
//execute the block of the code
//condition False
///execute the other code
var c='One';
if(c == 'one'){
console.log ('C equals one.  The value of C is: '+c)
}
else{
  console.log ('C does not equal one.  The value of C is: '+c)
}

//Else IF
var c = 'Four';
if (c == 'one') {
  console.log('C equals one.  The value of C is: ' + c);
} else if (c == 'two') {
  console.log('C equals two.  The value of C is: ' + c);
} else if (c == 'three') {
  console.log('C equals three.  The value of C is: ' + c);
} else  {
  console.log('The value of C is: ' + c);
}

//For Loop
//Print numbers from 1 to 100
for (var i=1;i<=100;i++){
  console.log ('i = ' +i);
}

//While Loop
var j=1;
while (j<5){
  j = j+1; //or j++
  console.log ('j = ' +j);
}
j++;
console.log ('j = ' +j);

//Do While Loop
var k =10;
do {
  console.log ('k = ' +k);
  k++;
}
while (k<16);

//Functions
function add(a,b){
  return a+b;
}
console.log ('The return value of the add function = '+add(2,3));

//Arrays
//Array is a collection of values or objects

var b =["hello","world","4","goodbye"];
console.log(b[0]);
console.log(b[1]);
console.log(b[2]);
console.log(b[3]);
//The following code loops through the array but requires you to know the number of elements in the array.
//Unlike the code above you don't have to write code for every element in the array.
for(var i=0; i<4; i++){
  console.log(b[i]);
}
//The following code gets the length (i < b.length) of the array so you don't have to hard code the number of values in the array
for (var i = 0; i < b.length; i++) {
  console.log(b[i]);
}
//You can also create an array as follows
var c= new Array();
c[0]='hello';
c[1]='world';
c[2]='5';
c[3]='goodbye';
for (var i = 0; i < c.length; i++) {
  console.log(c[i]);
}
//The following code shows how to print the array in reverse.
console.log (c.length + ' is the size of the array');
console.log ('Print array numbers in reverse');
for (var j = c.length-1;j>=0; j--) {
  console.log(c[j]);
}

//String Concepts
//The following code get a character at the specified position (i.e. 3).
var name = 'Darin'; //This is a String literal declaration.
console.log(name.charAt(3) + ' is the 3rd character.') ;
//The following code concatanates 2 strings into a new variable.
var newname = name.concat(' Brooks');
console.log(newname);
//The following code will tell to the index number of a specified character.
console.log(newname.indexOf ('o') + ' is the index number of the letter o');
//The following code will return the characters from a start index to an end index (i.e. get the characters from index 1 - 4, 'arin')
//In slice method the starting index (i.e. 1) is included but the ending index is excluded (i.e 5)
console.log(newname.slice(1, 5) + ' are the values from index 1 to 4.');
//The following code will print the string in upper case
console.log(newname.toUpperCase()+' is all upper case.');
//The following code will print the string in lower case
console.log(newname.toLowerCase()+' is all lower case.');
//The following code will trim spaces
var nameWithSpace = 'Darin ';
console.log(nameWithSpace.trim()+ ' no longer has a space at the end');
//You can also declare a variable as follows.
var name2=new String('Darin');  //This is a String object declaration.
console.log(name2+' is the value for variable name2.')

