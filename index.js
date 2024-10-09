<script>
let curVal="";

function clear(){
    document.getElementbyId('textInput').value="";

}

function getInput(x){
    curVal=curVal + x; // curVal + =x;
    document.getElementbyId('textInput').value=curVal;
}

function calculate(){
    curVal= eVal(textInput);
    document.getElementbyId('textInput').value=result;
}

</script>