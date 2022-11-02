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
    }

    draw(){

    }
}