var name_search=[];
var d_name=$.url(location.href).param("illustrator");
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth()+1;
var empty_flag=true;

$(function(){
    var member=new Vue({
        el:".main__wrapper",
        data:{
            member:[],/*幹部会員のデータ*/
            search_user:[],
            empty_user:false,
            empty_name:d_name,
            show_flag:true
        },
        methods:{
            /*初期化*/
            init:function(){
                var array=[];
                $.getJSON("../member.json",function(data){
                    $.each(data,function(i){
                        if(d_name==data[i].name){
                                array.push({
                                    name:data[i].name,
                                    id:data[i].id,
                                });
                        }
                    });
                });
                this.search_user=array;
            }                          
        },
        created:function(){
            this.init();
        }
    });
    
    var top_picture=new Vue({
        
        data:{
            top_pictures:[]
        },
        methods:{
            /*初期化*/
            init:function(){
                var array=[];
                $.getJSON("../illustrator.json",function(data){
                    $.each(data,function(i){
                        array.push({
                            name:data[i].name,
                            year:data[i].year,
                            month:data[i].month
                        });
                    });
                });
                this.top_pictures=array;
            }
        },
        created:function(){
            this.init();
        }
    });
    $.ajax({
        url:"../member.json",
        success:function(data){
            
            $.each(top_picture.$data.top_pictures,function(i,t){
                $.each(t.name,function(j,n){
                    $.each(member.$data.search_user,function(k,m){
                        var img_url="";
                        if(n.name==m.name){
                            if(t.name.length>1){
                                img_url="../img/top_picture/"+t.year+"/"+t.month+"/"+t.year+"_"+t.month+"_"+j+".jpg";
                            }else{
                                img_url="../img/top_picture/"+t.year+"/"+t.year+"_"+t.month+".jpg";
                            }
                            name_search.push({
                                name:m.name,
                                id:n.id,
                                year:t.year,
                                month:t.month,
                                img:img_url
                            });
                            empty_flag=false;
                        }   
                    });
                });
            });
            member.$data.member=name_search;
            member.$data.empty_user=empty_flag
    
            if(d_name==undefined || d_name==""){
                member.$data.show_flag=false;
            }
        },
        error:function(){
        }
    });
    

});