var param=$.url(location.href).param("season");
var year=$.url(location.href).param("year");
var create_rank_member=[];
var copy_rank_member=[];
var theme_rank_member=[];

var date = new Date();
var n_year = date.getFullYear();
var month = date.getMonth()+1;

if(!localStorage.getItem("visited")){
    localStorage.visited=1;
}else if(localStorage.getItem("visited")==1){
    localStorage.setItem("visited",0);
    location.href=location.href;
}else{
    localStorage.setItem("visited",1);
}

if(!year){
    /*5月になれば春のパネル展が更新される*/
    /*12月になれば学園祭パネル展が更新される*/
    switch(param){
            case "spring":
            if(month-5>=0){
                year=n_year;
            }else{
                year=n_year-1;
            }
            break;
            case "school_festival":
            if(month-12>=0){
                year=n_year;
            }else{
                year=n_year-1;
            }
            break;
    }
}

if(param!="school_festival"){
    if(param!="spring"){
    location.href="./panel_table.html";
    }
}

$(function(){
    var member=new Vue({
        el:".main__wrapper",
        data:{
            season:param,
            year:year,
            kind:["創作部門","版権部門","テーマ部門"],
            rank:[1,2,3],
            member:[],/*会員のデータ*/
            rank_member:[],
            archive:[]
        },
        methods:{
            /*初期化*/
            init:function(){
                var array=[];
                var age_number=[];
                var count=0;
                var archive_box=[];
                var count1=0;                
<<<<<<< HEAD
                $.getJSON("../panel_"+param+".json",function(data){
=======
                $.getJSON("../panel_school_festival.json",function(data){
>>>>>>> origin/version1

                    $.each(data,function(i,e){
                        /*アーカイブに利用する配列*/
                            if(i==0){
                                archive_box.push(e.age);
                            }else if(archive_box[count1]!=e.age){
                                archive_box.push(e.age);
                                count1++;
                            }                
                    });
                });
                this.archive=archive_box; 
                
                $.getJSON("../member.json",function(data){
                    $.each(data,function(i){
                        array.push({
                            name:data[i].name,
                            id:data[i].id,
                        });
                    });
                });
                this.member=array;
                loading();
            }
        },
        created:function(){
            this.init();
        }
    });
    
    function loading(){
        $.getJSON("../panel_"+param+".json",function(data){
            $.each(data,function(i,value){
                if(value.age==year){
                        $.each(value.rank,function(num,r){
                            $.each(r[member.$data.kind[num]],function(count,r_id){
                                $.each(member.$data.member,function(j,m){
                                if(m.id==r_id){
                                    switch(member.$data.kind[num]){
                                            case "創作部門":
                                            create_rank_member.push(r_id);
                                            break;
                                            case "版権部門":
                                            copy_rank_member.push(r_id);
                                            break;
                                            case "テーマ部門":
                                            theme_rank_member.push(r_id);
                                            break;
                                    }
                                }
                            });
                        });
                    });
                }
            });
            member.$data.rank_member.push(create_rank_member);
            member.$data.rank_member.push(copy_rank_member);
            member.$data.rank_member.push(theme_rank_member);

        });
    }

});