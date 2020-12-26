var canvas = new fabric.Canvas("myCanvas");

block_img_width = 30;
block_img_height = 30;

player_x = 10;
player_y = 10;
var player_object = "";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    })
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_object = Img;
        block_object.scaleToWidth(block_img_width);
        block_object.scaleToHeight(block_img_height);
        block_object.set({
             top:player_y,
             left:player_x
        });
        canvas.add(block_object);
    })
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '80' && e.shiftKey  ==  true){
        console.log("p and shift key is pressed together");
        block_img_height = block_img_height + 10;
        block_img_width = block_img_width + 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }
    if(keyPressed == '77' && e.shiftKey  ==  true){
        console.log("m and shift key is pressed together");
        block_img_height = block_img_height - 10;
        block_img_width = block_img_width - 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }

    if(keyPressed == '38'){
        console.log("up press");
        up();
    }

    
    if(keyPressed == '40'){
        console.log("down press");
        down();
    }

    
    if(keyPressed == '37'){
        console.log("left press");
        left();
    }


    if(keyPressed == '39'){
        console.log("right press");
        right();
    }

    if(keyPressed == '87'){
       new_image('wall.jpg');
       console.log("w");
    }

    if(keyPressed == '71'){
        new_image('ground.png');
        console.log("g");
     }

     if(keyPressed == '76'){
        new_image('light_green.png');
        console.log("l");
     }

     if(keyPressed == '84'){
        new_image('trunk.jpg');
        console.log("t");
     }

     if(keyPressed == '82'){
        new_image('roof.jpg');
        console.log("r");
     }

     if(keyPressed == '89'){
        new_image('yellow_wall.png');
        console.log("y");
     }

     if(keyPressed == '68'){
        new_image('dark_green.png');
        console.log("d");
     }

     if(keyPressed == '85'){
        new_image('unique.png');
        console.log("u");
     }

     if(keyPressed == '67'){
        new_image('cloud.jpg');
        console.log("c");
     }
}

function up(){
    if(player_y >= 0){
    player_y = player_y - block_img_height;
    console.log("block image height ="+block_img_height);
    console.log("When up arrow key pressed X = " + player_x + " ,Y = " + player_y);
    canvas.remove(player_object);
    player_update();
    }

}
function down(){
    if(player_y <= 500){
        player_y = player_y + block_img_height;
        console.log("block image height = " + block_img_height);
        console.log("When down arrow key pressed X = " + player_x + " ,Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x <= 700){
        player_x = player_x + block_img_width;
        console.log("block image width = "+block_img_width);
        console.log("When right arrow key pressed X = " + player_x + " ,Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x >= 0){
        player_x = player_x - block_img_width;
        console.log("block image width = "+block_img_width);
        console.log("When left arrow key pressed X = " + player_x + " ,Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}