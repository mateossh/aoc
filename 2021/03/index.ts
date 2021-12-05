const file = Deno.readTextFileSync('input');
const input: Array<string> = file.split('\n');

function partOne(): number {
  const numOfOneAppearances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  let gammaStr: string = '';
  let epsilonStr: string = '';

  // count number of "1" bits
  for (let line of input) {
    const bytes = line.split('');
    
    for (let index = 0; index < bytes.length; index++) {
      if (+bytes[index] === 1) numOfOneAppearances[+index]++
    }
  }

  // construct gamma string
  for (let val of numOfOneAppearances) {
    if (val > input.length / 2) gammaStr += '1';
    if (val < input.length / 2) gammaStr += '0';
  }

  // construct epsilon string
  for (let val of numOfOneAppearances) {
    if (val > input.length / 2) epsilonStr += '0';
    if (val < input.length / 2) epsilonStr += '1';
  }

  return parseInt(gammaStr, 2) * parseInt(epsilonStr, 2);
}

const partOneSolution = partOne();
console.log(`Puzzle 03 - solution is ${partOneSolution}`);
