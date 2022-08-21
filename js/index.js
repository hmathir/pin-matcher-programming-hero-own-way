function getValue(ID){
    const displayPin = document.getElementById(ID);
    const displayPinValue = displayPin.value;
    return displayPinValue;
}

//GEN PIN FUNCTION
clickBtn();



//
const calBtn = document.getElementsByClassName('button');
for(btn of calBtn){
    btn.addEventListener('click', function(event){
        const pressedValue = event.target.innerText;
        const typedNumber = document.getElementById('typed-numbers');
        const typedNumberValue = typedNumber.value;
        let displayNumbers = typedNumberValue + pressedValue;
        if(isNaN(pressedValue)){
            if(pressedValue === 'C'){
                typedNumber.value = '';
            }
            else if(pressedValue === '<'){
                const newDisplayNumber = typedNumberValue.split('');
                newDisplayNumber.pop();
                const finalDisplayNumber = newDisplayNumber.join('');
                typedNumber.value = finalDisplayNumber;
            }
        }
        else{
            typedNumber.value = displayNumbers;
        }
    })
}


//
document.getElementById('pin-success').style.display = 'none';
document.getElementById('pin-failure').style.display = 'none';
//
document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinValue = getValue('display-pin');
    const typedNumberValue = getValue('typed-numbers');
    if(typedNumberValue == ''){
        alert('Please Genarate A Unique Code And Input Here!');
    }
    else{
        if(displayPinValue === typedNumberValue){
            document.getElementById('pin-success').style.display = 'block';
            document.getElementById('pin-failure').style.display = 'none';
        }
        else{
            document.getElementById('pin-failure').style.display = 'block';
            document.getElementById('pin-success').style.display = 'none';
        }
    }

})




