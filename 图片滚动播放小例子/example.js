window.onload = function () {
    var Img = document.getElementById("Img");
    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");
    button1.onclick = function () {
        Img.src = "images/1.jpg";
    }
    button2.onclick = function () {
        Img.src = "images/2.jpg";
    }
    button3.onclick = function () {
        Img.src = "images/3.jpg";
    }

    // var teacherNum = 1;
    // setInterval(function () {
    //     Img.src = "images/" + teacherNum + ".jpg";
    //     teacherNum++;
    //     if (teacherNum == 4) {
    //         teacherNum = 1;//回到了原点
    //     }
    // }, 1000);


    setInterval("ShowPicturesInOrder()",1000);
    //ShowPicturesInOrder()这个函数不能写在Window.onload = function(){  }内
}
var teacherNum = 1;
function ShowPicturesInOrder()
{

    var Img = document.getElementById("Img");
    Img.src = "images/" + teacherNum + ".jpg";
    teacherNum++;
    if (teacherNum==4)
    {
        teacherNum = 1;//回到了原点
    }
}