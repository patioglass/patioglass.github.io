var name_search=[];
var select_year=$.url(location.href).param("year");
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth()+1;



$(function(){

    var top_picture=new Vue({
        el:".main__wrapper",
        data:{
            top_pictures:[],
            count:0
        },
        methods:{
            /*初期化*/
            init:function(){
                var array=[];
                var count=0;
                $.getJSON("../illustrator.json",function(data){
                    $.each(data,function(i){
                        $.each(data[i].name,function(j){
                            if(year==data[i].year && month==data[i].month){
                                array.push({
                                    name:data[i].name[j].name,
                                    url_name:encodeURIComponent(data[i].name[j].name),
                                    year:data[i].year,
                                    month:data[i].month,
                                    id:data[i].name[j].id
                                });
                                count++;
                                
                            }
                        });
                    });
                    top_picture.$data.count=count;
                    console.log(count);
                });
                this.top_pictures=array;
               
            }
        },
        created:function(){
            this.init();
        }
    });
});