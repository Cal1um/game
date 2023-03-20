export default class ProjectileDely {
    constructor(){
        this.dely = 0

        this.time = 0
        this.delybetweenshot = 36

    }
    update(){
        this.time++
        if(this.dely >= 1){
            this.dely = 1
            this.time = 0
        }
        if(this.time >= this.delybetweenshot){
            if(this.dely < 1){
                this.dely++
                this.time = 0
            }
        }
        
        this.objects = [...this.game.projectileleft.projectiles, ...this.game.projectileright.projectiles, ...this.game.projectileup.projectiles, ...this.game.projectiledown.projectiles]
        this.objects.forEach(projectile => {
            if(projectile.position.x < 0){
                projectile.delete = true
            }
            if(projectile.position.x + projectile.width > projectile.gameWidth){ 
                projectile.delete = true
            }
            if(projectile.position.y < 0){
                projectile.delete = true
            }
            if(projectile.position.y + projectile.height > projectile.gameHeight){
                projectile.delete = true
            }
        })
    }

    draw(){

    }
}