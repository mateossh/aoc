const text = await Deno.readTextFile('./input');

// slice trick: https://bobbyhadz.com/blog/javascript-remove-last-element-from-array
const lines = text.split('\n').slice(0, -1);

enum Priority {
  a = 1, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z,
  A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z,
}

let solution = 0;
let solutionTwo = 0;

for (const line of lines) {
  const firstCompartmentSet = new Set(line.slice(0, line.length/2));
  const secondCompartmentSet = new Set(line.slice(-line.length/2));

  for (const item of firstCompartmentSet) {
    if (secondCompartmentSet.has(item)) solution += Priority[item as string];
  }
}


for (let i = 0; i < lines.length; i+=3) {
  const firstSet = new Set(lines[i])
  const secondSet = new Set(lines[i+1])
  const thirdSet = new Set(lines[i+2])

  for (const item of firstSet) {
    if (secondSet.has(item) && thirdSet.has(item)) {
      solutionTwo += Priority[item as string];
      break;
    }
  }

}

console.log(`solution 1 - ${solution}`);
console.log(`solution 2 - ${solutionTwo}`);
