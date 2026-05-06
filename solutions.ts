// problem 1
const filterEvenNumbers=(nums: number[]):number[]=>{
  return nums.filter((num)=>num%2==0)
}

// problem 2
const reverseString=(input: string): string=>{
  let rev = "";
  for(let i=input.length - 1;i>=0;i--){
    rev+=input[i];
  }
  return rev;
}

// problem 3
type StringOrNumber = string | number;
const checkType=(input: StringOrNumber)=>{
  if(typeof input === "string"){
    return "String";
  } else if(typeof input === "number"){
    return "Number";
  }
}

// problem 4
const getProperty=<T,K extends keyof T>(obj: T,key: K):T[K]=>{
  return obj[key];
}

// problem 5
interface Book{
  title: string;
  author: string;
  publishedYear: number;
}
type BookWithIsRead = {
  isRead: true;
}
const toggleReadStatus=(book: Book): Book & BookWithIsRead=>{
  return {...book, isRead: true};
}

// problem 6
class Person{
  name: string;
  age: number;
  constructor(name:string, age: number){
    this.name=name;
    this.age=age;
  }
}

class Student extends Person{
  grade: string;
  constructor(name: string, age: number, grade: string){
    super(name,age);
    this.grade=grade;
  }
  getDetails(){
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
  }
}
