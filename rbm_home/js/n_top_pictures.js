var name_search=[];
var d_name=$.url(location.href).param("illustrator");
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth()+1;
var empty_flag=true;

$(function(){
    
    var top_picture=new Vue({
        el:".pict__wrapper",
        data:{
            member:[],
            empty_user:true,
            empty_name:d_name,
            show_flag:true
        },
        methods:{
            /*初期化*/
            init:function(){
                var array=[];
                var empty_flag=true;
                $.when(
                    $.getJSON("../illustrator.json")
                )
                .done(function(data1){
                    $.each(data1,function(i){
                        var img_url=""; 
                        $.each(data1[i].name,function(j){
                            if(d_name==data1[i].name[j].name){ 
                               console.log(data1[i].name[j].id); img_url="../img/top_picture/"+data1[i].year+"/"+data1[i].year+"_"+data1[i].month+"_"+(j+1)+".jpg";
                                name_search.push({
                                    name:data1[i].name[j].name,
                                    id:data1[i].name[j].id,
                                    year:data1[i].year,
                                    month:data1[i].month,
                                    img:img_url
                                });
                                empty_flag=false;
                            }
                        });
                    });
                top_picture.$data.member=name_search;
                top_picture.$data.empty_user=empty_flag;
                if(d_name==undefined || d_name==""){
                    top_picture.$data.show_flag=false;
                }
            })
            .fail(function(){
                console.log("読み込みに失敗");
            });

            }
        },
        created:function(){
            this.init();
        }
    });

    window.onload=function(){
        $(".loading").fadeOut();
        $(".t__info").show();        
    }

});