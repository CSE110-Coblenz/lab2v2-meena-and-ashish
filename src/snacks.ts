import { announce } from "./animation";

const snacksB: string[] = ["Chips", "Cookies", "Granola Bar", "Trail Mix", "Popcorn"];

const snacksC: string[] = ["Nutella", "Milky Way", "Snickers"];



export function printSnacks(): void {
  console.log("Available Snacks:");
  for (const snack of snacksB) {
    console.log(`- ${snack}`);
  }


  //print snacksC
  for(const snack2 of snacksC){

    console.log(`- ${snack2}`);
  }
}
printSnacks();


export function print_snacks(){
   let snacks = ["apple", "orange", "crackers"];
   console.log(snacks);
}

announce("snacks", "bold"); 
print_snacks();

