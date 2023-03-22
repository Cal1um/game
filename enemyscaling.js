export default class EnemyScaling {
    constructor(game) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.game = game

        this.enemyhealth = 6
        this.enemydamage = 1
        this.enemyspeed = {
            x: 2.5,

            y: 2.5
        }
        this.enemymaxspeed = {
            x: 2.5,

            y: 2.5
        }

        this.bosshealth = 50
        this.bossdamage = 1
        this.bossspeed = {
            x: 3,

            y: 3
        }
        this.bossmaxspeed = {
            x: 3,

            y: 3
        }
        this.heal = 1

        this.floorscleared = 0
    }

    scale(){
        this.enemydamage *= 1.4
        this.enemyhealth *= 1.4
        if(this.enemyhealth != 4){
            this.enemyspeed.x += 0.2
            this.enemyspeed.y += 0.2
            this.enemymaxspeed.x += 0.2
            this.enemymaxspeed.y += 0.2
        }

        this.bossdamage *= 1.4
        this.bosshealth *= 1.4
        if(this.enemyhealth != 4){
            this.bossspeed.x += 0.2
            this.bossspeed.y += 0.2
            this.bossmaxspeed.x += 0.2
            this.bossmaxspeed.y += 0.2
        }

        this.heal += 1
        this.floorscleared += 1
    }

    update(deltaTime){
    }

    draw(ctx){
    }

}