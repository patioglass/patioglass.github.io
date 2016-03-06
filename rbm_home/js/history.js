$(function(){    

    /*更新履歴*/
    var history=new Vue({
        el:".all__record",
        data:{
            json:[],
        },
        methods:{
            /*初期化処理*/
            init:function(){
                var array=[];
                $.getJSON("../history.json",function(data){
                    for(var i=0;i<data.length;i++){
                        array.push({
                            date:data[i].date,
                            detail:data[i].detail,
                            link:data[i].link_detail,
                            url:data[i].link_detail_url
                        });
                    }
                });
                this.json=array;
            }
        },
        created:function(){
            this.init();//初期化
            console.log(this.json);
        }
    });
});