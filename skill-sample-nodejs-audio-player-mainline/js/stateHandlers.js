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

// To be used as noteName + num, where num is 1, 2, ...
var noteName = "Note "
var chordName = "Chord "

// Instrument to play
var instrumentNotes = pianoNotes;
var instrumentChords = pianoChords;

// Notes determined by octave * 7 + noteToNum()
// TODO When adding more octave later change default octave to 2
var octave = 0;
var MAX_OCTAVE = 3;

// Dialogues
var mainMenuTxt = "Welcome to music note. What note or chord would you like?";
var whatCanISay = "To listen to a note say something like, play a c note. To listen to a chord say something like, play a c chord. To change instruments say something like, change instrument to piano.";
var changeInstrHelp = "The available instruments are piano, violin, and guitar.";
var exitTxt = "Good riddance."
var unhandledTxt= "Don't sass me. I'm going back to main menu. If you want to know what you can say, say what can I say. Now how hard is that?"
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
            // TODO Test me
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
                switch (notes[i]) {
                    case "c":
                        noteNum = 0;
                        break;
                    case "c.":
                        noteNum = 0;
                        break;
                    case "C":
                        noteNum = 0;
                        break;
                    case "d":
                        noteNum = 1;
                        break;
                    case "D":
                        noteNum = 1;
                        break;
                    case "d.":
                        noteNum = 1;
                        break;
                    case "e":
                        noteNum = 2;
                        break;
                    case "E":
                        noteNum = 2;
                        break;
                    case "e.":
                        noteNum = 2;
                        break;
                    case "f":
                        noteNum = 3;
                        break;
                    case "F":
                        noteNum = 3;
                        break;
                    case "f.":
                        noteNum = 3;
                        break;
                    case "g":
                        noteNum = 4;
                        break;
                    case "G":
                        noteNum = 4;
                        break;
                    case "g.":
                        noteNum = 4;
                        break;
                    case "a":
                        noteNum = 5;
                        break;
                    case "A":
                        noteNum = 5;
                        break;
                    case "a.":
                        noteNum = 5;
                        break;
                    case "b":
                        noteNum = 6;
                        break;
                    case "B":
                        noteNum = 6;
                        break;
                    case "b.":
                        noteNum = 6;
                        break;
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
            controller.playNotes.call(this, notes);
        },
        'PlayChordIntent' : function () {
            // TODO Implement me
        },
        'ChangeInstrumentIntent' : function () {
            // TODO Implement me
        },
        'AMAZON.HelpIntent' : function () {
            this.emit(":tell", whatCanISay);
        },
        'AMAZON.StopIntent' : function () {
            this.emit(":tell", exitTxt);
        },
        'AMAZON.CancelIntent' : function () {
            this.emit(":tell", exitTxt);
        },
        'SessionEndedRequest' : function () {
            // No session ended logic
        },
        'Unhandled' : function () {
            this.emit(":tell", unhandledTxt);
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
            // TODO fixme?
            console.log("PLAY_MODE: PlayNoteIntent");

            if (this.attributes['index'] == -1) {
                this.handler.state = START_MODE;
                this.emitWithState("Start");
            }
            controller.playNotes.call(this);
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

            // This will called while audio is playing and a user says "ask <invocation_name> for help"
            this.emit(":ask", whatCanISay);
        },
        'SessionEndedRequest' : function () {
            // No session ended logic
        },
        'Unhandled' : function () {
            this.emit(":tell", unhandledTxt);
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
            // TODO Test me
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

            if (canThrowCard.call(this)) {
                var cardTitle = 'Playing ' + note.title;
                var cardContent = 'Playing ' + note.title;
                this.response.cardRenderer(cardTitle, cardContent, null);
            }

            // DEBUG
            console.log("URL PLAYED");
            console.log(note.url);

            this.response.audioPlayerPlay(playBehavior, note.url, token, null, offsetInMilliseconds);
            // TODO Ask response from user after playing all audios so
            // session doesn't just end after asking for one note.
            this.emit(":responseReady");
        },
        playChord: function (){
            // TODO Implement me
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

