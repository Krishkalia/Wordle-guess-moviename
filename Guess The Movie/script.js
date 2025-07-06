
        var img1=document.getElementById("img1")
        var img2=document.getElementById("img2")
        var img3=document.getElementById("img3")
        var img4=document.getElementById("img4")
        var img5=document.getElementById("img5")
        var img6=document.getElementById("img6")

        var inp1=document.getElementById("inp1")
        var inp2=document.getElementById("inp2")
        var inp3=document.getElementById("inp3")
        var inp4=document.getElementById("inp4")
        var inp5=document.getElementById("inp5")
        var inp6=document.getElementById("inp6")
        var answer=["A","V","A","T","A","R"]
        var lives = 3;

        function moveNext(currentInput) {
             if (currentInput.value.length === 1) { 
             let next = currentInput.parentElement.nextElementSibling?.querySelector("input");
             if (next) {
                    next.focus();  
        }
    }
}
function autoselect(){
    inp1.focus();
}
// Inp1 error chk
        function inp1chk(){
            if(inp1.value.trim()==""){

            }
            else{
                inp1.disabled=true;
            }

        }  
        function inp1err(){
            if(answer[0]==inp1.value.toUpperCase()){

            }
            else{
                img1.src="bomb-blown.png";
            }
        }
// inp1 error Chk
// inp2 error chk starts
function inp2chk(){
            if(inp2.value.trim()==""){

            }
            else{
                inp2.disabled=true;
            }

        }  
        function inp2err(){
            if(answer[1]==inp2.value.toUpperCase()){

            }
            else{
                img2.src="bomb-blown.png";
            }
        }
// inp2 error chk stops
// inp3 error chk starts
function inp3chk(){
            if(inp3.value.trim()==""){

            }
            else{
                inp3.disabled=true;
            }

        }  
        function inp3err(){
            if(answer[2]==inp3.value.toUpperCase()){

            }
            else{
                img3.src="bomb-blown.png";
            }
        }
// inp3 error chk stops
// inp4 error chk starts
function inp4chk(){
            if(inp4.value.trim()==""){

            }
            else{
                inp4.disabled=true;
            }

        }  
        function inp4err(){
            if(answer[3]==inp4.value.toUpperCase()){

            }
            else{
                img4.src="bomb-blown.png";
            }
        }
// inp4 error chk stops
// inp5 error chk starts
function inp5chk(){
            if(inp5.value.trim()==""){

            }
            else{
                inp5.disabled=true;
            }

        }  
        function inp5err(){
            if(answer[4]==inp5.value.toUpperCase()){

            }
            else{
                img5.src="bomb-blown.png";
            }
        }
// inp5 error chk stops
// inp6 error chk starts
function inp6chk(){
            if(inp6.value.trim()==""){

            }
            else{
                inp6.disabled=true;
            }

        }  
        function inp6err(){
            if(answer[5]==inp6.value.toUpperCase()){

            }
            else{
                img6.src="bomb-blown.png";
            }
        }
// inp6 error chk stops
function checkafterallinputs() {
    let bombs = [img1, img2, img3, img4, img5, img6];
    let anyBombBlown = bombs.some(bomb => bomb.src.includes("bomb-blown.png"));

    if (anyBombBlown) {
        lives--; 
        document.getElementById("livesDisplay").innerText = "Lives Remaining: " + lives;

        if (lives === 1) {
            alert(" Last Life! Here's a hint: Starts with 'A' and it has aliens with blue skin and yellow eyes ");
        }

        if (lives === 0) {
            alert(" You Lost!");
            location.reload();
            
        }

        resetBombsAndInputs();  
    } else {
        alert(" You Won!");
    }

function resetBombsAndInputs() {
    let bombs = [img1, img2, img3, img4, img5, img6];
    let inputs = [inp1, inp2, inp3, inp4, inp5, inp6];

    bombs.forEach(bomb => bomb.src = "bomb.png");
    inputs.forEach(input => {
        input.disabled = false;
        input.value = "";
    });
    inp1.focus();  
}



}

   