const file = Deno.readTextFileSync('input');
const input: Array<string> = file.split('\n');

function partOne(): void {
  const order: Array<number> = input[0].split(',').map(num => +num);
  const boards: Array<Array<number>> = [];
  const numOfBoards = (input.length - 1) / 6;

  for (let i = 1; i <= numOfBoards; i++) {
    const board: Array<any> = [];

    for (let j = 0; j < 5; j++) {
      const row: Array<number> = input[(i*6 - 5) + 1 + j]
        .replace('  ', ' ')
        .split(' ')
        .filter(val => val !== '')
        .map(val => +val);

      board.push(row);
    }

    boards.push(board);
  }

  console.log(`${order}`);
}

const partOneSolution = partOne();
console.log(`Puzzle 04 - solution is ${partOneSolution}`);
