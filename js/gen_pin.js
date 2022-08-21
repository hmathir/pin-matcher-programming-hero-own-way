function clickBtn (){
    document.getElementById('generate-pin').addEventListener('click', function(){
        const randomNumber = Math.round(Math.random()*10000);
        const levelRandom = randomNumber + '';
        if(levelRandom.length === 4){
            const displayPin = document.getElementById('display-pin');
            displayPin.value = randomNumber;
            console.log(randomNumber);
        }
        else{
            clickBtn();
        }
    })
}