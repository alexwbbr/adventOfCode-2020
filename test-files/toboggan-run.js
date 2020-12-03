const tobogganRun = [
    ".#.....#..#..#....##.........#.",
    "...#...#.........#..#.#..#.....",
    "#.#...#.#....#.....#..#..##..##",
    "..#..#.#.#.....#..#..#..##.....",
    ".#..........#....####..##.#..#.",
    "....##.......#.#.....#.........",
    "....#......#....####.#.##......",
    "........##..........##......#..",
    ".........#........##..#.#.....#",
    ".#..##..........#..#...#..##.#.",
    "........#........#.....#....#.#",
    "..#.......#.###...#.......##...",
    ".##..##.#...#........#.........",
    "...#....#..#..#..##.......#..#.",
    ".#.#.##.##..##..#.#.....#.....#",
    "....#.........#........#....##.",
    "........#........#....###.#..#.",
    "........#....#......##.........",
    ".###.##.#.............##.......",
    "....#.........#...#.#.##..#....",
    "#.............#.#.#.#..#..#..##",
    "###...###.###..#........#......",
    "##..#.....#....##..##..........",
    ".......#...#....#...#...#.....#",
    "...#......###...##.###...#...#.",
    "#.......#...##..#.......#..#...",
    ".....##....#....#..#..#.#.##..#",
    ".........#....##.#.#..##.#.....",
    ".....#......#.#.#.....#.....#..",
    "..#..#...#.#...#.........##.#..",
    ".....#..#.................#.#..",
    "##.#....##........#......#.....",
    "#..#...##...#.#.#..#...........",
    ".#..####.....#......#.###......",
    ".#.......##............#....#..",
    ".#.........##..#.##...#.....###",
    "....##.........#.#...####...##.",
    "..#.......#......##.....#.#..#.",
    "...##....#..#..##....##...#.#.#",
    ".................#.............",
    "...#.##..#.##..............#...",
    "...#......#.........##........#",
    "..#.#..##...#.......#.#........",
    ".###.#.....#.##.##.#...#...#...",
    ".....#.##.....#..#......#..#...",
    ".....#.#...#........#..#..#..#.",
    "#...#.##.#....#................",
    "..#...#.#..#.....#.#.#.........",
    "#.#.###...#.....##........##...",
    "#..##.##....#..........##.#...#",
    "...#..#.#.###...##......#.#....",
    ".#..#........##...#......#.#.#.",
    "##........###....#.#....#......",
    "....#...........#.........#....",
    "#.#....#..#.....#.#....#.....#.",
    "........###.......#..#.#.#.#.#.",
    "..#....#.....#...............##",
    ".....#..##....#.#...####.......",
    ".#..#.....#..#.....#....#....#.",
    "..##....#...........#.#....#...",
    "..#.#......#..#.#..#.....###.#.",
    "...........................##..",
    "##.....#....#......###.#...#..#",
    "...#...#.........#..#..#....#..",
    "....#####.#.#.#....#..#........",
    ".##.#..#.#............###......",
    "##.#...##...##....#...#...##...",
    "..#.#.....#.......#..##..###.##",
    "#..##...........#.##.....#.##..",
    "#...#....#...#..##...#.#...#.#.",
    ".#..#...........###...#.#...#..",
    ".#.....#......#.#......#...#..#",
    ".#...##.##...............#....#",
    "..#.........#....#.............",
    ".#..##..#.#................#...",
    "..#.#.#.#.................#.#.#",
    "...#..#.#..#.#......#........#.",
    "##....#......###.#......#......",
    "..#....##.....#..#........#....",
    ".#.#....#...#.#.....###..#...#.",
    ".#..#...##.....#.#...#.....#.#.",
    "...#....#....##....##.....#....",
    ".......#...#...##..#.#.......#.",
    ".###..#..###.#.#.#.#.#.....##..",
    "....#.#......###.#....#....#..#",
    "##.....#.....##.#.....#....#...",
    "......#...##...#..#.#.....#....",
    "...#.........###.....#..##.....",
    "....#...#..#....#..#.........##",
    ".#........#..#.....#.##.#....#.",
    ".......#......#.##...##.#..#...",
    "#......#.......##..##..#.#.....",
    "..#.##..........#.#..#......#..",
    "#.....#.......#......#.........",
    "...##......##...........#.#....",
    ".#....#........#...#.#..#.....#",
    ".#...#...##......##...##...##.#",
    ".#.#.##.....##....#.#.#..#.....",
    "...#..#........#.....#.#.#####.",
    "#..#..#......#....##....##.....",
    ".#.............#....###.##.#...",
    ".#....#.......#.#.....#......##",
    "#..#.#.#........#...#..#...#...",
    "#.#.#.....#.......#.##..#.....#",
    "..#....#.....#...##.#...##.....",
    "......#..#.............###...#.",
    "..#...#.#....###...#...........",
    ".........#..#..#....#..#.......",
    "#....#.....#..#....#.#..##.....",
    ".#..#.#.....#...##.....##......",
    ".....####..#..#......#....##..#",
    "#.#....#....#.##.......#.#.....",
    "....#.#.............##..#.#...#",
    "....#.#.#.....##.....##..#...#.",
    ".#..#...#....#...#.#....#...#..",
    ".#..#.#.#.......#...#..........",
    "...##..#..#...##.....#.......#.",
    "..##...##.#..#.......#.........",
    ".##.#.......##...#...#......#.#",
    "##.#.#..#...#............#.....",
    "..#.##...##..#....##..#......#.",
    "...#..........#.....#.#........",
    "...#..#..#.......#.#.....##....",
    "##.............#.....#.##...#..",
    "#.#......#........#...#.##..#.#",
    "...#..#...##.#.#........#.#....",
    "#.....##...........#....#......",
    "...##....#..#.#...#........#...",
    "..##..####..#..#...............",
    ".#.#..#......#.##.........##.#.",
    ".##....#...##.#...#..##..#.....",
    "........#........#.###.#.#....#",
    "......##...#......#..#..#......",
    "..#.......#...#..##........#..#",
    ".#....###..###....###...##.#.##",
    "#.#....#..#.#...#.#...##...#...",
    "..#..##......#..#......####....",
    ".#....###.......#...##...#.....",
    "...#....#..#.....#..#...####.#.",
    "............#.####..##...#..##.",
    ".#..#.......#....#...#......#.#",
    ".......#.......#..#.#..........",
    "...#.#............#..#......#..",
    "..#...........#...##......#...#",
    "...##......#.........#.#...#.##",
    ".#..#..#..#......#...........#.",
    "....#.....#.###........#.......",
    "..##.#.#........#.#...##....#..",
    ".#.#........##....#...#......#.",
    ".......#.##..###...............",
    "#..#...##.....##........##....#",
    "...####........#...#.........##",
    "...#..............##..#........",
    "......#.....#....#.......#....#",
    "..###......#..##.....##....##..",
    "##...#.....#..#.#.#...#.....#..",
    "...#....#............#.........",
    "..#..##...#..#.........#.......",
    ".#.#.#...##..........#..###....",
    ".......##.#.#.#...#.#...#.....#",
    "..#..#..#..#...###.....#.##....",
    ".#.#.....#.....##.#..#...###..#",
    ".........#..##......##...##.#.#",
    "#.........##..#......#..#.#.#..",
    ".#..##.#.##......##........#...",
    "..#...#.....##..#......#.....##",
    ".#..#...#......#..#...#.....##.",
    "..#..##...#.....#.....#........",
    "....##..#....#.#....#......#.#.",
    "..#.......##..#..#.##.#..#...##",
    "...#..........#...#..##........",
    "..#............#.#......#......",
    ".#...##.......#...#.#........#.",
    ".#...#....#..#....#....#.#...#.",
    "......#..#.#..#..............#.",
    ".....#.##.#...............##.##",
    ".#...............#.....#..#...#",
    ".#..##.......#.#...#..#..#....#",
    "..#..###.##........##..........",
    ".#....#..##...#.#.........#....",
    ".......#.....#....###...##.#.#.",
    "##..#.#...##.##.##....##.#.###.",
    "#.#...........#..#.#...........",
    "....#..#..#..#...#....#.......#",
    "........##....#..#......##.#...",
    ".#.#..##...##...#....#..#.###..",
    "#..##....#..#...#.......##.....",
    "..###..#.###......#..####....#.",
    ".....#..#........##.#..#.......",
    ".#......##..............#.#.#..",
    "..#.#.......##...#....#.#.###..",
    "#..#..#...###..#...............",
    "......#..#.....#..#..#...#.....",
    ".#...#..........###..#..#.#....",
    ".#......##..#......#.....###..#",
    ".......#...#..#....###.....#...",
    "#....#.......###.##.....##....#",
    "..#.....#..##..#.........##....",
    ".....##....#.#......#..........",
    "....#...#...#......##.....##.#.",
    "........#.#.#......#...........",
    ".#....#...#...#....#.....#...#.",
    "..............#..##.#.....###.#",
    ".#......##.....##...#....#.....",
    ".............#.##......#.....#.",
    ".#....#.#............#.#..##...",
    ".#...##.......#..#...##....#...",
    ".#.....#..........#............",
    "#.#.#........#.....#..#....##..",
    "#....#.##......#...#...........",
    "........#.##.....#...##.....#..",
    "..#.##....#.##.#...#.#.#....#..",
    "......#.......####......#.#...#",
    "#...#.##.####......#.....##....",
    ".#..#....#.......#...##.....#..",
    "................#......#.##....",
    "###...##..#.#..........#....#.#",
    "#.#..#.....#..##.##.##...#...##",
    "..#.......#.......#..##..#..##.",
    "......#.##.......#..#.....#...#",
    ".##..##..#.#.......#..#......#.",
    "....##.#....#...##.#..#.....#.#",
    "..#..#.........###.#...........",
    "....#.......#....##......#....#",
    "..........#...#......#....#...#",
    "..#.#....###.....#..#.#.#..#...",
    ".....#...##..#.##........####..",
    "##.............#....##........#",
    "..#..........#..##.#...........",
    "##.#.......#.#....#......#.#...",
    "........####.....##.#.........#",
    ".....#...#.#.....#.##..##.#....",
    "........#...#.#.#.#...#......#.",
    ".#..#.#....#.#...##.....#..#...",
    ".....#.#............#.#.#......",
    "....##.#...#...#.##...##.......",
    ".........#.##.....#.......#...#",
    "...........###....#.#....#...#.",
    ".#..#.###......#..#............",
    "#...#..#......#.#...#......#...",
    "..##.#.#........#........##..##",
    "..#.#.##..##....#........#.#.#.",
    "...#........###......#.#.....#.",
    "#.#.#.##........#.#...#..#.....",
    "#..#...............#...#.#...#.",
    ".....##......#...#.....#..#....",
    "............#...#...#.##.#....#",
    "...#..#..#...##.#....#.#..#.#..",
    "##.#..#..............##........",
    ".#.#..#.#..#....##..#.#.##.##..",
    "......######....##.....#.......",
    ".#.......#..........#.#..#.#..#",
    "..........#.#......#...##......",
    "#..........#.#..#.............#",
    "...#...#..#....................",
    "....#...#.....#.....##.....#...",
    "..#....##.....#..#......#......",
    ".#.#.....#..##.##..........###.",
    ".#.##....#....#....#....#...#..",
    "..##.....................##.#..",
    ".....#..##....#.#.....##..#....",
    ".####...#...##..#.##...#..#....",
    ".........#.#...#.......###.....",
    "...#..#........#..#..##.....#..",
    "..#....#....#....###.....#.....",
    "......#....#..#.........#......",
    "#.#...#..#..#.#...#..#.#......#",
    "..........#..........#.#.##....",
    ".#..###..##..#....#.#.....#..#.",
    ".##......#..#.##...#.........#.",
    "...##...#....#.........#..#....",
    "....#..##........#.........#...",
    ".........##....#...#.#.....#..#",
    ".#..........##...#..#.#..##....",
    "#.......#...#...#............#.",
    ".....##.#.##.......#.......#...",
    "...........#...#.....###.....#.",
    "#..................#.##..##...#",
    ".........##.............#...#.#",
    "#.#.....##...#........###....##",
    "...##..#.##.....###.....#......",
    "..#...#.#..#......##.#.......#.",
    ".........##.#...........###..#.",
    "..#...#.....#...#.#.....#..#...",
    ".....##..#...#.#.#....#.....###",
    "..#.#....#..#..#..#....#.#...#.",
    "........##....#......#....#..#.",
    ".##..#.....#.#....#..#.###.....",
    "..............##.........#.#.#.",
    ".##....#.#..#..#...#..........#",
    ".....##.......#....#..#......#.",
    "...#.#....................#..##",
    "#.##..#.#...#...#....#.#....##.",
    "...#.#..#.###................#.",
    ".....##..#.##.#.#.........#.#..",
    ".................##..........#.",
    "..#......#........#.#....#.....",
    "#......##......#......###....#.",
    "....##....#..#..####......#...#",
    ".##.##.........#...#..#....#.#.",
    ".#..#....##...##..#...........#",
    "#...#......#...#...........#...",
    "...#...####.............##..#..",
    ".....#....##............##....#",
    "......##.#...##...........#.#..",
    "..#......##.....###.......#.###",
    "...#...#......#...##.#........#",
    ".#.........##.##......##.......",
    "....................#....#....#",
    ".#.#.#........##.#....#.....#..",
    "#.#.....####..#.........#.#.#..",
    "...####..#..............#.#....",
    "....#.#....#..........#....#...",
    ".#..#..#.#...#..#.#............",
    ".#.#.......##........##.....#..",
    "#.#.##..#.....##......##....#.#",
    "......#...#...#...#......#.....",
    ".........##..#.....#.####.#.#..",
    ".....#....#.###...#.###.#..#..#",
    "..#.#..#..#.......#.......##...",
    ".....#.........#......##.#....#",
    "..#.#.##....#.#...............#",
    ".....#..#....##......##..###..."
]
// const tobogganRun = [
//     "..##.......",
//     "#...#...#..",
//     ".#....#..#.",
//     "..#.#...#.#",
//     ".#...##..#.",
//     "..#.##.....",
//     ".#.#.#....#",
//     ".#........#",
//     "#.##...#...",
//     "#...##....#",
//     ".#..#...#.#"
// ]
module.exports = tobogganRun;
