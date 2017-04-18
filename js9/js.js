window.onload=function(){
	//点击某个节点，使其呈现一个特殊被选中的样式；
	function chooseDiv(e){
		var divs=document.getElementsByTagName('div');
		for(var i=0;i<divs.length;i++){
			divs[i].style.backgroundColor='white';
		}
		var div=e.target;
		div.style.backgroundColor='red';

	}

	//删除节点
	function deleteNodes(divs){
		for(var i=0;i<divs.length;i++){
			if(divs[i].style.backgroundColor==='red'){
				var parent=divs[i].parentElement;
				parent.removeChild(divs[i]);
			}
		}
	}

	//增加节点
	function addNodes(divs){
		var word=document.getElementById('word').value;
		var node=document.createElement('div');
		node.className='tree';
		node.innerHTML=word;
		node.style.backgroundColor='white';
		for(var i=0;i<divs.length;i++){
			if(divs[i].style.backgroundColor==='red')
				divs[i].appendChild(node);
		}
	}

	function init(){
		var divs=document.getElementsByTagName('div');
		for(var i=0;i<divs.length;i++){
			divs[i].onclick=function(e){
				chooseDiv(e);
			}
		}
		document.getElementById('delete').onclick=function(){
			deleteNodes(divs);
		}
		document.getElementById('add').onclick=function(){
			addNodes(divs);
		}
	}

	init();
}