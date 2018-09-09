window.onload = function () {
    var Img = document.getElementById("Img3");
    var Img2 = document.getElementById("Img2");
    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");
    var teacherNum = 3;
    var lenS = "0px";
    var lenS1 = "535px";
    var intB;
    var intA;
    button1.onclick = function () {
        Img.src = "images/1.jpg";
        Img2.src = "images/3.jpg"
        Img.style.left = "0px";
        lenS1 = "535px";
        lenS = "0px";
        Img2.style.left = "535px";
        intA = parseInt(lenS);
        intB = parseInt(lenS1);
        button1.style.backgroundColor = "red";
        button2.style.backgroundColor = null;
        button3.style.backgroundColor = null;
    }
    button2.onclick = function () {
        Img.src = "images/2.jpg";
        Img2.src = "images/1.jpg"
        Img.style.left = "0px";
        Img2.style.left = "535px";
        lenS1 = "535px";
        lenS = "0px";
        Img2.style.left = "535px";
        intA = parseInt(lenS);
        intB = parseInt(lenS1);
        button1.style.backgroundColor = null;
        button2.style.backgroundColor = "red";
        button3.style.backgroundColor = null;
    }
    button3.onclick = function () {
        Img.src = "images/3.jpg";
        Img2.src = "images/2.jpg"
        Img.style.left = "0px";
        Img2.style.left = "535px";
        lenS1 = "535px";
        lenS = "0px";
        Img2.style.left = "535px";
        intA = parseInt(lenS);
        intB = parseInt(lenS1);
        button1.style.backgroundColor = null;
        button2.style.backgroundColor = null;
        button3.style.backgroundColor = "red";
    }
    button3.style.backgroundColor = "red";
    setInterval(function () {
        intA = parseInt(lenS);
        intB = parseInt(lenS1);
        if (intA > -535)
        {
             intA = intA - 5;
             intB = intB - 5;
        }
        else if(intA <= -535)
        {
            if(teacherNum==1)
            {
                teacherNum=4;
                Img2.src="images/.2.jpg";
                button1.style.backgroundColor = null;
                button2.style.backgroundColor = null;
                button3.style.backgroundColor = "red";
            }
            else if(teacherNum==3)
            {
                Img2.src="images/1.jpg";
                button1.style.backgroundColor = null;
                button2.style.backgroundColor = "red";
                button3.style.backgroundColor = null;
            }
            else if (teacherNum==2)
            {
                Img2.src="images/3.jpg";
                button1.style.backgroundColor = "red";
                button2.style.backgroundColor = null;
                button3.style.backgroundColor = null;
            }

            teacherNum--;
            lenS = "0px";
            lenS1 = "535px"
            Img2.style.left=lenS1;
            Img.style.left = lenS;
            intA = parseInt(lenS);
            intB = parseInt(lenS1);
            Img.src = "images/" + teacherNum + ".jpg";

        }
        lenS1 = (intB + "px").toString();
        Img2.style.left = lenS1;
        lenS = (intA + "px").toString();
        Img.style.left = lenS;},100)
}