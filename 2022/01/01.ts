const text = await Deno.readTextFile('./input');

const elvesString: string[] = text.split('\n\n');

const caloriesSumArr: number[] = [];

for (const elf of elvesString) {
  const meals = elf.split('\n').map(meal => parseInt(meal));

  const caloriesSum = meals.reduce((accumulator, current) => {
    if (isNaN(current)) return accumulator;
    return accumulator + current;
  }, 0);

  caloriesSumArr.push(caloriesSum);
}

caloriesSumArr.sort((a, b) => {
  if (a < b) return 1;
  if (a > b) return -1;
  return 0;
})

console.log(`solution 1 - ${caloriesSumArr[0]}`);
console.log(`solution 2 - ${caloriesSumArr[0] + caloriesSumArr[1] + caloriesSumArr[2]}`);
