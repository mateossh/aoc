const file = Deno.readTextFileSync('input');
const input: Array<string> = file.split('\n');

function partOne(): number {
  let solution: number = 0;

  for (let i = 1; i < input.length - 1; i++) {
    const current = +input[i];
    const previous = +input[i-1];

    if (current > previous) { solution++ }
  }

  return solution;
}

const partOneSolution = partOne();
console.log(`Puzzle 01 - solution is ${partOneSolution}`);

// solution is off by one
