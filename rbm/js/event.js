$(function(){
    window.onload=function(){
        $.getJSON("../event.json",function(data){
            $.each(data,function(i){
                $(".event__list ul").append("<li><h3>"+data[i].title+"</h3><h4>"+data[i].date+"</h4><p>"+data[i].detail+"</p><img src='../img/event/"+(data.length-i-1)+".jpg'></li>");
            });
        });
    }
    
});