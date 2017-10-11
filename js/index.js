/**
 * Created by Safeguard on 2017/4/26.
 */
watermark.load({
    watermark_txt: "测试水印，1021002301，测试水印，100101010111101"
});

//watermark content
var wm_txt = document.getElementById("wm_txt") || {};
//x
var wm_x=document.getElementById("wm_x");
//y
var wm_y=document.getElementById("wm_y");
//rows
var wm_rows=document.getElementById("wm_rows");
//cols
var wm_cols=document.getElementById("wm_cols");
//x_space
var wm_x_space=document.getElementById("wm_x_space");
//y_space
var wm_y_space=document.getElementById("wm_y_space");
//font
var wm_font=document.getElementById("wm_font");
//font-color
var wm_color=document.getElementById("wm_color");
//font-size
var wm_size=document.getElementById("wm_size");
//alpha
var wm_alpha=document.getElementById("wm_alpha");
//width
var wm_width=document.getElementById("wm_width");
//height
var wm_height=document.getElementById("wm_height");
//angle
var wm_angle=document.getElementById("wm_angle");

(function () {
    wm_txt.value="测试水印，1021002301，测试水印，100101010111101";
})();



//test button
function wm_test() {
    var config={};

    var wm_txt = document.getElementById("wm_txt");
    config.watermark_txt=wm_txt.value;

    config.watermark_x=parseFloat(wm_x.value);

    config.watermark_y=parseFloat(wm_y.value);

    config.watermark_rows=parseInt(wm_rows.value);

    config.watermark_cols=parseInt(wm_cols.value);

    config.watermark_x_space=parseFloat(wm_x_space.value);

    config.watermark_y_space=parseFloat(wm_y_space.value);

    config.watermark_font=wm_font.value;

    config.watermark_color=wm_color.value;

    config.watermark_fontsize=wm_size.value;

    config.watermark_alpha=parseFloat(wm_alpha.value);

    config.watermark_width=parseFloat(wm_width.value);

    config.watermark_height=parseFloat(wm_height.value);

    config.watermark_angle=parseFloat(wm_angle.value);
    //all push

    watermark.load(config);
}

//clear button
function wm_clear() {
    wm_txt.value="测试水印，1021002301，测试水印，100101010111101";
    wm_x.value="20";
    wm_y.value="20";
    wm_rows.value="0";
    wm_cols.value="0";
    wm_x_space.value="100";
    wm_y_space.value="50";
    wm_font.value="微软雅黑";
    wm_color.value="black";
    wm_size.value="18";
    wm_alpha.value="0.15";
    wm_width.value="150";
    wm_height.value="100";
    wm_angle.value="15";
    document.getElementById("wm_content").style.display = "block";
    document.getElementById("wm_show").value="隐藏";
    wm_test();
}

// show and hide 显示和隐藏
function wm_show() {
    var wm_show = document.getElementById("wm_show");
    if (wm_show.value == "显示"){
        wm_show.value = "隐藏";
        document.getElementById("wm_content").style.display = "block";
    }
    else {
        wm_show.value = "显示";
        document.getElementById("wm_content").style.display = "none";
    }
}

//create random number
function GetRandomNum(Min,Max){
    var Range=Max-Min;
    var Rand=Math.random();
    return (Min+Math.round(Rand*Range));
}

// random char 随机字符串
var chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
function generateMixed(n){
    var res="";
    for(var i=0;i