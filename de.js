const f_generate_display_engine = (images_list,div_base_id) => {
const link_page_copyright=`
Copyright (c) 2018 Michael Neill Hartman. All rights reserved.
mnh_license@proton.me
https://github.com/hartmanm
`;
var base = document.getElementById("base");
var inner_html = {}
var image_selector=[]
function execute_z(){
var temp = inner_html;
var base = document.getElementById("base");
base.innerHTML="";
inner_html={}
inner_html=temp;
}
var fileInput = document.getElementById("csv"),
readFile = function () {
var reader = new FileReader();
reader.onload = function () {
document.getElementById('file_reader_out').innerHTML = reader.result;
var temp = document.getElementById('file_reader_out').innerHTML
var temp = temp.split(',');
image_selector=[]
inner_html = {}
execute_z();
for(var key of temp){if(key != ""){image_selector.push(key);console.log(key);}};
console.log(base.innerHTML);
reload();
};
reader.readAsBinaryString(fileInput.files[0]);
};
fileInput.addEventListener('change', readFile);
var fileInput_json = document.getElementById("json"),
readFile2 = function () {
var reader = new FileReader();
reader.onload = function () {
document.getElementById('file_reader_out').innerHTML = reader.result;
var temp = document.getElementById('file_reader_out').innerHTML
var map = temp;
execute_z();
image_selector=[]
inner_html = {}
console.log(map);
var jsonobj = JSON.parse(map);
for(var key in jsonobj){if(key != ""){image_selector.push(jsonobj[key]);console.log(jsonobj[key]);}};
reload();
};
reader.readAsBinaryString(fileInput_json.files[0]);
};
fileInput_json.addEventListener('change', readFile2);
function reload(){
var lambda_background_color="#7F9AB7"; //brown #B79C7F //grey #7F9AB7
var screen_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var screen_height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var resolution=screen_width*screen_height
console.log("resolution: " + resolution);
var w=22
var h=22
var grid_wide=Math.floor(parseInt((screen_width/w)));
var grid_long=Math.floor(parseInt((screen_height/h)));
var current_area=grid_wide*w*grid_long*h
console.log("current_area: " + current_area);
while(current_area > resolution)
{
w=w-1
h=h-1
grid_wide=Math.floor(parseInt((screen_width/w)));
grid_long=Math.floor(parseInt((screen_height/h)));
current_area=grid_wide*w*grid_long*h
console.log("resolution: " + resolution);
console.log("current_area: " + current_area);
console.log("w: " + w);
console.log("h: " + h);
console.log("grid_wide: " + grid_wide);
console.log("grid_long: " + grid_long);
}
var end =500000
var enter = 0
while((current_area < (resolution-500000)) && (enter < end))
{
grid_wide=grid_wide+1
grid_long=grid_wide
current_area=grid_wide*w*grid_long*h
console.log("resolution: " + resolution);
console.log("current_area: " + current_area);
console.log("w: " + w);
console.log("h: " + h);
console.log("grid_wide: " + grid_wide);
console.log("grid_long: " + grid_long);
console.log("enter: " + enter);
enter=enter+1
}
var total_grid_squares=Math.floor(w*h);
var additional_grid_squares = grid_wide
total_grid_squares=Math.floor(w*h+additional_grid_squares/grid_wide);
var lambda_size=grid_wide;
lambda_size.toString(10);
lambda_size=lambda_size + "px";
function sudo_random_char(length){
var result='';
var characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var charactersLength=characters.length;
for(var i=0;i<length;i++){result+=characters.charAt(Math.floor(Math.random()*charactersLength));}
return result;
}
function sudo_random_int(length){
var result='';
var characters='0123456789';
characters = characters.slice(0,image_selector.length);
var charactersLength=characters.length;
for(var i=0;i<length;i++){result+=characters.charAt(Math.floor(Math.random()*charactersLength));}
return result;
}
// HARDCODE
total_grid_squares=1225
for(var i=0;i<total_grid_squares;i++){
var new_img=i;
var start_lambda_background_color=lambda_background_color;
var start_lambda_size=lambda_size;
var image_name=image_selector[new_img];
var new_key=i;
var inner__html='<img src=' + image_name + '.jpg style="width:' + start_lambda_size + ';height:' + start_lambda_size + '; background-color: ' + start_lambda_background_color + ';"/>'
var image=inner__html;
inner_html[new_key]=image;
}
console.log("lambda_size: " + lambda_size);
console.log("screen_width: " + screen_width);
console.log("screen_height: " + screen_height);
console.log("grid_wide: " + grid_wide);
console.log("total_grid_squares: " + total_grid_squares);
var count = Object.keys(inner_html).length;
console.log("number of inner_html keys: " + count);
function lamda_gen(type){var key;for(key in inner_html){if(type == "init"){lamda_link('base',inner_html[key],key,key);}}}
function hover(id){
var out2 = document.getElementById(id);
out2.style = "outline-style: solid; outline-color: #CBD3EE; cursor: pointer;";
}
function leave(id){
var out2 = document.getElementById(id);
out2.style = "z-index: 2;transform: scale(1);";
}
function lamda_link(basename,innerhtml,id,classname){
var base = document.getElementById(basename);
var ddiv = document.createElement("lamda_link");
ddiv.innerHTML = innerhtml;
ddiv.id = id;
ddiv.className = classname;
base.appendChild(ddiv);
function execute_z(id){
var out2 = document.getElementById(id);
console.log("--------------------");
console.log("execute_z: " + id);
var new_lambda_background_color = "#4E2F98"; //#0F6640 green //#660F35 red // #4E2F98 purple
var image_name_inner_html=inner_html[id];
var here = image_name_inner_html.indexOf("src=");
var there = image_name_inner_html.indexOf(".jpg");
var image_name = image_name_inner_html.slice(here,there);
var here = image_name_inner_html.indexOf("width:");
var there = image_name_inner_html.indexOf(";height");
var new_lambda_size = image_name_inner_html.slice(here,there);
new_lambda_size=parseInt(new_lambda_size.slice(6,-2));
if(new_lambda_size*2 < 400){
new_lambda_size=new_lambda_size*2;
new_lambda_size.toString(10);
new_lambda_size=new_lambda_size + "px";}
else{
new_lambda_size=lambda_size;
new_lambda_size.toString(10);}
inner_html[id]='<img ' + image_name + '.jpg style="width:' + new_lambda_size + ';height:' + new_lambda_size + '; background-color: ' + new_lambda_background_color + ';"/>'
var temp = inner_html;
var base = document.getElementById("base");
base.innerHTML="";
inner_html={}
inner_html=temp;
lamda_gen("init");
console.log("new_lambda_size: " + new_lambda_size);
console.log("new_lambda_background_color: " + new_lambda_background_color);
}
var lamdalink = document.getElementById(id);
lamdalink.addEventListener("mouseover", function(e){var target = e.target || e.srcElement; hover(id)}, false);
lamdalink.addEventListener("mouseleave", function(e){var target = e.target || e.srcElement; leave(id)}, false);
lamdalink.addEventListener("click", function(e){var target = e.target || e.srcElement; execute_z(id)}, false);
}
lamda_gen("init");
}
}