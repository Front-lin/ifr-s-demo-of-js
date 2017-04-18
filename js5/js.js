window.onload=function(){
	function left_in(queue){
		var num=document.getElementById('text').value;
		if(checkNum(num)){
		var span=document.createElement('span');
		span.style.height=num;
		var child=queue.childNodes;
		if(child.length>60){
			 alert("队列元素数量最多为60个！");
		}
		else{
		queue.insertBefore(span,child[0]);
		}}
	}

	function right_in(queue){
		var num=document.getElementById('text').value;
		if(checkNum(num)){
			var span=document.createElement('span');
			span.style.height=num;
			var child=queue.childNodes;
			if(child.length>60){
			 alert("队列元素数量最多为60个！");
			}
			else{
				queue.appendChild(span);
			}
		}
	}

	function left_out(queue){
		queue.removeChild(queue.firstChild);
	}

	function right_out(queue){
		queue.removeChild(queue.lastChild);
	}

	function bubbleSort(queue){
		var child=document.getElementById('queue').childNodes;
		var flag=false;

		for(var i=0;i<child.length;i++)
			for(var j=0;j<child.length-1;j++){
				if(child[j].style.height<child[j+1].style.height){
					flag=true;
					var height=child[j].style.height;
					child[j].style.height=child[j+1].style.height;
					child[j+1].style.height=height;
				}
				if(!flag) break;
			}
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
		}
		else if(reg.test(num)&&(num<10||num>100)){
			alert("只能输入10-100内的实数！");
         	return false;
		}
		else return true;
	}

	function init(){
		var queue=document.getElementById('queue');
		document.getElementById('l-in').onclick=function(){left_in(queue);};
		document.getElementById('r-in').onclick=function(){right_in(queue);};
		document.getElementById('l-out').onclick=function(){left_out(queue);};
		document.getElementById('r-out').onclick=function(){right_out(queue);};
		document.getElementById('sort').onclick=function(){bubbleSort(queue)};
		document.getElementById('queue').onclick=function(e){
			e=e||window.event;
			var t=e.target||e.srcElement;
			var tagName=t.tagName;
			if(tagName=='span'){
				queue.removeChild(t);
			}
		}
	}
	init();
}