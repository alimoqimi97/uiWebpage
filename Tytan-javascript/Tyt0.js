/// <reference path="E:/VSCode_projects/WorkingOnTemplate/typings/globals/jquery/index.d.ts" />

"use strict";

function changeText()
{
    var strings = ["Iran","Isfahan","isfahan university","Our website"];    
    var hChild = $(".pending-text");

    hChild.empty();    
    hChild.text(strings[idIndex]);

    setTimeout(function(){
        hChild.css("visibility","visible").css("opacity",1);
    },1000);

    setTimeout(function(){
        hChild.css({"opacity":"0","visibility":"visible"});
    },3000);

    ++idIndex;

    if(idIndex == strings.length)
    {
        idIndex = 0;
    }
}

var idIndex = 0;

function startOrdering()
{
    setInterval(changeText,4000);
}

$(document).ready(function(){
    startOrdering();
});
