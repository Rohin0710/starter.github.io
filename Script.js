(function(){
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for(var i = 0 ; i < names.length ; i++){
        var firstName = names[i];
        var firstLetter = firstName.charAt(0).toLowerCase();
        if(firstLetter == 'j'){
            byeSpeaker.speak(firstName);
        }
        else{
            helloSpeaker.speak(firstName);
        }
    }
})();