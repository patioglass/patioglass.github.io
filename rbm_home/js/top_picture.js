var name_search=[];
var select_year=$.url(location.href).param("year");
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth()+1;
var plural_month;
var array_year=[];
var count=0;

if(select_year<2009 || select_year>year ||select_year==undefined){
    location.href="./y_top_pictures.html?year="+year;
}
for(var i=0;i<select_year.length;i++){
    if(select_year.charCodeAt(i)<48 || select_year.charCodeAt(i)>57)
        location.href="./y_top_pictures.html?year="+year;
}

for(var i=2009;i<year+1;i++,count++){
    array_year.push({year:i});
}

$(function(){

    var top_picture=new Vue({
        el:".main__wrapper",
        data:{
            top_pictures:[],
            member:[],
            n_year:select_year,
            array_year:array_year
        },
        methods:{
            /*初期化*/
            init:function(){
                var array=[];
                var only_flag=true;                
                $.when(
                    $.getJSON("../illustrator.json")
                )
                .done(function(data1){
                    $.each(data1,function(i){
                        $.each(data1[i].name,function(j){
                            if(select_year==data1[i].year){
                                console.log(data1[i].name[j]);
                                        img_url="../img/top_picture/"+data1[i].year+"/"+data1[i].year+"_"+data1[i].month+"_"+(j+1)+".jpg";

                                    array.push({
                                        name:data1[i].name[j].name,
                                        year:data1[i].year,
                                        month:data1[i].month,
                                        id:data1[i].name[j].id,
                                        img:img_url
                                    });
                            }
                        });
                    });
                    
                    top_picture.$data.member=array;
                    
                })
                .fail(function(){
                    console.log("読み込みに失敗しました");
                });
            }
        },
        created:function(){
            this.init();
        }
    });
});