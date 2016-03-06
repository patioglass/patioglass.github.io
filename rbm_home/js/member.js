var date=new Date();
var year=date.getFullYear();
var param=$.url(location.href).param("executive_staffs");
var data_name=[];


if(param<2009 || param>year ||param==undefined){
    location.href="./member.html?executive_staffs="+year;
}
for(var i=0;i<param.length;i++){
    if(param.charCodeAt(i)<48 || param.charCodeAt(i)>57)
        location.href="./member.html?executive_staffs="+year;
}

$(function(){
    var member=new Vue({
        el:".main__wrapper",
        data:{
            member:[],/*幹部会員のデータ*/
            exe_num:[],/*歴代幹部の年代*/
            param:param,/*年度*/
            search_data:"",
            executive:["会長","副会長","編集長","渉外","渉内","会計","広報","支部長"]
        },
        methods:{
            /*初期化*/
            init:function(){
                var array=[];
                var age_number=[];
                var count=0;
                var name=[];
                var now_exe_flag=false;
                
                $.when(
                    $.getJSON("../member.json")
                )
                .done(function(data){
                    $.each(member.$data.executive,function(j,e){
                        $.each(data,function(i,m){
                            data_name[i]=data[i].name;
                            now_exe_flag=false;
                            /*幹部のみデータを格納*/
                            if(data[i].job_title!="一般会員"){
                            /*現幹部であるかのフラグ*/
                                if(param==data[i].e_age){
                                    now_exe_flag=true;
                                }
                                if(now_exe_flag && m.job_title==e){
                                    array.push({
                                        name:data[i].name,
                                        profile:data[i].profile,
                                        twitter:data[i].twitter,
                                        age:data[i].age,
                                        e_age:data[i].e_age,
                                        now_exe_flag:now_exe_flag,
                                        job_title:data[i].job_title,
                                        id:data[i].id,
                                        img:"../img/member/"+data[i].id+".jpg"
                                    });
                                }

                                /*〇年度幹部の時に利用する配列*/
                                if(count==0){
                                    age_number.push({num:data[i].e_age});
                                    count++;
                                }
                                var same_flag=false;
                                $.each(age_number,function(num){
                                    if(age_number[num].num==data[i].e_age){
                                        same_flag=true;
                                        
                                    }
                                });
                                if(!same_flag){
                                    age_number.push({num:data[i].e_age});
                                }
                            }
                        });
                    });
                })
                .fail(function(){
                    console.log("読み込みに失敗しました");
                });
               
                this.member=array;
                this.exe_num=age_number;                      
            }
        },
        created:function(){
            this.init();
        }
    });
    
    
});