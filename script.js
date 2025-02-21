function startRecognition(){
    var recognition = new (window.SpeechRecogniton || window.webkitSpeechRecognition)();
    recognition.onresult = function(event){
        document.getElementById('text').value = event.results[0][0].transcript;
    }
    recognition.start();
}