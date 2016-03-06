var date=new Date();
var year=date.getFullYear();
var param=$.url(location.href).param("executive_staffs");
var data_name=[];

<<<<<<< HEAD

if(!localStorage.getItem("visited")){
    localStorage.visited=1;
}else if(localStorage.getItem("visited")==1){
    localStorage.setItem("visited",0);
    location.href=location.href;
}else{
    localStorage.setItem("visited",1);
}

=======
>>>>>>> origin/version1
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
                
                $.getJSON("../member.json",function(data){
                    $.each(data,function(i){
                        data_name[i]=data[i].name;
                        console.log(data_name);
                        now_exe_flag=false;
                        /*幹部のみデータを格納*/
                        if(data[i].job_title!="一般会員"){
                            /*現幹部であるかのフラグ*/
                            if(param==data[i].e_age){
                                now_exe_flag=true;
                            }
                            if(now_exe_flag){
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
                            if(i==0){
                                age_number.push(data[i].e_age);
                            }
                            var same_flag=false;
                            $.each(age_number,function(num){
                                if(age_number[num]==data[i].e_age){
                                    same_flag=true;
                                }
                            });
                            if(!same_flag){
                                age_number.push(data[i].e_age);
                                count++;
                            }
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
    $.getJSON("../member.json",function(){
    var box=[];
    $.each(member.$data.executive,function(i,e){
        $.each(member.$data.member,function(j,m){
            if(m.job_title==e){
                box.push(m);
            }
        });
    });
        member.$data.member=box;
    });
    window.onload=function(){
        $(".member__name").autocomplete({
            source: data_name
        });
    }
    
});