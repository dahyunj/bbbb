var li = ['a', 'b', 'c', 'd', 'e'];
li.push('f');
document.write(li);
document.write('<br />');
li = li.concat(['g', 'h']);
document.write(li);
document.write('<br />');
li.unshift('z');
document.write(li);
document.write('<br />');
li.splice(2, 0, 'B');
document.write(li);

