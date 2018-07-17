
function drag(obj){
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

            //边界检测
            if(X < 0){
                obj.style.left = "0px";
            } else if(X> 450 ){
                obj.style.left = 450 + "px";
            }else{
                obj.style.left = ev.clientX - cX + "px";
            }
            if(Y< 0){
                obj.style.top = "0px";
            } else if(Y > 450){
                obj.style.top = 450 + "px";
            }else{
                obj.style.top = ev.clientY - cY + "px";
            }
        };

        document.onmouseup = function(){
            document.onmousemove = null;
            var  oDivCenterT  = obj.offsetTop + obj.offsetHeight/2;
            var  oDivCenterL  = obj.offsetLeft + obj.offsetWidth/2;
            for(var j=0;j<10;j++){
                for(var i=0;i<10;i++){
                    var fangGeL = i*50 +25;
                    var fangGeT = j*50 +25;
                    console.log(oDivCenterT,oDivCenterL,fangGeT,fangGeL);
                    var value = Math.sqrt(Math.pow(oDivCenterT-fangGeT,2) + Math.pow(oDivCenterL-fangGeL,2));
                    console.log(value);
                    if(value<25*Math.sqrt(2)){
                        oDiv.style.top = fangGeT - 25 - j/10*14+"px";
                        oDiv.style.left = fangGeL - 25 - i/10*14 + "px";
                    }
                }
            }
            document.onmouseup = null;
        };
        return false;
    };



}