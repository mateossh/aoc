const file = Deno.readTextFileSync('input');
const input: Array<string> = file.split('\n');

type Coords = {
  x: number,
  y: number,
};

function partOne(): number {
  const coords: Coords = { x: 0, y: 0 };

  for (let line of input) {
    const [type, amount] = line.split(' ');

    switch(type) {
      case 'forward':
        coords.x += +amount;
        break;
      case 'down':
        coords.y += +amount;
        break;
      case 'up':
        coords.y -= +amount;
        break;
    }
  }

  return coords.x * coords.y;
}

const partOneSolution = partOne();
console.log(`Puzzle 02 - solution is ${partOneSolution}`);
