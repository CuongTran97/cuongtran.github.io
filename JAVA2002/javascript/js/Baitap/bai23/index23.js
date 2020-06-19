var a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1];
var dem = 1;
var m = 0;
var n;
for (var i=0; i<a.length; i++)
{
for (var j=i; j<a.length; j++)
{
        if (a[i] == a[j]){
         m++;}
        else if (dem<m)
        {
          dem=m; 
          n = a[i];
        }
}
m=0;
}
console.log(n+" ( " +dem +" times ) ") ;