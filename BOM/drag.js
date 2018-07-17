
function drag(obj){

    //鼠标放上去的效果
    // obj.onmouseover = function(){
    //     obj.style.boxShadow = "10px 10px 10px gray";
    // };

    //鼠标点击效果
    obj.onmousedown = function(ev){
        var ev = ev || event;

        //初始鼠标到达元素左边界和上边界的值
        var cY = ev.clientY - obj.offsetTop;
        var cX = ev.clientX - obj.offsetLeft;

        if(obj.setCapture) obj.setCapture();

        document.onmousemove = function(ev){
            var ev = ev || event;

            var X = ev.clientX - cX;
            var Y = ev.clientY - cY;

            //div四边
            var L1 = X,
                T1 = Y,
                R1 = L1 + obj.offsetWidth,
                B1 = Y + obj.offsetHeight;
            var L2 = oImg.offsetLeft,
                T2 = oImg.offsetTop,
                R2 = L2 + oImg.offsetWidth,
                B2 = T2 + oImg.offsetHeight;

            //碰撞检验
            if(B1<T2 || R1<L2 || L1>R2 || T1>B2){
                oImg.src = "img/1.jpg";
            }else{
                oImg.src = "img/2.jpg";

            }
            //边界检测
            if(X < 0){
                obj.style.left = "0px";
            } else if(X> document.documentElement.clientWidth- obj.offsetWidth ){
                obj.style.left = document.documentElement.clientWidth - obj.offsetWidth + "px";
            }else{
                obj.style.left = ev.clientX - cX + "px";
            }
            if(Y< 0){
                obj.style.top = "0px";
            } else if(Y > document.documentElement.clientHeight - obj.offsetHeight){
                obj.style.top = document.documentElement.clientHeight - obj.offsetHeight + "px";
            }else{
                obj.style.top = ev.clientY - cY + "px";
            }

        };
        document.onmouseup = function(){
            document.onmousemove = document.onmouseup = null;
            if(obj.releaseCapture) obj.releaseCapture();
        };
        return false;
    };



}