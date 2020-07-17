const StartBtn = document.querySelector('.SubmitBtn');
const fieldValue = document.getElementById('textWrite');

const paragraph = document.getElementById('demo');

const ContentPara = [
    'If a young horse be well handled and accustomed to the dummy jockey, mounting it is not attended with much risk of resistance, although this should invariably be anticipated.',

    'Many suffered under this law, but the ultimate effect was to invest the press with new popularity, and very soon the newspapers conceived a device which effectually protected their literary staff, for they employed dummy editors whose sole function was to go to prison in lieu of the true editor.',

    'The mean level of nausea was recorded by patients after PC.6 acupressure and also after pressure at a dummy point.',

    'Dragging her feet across the creaking parquet floor around an old clothiers dummy, her mouth full of pins'
];

const Result = document.getElementById('result');

playGame = ()=>{
    let randmNumber = Math.floor(Math.random()*ContentPara.length);
       paragraph.innerText = ContentPara[randmNumber];
       let date =  new Date();
       startTime = date.getTime();
       StartBtn.innerText="Done";
}


 

EndGame  = ()=>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime = Math.floor((endTime - startTime)/1000);
    console.log(totalTime);

    let totalWordWritten = fieldValue.value;
    let wordCount  = wordCounter(totalWordWritten);
    let typingSpeed = Math.floor((wordCount/totalTime)*60);
    Result.innerHTML = "Your typing speed is " + " "+ typingSpeed +" " + "words per minute";
    StartBtn.innerText = "Start";
    fieldValue.value = " ";
    paragraph.innerText = " ";

}

wordCounter = (str)=>{
    let response = str.split(" ").length;
     console.log(response);
     return response;
      
 }

let startTime , endTime;
StartBtn.addEventListener('click',function(){
    if(this.innerText == 'Start'){
        fieldValue.disabled = false;
        Result.innerText = ' ';
        playGame();

    }else if (this.innerText =="Done"){
      //  fieldValue.disabled = true;
        EndGame(); 
        


    }
});