window.onload=function(){
	var treeNodes=[];
	var num=0,count=0;

	//前序遍历
	function preOrder(root){
		treeNodes.push(root);
		var children=root.children;
		for(var i=0;i<children.length;i++)
			preOrder(children[i]);
	}

	function changeColor(num){
		if(treeNodes.length>=1){
			if(num<treeNodes.length){
				treeNodes[num].style.backgroundColor='red';
				setTimeout(function(){
					treeNodes[num].style.backgroundColor='white';
					num++;
					setTimeout(function(){
						changeColor(num);
					},1000);
				},1000);
			}
		}
	}

	function clearTreeNodes(){
		treeNodes=[];
	}

	function search(count){
		var txt=document.getElementById('word').value;
		if(treeNodes.length>=1){
			if(count<treeNodes.length){
				treeNodes[count].style.backgroundColor='blue';
				setTimeout(function(){
					if(treeNodes[count].innerHTML.indexOf(txt)===0){
						treeNodes[count].style.backgroundColor='yellow';
					}else{
						treeNodes[count].style.backgroundColor='white';
					}
					count++;
					setTimeout(function(){
						search(count);
					},1000);
				},1000);
			}
		}
	}
	function init() {
            var root = document.getElementById("root");
            document.getElementById('pre').onclick = function () {
                clearTreeNodes();
                preOrder(root);
                changeColor(0);
            }
            document.getElementById('search').onclick = function () {
                clearTreeNodes();
                preOrder(root);
                search(count);
            }
        }
        init();
 }