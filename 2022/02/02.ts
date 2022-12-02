const text = await Deno.readTextFile('./input');

// slice trick: https://bobbyhadz.com/blog/javascript-remove-last-element-from-array
const lines = text.split('\n').slice(0, -1);

let points = 0;

type FirstColumn = 'A' | 'B' | 'C';
type SecondColumn = 'X' | 'Y' | 'Z';

function getShapePoints(shape: SecondColumn): number {
  if (shape === 'X') return 1;
  if (shape === 'Y') return 2;
  if (shape === 'Z') return 3;
}

for (const round of lines) {
  const opponentPick: FirstColumn = round[0];
  const playerPick: SecondColumn = round[2];

  const isDraw = playerPick === 'X' && opponentPick === 'A' ||
    playerPick === 'Y' && opponentPick === 'B' ||
    playerPick === 'Z' && opponentPick === 'C';

  const isWin = playerPick === 'X' && opponentPick === 'C' ||
    playerPick === 'Y' && opponentPick === 'A' ||
    playerPick === 'Z' && opponentPick === 'B';

  const isLose = playerPick === 'X' && opponentPick === 'B' ||
    playerPick === 'Y' && opponentPick === 'C' ||
    playerPick === 'Z' && opponentPick === 'A';

  // const shapePoints =
  //   playerPick === 'X' 
  //     ? 1
  //     : playerPick === 'Y' 
  //       ? 2
  //       : 3
  //
  // if (isWin) points += shapePoints + 6
  // if (isDraw) points += shapePoints + 3
  // if (isLose) points += shapePoints + 0

  if (isWin) points += getShapePoints(playerPick) + 6
  if (isDraw) points += getShapePoints(playerPick) + 3
  if (isLose) points += getShapePoints(playerPick) + 0
}


let pointsSolutionTwo = 0;

for (const round of lines) {
  const opponentPick: FirstColumn = round[0];
  const matchResult: SecondColumn = round[2];
  // X - you need to lose
  // Y - you need to draw
  // Z - you need to win
 
  const matchPoints =
    matchResult === 'X' 
      ? 0
      : matchResult === 'Y'
        ? 3
        : 6

  if (matchResult === 'X') {
    // has to lose
    switch (opponentPick) {
      case 'A':
        pointsSolutionTwo += matchPoints + getShapePoints('Z');
        break;
      case 'B':
        pointsSolutionTwo += matchPoints + getShapePoints('X');
        break;
      case 'C':
        pointsSolutionTwo += matchPoints + getShapePoints('Y');
        break;
    }
  }
  if (matchResult === 'Y') {
    // draw
    switch (opponentPick) {
      case 'A':
        pointsSolutionTwo += matchPoints + getShapePoints('X');
        break;
      case 'B':
        pointsSolutionTwo += matchPoints + getShapePoints('Y');
        break;
      case 'C':
        pointsSolutionTwo += matchPoints + getShapePoints('Z');
        break;
    }
  }

  if (matchResult === 'Z') {
    // has to win
    switch (opponentPick) {
      case 'A':
        pointsSolutionTwo += matchPoints + getShapePoints('Y');
        break;
      case 'B':
        pointsSolutionTwo +=  matchPoints + getShapePoints('Z');
        break;
      case 'C':
        pointsSolutionTwo += matchPoints + getShapePoints('X');
        break;
    }
  }
}

console.log(`solution 1 - ${points}`);
console.log(`solution 2 - ${pointsSolutionTwo}`);
