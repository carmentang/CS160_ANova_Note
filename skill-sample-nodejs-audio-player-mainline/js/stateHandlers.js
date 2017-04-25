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


var stateHandlers = {
    startModeIntentHandlers : Alexa.CreateStateHandler(constants.states.START_MODE, {
        /*
         *  All Intent Handlers for state : START_MODE
         */
        'LaunchRequest' : function () {
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
            this.response.speak(mainMenuTxt).listen(whatCanISay);
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
            this.response.speak(mainMenuTxt).listen(whatCanISay);
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
             console.log("PLAY MODE LAUNCH REQUEST");

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

            // if (this.attributes['index'] == -1) {
            //     this.handler.state = START_MODE;
            //     this.emitWithState("Start");
            // }
            // controller.playNotes.call(this);
            this.handler.state = constants.states.START_MODE;
            this.emitWithState("PlayNoteIntent");
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
            this.handler.state = constants.states.PLAY_MODE;

            // Done playing notes, going back to main menu.
            if (this.attributes['playbackFinished']) {
                this.attributes['playbackFinished'] = false;
                this.handler.state = constants.states.START_MODE;
                this.emitWithState("Start");
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
            // Send prev. alexa response & persist state.
            this.emit(":responseReady");
        },
        playChord: function (){
            // TODO Implement me
        },
        stop: function () {
            /*
             *  Issuing AudioPlayer.Stop directive to stop the audio.
             *  Attributes already stored when AudioPlayer.Stopped request received.
             */
            this.response.audioPlayerStop();
            this.emit(':responseReady');
        },
        playNext: function () {
            /*
            Do nothing
            */
            this.handler.state = constants.states.START_MODE;
            this.emit(":ask", mainMenuTxt);
        },
        playPrevious: function () {
            /*
             *  Called when AMAZON.PreviousIntent or PlaybackController.PreviousCommandIssued is invoked.
             *  Index is computed using token stored when AudioPlayer.PlaybackStopped command is received.
             *  If reached at the end of the playlist, choose behavior based on "loop" flag.
             */
            var index = this.attributes['index'];
            index -= 1;
            // Check for last audio file.
            if (index === -1) {
                if (this.attributes['loop']) {
                    index = audioData.length - 1;
                } else {
                    // Reached at the end. Thus reset state to start mode and stop playing.
                    this.handler.state = constants.states.START_MODE;

                    var message = 'You have reached at the start of the playlist.';
                    this.response.speak(message).audioPlayerStop();
                    return this.emit(':responseReady');
                }
            }
            // Set values to attributes.
            this.attributes['index'] = index;
            this.attributes['offsetInMilliseconds'] = 0;
            this.attributes['playbackIndexChanged'] = true;

            controller.play.call(this);
        },
        loopOn: function () {
            // Turn on loop play.
            this.attributes['loop'] = true;
            var message = 'Loop turned on.';
            this.response.speak(message);
            this.emit(':responseReady');
        },
        loopOff: function () {
            // Turn off looping
            this.attributes['loop'] = false;
            var message = 'Loop turned off.';
            this.response.speak(message);
            this.emit(':responseReady');
        },
        shuffleOn: function () {
            // Turn on shuffle play.
            this.attributes['shuffle'] = true;
            shuffleOrder((newOrder) => {
                // Play order have been shuffled. Re-initializing indices and playing first song in shuffled order.
                this.attributes['playOrder'] = newOrder;
                this.attributes['index'] = 0;
                this.attributes['offsetInMilliseconds'] = 0;
                this.attributes['playbackIndexChanged'] = true;
                controller.play.call(this);
            });
        },
        shuffleOff: function () {
            // Turn off shuffle play. 
            if (this.attributes['shuffle']) {
                this.attributes['shuffle'] = false;
                // Although changing index, no change in audio file being played as the change is to account for reordering playOrder
                this.attributes['index'] = this.attributes['playOrder'][this.attributes['index']];
                this.attributes['playOrder'] = Array.apply(null, {length: audioData.length}).map(Number.call, Number);
            }
            controller.play.call(this);
        },
        startOver: function () {
            // Start over the current audio file.
            this.attributes['offsetInMilliseconds'] = 0;
            controller.play.call(this);
        },
        reset: function () {
            // Reset to top of the playlist.
            this.attributes['index'] = 0;
            this.attributes['offsetInMilliseconds'] = 0;
            this.attributes['playbackIndexChanged'] = true;
            controller.play.call(this);
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

function shuffleOrder(callback) {
    // Algorithm : Fisher-Yates shuffle
    var array = Array.apply(null, {length: audioData.length}).map(Number.call, Number);
    var currentIndex = array.length;
    var temp, randomIndex;

    while (currentIndex >= 1) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }
    callback(array);
}
