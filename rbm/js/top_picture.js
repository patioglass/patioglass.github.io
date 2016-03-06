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
    array_year[count]=i;
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
                $.getJSON("../illustrator.json",function(data){
                    $.each(data,function(i){
                        array.push({
                            name:data[i].name,
                            year:data[i].year,
                            month:data[i].month,
                            id:data[i].id
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
            
    $.getJSON("../member.json",function(data){
        $.each(top_picture.$data.top_pictures,function(i,t){
            $.each(t.name,function(j,n){
                    var img_url="";
                    var plural_flag=false;
                    var only_flag=false;
                    console.log(Object.keys(t.name).length);
                    if(select_year==t.year){
                        if(t.name.length>1){
                            plural_flag=true;
 img_url="../img/top_picture/"+t.year+"/"+t.month+"/"+t.year+"_"+t.month+"_"+j+".jpg";
                        }else{
                           only_flag=true; img_url="../img/top_picture/"+t.year+"/"+t.year+"_"+t.month+".jpg";
                        }
                        console.log(img_url);
                        if(plural_month!=t.month){
                            name_search.push({
                                name:n.name,
                                id:n.id,
                                year:t.year,
                                month:t.month,
                                img:img_url,
                                plural_flag:plural_flag,
                                only_flag:only_flag
                            });    
                            plural_month=t.month;
                        }
                    }
                    
                });
        });
    });
    top_picture.$data.member=name_search;
    console.log(top_picture.$data.member);
});