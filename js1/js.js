window.onload=function(){
	var button=document.getElementById('button');
	button.onclick=displayText;
	function displayText(){
		var text=document.getElementById('aqi-input').value;
		if(text==""){
			text="尚未输入";
		}
  		document.getElementById('aqi-display').innerHTML=text;
	}
}