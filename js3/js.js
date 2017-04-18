window.onload=function(){
function getData() {
  /*
  coding here
  */

  /*
  data = [
    ["北京", 90],
    ["北京", 90]
    ……
  ]
  */
  var data=[];
  var lis=document.getElementById('source').getElementsByTagName('li');
  for(var i=0;i<lis.length;i++){
    var city=lis[i].innerHTML.substring(0,2);
    var num =lis[i].childNodes[1].innerHTML;
    data.push([city,num]);
  }
  return data;
}

/**
 * sortAqiData
 * 按空气质量对data进行从小到大的排序
 * 返回一个排序后的数组
 */
function sortAqiData(data) {
  return data.sort(function(a,b){
    return a[1]-b[1];
  });
}

/**
 * render
 * 将排好序的城市及空气质量指数，输出显示到id位resort的列表中
 * 格式见ul中的注释的部分
 */
function render(data) {
  var chineseRank=['一','二','三','四','五','六','七','八','九','十'];
  for(var i=0;i < data.length;i++) {
    var li=document.createElement("li");
    li.innerHTML = "第"+chineseRank[i]+"名："+data[i][0]+"空气质量：";
    var b=document.createElement("b");
    b.innerHTML = data[i][1];
    li.appendChild(b);

    var element=document.getElementById("resort");
    element.appendChild(li);
  }
}

function btnHandle() {
  var aqiData = getData();
  aqiData = sortAqiData(aqiData);
  render(aqiData);
}

function init() {

  // 在这下面给sort-btn绑定一个点击事件，点击时触发btnHandle函数
  document.getElementById("sort-btn").onclick = btnHandle;

}

init();

}

