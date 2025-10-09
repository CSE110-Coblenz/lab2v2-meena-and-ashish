
const snacksB: string[] = ["Chips", "Cookies", "Granola Bar", "Trail Mix", "Popcorn"];

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

print_snacks();

