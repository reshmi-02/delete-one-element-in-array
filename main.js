var a=[];
var size=prompt("enter the size of the array");
for(let i=0;i<size;i++){
	a[i]=prompt("enter the"+(i+1)+"value");
}
document.write("a="+a+"<br>"+"<br>");
var b=prompt("enter the position of the element you want to delete");
var del=prompt("enter the how many element you want to delete");
c=a.splice(b,del);
document.write(a);