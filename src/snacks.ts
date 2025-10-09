const snacksB: string[] = ["Chips", "Cookies", "Granola Bar", "Trail Mix", "Popcorn"];

export function printSnacks(): void {
  console.log("Available Snacks:");
  for (const snack of snacksB) {
    console.log(`- ${snack}`);
  }
}
printSnacks();