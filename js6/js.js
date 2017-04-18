window.onload=function(){
	//遇到","、"，"和回车分割为数组
	function inputSplit(num){
		var re=/[^\n,，、\s]+/g;
		var inputarr=num.match(re);
			return inputarr;
	}

	var input=document.getElementById('input');
	
	

	function left_in(queue){
		var num=input.value;
		var inputarr=inputSplit(num);
		for(var i=inputarr.length-1;i>=0;i--){
			var span=document.createElement('span');
			span.innerHTML=inputarr[i];
			var child=queue.childNodes;
			queue.insertBefore(span,child[0]);
		}
		input.value="";
	}

	function right_in(queue){
		var input=document.getElementById('input');
		var num=input.value;
		var inputarr=inputSplit(num);
		for(var i=0;i<inputarr.length;i++){
			var span=document.createElement('span');
			span.innerHTML=inputarr[i];
			queue.appendChild(span);
		}
		input.value="";
	}

  	function left_out(queue){
  		queue.removeChild(queue.firstChild);
  	}

  	function right_out(queue){
  		queue.removeChild(queue.lastChild);
  	}

  	function search(){
  		var txt=document.getElementById('text').value;
  		var queue=document.getElementById('queue');
  		var span=queue.getElementsByTagName('span');
  		if(txt!=''){
  			for(var i=0;i<span.length;i++){
  				var contents=span[i].innerHTML;
  				if(contents.indexOf(txt)>-1)
  					span[i].style.color="blue";
  			}
  			txt="";
  		}
  	}


	function init(){
		var queue=document.getElementById('queue');
		document.getElementById('l-in').onclick=function(){left_in(queue);};
		document.getElementById('r-in').onclick=function(){right_in(queue);};
		document.getElementById('l-out').onclick=function(){left_out(queue);};
		document.getElementById('r-out').onclick=function(){right_out(queue);};
		document.getElementById('search').onclick=search;
		queue.onclick=function(e){
			e=e||window.event;
			var t=e.target||e.srcElement;
			var tagName=t.tagName;
			if(tagName=="SPAN")
				queue.removeChild(t);
		}
	}
	init();
}