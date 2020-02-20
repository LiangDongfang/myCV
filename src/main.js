let html = document.querySelector('#html');
let style = document.querySelector('#style');
let string = `/*你好,我叫东方
*接下来我演示一下我的前端功底
**/
#div {
  border: 1px solid gold;
  width: 280px;
  height: 280px;
}
/*接下来我把div 变成一个太极
*注意看好了
*首先，把 div 变成一个圆
**/
#div {
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border: none;
}
/*太极由阴阳形成的
*一黑一白
**/
#div {
  background: rgb(250,250,250);
  background: linear-gradient(90deg, rgba(250,250,250,1) 0%, rgba(250,250,250,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*
*阴阳循环
**/
#div::before {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: rgba(0,0,0,1);
}
#div::after {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: rgba(250,250,250,1);
}
/*阳中生阴，阴中包阳，阴阳循环生生不息
**/
#div::before {
  background: radial-gradient(circle, rgba(250,250,250,1) 0%, rgba(250,250,250,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div::after {
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
let string2 = '';
let n = 0;//step中的n从0开始
let step = () => {
  setTimeout(() => {
    // string2 += string[n] === '\n' ? '<br>' : string[n]
    if (string[n] === '\n') {
      //如果是 \n 那就不照搬
      string2 += '<br>';
    } else if (string[n] === ' ') {
      //如果是 ' ' 那就不照搬
      string2 += '&nbsp';
    } else {
      //如果不是\n那就照搬
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring.call(string, 0, n);
    window.scrollTo(0, 9999);
    html.scrollTo(0, 9999)
    if (n < string.length - 1) {
      //如果 n 不是最后一个，就继续
      n += 1;
      step();
    }
  }, 10);
}
step()



//如何解决一块显示呢？使用string.substring
//str.replace
//正则g
//由于在inner HTML中会出现类似打印除<的bug,解决思路是：将\n变成整体的字符串，然后将字符串在显示出来
//demo.innerHTML = string.substring[n]和demo.innerHTML = string2 的区别：
//一个个打印出来，一下子打印出来
//折行怎么办
//滚动怎么办