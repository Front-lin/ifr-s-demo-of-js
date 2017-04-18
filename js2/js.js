
window.onload=function(){
    var aqiData = [
    ["北京", 90],
    ["上海", 50],
    ["福州", 10],
    ["广州", 50],
    ["成都", 90],
    ["西安", 100]
  ];
function compare(a, b) {   
    return b[1] - a[1];               
  }
  aqiData.sort(compare); 
  var data=['一','二','三','四','五','六','七','八','九','十'];
  var j=0; 
    for(var i=0;i<aqiData.length;i++){
      if(aqiData[i][1]>60){
          var li=document.createElement('li');
          var li_value=document.createTextNode("第"+data[j]+'名：'+aqiData[i][0]+','+aqiData[i][1]);
          li.appendChild(li_value);
          var ul=document.getElementById('aqi-list');
          ul.appendChild(li);
          j++;
      }
    }
      
}
