import Rock from "/rock.js";
import Floor from "/floor.js";

export function buildLevel(game, level) {
    let tiles = [];

    level.forEach((row, rowIndex) => {
        row.forEach((tile, tileIndex) => {
            if(tile === 1) {

                let position = {
                    x: 90 * tileIndex,
                    y: 0 + 90 * rowIndex
                }
                tiles.push(new Rock(game, position));
            }
            if(tile === 0){
                let position = {
                    x: 90 * tileIndex,
                    y: 0 + 90 * rowIndex
                }
                tiles.push(new Floor(game, position));
            }
        })
        
    });

    return tiles
    
}

export const level1 = [
    [1,1,1,1,1,1,0,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,0,1,1,1,1,1,1]
];

