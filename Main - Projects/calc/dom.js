
document.getElementById('one').addEventListener('click', function(){
    document.getElementById('display').value += '1';
});
document.getElementById('two').addEventListener('click', function(){
    document.getElementById('display').value += '2';
});
document.getElementById('three').addEventListener('click', function(){
    document.getElementById('display').value += '3';
});
document.getElementById('four').addEventListener('click', function(){
    document.getElementById('display').value += '4';
});
document.getElementById('five').addEventListener('click', function(){
    document.getElementById('display').value += '5';
});
document.getElementById('six').addEventListener('click', function(){
    document.getElementById('display').value += '6';
});
document.getElementById('seven').addEventListener('click', function(){
    document.getElementById('display').value += '7';
});
document.getElementById('eight').addEventListener('click', function(){
    document.getElementById('display').value += '8';
});
document.getElementById('nine').addEventListener('click', function(){
    document.getElementById('display').value += '9';
});
document.getElementById('zero').addEventListener('click', function(){
    document.getElementById('display').value += '0';
});
document.getElementById('divide').addEventListener('click', function(){
    document.getElementById('display').value += '/';
});
document.getElementById('multi').addEventListener('click', function(){
    document.getElementById('display').value += '*';
});
document.getElementById('subs').addEventListener('click', function(){
    document.getElementById('display').value += '-';
});
document.getElementById('add').addEventListener('click', function(){
    document.getElementById('display').value += '+';
});
document.getElementById('dot').addEventListener('click', function(){
    document.getElementById('display').value += '.';
});
document.getElementById('equal').addEventListener('click', function(){
    if(display.value === ""){
        alert('Please enter any number....')
    } else {
        display.value = (eval(display.value));
        console.log( eval(display.value))
    }
});
document.getElementById('clear').addEventListener('click', function(){
    document.getElementById('display').value = ""
})

function myFunction(values){
document.getElementById('display').value += values;
}