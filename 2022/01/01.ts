const text = await Deno.readTextFile('./input');

const elvesString: string[] = text.split('\n\n');

const elfCaloriesSum: number[] = [];

for (const elf of elvesString) {
  const newElf: number[] = [];
  const meals = elf.split('\n');

  for (const meal of meals) {
    newElf.push(parseInt(meal));
  }

  // LSP complains, FIXME
  const caloriesSum = newElf.reduce((accumulator, current) => {
    if (isNaN(current)) {
      return
    }
    return accumulator + current;
  }, 0);

  elfCaloriesSum.push(caloriesSum);
  // console.log(`elf: ${caloriesSum}`);
}

elfCaloriesSum.sort((a, b) => {
  if (a < b) return 1;
  if (a > b) return -1;
  return 0;
})

console.log(`solution 1 - ${elfCaloriesSum[0]}`);
console.log(`solution 2 - ${elfCaloriesSum[0] + elfCaloriesSum[1] + elfCaloriesSum[2]}`);
