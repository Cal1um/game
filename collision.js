export default class Collision {
    constructor(game, tile, projectileup, projectiledown, projectileleft, projectileright, player){
        this.game = game;
        this.colliding = 0;
        this.tile = tile;
        this.projectiledown = projectiledown;
        this.projectileleft = projectileleft;
        this.projectileright = projectileright;
        this.projectileup = projectileup;
        this.player = player;
    }
    update(deltaTime){
        
        this.object = [...this.game.tile, this.player, ...this.projectiledown.projectiles, ...this.projectileup.projectiles, ...this.projectileleft.projectiles, ...this.projectileright.projectiles]
        this.collider = [...this.game.tile, this.player]

        this.object.forEach((Object) => {
            this.collider.forEach((Collider) => {
                //Top Right Left
                if(Collider.position.x <= Object.position.x + Object.width - Object.maxspeed.x && Object.position.x + Object.width - Object.maxspeed.x <= Collider.position.x && Collider.position.y < Object.position.y && Object.position.y < Collider.position.y + Collider.size){
                    Object.position.x = Collider.position.x - Object.width
                }
                //Top Right up
                if(Collider.position.y + Collider.size <= Object.position.y + Object.maxspeed.y && Object.position.y + Object.maxspeed.y <= Collider.position.y + Collider.size && Collider.position.x < Object.position.x + Object.maxspeed.y && Object.position.x + Object.maxspeed.y < Collider.position.x + Collider.size){
                    Object.position.y = Collider.position.y + Collider.size
                }                
                //Bottum Right Left
                if(Collider.position.x <= Object.position.x + Object.width - Object.maxspeed.x && Object.position.x + Object.width - Object.maxspeed.x <= Collider.position.x && Collider.position.y < Object.position.y + Object.height && Object.position.y + Object.height < Collider.position.y + Collider.size){
                    Object.position.x = Collider.position.x - Object.width
                }
                //Bottum Right down
                if(Collider.position.y <= Object.position.y + Object.width - Object.maxspeed.y && Object.position.y + Object.width - Object.maxspeed.y <= Collider.position.y && Collider.position.x < Object.position.x + Object.width && Object.position.x + Object.width < Collider.position.x + Collider.size){
                    Object.position.y = Collider.position.y - Object.width
                }
                //Top Left Right 
                if(Collider.position.x + Collider.size <= Object.position.x + Object.maxspeed.x && Object.position.x + Object.maxspeed.x <= Collider.position.x + Collider.size && Collider.position.y < Object.position.y + Object.maxspeed.x && Object.position.y + Object.maxspeed.x < Collider.position.y + Collider.size){
                    Object.position.x = Collider.position.x + Collider.size
                }
                //Top Left up
                if(Collider.position.y + Collider.size <= Object.position.y + Object.maxspeed.y && Object.position.y + Object.maxspeed.y <= Collider.position.y + Collider.size && Collider.position.x < Object.position.x + Object.width && Object.position.x + Object.width < Collider.position.x + Collider.size){
                    Object.position.y = Collider.position.y + Collider.size
                }
                //Bottum Left Right
                if(Collider.position.x + Collider.size <= Object.position.x + Object.maxspeed.x && Object.position.x + Object.maxspeed.x <= Collider.position.x + Collider.size && Collider.position.y < Object.position.y + Object.height - Object.maxspeed.x && Object.position.y + Object.height - Object.maxspeed.x < Collider.position.y + Collider.size){
                    Object.position.x = Collider.position.x + Collider.size
                }
                //Bottum Left down
                if(Collider.position.y <= Object.position.y + Object.width - Object.maxspeed.y && Object.position.y + Object.width - Object.maxspeed.y <= Collider.position.y && Collider.position.x < Object.position.x && Object.position.x < Collider.position.x + Collider.size){
                    Object.position.y = Collider.position.y - Object.width
                }
            }) 
        });
    }
    check(){
        console.log(this.game.tile)
    }
    draw(){}
}
