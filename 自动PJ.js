///2019MYCOS自动评教脚本///
///author:Kevin///

var obj=new Array();
$('.ant-radio').each(function(){
  obj.push($(this))
})
for(var i=1;i<=13;i++){
  rand=getRnd(1,2);
  seleRadio(i,rand);
}
function seleRadio(m,n) { 
  var num=5;
  const matrix = []; 
  obj.forEach((item, index) => {
    const page = Math.floor(index / num); 
    if (!matrix[page]) { 
      matrix[page] = [];
    }
    matrix[page].push(item);
  });
  matrix[m-1][n-1].click();
}
function getRnd(min, max) {
  return Math.floor(Math.random() * (max+1 - min) ) + min;
}
setTimeout(function(){
  //$('.ant-btn-primary').click();//如果需要手动提交，请注释该行
},500)