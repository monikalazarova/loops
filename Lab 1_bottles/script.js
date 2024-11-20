function PrintLyrics(){
    let zero="no more";
    let beginning=99;
    for (let i=99; i>=0;i--){
        if (i>=3){
        document.getElementById("lyrics").innerHTML+="<br/>"+i+" bottles of beer on the wall, " +i+" bottles of beer. <br/>Take one down and pass it around, "+(i-1)+" bottles of beer on the wall<br/>";
         }
        else if (i===2){
        document.getElementById("lyrics").innerHTML+="<br/>"+i+" bottles of beer on the wall, " +i+" bottles of beer. <br/>Take one down and pass it around, 1 bottle of beer on the wall<br/>";
        }
        else if (i===1){
            document.getElementById("lyrics").innerHTML+="<br/>"+i+" bottle of beer on the wall, " +i+" bottle of beer.</br/> Take one down and pass it around, "+zero+" bottles of beer on the wall<br/>";
            }
        else{
            document.getElementById("lyrics").innerHTML+="<br/>"+"No more bottles of beer on the wall, " +zero+" bottles of beer.<br/> Go to store and buy some more, "+beginning+" bottles of beer on the wall<br/><br/>";
        }
    }

}