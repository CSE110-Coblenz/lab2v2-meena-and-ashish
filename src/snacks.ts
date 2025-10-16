import { announce } from "./animation";


export const snacksB: string[] = ["chips", "Cookies", "Granola Bar", "Trail Mix", "Popcorn"];

export const snacksD: string[] = ["cherry"];

const snacksC: string[] = ["Nutella", "Milky Way", "Snickers", "Oreo", "Shaved Ice", "Pineapple"];

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
   let snacks = ["apple", "orange", "crackers", "chips"];
   console.log(snacks);
}

announce("snacks", "bold"); 
print_snacks();

