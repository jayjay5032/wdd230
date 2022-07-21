div = document.getElementsByClassName('c1');
div[0].style.display = 'block';
var cur = 0;
setInterval(autoAnim, 500);
function autoAnim() {
  if (cur > 3) cur = 0;
  if (cur == 0) {
    div[cur].style.display = 'block';
    div[cur+1].style.display = 'none';
    div[cur+2].style.display = 'none';
    div[cur+3].style.display = 'none';
    } else if (cur == 1){
        div[cur].style.display = 'block';
        div[cur+1].style.display = 'none';
        div[cur+2].style.display = 'none';
        div[cur-1].style.display = 'none';
    }  else if (cur == 2){
        div[cur].style.display = 'block';
        div[cur-1].style.display = 'none';
        div[cur-2].style.display = 'none';
        div[cur+1].style.display = 'none';
    } else if (cur == 3){
        div[cur].style.display = 'block';
        div[cur-1].style.display = 'none';
        div[cur-2].style.display = 'none';
        div[cur-3].style.display = 'none';
    }
  cur++;
}

