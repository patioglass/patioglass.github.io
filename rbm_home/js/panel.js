var param=$.url(location.href).param("season");
var year=$.url(location.href).param("year");
var create_rank_member=[];
var copy_rank_member=[];
var theme_rank_member=[];

var date = new Date();
var n_year = date.getFullYear();
var month = date.getMonth()+1;


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
                var count1=0;
                var archive_box=[];
                
                $.when(
                    $.getJSON("../panel_"+param+".json"),
                    $.getJSON("../member.json")    
                )
                .done(function(data1,data2){
                    $.each(data1[0],function(i,value){

                        /*アーカイブに利用する配列*/
                        if(i==0){
                            archive_box.push(value.age);
                        }else if(archive_box[count1]!=value.age){
                            archive_box.push(value.age);
                            count1++;
                        }                

                        
                        /*年度*/
                        if(value.age==year){
                            $.each(value.rank,function(num,r){ 
                                $.each(r[member.$data.kind[num]],function(kind_name,r_id){
                                    
                                    $.each(data2[0],function(j,mem){
                                        if(mem.id==r_id){
                                            switch(member.$data.kind[num]){
                                                case "創作部門":
                                                    create_rank_member.push({
                                                        id:r_id,
                                                        name:mem.name
                                                    });
                                                    break;
                                                case "版権部門":
                                                    copy_rank_member.push({
                                                        id:r_id,
                                                        name:mem.name
                                                    });
                                                    break;
                                                case "テーマ部門":
                                                    theme_rank_member.push({
                                                        id:r_id,
                                                        name:mem.name
                                                    });
                                                    break;
                                            }
                                        }
                                    });
                                    count++;
                                });
                            });
                        }
                    });
                    member.$data.rank_member.push(create_rank_member);
                    member.$data.rank_member.push(copy_rank_member);
                    member.$data.rank_member.push(theme_rank_member);
                    member.$data.archive=archive_box; 
                    console.log(this.archive);
                })
                .fail(function(){

                });
            }
            
        },
        created:function(){
            this.init();
        }
    });
});