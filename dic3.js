var grades = {
    'list': {'ten': 10, 'six': 6, 'one': 1},
    'show' : function(){
        for(var name in this.list){
            document.write(name+':'+this.list[name]+"<br />");
        }
    }
};
grades.show();
