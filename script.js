let display= document.getElementById('display');
let displayBtn=document.querySelectorAll('#btn');
let clearBtn= document.getElementById('clear');
let calcBtn= document.getElementById('equal');
//----------------------------------------------
// Display
displayBtn.forEach(function(button) {
    button.addEventListener('click', function() {
        console.log(button.textContent);
        display.value += button.textContent; 
    });
});
//----------------------------------------------
// Clear
clearBtn.addEventListener('click', function(){
display.value=" ";    
})
//-----------------------------------------------
// Calculate
calcBtn.addEventListener('click',function(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
    display.value="Enter correct numbers";  
    }
})
//------------------------------------------------
