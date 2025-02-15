
function Wait(){
    return new Promise(resolve => {
        setTimeout(resolve, 1000);
    });
}
function selectOption(selectOption){
    if (selectOption === 'Yes'){
        yeslol();
    }
    else if (selectOption === 'No'){
        document.getElementById('No');{
                alert("cya <3")
                window.close()
            }
    }
}



function hide(){
    document.getElementById('propose').style.display = 'none';
    document.getElementById('options').style.display = 'none';
    document.getElementById('a lil credit').style.display ='none';
    document.getElementById('lettercontainer').style.display = 'none';
    document.getElementById('container').style.display = 'block';
    document.getElementById('letter1').style.display = 'none';
    document.getElementById('letter2').style.display = 'none';
    document.getElementById('letter3').style.display = 'none';
}
document.getElementById('heart').addEventListener('click', function() {
    const box = document.getElementById('envelop');
    box.classList.toggle('fuck');
    const ads = document.getElementById('wrapper');
    ads.classList.toggle('fuck');
    document.getElementById('heart').style.display = 'none';
    document.getElementById('wrapper').style.borderRight = '150px solid transparent';
    document.getElementById('wrapper').style.borderLeft = '150px solid transparent';
    document.getElementById('lettercontainer').style.display = 'block';
    setTimeout(function(){document.getElementById('letter1').style.display = 'block'
        const afas = document.getElementById('lettercontainer');
        afas.classList.toggle('kaboom');
    }, 4000);

});

function yeslol(){
    document.getElementById('propose').innerHTML = '';
    document.getElementById('options').style.display = 'none';
    document.getElementById('a lil credit').innerText = '';
    var proposeContainer = document.getElementById('propose');
    var yesvid = new Image();
    yesvid.src = 'yesvid.gif';
    yesvid.onload = function(){
        proposeContainer.appendChild(yesvid);
        setTimeout(() =>{
            yesvid.style.display = 'none';
            hide();
        }, 7500)
    }
}


document.getElementById('lettercontainer').addEventListener('click', function() {
    document.getElementById('letter1').style.display = 'none';
    document.getElementById('letter2').style.display = 'block';
});
document.getElementById('letter2').addEventListener('click', function() {
    document.getElementById('letter3').style.display = 'block';
    const ahhf = document.getElementById('letter2');
    ahhf.classList.toggle('fuck');
});
function displayIntro(callback){
    document.getElementById('lettercontainer').style.display = 'none';
    document.getElementById('container').style.display = 'none';
    document.getElementById('options').style.display = 'none';
    Wait().then(() =>{
    var ImageContainer = document.getElementById('imageContain');
    var introImage = new Image();
    introImage.src = 'intro.gif';


    introImage.onload = function(){
        ImageContainer.appendChild(introImage);
    }
     introDuration = 27700;
    setTimeout(() =>{
        introImage.style.display = 'none'
    },introDuration);
    setTimeout(() =>{
        callback();
    },introDuration)
    });
}
function proposeImg(){
    document.getElementById('options').style.display = 'block';
    var proposeContainer = document.getElementById('propose');
    var MeImg = new Image();
    MeImg.src = 'melol.png';
    MeImg.width = '300';
    MeImg.height = '300';
    document.body.style.height = "89vh";
    document.getElementById("a lil credit").innerText = 'Will you always be my valentine?';
    document.getElementById("a lil credit").style.fontFamily = "Segoe Print";
    document.getElementById("a lil credit").style.fontSize = '30px';
    document.getElementById("a lil credit").style.color = "#ff4444";
    
    MeImg.onload = function(){
        proposeContainer.appendChild(MeImg);
    }
}

displayIntro(proposeImg);