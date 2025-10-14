import { announce } from "./animation";

const snacksB: string[] = ["Chips", "Cookie", "Granola Bar", "Trail Mix", "Popcorn", "Mosh Bars"];

export function printSnacks(): void {
  console.log("Available Snacks:");
  for (const snack of snacksB) {
    console.log(`- ${snack}`);
  }
}
printSnacks();


export function print_snacks(){
   let snacks = ["apple", "orange", "crackers"];
   console.log(snacks);
}

announce("snacks", "bold"); 
print_snacks();

