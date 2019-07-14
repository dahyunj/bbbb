function get_members(){
    return ['ice', 'cream', 'good'];
}
members = get_members(); 
for(i = 0; i < members.length; i++){
    document.write(members[i].toUpperCase());   
    document.write('<br />');
}
