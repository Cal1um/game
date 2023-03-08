export default class Collision {
    constructor(game, tile, projectileup, projectiledown, projectileleft, projectileright, player){
        this.game = game;
        this.tile = tile;
        this.projectiledown = projectiledown;
        this.projectileleft = projectileleft;
        this.projectileright = projectileright;
        this.projectileup = projectileup;
        this.player = player;

        this.count = 0
        this.roomclear = 0
        this.clearroom = 0
        this.delete = false
    }
    update(deltaTime){
        
        this.object = [...this.game.tile, this.player, ...this.projectiledown.projectiles, ...this.projectileup.projectiles, ...this.projectileleft.projectiles, ...this.projectileright.projectiles]
        this.collider = [...this.game.tile, this.player, ...this.projectiledown.projectiles, ...this.projectileup.projectiles, ...this.projectileleft.projectiles, ...this.projectileright.projectiles]

        this.object.forEach((Object) => {
            this.collider.forEach((Collider) => {

                if(Collider != Object){
                    if(Object.position.y < Collider.position.y + Collider.height && Object.position.y > Collider.position.y && Object.position.x + Object.maxspeed.x > Collider.position.x && Object.position.x + Object.maxspeed.x < Collider.position.x + Collider.width || Object.position.y < Collider.position.y + Collider.height && Object.position.y > Collider.position.y && Object.position.x + Object.width - Object.maxspeed.x < Collider.position.x + Collider.width && Object.position.x + Object.width - Object.maxspeed.x > Collider.position.x){
                        Object.colliderUp(Collider)
                    }
                    if(Object.position.y + Object.height > Collider.position.y && Object.position.y < Collider.position.y + Collider.height && Object.position.x + Object.maxspeed.x > Collider.position.x && Object.position.x + Object.maxspeed.x < Collider.position.x + Collider.width || Object.position.y + Object.height > Collider.position.y && Object.position.y < Collider.position.y + Collider.height && Object.position.x + Object.width - Object.maxspeed.x < Collider.position.x + Collider.width && Object.position.x + Object.width - Object.maxspeed.x > Collider.position.x){
                        Object.colliderDown(Collider)
                    }
    
                    if(Object.position.x < Collider.position.x + Collider.width && Object.position.x > Collider.position.x && Object.position.y + Object.maxspeed.y > Collider.position.y && Object.position.y + Object.maxspeed.y < Collider.position.y + Collider.height || Object.position.x < Collider.position.x + Collider.width && Object.position.x > Collider.position.x && Object.position.y + Object.height - Object.maxspeed.y < Collider.position.y + Collider.height && Object.position.y + Object.height - Object.maxspeed.y > Collider.position.y){
                        Object.colliderRight(Collider)
                    }
                    if(Object.position.x + Object.width > Collider.position.x && Object.position.x < Collider.position.x + Collider.width && Object.position.y + Object.maxspeed.y > Collider.position.y && Object.position.y + Object.maxspeed.y < Collider.position.y + Collider.height || Object.position.x + Object.width > Collider.position.x && Object.position.x < Collider.position.x + Collider.width && Object.position.y + Object.height - Object.maxspeed.y < Collider.position.y + Collider.height && Object.position.y + Object.height - Object.maxspeed.y > Collider.position.y){
                        Object.colliderLeft(Collider)
                    }   
                }
            }) 
        });
        this.checkingroomclear = [...this.game.tile]

        this.checkingroomclear.forEach((Object) => {
            if(Object.id === 300 || Object.id === 400){
                this.count += 1
            }
            if(Object.id === 400){
                this.clearroom = 1
            }
        })
        this.roomclear = this.count
        this.count = 0
        if(this.roomclear === 0 && this.game.levels.length / 2 > this.game.layer[this.game.RightLeft][this.game.UpDown]){
            this.game.layer[this.game.RightLeft][this.game.UpDown] = this.game.layer[this.game.RightLeft][this.game.UpDown] + (this.game.levels.length / 2)
            this.clearroom = 1
            this.game.player.health += this.game.enemyscaling.heal
        }
        if(this.roomclear === 0){
            this.clearroom = 1
        }
    }
    draw(){}
}
