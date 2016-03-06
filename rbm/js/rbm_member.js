var param=$.url(location.href).param("member");

$(function(){
    var member=new Vue({
        el:".main__wrapper",
        data:{
            member:[],/*幹部会員のデータ*/
            exe_num:[],/*歴代幹部の年代*/
            param:param,/*年度*/
            search_user:[]
        },
        methods:{
            /*初期化*/
            init:function(){
                var array=[];
                var age_number=[];
                var count=0;
                var now_exe_flag=false;
                $.getJSON("../member.json",function(data){
                    $.each(data,function(i){ 
                            if(data[i].name.match(param)){
                                array.push({
                                    name:data[i].name,
                                    profile:data[i].profile,
                                    twitter:data[i].twitter,
                                    age:data[i].age,
                                    now_exe_flag:now_exe_flag,
                                    job_title:data[i].job_title,
                                    id:data[i].id,
                                    e_age:data[i].e_age,
                                    img:"../img/member/"+data[i].id+".jpg"
                                });
                            }
                            /*〇年度幹部の時に利用する配列*/
                            var same_flag=false;
                            $.each(age_number,function(num){
                                if(age_number[num]==data[i].e_age){
                                    same_flag=true;
                                }
                            });
                            if(!same_flag && data[i].job_title!="一般会員"){
                                age_number.push(data[i].e_age);
                            }
                    });
                });
                this.member=array;
                this.exe_num=age_number;
            }                          
        },
        created:function(){
            this.init();
        },
    });
    
});