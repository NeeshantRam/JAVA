
function Greatercalculate()
{
  var a=document.getElementById('txtNumber1').value;
  var b=document.getElementById('txtNumber2').value;
  var c=document.getElementById('txtNumber3').value;
  if(a>b &&a>c)
  {
    document.getElementById('txtResult').innerHTML=a+ "is greatest"
  }
  else if(b>a&&b>c)
  {
    document.getElementById('txtResult').innerHTML=b+ "is greatest"
  }
  else(c>a && c>b)
  {
    document.getElementById('txtResult').innerHTML=c+ "is greatest"
  }
}