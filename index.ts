//number 
const num: string = "2"
// console.log(num)

//function
function addTwoNumber(num1: number, num2: number): number {
    return num1 + num2
}

// console.log(addTwoNumber(1, 3))


//object
interface IPerson {
    firstName: string;
    lastName: string;
  }

var person: IPerson = { 
	firstName:"Tom",
	lastName:"Hanks"
};

// console.log("hello" + " " + person.firstName)


//array 
const arr: Array<string | number> = [1, 3, "hi"]

// console.log(arr[0])

type numberAndString = number | string;

const id: numberAndString = 23;

// Enums

enum Colors {
    color1 = "#ededed",
    color2 = "#ededff",
    color3 = "#ededee",
  }
  
// console.log(Colors.color3);
  