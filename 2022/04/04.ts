const text = await Deno.readTextFile('./input');

// slice trick: https://bobbyhadz.com/blog/javascript-remove-last-element-from-array
const lines = text.split('\n').slice(0, -1);

let solution = 0;
let solutionTwo = 0;

for (const line of lines) {
  const pairs = line.split(',');

  // thanks Theo
  const [la, ra] = pairs[0].split('-').map((i: string) => parseInt(i));
  const [lb, rb] = pairs[1].split('-').map((i: string) => parseInt(i));


  if (la <= lb && ra >= rb) {
    solution++;
  } else if (lb <= la && rb >= ra) {
    solution++;
  }

  // -----------------------------------------

  
  const rangeA = pairs[0].split('-').map((i: string) => parseInt(i));
  const rangeB = pairs[1].split('-').map((i: string) => parseInt(i));

  const hasOverlap = la <= rb && lb <= ra;
  // if (lb <= ra && rb >= ra) {
  //   solutionTwo++;
  // }
  //
  //
  if (lb <= ra && rb >= la) {
    solutionTwo++;
  }
  // if (hasOverlap) solutionTwo++;



}

console.log(`solution 1 - ${solution}`);
console.log(`solution 2 - ${solutionTwo}`);
