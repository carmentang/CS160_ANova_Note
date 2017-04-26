'use strict';

var Alexa = require('alexa-sdk');
var constants = require('./constants');

var audioAssets = require('./audioAssets');
var pianoNotes = audioAssets.pianoNotes;
var pianoChords = audioAssets.pianoChords;
var violinNotes = audioAssets.violinNotes;
var violinChords = audioAssets.violinChords;
var guitarNotes = audioAssets.guitarNotes;
var guitarChords = audioAssets.guitarChords;
var noteImages = audioAssets.noteImages;
var chordImages = audioAssets.chordImages;
var instrumentImages = audioAssets.instrumentImages;

// To be used as noteName + num, where num is 1, 2, ...
var noteName = "Note "
var chordName = "Chord "

// Instrument to play
var instrumentNotes = guitarNotes;
var instrumentChords = guitarChords;

// Notes determined by octave * 7 + noteToNum()
// TODO When adding more octave later change default octave to 2
var octave = 0;
var MAX_OCTAVE = 3;

// Dialogues
var mainMenuTxt = "Welcome to nova note. What note or chord would you like to hear?";
var whatCanISay = "To listen to a note say something like, play a c note. To listen to a chord say something like, play a c chord. To change instruments say something like, change instrument to piano.";
var changeInstrHelp = "The available instruments are piano, violin, and guitar.";
var exitTxt = "Good riddance."
var unhandledTxt= "Don't sass me. I'm going back to main menu. If you want to know what you can say, say help me. Now how hard is that?"
var notSupportedTxt = "This command is not supported, do not sass me again."

var noteToNum = function (note) {
    // TODO Include sharp and flat notes later
    switch (note) {
        case "c":
            return 0;
        case "d":
            return 1;
        case "e":
            return 2;
        case "f":
            return 3;
        case "g":
            return 4;
        case "a":
            return 5;
        case "b":
            return 6;
    }
};

var noteIndex = function (note) {
    /*
    Params:
        note : string
    */
    var noteNum = noteToNum(note);
    return octave * 7 + noteToNum;
};

var getNoteIndexes = function (notes) {
    /*
    Params:
        notes : array
    */
    var noteIndexes = []
    for (var i = 0; i < notes.length; i++) {
        noteIndexes.push(noteIndex(notes[i]));
    }
    return noteIndexes;
    
};


var changeInstrument  = function (instrument) {
    // Change instrument variable
    switch (instrument) {
        case constants.instruments.PIANO:
            instrumentNotes = pianoNotes;
            instrumentChords = pianochords;
            break;
        case constants.instruments.VIOLIN:
            instrumentNotes = violinNotes;
            instrumentChords = violinChords;
            break;
        case constants.instruments.GUITAR:
            instrumentNotes = guitarNotes;
            instrumentChords = guitarChords;
            break;
    }
};

var changeOctave = function () {
    octave += 1;
    if (octave > MAX_OCTAVE) {
        octave = MAX_OCTAVE;
    }
    if (octave < 0) {
        octave = 0;
    }
};

var newSessionHandlers = {
    "LaunchRequest" : function () {
        this.handler.state = constants.states.START_MODE;
        this.emitWithState("Start");
    },
    "Unhandled" : function () {
        this.handler.state = constants.states.START_MODE;
        this.emit(":tell", "I love siri.");
    }
};

var stateHandlers = {
    startModeIntentHandlers : Alexa.CreateStateHandler(constants.states.START_MODE, {
        /*
         *  All Intent Handlers for state : START_MODE
         */
        'LaunchRequest' : function () {
            // DEBUG
            console.log("START_MODE: LaunchRequest");

            // Initialize Attributes
            this.attributes['playOrder'] = []
            this.attributes['index'] = -1;
            this.attributes['offsetInMilliseconds'] = 0;
            this.attributes['playbackIndexChanged'] = true;
            this.attributes['instrument'] = constants.instruments.PIANO;
            this.attributes['playingNotes'] = false;
            this.attributes['playingChords'] = false;

            //  Change state to START_MODE
            this.handler.state = constants.states.START_MODE;
            // this.response.speak(mainMenuTxt).listen(whatCanISay);
            this.emit(":ask", mainMenuTxt);
        },
        "Start" : function() {
            // DEBUG
            console.log("START_MODE: START");

            this.attributes['playOrder'] = []
            this.attributes['index'] = -1;
            this.attributes['offsetInMilliseconds'] = 0;
            this.attributes['playbackIndexChanged'] = true;
            this.attributes['playingNotes'] = false;
            this.attributes['playingChords'] = false;
            // this.response.speak(mainMenuTxt).listen(whatCanISay);
            this.emit(":ask", mainMenuTxt);
        },
        'PlayNoteIntent' : function () {
            // TODO Implement multiple notes
            var notes = [];
            if (typeof this.event.request.intent.slots.NoteOne.value != "undefined") {
                notes.push(this.event.request.intent.slots.NoteOne.value);
            }
            if (typeof this.event.request.intent.slots.NoteTwo.value != "undefined") {
                notes.push(this.event.request.intent.slots.NoteTwo.value);
            }
            if (typeof this.event.request.intent.slots.NoteThree.value != "undefined") {
                notes.push(this.event.request.intent.slots.NoteThree.value);
            }
            // var notesToPlay = getNoteIndexes(notes);
            var notesToPlay = [];
            for (var i = 0; i < notes.length; i++) {
                
                // DEBUG
                console.log("NOTE HEARD:");
                console.log(notes[i]);

                var noteNum = -1;
                var letter = notes[i];
                if (letter == "c" || letter == "c." || letter == "C" || letter == "C."){
                    noteNum = 0;
                }
                else if (letter == "d" || letter == "d." || letter == "D" || letter == "D.") {
                    noteNum = 1;
                }
                else if (letter == "e" || letter == "e." || letter == "E" || letter == "E.") {
                    noteNum = 2;
                }
                else if (letter == "f" || letter == "f." || letter == "F" || letter == "F.") {
                    noteNum = 3;
                }
                else if (letter == "g" || letter == "g." || letter == "G" || letter == "G.") {
                    noteNum = 4;
                }
                else if (letter == "a" || letter == "a." || letter == "A" || letter == "A.") {
                    noteNum = 5;
                }
                else if (letter == "b" || letter == "b." || letter == "B" || letter == "B.") {
                    noteNum = 6;
                }
                else {
                    noteNum = 0;
                }

                if (noteNum < 0) {
                    noteNum = 0;
                }
                noteNum = octave * 7 + noteNum;
                notesToPlay.push(noteNum);
            }

            this.attributes['playOrder'] = notesToPlay;
            this.attributes['index'] = 0;
            this.attributes['playbackIndexChanged'] = true;
            this.attributes['playingNotes'] = true;
            this.attributes['playingChords'] = false;
            controller.playNotes.call(this);
        },
        'PlayChordIntent' : function () {
            // TODO Implement multiple chords to be played, only one is allowed atm.
            var chordsToPlay = [];
            var chordName = ""
            if (typeof this.event.request.intent.slots.Chords.value != "undefined") {
                var letter = this.event.request.intent.slots.Chords.value;
                if (letter == "c" || letter == "c." || letter == "C" || letter == "C."){
                    chordName += "C";
                }
                else if (letter == "d" || letter == "d." || letter == "D" || letter == "D.") {
                    chordName += "D";
                }
                else if (letter == "e" || letter == "e." || letter == "E" || letter == "E.") {
                    chordName += "E";
                }
                else if (letter == "f" || letter == "f." || letter == "F" || letter == "F.") {
                    chordName += "F";
                }
                else if (letter == "g" || letter == "g." || letter == "G" || letter == "G.") {
                    chordName += "G";
                }
                else if (letter == "a" || letter == "a." || letter == "A" || letter == "A.") {
                    chordName += "A";
                }
                else if (letter == "b" || letter == "b." || letter == "B" || letter == "B.") {
                    chordName += "B";
                }
                else {
                    chordName += "C";
                }
            }

            if (typeof this.event.request.intent.slots.TypeOne.value != "undefined") {
                var typeOne = this.event.request.intent.slots.TypeOne.value;
                if (typeOne == "major" || typeOne == "minor" || typeOne == "seven") {
                    chordName += " " + typeOne;
                }
            }

            if (typeof this.event.request.intent.slots.TypeTwo.value != "undefined") {
                var typeTwo = this.event.request.intent.slots.TypeTwo.value;
                if (typeTwo == "seven") {
                    chordName += " " + typeTwo;
                }
            }
            chordsToPlay.push(chordName);

            // DEBUG
            console.log("CHORD MADE:");
            console.log(chordName);

            this.attributes['playOrder'] = chordsToPlay;
            this.attributes['index'] = 0;
            this.attributes['playbackIndexChanged'] = true;
            this.attributes['playingNotes'] = false;
            this.attributes['playingChords'] = true;
            controller.playChords.call(this);
        },
        'ChangeInstrumentIntent' : function () {
            // TODO Implement me
            // DEBUG
            console.log("CHANGING INSTRUMENTS");

            if (typeof this.event.request.intent.slots.Instruments.value != "undefined") {
                var changeInstr = this.event.request.intent.slots.Instruments.value;
                var message = "Changed instrument, what note or chord would you like to hear?";
                var reprompt = whatCanISay;
                // TODO Give image
                switch (changeInstr) {
                    case "piano":
                        instrumentNotes = pianoNotes;
                        instrumentChords = pianoChords;
                        var cardTitle = "Piano";
                        var cardContent = "Changed instrument to piano."
                        var imageUrl = { 'largeImageUrl' : instrumentImages['PIANO']};
                        this.emit(":askWithCard", message, reprompt, cardTitle, cardContent, imageUrl);
                        break;
                    case "violin":
                        instrumentNotes = violinNotes;
                        instrumentChords = violinChords;
                        var cardTitle = "Violin";
                        var cardContent = "Changed instrument to violin."
                        var imageUrl = { 'largeImageUrl' : instrumentImages['VIOLIN'] };
                        this.emit(":askWithCard", message, reprompt, cardTitle, cardContent, imageUrl);
                        break;
                    case "guitar":
                        instrumentNotes = guitarNotes;
                        instrumentChords = guitarChords;
                        var cardTitle = "Guitar";
                        var cardContent = "Changed instrument to guitar."
                        var imageUrl = { 'largeImageUrl' : instrumentImages['GUITAR'] };
                        this.emit(":askWithCard", message, reprompt, cardTitle, cardContent, imageUrl);
                        break;
                }
            }
        },
        'AMAZON.HelpIntent' : function () {
            this.emit(":ask", whatCanISay);
        },
        'AMAZON.StopIntent' : function () {
            this.emit(":tell", exitTxt);
        },
        'AMAZON.CancelIntent' : function () {
            this.emit(":tell", exitTxt);
        },
        'SessionEndedRequest' : function () {
            this.emit(":tell", "Good riddance.");
        },
        'Unhandled' : function () {
            this.handler.state = constants.states.START_MODE;
            this.emit(":ask", unhandledTxt);
        }
    }),

    playModeIntentHandlers : Alexa.CreateStateHandler(constants.states.PLAY_MODE, {
        /*
         *  All Intent Handlers for state : PLAY_MODE
         */
        'LaunchRequest' : function () {
            /*
             *  Session resumed in PLAY_MODE STATE.
             *  If playback had finished during last session :
             *      Give welcome message.
             *      Change state to START_STATE to restrict user inputs.
             */
             // DEBUG
             console.log("PLAY_MODE LaunchRequest");

            var message = "I got interrupted, going back to main menu." + mainMenuTxt;
            var reprompt = whatCanISay;
            if (this.attributes['playbackFinished']) {
                message = mainMenuTxt;
            }

            this.handler.state = constants.states.START_MODE;
            // this.response.speak(message).listen(reprompt);
            // this.emit(':responseReady');
            this.attributes['playbackFinished'] = false;
            this.emitWithState("Start");
        },
        // Controller will handle playing logic, this is just here to go 
        // through the play queue.
        'PlayNoteIntent' : function () {
            // DEBUG
            console.log("PLAY_MODE: PlayNoteIntent");

            if (this.attributes['index'] == -1) {
                this.handler.state = constants.states.START_MODE;
                this.emitWithState("Start");
            }
            controller.playNotes.call(this);
        },
        "PlayChordIntent" : function () {
            // DEBUG
            console.log("PLAY_MODE: PlayChordIntent");

            if (this.attributes['index'] == -1) {
                this.handler.state = constants.states.START_MODE;
                this.emitWithState("Start");
            }
            controller.playChords.call(this);
            
        },
        // TODO We don't need these funcitonally, but the audio stream
        // directives require these intents be implemented. Just go back to
        // main menu for them with warning saying this feature not available.
        'AMAZON.NextIntent' : function () { controller.playNext.call(this) },
        'AMAZON.PreviousIntent' : function () { controller.playPrevious.call(this) },
        'AMAZON.PauseIntent' : function () { controller.stop.call(this) },
        'AMAZON.StopIntent' : function () { controller.stop.call(this) },
        'AMAZON.CancelIntent' : function () { controller.stop.call(this) },
        'AMAZON.ResumeIntent' : function () { controller.play.call(this) },
        'AMAZON.LoopOnIntent' : function () { controller.loopOn.call(this) },
        'AMAZON.LoopOffIntent' : function () { controller.loopOff.call(this) },
        'AMAZON.ShuffleOnIntent' : function () { controller.shuffleOn.call(this) },
        'AMAZON.ShuffleOffIntent' : function () { controller.shuffleOff.call(this) },
        'AMAZON.StartOverIntent' : function () { controller.startOver.call(this) },
        'AMAZON.HelpIntent' : function () {
            this.emit(":ask", whatCanISay);
        },
        'SessionEndedRequest' : function () {
            // No session ended logic
        },
        'Unhandled' : function () {
            this.emit(":ask", unhandledTxt);
        }
    }),
    remoteControllerHandlers : Alexa.CreateStateHandler(constants.states.PLAY_MODE, {
        /*
         *  All Requests are received using a Remote Control. Calling corresponding handlers for each of them.
         */
         // TODO fixme, might consider variable to tell if currently playing
         // notes or chords.
        'PlayCommandIssued' : function () { controller.play.call(this) },
        'PauseCommandIssued' : function () { controller.stop.call(this) },
        'NextCommandIssued' : function () { controller.playNext.call(this) },
        'PreviousCommandIssued' : function () { controller.playPrevious.call(this) }
    })
};

module.exports = stateHandlers;

var controller = function () {
    return {
        playNotes: function () {
            // DEBUG
            console.log("CONTROLLER: playNotes");

            this.handler.state = constants.states.PLAY_MODE;

            // Done playing notes, going back to main menu.
            if (this.attributes['playbackFinished']) {
                this.attributes['playbackFinished'] = false;
                this.handler.state = constants.states.START_MODE;
                // this.emitWithState("Start");
                this.emit(":tell", mainMenuTxt);
            }

            var token = String(this.attributes['playOrder'][this.attributes['index']]);
            var playBehavior = "REPLACE_ALL";
            var note = instrumentNotes[this.attributes['playOrder'][this.attributes['index']]];
            var offsetInMilliseconds = this.attributes['offsetInMilliseconds'];
            // Since play behavior is REPLACE_ALL, enqueuedToken attribute need to be set to null.
            this.attributes['enqueuedToken'] = null;

            // DEBUG
            console.log("attributes:");
            console.log(this.attributes);

            // Getting note letter.
            // Assuming title is "Note X"
            // TODO Fix the mod 7 when adding sharp and flat notes.
            var noteNumber = parseInt(note.title.split(" ")[1]);
            var noteNumberMod = noteNumber % 7;
            var letter = "Bagles";
            switch (noteNumberMod) {
                case 0:
                    letter = "C";
                    break;
                case 1:
                    letter = "D";
                    break;
                case 2:
                    letter = "E";
                    break;
                case 3:
                    letter = "F";
                    break;
                case 4:
                    letter = "G";
                    break;
                case 5:
                    letter = "A";
                    break;
                case 6:
                    letter = "B";
                    break;
            }

            // DEBUG
            console.log("noteNumber");
            console.log(noteNumber);
            console.log("noteNumberMod");
            console.log(noteNumberMod);
            console.log(note.title.split());

            var imageUrl = { 'largeImageUrl' : noteImages[noteNumberMod]['url'] };

            // DEBUG
            console.log("IMAGE URL:");
            console.log(imageUrl);

            if (canThrowCard.call(this)) {
                var cardTitle = 'Playing ' + letter;
                var cardContent = 'Playing ' + letter;
                this.response.cardRenderer(cardTitle, cardContent, imageUrl);
            }

            // DEBUG
            console.log("URL PLAYED");
            console.log(note.url);

            this.response.audioPlayerPlay(playBehavior, note.url, token, null, offsetInMilliseconds);
            // TODO Ask response from user after playing all audios so
            // session doesn't just end after asking for one note.
            this.emit(":responseReady");
        },
        playChords: function (){
            // DEBUG
            console.log("CONTROLLER: playChords");
            console.log(this.attributes);
            console.log(instrumentChords);

            this.handler.state = constants.states.PLAY_MODE;

            // Done playing notes, going back to main menu.
            if (this.attributes['playbackFinished']) {
                this.attributes['playbackFinished'] = false;
                this.handler.state = constants.states.START_MODE;
                // this.emitWithState("Start");
                this.emit(":tell", mainMenuTxt);
            }

            var token = String(this.attributes['playOrder'][this.attributes['index']]);
            var playBehavior = "REPLACE_ALL";
            var chordName = this.attributes['playOrder'][this.attributes['index']]
            var chord = instrumentChords[this.attributes['playOrder'][this.attributes['index']]];
            var offsetInMilliseconds = this.attributes['offsetInMilliseconds'];
            // Since play behavior is REPLACE_ALL, enqueuedToken attribute need to be set to null.

            // DEBUG
            console.log("CHORD FROM PLAYORDER");
            console.log(chord);
            console.log(instrumentChords[chord]);

            this.attributes['enqueuedToken'] = null;
            if (!chord) {
                url = instrumentChords["C major"].url;
                chordName = "C major";
            } else {
                var url = chord.url;
            }

            var imageUrl = { 'largeImageUrl' : chordImages[this.attributes['playOrder'][this.attributes['index']]]['url'] };
 
            // DEBUG
            console.log("IMAGE URL:");
            console.log(imageUrl);

            if (canThrowCard.call(this)) {
                var cardTitle = 'Playing ' + chordName;
                var cardContent = 'Playing ' + chordName;
                this.response.cardRenderer(cardTitle, cardContent, imageUrl);
            }

            // DEBUG
            console.log("URL PLAYED");
            console.log(url);

            this.response.audioPlayerPlay(playBehavior, url, token, null, offsetInMilliseconds);
            // TODO Ask response from user after playing all audios so
            // session doesn't just end after asking for one note.
            this.emit(":responseReady");
        },
        stop: function () {
            // Do nothing.
            this.handler.state = constants.states.START_MODE;
            this.emit(":ask", "Don't sass me. " + mainMenuTxt);
        },
        playNext: function () {
            // Do nothing.
            this.handler.state = constants.states.START_MODE;
            this.emit(":ask", "Don't sass me. " + mainMenuTxt);
        },
        playPrevious: function () {
            // Do nothing.
            this.handler.state = constants.states.START_MODE;
            this.emit(":ask", "Don't sass me. " + mainMenuTxt);
        },
        loopOn: function () {
            // Do nothing.
            this.handler.state = constants.states.START_MODE;
            this.emit(":ask", "Don't sass me. " + mainMenuTxt);
        },
        loopOff: function () {
            // Do nothing.
            this.handler.state = constants.states.START_MODE;
            this.emit(":ask", "Don't sass me. " + mainMenuTxt);
        },
        shuffleOn: function () {
            // Do nothing.
            this.handler.state = constants.states.START_MODE;
            this.emit(":ask", "Don't sass me. " + mainMenuTxt);
        },
        shuffleOff: function () {
            // Do nothing. 
            this.handler.state = constants.states.START_MODE;
            this.emit(":ask", "Don't sass me. " + mainMenuTxt);
        },
        startOver: function () {
            // Do nothing.
            this.handler.state = constants.states.START_MODE;
            this.emit(":ask", "Don't sass me. " + mainMenuTxt);
        },
        reset: function () {
            // Do nothing.
            this.handler.state = constants.states.START_MODE;
            this.emit(":ask", "Don't sass me. " + mainMenuTxt);
        }
    }
}();

function canThrowCard() {
    /*
     * To determine when can a card should be inserted in the response.
     * In response to a PlaybackController Request (remote control events) we cannot issue a card,
     * Thus adding restriction of request type being "IntentRequest".
     */
    if (this.event.request.type === 'IntentRequest' && this.attributes['playbackIndexChanged']) {
        this.attributes['playbackIndexChanged'] = false;
        return true;
    } else {
        return false;
    }
}

