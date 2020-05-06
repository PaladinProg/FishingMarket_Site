function cartitemcount(){
	if (localStorage.getItem('itemcount') == null) document.getElementById('itemcount').innerHTML = '0';
		else
	document.getElementById('itemcount').innerHTML = localStorage.getItem("itemcount");
}
function counter()
{
	var cookieList=document.cookie; 
	var allCookies=Array(); 
	if (cookieList!='') 
	{
	var listcookie=cookieList.split("; "); 
	for(var i = 0; i < listcookie.length; i++)
	{
		var cookie = listcookie[i];
		var co   = cookie.indexOf("=");
		var name = cookie.substring(0,co);
		var value = cookie.substring(co+1);
		    value = decodeURIComponent(value); 
		    allCookies[name] = value;
	}
	}
	if (typeof(allCookies["count"]) != "undefined" && allCookies["count"] != null) 
	{
		count=++allCookies["count"]; 
	}
	else
    {
        document.cookie = "Basket=N"
        count = 1;
	}
	document.cookie="count="+encodeURIComponent(count); 
	document.getElementById("Counter").innerHTML=count; 
}