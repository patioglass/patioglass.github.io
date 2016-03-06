var date = new Date();
var year = date.getFullYear();
var month = date.getMonth()+1;

$(function(){    
    /*今月のトップ絵情報*/
    var member=new Vue({
        el:".t__wrapper",
        data:{
            member:[],
            n_month:month
        },
        methods:{
            init:function(){
                var array=[];
                var empty_flag=true;
                var img_url;
                var num=0;
                
                $.getJSON("./illustrator.json",function(data){
                    $.each(data,function(i,value){
                        if(month==value.month && year==value.year){
                            /*トップ絵が複数ある場合*/
                            console.log(value.name[0].name);
                            if(value.number>1){
                               num=Math.floor(Math.random()*value.number);
                               img_url="./img/top_picture/"+value.year+"/"+value.month+"/"+value.year+"_"+value.month+"_"+num+".jpg";
                            }else{
                                img_url="./img/top_picture/"+value.year+"/"+value.year+"_"+value.month+".jpg";
                            }
                            empty_flag=false;
                            array.push({
                                name:value.name[num].name,
                                id:value.name[num].id,
                                month:value.month,
                                year:value.year,
                                append_flag:true,
                                img:img_url,
                                number:value.number
                            });
                        }
                    });
                    if(empty_flag){
                        array.push({
                            empty_flag:true,
                            img:"./img/not_found.png",
                            month:month,
                            number:0
                        });
                    }
                });
                this.member=array;
            }
        },
        created:function(){
            this.init();
        }
    });
    
    /*更新履歴*/
    var history=new Vue({
        el:".record__detail",
        data:{
            json:[]
        },
        methods:{
            /*初期化処理*/
            init:function(){
                var array=[];
                $.getJSON("history.json",function(data){
                    /*最新の3件の情報取得*/
                    for(var i=0;i<3;i++){
                        array.push({
                            date:data[i].date,
                            detail:data[i].detail,
                            link:data[i].link_detail,
                            url:data[i].link_detail_url});
                    }
                });
                this.json=array;
            }
        },
        created:function(){
            this.init();//初期化
        }
    });
    
    /*イベント情報*/
    var event=new Vue({
        el:".event__detail",
        data:{
            json:[]
        },
        methods:{
            init:function(){
                var array=[];
                $.getJSON("event.json",function(data){
                        var img_url="./img/event/"+data[0].img;
                        array.push({
                            title:data[0].title,
                            date:data[0].date,
                            detail:data[0].detail,
                            img:img_url
                        });
                });
                this.json=array;
            }
        },
        created:function(){
            this.init();
        }
    });
    
    
});