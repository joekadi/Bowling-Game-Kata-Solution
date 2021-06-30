/*

Bowling Game Kata inspired by Bob Ross

https://kata-log.rocks/bowling-game-kata

Bowling Rules:

The game consists of 10 frames as shown above. In each frame the player has
two opportunities to knock down 10 pins. The score for the frame is the total
number of pins knocked down, plus bonuses for strikes and spares.

A spare is when the player knocks down all 10 pins in two tries. The bonus for
that frame is the number of pins knocked down by the next roll. So in frame 3
above, the score is 10 (the total number knocked down) plus a bonus of 5 (the
number of pins knocked down on the next roll.)

A strike is when the player knocks down all 10 pins on his first try. The bonus
for that frame is the value of the next two balls rolled.
In the tenth frame a player who rolls a spare or strike is allowed to roll the extra
balls to complete the frame. However no more than three balls can be rolled in
tenth frame.

Requirements

Write a class Game that has two methods

void roll(int) is called each time the player rolls a ball. The argument is the number of pins knocked down.
int score() returns the total score for that game.


------------------------------------------------------------------------------------------------------------------------------------------------------------


flow:
    1. build test case
    2. build functionality to pass test case
    3. modularise and improve code readability

test cases:

    1. 0x20 = 0
    2. 1x20 = 20
    3. 5/5 1/0 0x16 = 11 (spares)
    4. 10/1 1/0 0x16 = 14 (strike)
    5. 10x12 = 300 (all strikes)


.*/

const BowlingGame = require("../bowling-game.js");
let game;

beforeEach(()=>{
    game = new BowlingGame();
});

it('should return 0 for a game of all zeros', () => {

    rollMany(20, 0);
    expect(game.score).toEqual(0);

})

it('should return 20 for game of all ones', () => {

    rollMany(20, 1);
    expect(game.score).toEqual(20);

})

it('handles a spare with correct bonus', () => {
    game.roll(5);
    game.roll(5);
    game.roll(1);
    rollMany(17, 0);
    expect(game.score).toEqual(12);
})

it('handles a strike with correct bonus', () => {
    game.roll(10);
    game.roll(1);
    game.roll(1);
    rollMany(17, 0);
    expect(game.score).toEqual(14);

})


it('max 300', () => {
    rollMany(1000000, 10);
    expect(game.score).toEqual(300);
})

function rollMany(rolls, pins){
    for(let i=0;i<rolls;i++){
        game.roll(pins);
    }
}