var process = require('child_process');
process.exec('ifconfig',function (err,stdout,stderr) {
    if (err) {
        console.log("\n"+stderr);
    } else {
        console.log(stdout);
    }
});

/*



var wmn_count = 0;
var bmn_count = 0;
var wmn = document.getElementById("white_move_number");
var bmn = document.getElementById("black_move_number");

var staring_position_white_pawn = ["_2A","_2B","_2C","_2D","_2E","_2F","_2G","_2H"];
var promote_position_white_pawn = ["_8A","_8B","_8C","_8D","_8E","_8F","_8G","_8H"];
var staring_position_black_pawn = ["_7A","_7B","_7C","_7D","_7E","_7F","_7G","_7H"];
var promote_position_black_pawn = ["_1A","_1B","_1C","_1D","_1E","_1F","_1G","_1H"];
var white_castle_kingside = []; // king pos and rook pos
var black_castle_kingside = []; // king pos and rook pos
var black_king_in_check = 0;
var white_king_in_check = 0;
var white_pawn = {
"move":"1",
"attack":"1D"
}
var black_pawn = {
"move":"1",
"attack":"1D"
}
var rook = {
"move":"los",
"attack":"los"
}
var bishop = {
"move":"losD",
"attack":"losD"
}
var knight = {
"move":{"l1":{"vert":"2","horz":"1"},"l2":{"vert":"1","horz":"2"}},
"attack":{"l1":{"vert":"2","horz":"1"},"l2":{"vert":"1","horz":"2"}}
}
var queen = {
"move":{"move1":"los","move2":"losD"},
"attack":{"attack1":"los","attack2":"losD"}
}
var king = {
"move":{"move1":"1","move2":"1D"},
"attack":{"attack1":"1","attack2":"1D"}
}


*/



/*
isundo = 0;

selected = board[out2.id];
selected_color = w_b_m(id);

action_flag=0;
console.log("--------------------");
console.log("last_selected: " + last_selected);
console.log("selected: " + selected);
console.log("move_number: " + move_number);

lock_by_mod = move_number%2;
if(whose_turn == 1){console.log("whose_turn: black" + "  lock_by_mod: " + lock_by_mod);}
if(whose_turn == 0){console.log("whose_turn: white" + "  lock_by_mod: " + lock_by_mod);}

if(selected !== undefined && last_selected !== undefined){
console.log("whose_turn " + whose_turn + " && last_selected_color " + last_selected_color + " last_selected " + last_selected);
if((whose_turn == 1 && last_selected_color == "b" && lock_by_mod == 1) || (whose_turn == 0 && last_selected_color == "w" && lock_by_mod == 0) && (last_selected != "marker") && (last_selected != selected))
{
console.log("inside exe");
var in2 = document.getElementById(last_selected_id);

if(last_selected != "marker" && selected == "marker" && last_selected != selected && in2.id != "marker" && in2.id != "" && first_click == 0){move_piece(out2,in2,out2.id,in2.id,in2,out2,isundo);}
else{
if(last_selected_color != selected_color && selected != "marker" && in2.id != "marker" && in2.id != "" && first_click == 0){take_piece(out2,in2,out2.id,in2.id,in2,out2,isundo);}
action_flag=1;
}
}
} //  if(selected !== undefined && last_selected !== undefined){

if(action_flag == 0){
console.log("inside new_turn = 1 "); 
itr++;
undo=0;
last_selected_id = out2.id;
last_selected = selected;
last_selected_color = selected_color;
selected = board[out2.id];
selected_color = w_b_m(id);
new_turn=0;
first_click=0;
console.log("from_piece: " + last_selected);
console.log("to_piece: " + selected);
} //  if(action_flag == 0){
*/




/*
var white_graveyard = {};
var black_graveyard = {};

var game = [];
game[0]=board;
var front_game = [];
front_game[0]=innerhtml;



var moves = [];
var move_number = 0;

var black_square = ["_8A","_8C","_8E","_8G","_7B","_7D","_7F","_7H","_6A","_6C","_6E","_6G","_5B","_5D","_5F","_5H","_4A","_4C","_4E","_4G","_3B","_3D","_3F","_3H","_2A","_2C","_2E","_2G","_1B","_1D","_1F","_1H"]

var whose_turn = 0;
var lock_by_mod=move_number%2;;

var selected; // = "init";
var selected_color;
var last_selected;
var last_selected_color="w";
var last_selected_id;
var itr = 0;
var undo=0;
var isundo=0;
var action_flag=0;
var new_turn=0;
var first_click=1;


TO DO:: !!!

when capturing a piece don't replicate : inject black space to from

recoginize valid moves

matrix to frontend mapping function

sucessive captures at the same location causes an error

js events, css, and html.  I made it like a world.  
Right now it only has rules for what players turn it is, to ignore empty spaces, and that a player can’t take their own pieces.  
I need to make:
the different piece classes, 
special case handling, 
win detection, 
feedback, 
graveyard for taken pieces, 
back / forward buttons, 
computer player, 
online vs, possible move feedback.
*/


/*


function show_moves(board)
{

}



function take_back()
{
if(undo == 0)
{
if(moves[move_number][4] == "move"){move_piece(moves[move_number][0],moves[move_number][1],moves[move_number][2],moves[move_number][3],moves[move_number][5],moves[move_number][6],1);}
else{take_piece(moves[move_number][0],moves[move_number][1],moves[move_number][2],moves[move_number][3],moves[move_number][5],moves[move_number][6],1);}
undo=1;
if(move_number>0){move_number--;}
}
}


function is_b(id)
{
var is_b = black_square.includes(id);
return is_b;
}


function w_b_m(id)
{
var p_class = document.getElementById(id);
var piece = JSON.stringify(board[p_class.className]);
var player = piece.slice(1,2);
//console.log(player);
if(player == "b"){return "b";}
if(player == "w"){return "w";}
if(player == "m"){return "m";}
}

function move_piece(to_ele,from_ele,to_id,from_id,in2,out2,isundo)
//function move_piece(to_ele,from_ele,from_id,to_id,in2,out2,isundo)
{
if(isundo == 0){
move_number++;
moves[move_number]=[from_ele,to_ele,from_id,to_id,"move",in2,out2];
}

from_color = w_b_m(from_id);
to_color = w_b_m(to_id);

var here = innerhtml[from_id].indexOf(".png");
var there = innerhtml[to_id].indexOf(".png");
var player1 = innerhtml[from_id].slice(10,here);
var player2 = innerhtml[to_id].slice(10,there);

innerhtml[to_id] = innerhtml[to_id].replace(player2, player1);

if(to_color == "m"){
var is_b = black_square.includes(from_id);
if(is_b){console.log("blank swap1"); innerhtml[from_id] = innerhtml[from_id].replace(player1, "grey");}
if(!is_b){console.log("blank swap2"); innerhtml[from_id] = innerhtml[from_id].replace(player1, "brown");}
}

from_ele.innerHTML = innerhtml[from_id];
to_ele.innerHTML = innerhtml[to_id];
//console.log("from_ele.innerHTML: " + from_ele.innerHTML);
//console.log("to_ele.innerHTML: " + to_ele.innerHTML);

board[in2.id] = selected;
board[out2.id] = last_selected;
console.log("board[from_id]: " + board[in2.id]);
console.log("board[to_id]: " + board[out2.id]);

//console.log("whose_turn: " + whose_turn);
if(whose_turn == 1){whose_turn=0;}
else{whose_turn=1;}
//console.log("whose_turn: " + whose_turn);
//console.log('inside : selected == "marker"');

if(lock_by_mod == 0){bmn_count++; bmn.innerHTML=bmn_count; leave("black_move_number"); hover("white_move_number");}
if(lock_by_mod == 1){wmn_count++; wmn.innerHTML=wmn_count; leave("white_move_number"); hover("black_move_number");}


itr++;
console.log("move_number: " + move_number);
//if(move_number == 2){last_selected_id = "";}
//if(move_number > 1 && from_id != "marker"){last_selected_id = out2.id;}
//if(move_number == 1){console.log("no last_selected_id first move: " + last_selected_id);}
console.log("from_piece: " + last_selected);
console.log("to_piece: " + selected);
if(from_id != "marker"){last_selected_id = out2.id;}
undo=0;
//if(move_number > 1){
last_selected = selected;
last_selected_color = selected_color;
//}
selected = board[out2.id];
selected_color = w_b_m(out2.id);
//if(move_number > 1){selected_color = w_b_m(out2.id);}
//if(move_number == 1){selected_color="w";}
new_turn=1;
first_click=1;
}






// to_ele,from_ele,to_id,from_id
function take_piece(to_ele,from_ele,to_id,from_id,in2,out2,isundo)
//function take_piece(to_ele,from_ele,from_id,to_id,in2,out2,isundo)
{
if(isundo == 0){
move_number++;
moves[move_number]=[from_ele,to_ele,from_id,to_id,"take",in2,out2];
}

from_color = w_b_m(from_id);
to_color = w_b_m(to_id);

var here = innerhtml[from_id].indexOf(".png");
var there = innerhtml[to_id].indexOf(".png");
var player1 = innerhtml[from_id].slice(10,here);
var player2 = innerhtml[to_id].slice(10,there);

innerhtml[to_id] = innerhtml[to_id].replace(player2, player1);

var is_b = black_square.includes(from_id);
if(is_b){console.log("grey.png"); innerhtml[from_id] = innerhtml[from_id].replace(player1, "grey");}
if(!is_b){console.log("brown.png"); innerhtml[from_id] = innerhtml[from_id].replace(player1, "brown");}

// move piece img to taken at side of player

from_ele.innerHTML = innerhtml[from_id];
to_ele.innerHTML = innerhtml[to_id];
console.log("from_ele.innerHTML: " + from_ele.innerHTML);
console.log("to_ele.innerHTML: " + to_ele.innerHTML);

//var temp = board;
board[in2.id] = selected;
board[out2.id] = last_selected;
//if(move_number == 1){
//board[in2.id] = "marker";
//board[out2.id] = last_selected;
//}



console.log("board[from_id]: " + board[in2.id]);
console.log("board[to_id]: " + board[out2.id]);

//console.log("whose_turn: " + whose_turn);
if(whose_turn == 1){whose_turn=0;}
else{whose_turn=1;}

if(lock_by_mod == 0){bmn_count++; bmn.innerHTML=bmn_count; leave("black_move_number"); hover("white_move_number");}
if(lock_by_mod == 1){wmn_count++; wmn.innerHTML=wmn_count; leave("white_move_number"); hover("black_move_number");}



itr++;
console.log("move_number: " + move_number);
//if(move_number == 2){last_selected_id = "";}
//if(move_number > 1 && from_id != "marker"){last_selected_id = out2.id;}
//if(move_number == 1){console.log("no last_selected_id first move: " + last_selected_id);}
console.log("from_piece: " + last_selected);
console.log("to_piece: " + selected);
if(from_id != "marker"){last_selected_id = out2.id;}
undo=0;
//if(move_number > 1){
last_selected = selected;
last_selected_color = selected_color;
//}
selected = board[out2.id];
selected_color = w_b_m(out2.id);
//if(move_number > 1){selected_color = w_b_m(out2.id);}
//if(move_number == 1){selected_color="w";}
new_turn=1;
first_click=1;
}


*/





.grid-containerGROUPS{
    display: grid;
    border: 1px solid #ccc;
    grid-template-columns: 2.75vw;
    grid-auto-columns: 2.75vw;
    column-gap: 5.75vw;
    max-width:40vw;
    justify-items: center;
    padding-bottom: 1vw;
    padding-top: 1vw;
    }



/*
column-gap: 0vw;
<div class="shell"><div id="base" class="grid-container"></div></div>
*/


var characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';


innerhtml.push({num : 3, app:'helloagain_again'});

var tempData = {};
for ( var index in data ) {
  if ( data[index].Status == "Valid" ) { 
    tempData[index] = data; 
  } 
 }
data = tempData;


.grid-container{
    max-width: 100vw;
    max-height: 100vh;
    margin-left: auto; 
    margin-right: auto;
    }


    var image_selector=[
        white_pawn,
        white_rook,
        white_knight,
        white_bishop,
        white_queen,
        white_king,
        black_queen,
        black_king,
        black_bishop,
        black_knight,
        black_rook,
        black_pawn,
        brown_base,
        grey_base
        ];


        function sudo_random_int(length){
            var result='';
            var characters='0123456789';
            var charactersLength=characters.length;
            for(var i=0;i<length;i++){result+=characters.charAt(Math.floor(Math.random()*charactersLength));}
            return result;
            }


            if(new_img1>5){while(new_img>30){new_img=Math.floor(Math.random() * 31);}}



/*
function var_to_string(var_name){
var varToString = varObj => Object.keys(varObj)[0]
var displayName = varToString({ var_name })
console.log(displayName)
return displayName;
}


<html>
<head>
  <script type="text/javascript">
    function displayFile(whatOption, whatColor) {
      var Test01 = {
        rectangle: {
          red: "RectangleRedFile",
          blue: "RectangleBlueFile"
        },
        square: {
          red: "SquareRedFile",
          blue: "SquareBlueFile"
        }
      };
      var filename = Test01[whatOption][whatColor];
      alert(filename);
    }
<!--
  <p onclick="displayFile('rectangle', 'red')">[ Rec Red ]</p>
  <br/>
  <p onclick="displayFile('square', 'blue')">[ Sq Blue ]</p>
  <br/>
  <p onclick="displayFile('square', 'red')">[ Sq Red ]</p>
-->
*/

//var image=image_selector[new_img];
//innerhtml[white_pawn]=image;
//var wpv;

function createVariable(varName,varContent)
{
var scriptStr = "var "+varName+"= \""+varContent+"\""
var node_scriptCode = document.createTextNode( scriptStr )
var node_script = document.createElement("script");
node_script.type = "text/javascript"
node_script.appendChild(node_scriptCode);
var node_head = document.getElementsByTagName("head")[0]
node_head.appendChild(node_script);
}
/*
var image_name="white_pawn";
var inner_html='<img src=' + image_name + '.png style="width:' + lambda_size + ';height:' + lambda_size + '; background-color: ' + lambda_background_color + ';"/>'
createVariable(var_name, inner_html);
//console.log(white_pawn)

//var white_pawn='<img src=' + window['white_pawn'].toString(10); + '.png style="width:' + lambda_size + ';height:' + lambda_size + '; background-color: ' + lambda_background_color + ';"/>';
//wpv=var_to_string(white_pawn);
console.log("white_pawn: " + white_pawn);
var white_rook='<img src="white_rook.png" style="width:' + lambda_size + ';height:' + lambda_size + '; background-color: ' + lambda_background_color + ';"/>';
var white_knight='<img src="white_knight.png" style="width:' + lambda_size + ';height:' + lambda_size + '; background-color: ' + lambda_background_color + ';"/>';
var white_bishop='<img src="white_bishop.png" style="width:' + lambda_size + ';height:' + lambda_size + '; background-color: ' + lambda_background_color + ';"/>';
var white_queen='<img src="white_queen.png" style="width:' + lambda_size + ';height:' + lambda_size + '; background-color: ' + lambda_background_color + ';"/>';
var white_king='<img src="white_king.png" style="width:' + lambda_size + ';height:' + lambda_size + '; background-color: ' + lambda_background_color + ';"/>';
var black_queen='<img src="black_queen.png" style="width:' + lambda_size + ';height:' + lambda_size + '; background-color: ' + lambda_background_color + ';"/>';
var black_king='<img src="black_king.png" style="width:' + lambda_size + ';height:' + lambda_size + '; background-color: ' + lambda_background_color + ';"/>';
var black_bishop='<img src="black_bishop.png" style="width:' + lambda_size + ';height:' + lambda_size + '; background-color: ' + lambda_background_color + ';"/>';
var black_knight='<img src="black_knight.png" style="width:' + lambda_size + ';height:' + lambda_size + '; background-color: ' + lambda_background_color + ';"/>';
var black_rook='<img src="black_rook.png" style="width:' + lambda_size + ';height:' + lambda_size + '; background-color: ' + lambda_background_color + ';"/>';
var black_pawn='<img src="black_pawn.png" style="width:' + lambda_size + ';height:' + lambda_size + '; background-color: ' + lambda_background_color + ';"/>';
var brown_base='<img src="brown.png" style="width:' + lambda_size + ';height:' + lambda_size + '; background-color: ' + lambda_background_color + ';"/>';
var grey_base='<img src="grey.png" style="width:' + lambda_size + ';height:' + lambda_size + '; background-color: ' + lambda_background_color + ';"/>';
var eth='<img src="ether.png" style="width:' + lambda_size + ';height:' + lambda_size + '; background-color: ' + lambda_background_color + ';"/>';
var rvn='<img src="rvn.png" style="width:' + lambda_size + ';height:' + lambda_size + '; background-color: ' + lambda_background_color + ';"/>';
var grin='<img src="grin.png" style="width:' + lambda_size + ';height:' + lambda_size + '; background-color: ' + lambda_background_color + ';"/>';
var xzc='<img src="xzc.png" style="width:' + lambda_size + ';height:' + lambda_size + '; background-color: ' + lambda_background_color + ';"/>';
var beam='<img src="beam.png" style="width:' + lambda_size + ';height:' + lambda_size + '; background-color: ' + lambda_background_color + ';"/>';
var xmr='<img src="xmr.png" style="width:' + lambda_size + ';height:' + lambda_size + '; background-color: ' + lambda_background_color + ';"/>';

var ae='<img src="ae.png" style="width:' + lambda_size + ';height:' + lambda_size + '; background-color: ' + lambda_background_color + ';"/>';
var etc='<img src="etherclassic.png" style="width:' + lambda_size + ';height:' + lambda_size + '; background-color: ' + lambda_background_color + ';"/>';
var suqa='<img src="suqa.png" style="width:' + lambda_size + ';height:' + lambda_size + '; background-color: ' + lambda_background_color + ';"/>';
var clo='<img src="clo.png" style="width:' + lambda_size + ';height:' + lambda_size + '; background-color: ' + lambda_background_color + ';"/>';
var hth='<img src="hth.png" style="width:' + lambda_size + ';height:' + lambda_size + '; background-color: ' + lambda_background_color + ';"/>';
var music='<img src="music.png" style="width:' + lambda_size + ';height:' + lambda_size + '; background-color: ' + lambda_background_color + ';"/>';

var btg='<img src="btg.png" style="width:' + lambda_size + ';height:' + lambda_size + '; background-color: ' + lambda_background_color + ';"/>';
var aion='<img src="aion.png" style="width:' + lambda_size + ';height:' + lambda_size + '; background-color: ' + lambda_background_color + ';"/>';
var btcz='<img src="btcz.png" style="width:' + lambda_size + ';height:' + lambda_size + '; background-color: ' + lambda_background_color + ';"/>';
var xsg='<img src="xsg.png" style="width:' + lambda_size + ';height:' + lambda_size + '; background-color: ' + lambda_background_color + ';"/>';
var anon='<img src="anon.png" style="width:' + lambda_size + ';height:' + lambda_size + '; background-color: ' + lambda_background_color + ';"/>';
var nice='<img src="nice.png" style="width:' + lambda_size + ';height:' + lambda_size + '; background-color: ' + lambda_background_color + ';"/>';
*/


//var image=image_selector[new_img];
//var image=inner_html;
//innerhtml[new_key]=image;
/*
out2.innerHTML=""

var btg='<img src="btg.png" style="width:' + lambda_size + ';height:' + lambda_size + '; background-color: ' + lambda_background_color + ';"/>';
var here = out2.innerhtml[from_id].indexOf(".png");
var there = innerhtml[to_id].indexOf(".png");
var player1 = innerhtml[from_id].slice(10,here);
var player2 = innerhtml[to_id].slice(10,there);

innerhtml[to_id] = innerhtml[to_id].replace(player2, player1);

var is_b = black_square.includes(from_id);
if(is_b){console.log("grey.png"); innerhtml[from_id] = innerhtml[from_id].replace(player1, "grey");}
if(!is_b){console.log("brown.png"); innerhtml[from_id] = innerhtml[from_id].replace(player1, "brown");}

*/

//out2.style = "z-index: 2;transform: scale(1); width:" + new_lambda_size + 'px ;height:' + new_lambda_size + 'px ; background-color: ' + lambda_background_color + ';"';
//out2.style = "z-index: 2; width:" + new_lambda_size + '; height:' + new_lambda_size + '; background-color: ' + new_lambda_background_color + ';"';
console.log("new_lambda_size: " + new_lambda_size);
console.log("new_lambda_background_color: " + new_lambda_background_color);
//console.log("out2.style: " + out2.style.toString(10));




//function lamda_link(basename,inner_html,id,url,classname,infoid,infoclass,infoinnerhtml)



while(new_img>image_selector.length){console.log("inside fallback loop: " + new_img); new_img=Math.floor(Math.random() * image_selector.length);}



//var grid_high=Math.floor(parseInt((screen_height/grid_wide))); //-1
//var total_grid_squares=grid_wide*grid_high;


