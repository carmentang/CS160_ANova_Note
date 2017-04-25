'use strict';

var Alexa = require('alexa-sdk');
var constants = require('./constants');

var audioAssets= require('./audioAssets');
var pianoNotes = audioAssets.pianoNotes;
var pianoChords = audioAssets.pianoChords;
var violinNotes = audioAssets.violinNotes;
var violinChords = audioAssets.violinChords;
var guitarNotes = audioAssets.guitarNotes;
var guitarChords = audioAssets.guitarChords;

// Binding audio handlers to PLAY_MODE State since they are expected only in this mode.
var audioEventHandlers = Alexa.CreateStateHandler(constants.states.PLAY_MODE, {
    'PlaybackStarted' : function () {
        /*
         * AudioPlayer.PlaybackStarted Directive received.
         * Confirming that requested audio file began playing.
         * Storing details in dynamoDB using attributes.
         */
        // DEBUG
        console.log("PLAYBACK STARTED");

        this.attributes['token'] = getToken.call(this);
        this.attributes['index'] = getIndex.call(this);
        this.attributes['playbackFinished'] = false;

        this.emit(':saveState', true);
    },
    'PlaybackFinished' : function () {
        /*
         * AudioPlayer.PlaybackFinished Directive received.
         * Confirming that audio file completed playing.
         * Storing details in dynamoDB using attributes.
         */
        // DEBUG
        console.log("PLAYBACK FINISHED");

        this.attributes['playbackFinished'] = true;
        this.attributes['enqueuedToken'] = false;
 
        // DEBUG
        // this.handler.state = constants.states.START_MODE;

        this.emit(':saveState', true);
    },
    'PlaybackStopped' : function () {
        /*
         * AudioPlayer.PlaybackStopped Directive received.
         * Confirming that audio file stopped playing.
         * Storing details in dynamoDB using attributes.
         */
        // DEBUG
        console.log("PLAYBACK STOPPED");

        this.attributes['token'] = getToken.call(this);
        this.attributes['index'] = getIndex.call(this);
        this.attributes['offsetInMilliseconds'] = getOffsetInMilliseconds.call(this);

        this.emit(':saveState', true);
    },
    'PlaybackNearlyFinished' : function () {
        /*
         * AudioPlayer.PlaybackNearlyFinished Directive received.
         * Using this opportunity to enqueue the next audio
         * Storing details in dynamoDB using attributes.
         * Enqueuing the next audio file.
         */

        // DEBUG
        console.log("PLAYBACK NEARLY FINISHED");

        if (this.attributes['enqueuedToken']) {
            /*
             * Since AudioPlayer.PlaybackNearlyFinished Directive are prone to be delivered multiple times during the
             * same audio being played.
             * If an audio file is already enqueued, exit without enqueuing again.
             */
            return this.context.succeed(true);
        }
        
        var enqueueIndex = this.attributes['index'];
        enqueueIndex +=1;
        // Checking if  there are any items to be enqueued.
        if (enqueueIndex === this.attributes['playOrder'].length) {
            // Nothing to enqueue since reached end of the list and looping is disabled.
            // TODO What happens after returning? Where does control flow go to?
            return this.context.succeed(true);
        }
        // Setting attributes to indicate item is enqueued.
        this.attributes['enqueuedToken'] = String(this.attributes['playOrder'][enqueueIndex]);

        var enqueueToken = this.attributes['enqueuedToken'];
        var playBehavior = 'ENQUEUE';

        var instrumentSounds;
        switch (this.attributes['instrument']) {
            case constants.instruments.PIANO:
                if (this.attributes['playingNotes']) {
                    instrumentSounds = pianoNotes;
                } else {
                    instrumentSounds = pianoChords;
                }
                break;
            case constants.instruments.VIOLIN:
                if (this.attributes['playingNotes']) {
                    instrumentSounds = violinNotes;
                } else {
                    instrumentSounds = violinChords;
                }
            case constants.instruments.GUITAR:
                if (this.attributes['playingNotes']) {
                    instrumentSounds = guitarNotes;
                } else {
                    instrumentSounds = guitarChords;
                }
        }
        
        var note = instrumentSounds[this.attributes['playOrder'][enqueueIndex]];
        var expectedPreviousToken = this.attributes['token'];
        var offsetInMilliseconds = 0;
        
        this.response.audioPlayerPlay(playBehavior, podcast.url, enqueueToken, expectedPreviousToken, offsetInMilliseconds);
        this.emit(':responseReady');
    },
    'PlaybackFailed' : function () {
     //  AudioPlayer.PlaybackNearlyFinished Directive received. Logging the error.
     console.log("Playback Failed : %j", this.event.request.error);
     this.context.succeed(true);
    }
});

module.exports = audioEventHandlers;

function getToken() {
    // Extracting token received in the request.
    return this.event.request.token;
}

function getIndex() {
    // Extracting index from the token received in the request.
    var tokenValue = parseInt(this.event.request.token);
    return this.attributes['playOrder'].indexOf(tokenValue);
}

function getOffsetInMilliseconds() {
    // Extracting offsetInMilliseconds received in the request.
    return this.event.request.offsetInMilliseconds;
}
