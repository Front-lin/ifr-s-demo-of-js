window.onload=function(){
	function left_in(queue){
		var num=document.getElementById('text').value;
		if(checkNum(num)){
		var span=document.createElement('span');
		span.innerHTML=num;
		var child=queue.childNodes;
		queue.insertBefore(span,child[0]);
		}
	}

	function right_in(queue){
		var num=document.getElementById('text').value;
		if(checkNum(num)){
			var span=document.createElement('span');
			span.innerHTML=num;
			queue.appendChild(span);
		}
	}

	function left_out(queue){
		queue.removeChild(queue.firstChild);
	}

	function right_out(queue){
		queue.removeChild(queue.lastChild);
	}

	

	function checkNum(num){
		reg=/^[-+]?\d*$/;
		if(num==''){
			alert("输入不能为空！");
         	return false;
		}
		else if(!reg.test(num)) {
         	alert("只能输入整数！");
        	return false;
		}else return true;
	}

	function init(){
		var queue=document.getElementById('queue');
		document.getElementById('l-in').onclick=function(){left_in(queue);};
		document.getElementById('r-in').onclick=function(){right_in(queue);};
		document.getElementById('l-out').onclick=function(){left_out(queue);};
		document.getElementById('r-out').onclick=function(){right_out(queue);};
	}
	init();
}