window.onload=function(){
	var treeNodes=[];
	var num=0;

	//前序遍历
	function preOrder(root) {
            treeNodes.push(root);
            var children = root.children;
            if (children.length === 1) {
                 preOrder(children[0]);
            } else if (children.length === 2) {
                preOrder(children[0]);
                preOrder(children[1]);
            }
        }

	//中序遍历
	function inOrder(root){
		var children=root.children;
		if(children.length>=1){
			preOrder(children[0]);
		}
		treeNodes.push(root);
		if(children.length===2){
			preOrder(children[1]);
		}
	}

	//后序遍历
	function postOrder(root){
		var children=root.children;
		if(children.length===1){
			preOrder(children[0]);
		}
		else if(children.length===2){
			preOrder(children[0]);
			preOrder(children[1]);
		}
		treeNodes.push(root);
	}
	function changeColor(num){
		if(treeNodes.length>=1){
			if(num<treeNodes.length){
				treeNodes[num].style.backgroundColor='red';
				setTimeout(function(){
					treeNodes[num].style.backgroundColor='white';
					num++;
					setTimeout(function(){changeColor(num);
						},1000);
				},1000);
			}
		}
	}

	function clearTreeNodes() {
            treeNodes = [];
        }

        function init() {
        	var root=document.getElementById('root');
            document.getElementById('pre').onclick = function () {
                clearTreeNodes();
                preOrder(root);
                changeColor(0);
                
            }
            document.getElementById('in').onclick = function () {
                clearTreeNodes();
                inOrder(root);
                changeColor(0);
            }
            document.getElementById('post').onclick = function () {
                clearTreeNodes();
                postOrder(root);
                changeColor(0);
            }
        }
        init();
	
}