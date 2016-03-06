var param=$.url(location.href).param("archive");

if(param<2009 ||param>2015 || param==undefined){
    location.href="./event.html?archive=2015";
}
for(var i=0;i<param.length;i++){
    if(param.charCodeAt(i)<48 || param.charCodeAt(i)>57)
        location.href="./event.html?archive=2015";
}

$(function(){
    
    event= new Vue({
        el:".main__wrapper",
        data:{
            event:[],
            archive:[],
            n_year:param
        },
        methods:{
            init:function(){
                var array=[];
                var array1=[];
                var archive_array=[];  
                var count=0;
                var count1=0;
                
                $.getJSON("../event.json",function(data){
                    $.each(data,function(i){
                        var split=[];
                        split=data[i].date.split("/");
                        array.push({
                            title:data[i].title,
                            year:split[0],
                            date:data[i].date,
                            detail:data[i].detail,
                            img:"../img/event/"+data[i].img
                        });
                        if(param==split[0]){
                            array1.push({
                            title:data[i].title,
                            year:split[0],
                            date:data[i].date,
                            detail:data[i].detail,
                            img:"../img/event/"+data[i].img
                        });
                        }
                        
                        console.log(split[0]);
                        console.log(array[count1].year);
                        if(array[count1].year==split[0]){
                            count++;
                        }else{
                            archive_array.push({
                                    year:array[count1].year,
                                    count:count
                                });
                            count1+=count;
                            count=1;
                        }
                        if(data.length-1==i){
                            archive_array.push({
                                year:split[0],
                                count:count
                            });
                        }
                    });
                });
                this.event=array1;
                this.archive=archive_array;
            }
        },
        created:function(){
            this.init();
        }
    });
});