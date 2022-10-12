export default class InputHandler {
    constructor(player, projectileup, projectiledown, projectileleft, projectileright) {
        document.addEventListener('keydown', event => {
            switch (event.keyCode){


                case 38:
                   projectileup.shootup();
                   break;
                case 40:
                    projectiledown.shootdown();
                    break;

                case 37:
                    projectileleft.shootleft();
                    break;
                case 39:
                    projectileright.shootright();
                    break;

                
                case 65:
                    player.moveleft();
                    break;

                case 68:
                    player.moveright();
                    break;

                case 87:
                    player.moveup();
                    break;
                case 83:
                    player.movedown();
                    break;
                
                
            }

            
        });
        document.addEventListener('keyup', event => {
            switch (event.keyCode){

                case 38:
                   projectileup.shootstop();
                   break;
                case 40:
                    projectiledown.shootstop();
                    break;
                case 37:
                    projectileleft.shootstop();
                    break;
                case 39:
                    projectileright.shootstop();
                    break;
    



                case 65:
                    if(player.speed.x < 0)player.stopx();
                    break;

                case 68:
                    if(player.speed.x > 0)player.stopx();
                    break;

                case 87:
                    if(player.speed.y < 0)player.stopy();
                    break;
                case 83:
                    if(player.speed.y > 0)player.stopy();
                    break;
            }

            
        });
    }
}