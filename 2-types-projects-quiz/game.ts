/**
 * Let's make a game 🕹
 */

type Move = 'up' | 'down' | 'left' | 'right';
type Position = {
    x: number,
    y: number
}

const position: Position = { x: 0, y: 0 };

function move(dir: Move) {
    switch (dir) {
        case 'up':
            position.y++;
            return;
        case 'down':
            position.y--;
            return;
        case 'left':
            position.x--;
            return;
        case 'right':
            position.x++;
            return;
        default:
            throw Error('unknown direction');
    }
}

console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}
