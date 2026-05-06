const filterEvenNumbers=(nums: number[]):number[]=>{
  return nums.filter((num)=>num%2==0)
}

const reverseString=(input: string): string=>{
  let rev = "";
  for(let i=input.length - 1;i>=0;i--){
    rev+=input[i];
  }
  return rev;
}
