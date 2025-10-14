<<<<<<< HEAD
import { announce } from "./animation";

const snacksB: string[] = ["Chips", "Cookies", "Granola Bar", "Trail Mix", "Popcorn"];

const snacksC: string[] = ["Nutella", "Milky Way", "Snickers"];

=======

const snacksB: string[] = ["Chips", "Cookies", "Granola Bar", "Trail Mix", "Popcorn"];

>>>>>>> 4e1152232b9e5b10c478b18f87b3cb05e7e247be
export function printSnacks(): void {
  console.log("Available Snacks:");
  for (const snack of snacksB) {
    console.log(`- ${snack}`);
  }
<<<<<<< HEAD

  for(const snack2 of snacksC){

    console.log(`- ${snack2}`);
  }
=======
>>>>>>> 4e1152232b9e5b10c478b18f87b3cb05e7e247be
}
printSnacks();


export function print_snacks(){
   let snacks = ["apple", "orange", "crackers"];
   console.log(snacks);
}

<<<<<<< HEAD
announce("snacks", "bold"); 
=======
>>>>>>> 4e1152232b9e5b10c478b18f87b3cb05e7e247be
print_snacks();

