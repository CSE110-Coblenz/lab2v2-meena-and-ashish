import { announce } from "./animation";
export const snacksB: string[] = ["chips", "Cookie", "Granola Bar", "Trail Mix", "Popcorn", "Mosh Bar", "UCSD Blue Bowl (Acai Bowl)", "Mangoes"];

/**
 * Prints out a list of available snacks.
 * The list is hardcoded in the module.
 */
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

