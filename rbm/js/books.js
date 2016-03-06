var url = location.href;
var split_url =  url.split("/");
var target_url = split_url[split_url.length-1].split(".");
var books;
var book_num;

$(function(){

    var book=new Vue({
        el:".main__wrapper",
        data:{
            books:[],
            n_book:[],
            book_name:target_url[0]
        },
        methods:{
            init:function(){
                var array=[];
                $.getJSON("../"+target_url[0]+".json",function(data){
                    $.each(data,function(i,val){
                        array.push({
                            age:val.Age,
                            semester:val.Semester,
                            number:val.Number,
                            manager:val.Manager,
                            cheif_edit:val.CheifEdit,
                            printer:val.Printer,
                            pages:val.Pages,
                            circulation:val.Circulation,
                            frontCover_illustrator:val.FrontCover_illustrator,
                            backCover_illustrator:val.BackCover_illustrator,
                            spine_illustrator:val.Spine_illustrator,
                            design:val.Design,
                            assistant_edit:val.AssistantEdit
                        });
                    });
                });
                this.books=array;
            },
            
            change:function(book){
                
            }
        },
        created:function(){
            this.init();
        }
    });

});