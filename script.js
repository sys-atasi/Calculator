// let x = document.getElementById('result').value;
// display function
function display(val){
    document.getElementById('result').value+= val;
    // x+=val;
    return val;
}
// Main logic
function solve(){
    let x = document.getElementById('result').value;
    let y = eval(x);
    document.getElementById('result').value = y;
    return y;
}
// Erase the screen
function clearScreen(){
    document.getElementById('result').value = '';
    //x='';
}
// erase.addEventListener("click", () => {
//     input.value = input.value.substr(0, input.value.length - 1);
//   });
 function singleElement(){
     document.getElementById('result').value=document.getElementById('result').value.slice(0,-1);
 }