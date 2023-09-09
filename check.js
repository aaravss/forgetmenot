var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    speak();
    setTimeout(function(){
        document.getElementById("textbox").innerHTML = "";
    recognition.start();
    recognition.continuous = true;
        }, 2000);
    document.getElementById("msg").innerHTML = "";

} 

recognition.onresult = function(event){
    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;

   document.getElementById("msg").innerHTML = "<h1 style='color: rgb(15, 85, 24);font-weight: bold;'>Check-in complete! ✅</h1>"

}

function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Talk about your dae";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

}