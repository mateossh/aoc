const text = await Deno.readTextFile('./input');

const stacksLines = text.split('\n').slice(0, 8);
const instructions = text.split('\n').slice(10, -1);

// https://stackoverflow.com/a/49201210
// const stacks = Array.from(Array(8), () => new Array(1));

let stacks = ['', '', '', '', '', '', '', '', ''];

for (const line of stacksLines) {
  for (let i = 1; i < line.length; i+=4) {
    const letter = line[i];
    const stackIdx = (i - 1) / 4;

    if (letter !== " ") {
      stacks[stackIdx] = letter + stacks[stackIdx];
    }
  }
}

for (const instruction of instructions) {
  let [amount, source, destination] = instruction
    .replace('move', '')
    .replace('from', ',')
    .replace('to',   ',')
    .split(',')
    .map((i: string) => parseInt(i));

  source = source - 1;
  destination = destination - 1;

  const cratesToMove = stacks[source].slice(-amount);

  // remove crates from 'source' string
  stacks[source] = stacks[source].slice(0, -amount);

  // append crates to 'destination' string
  stacks[destination] += cratesToMove;
}

let solution = '';

for (const stack of stacks) {
  solution += stack.slice(-1);
}

console.log(`solution 2 - ${solution}`);
