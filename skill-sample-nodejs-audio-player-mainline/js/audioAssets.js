'use strict';

var pianoNotes = [
    // TODO Add lower octove note 0-6, and higher octave notes 14-20
    {
        // C note
    	'title' : 'Note 7',
    	'url' : 'https://feeds.soundcloud.com/stream/319252567-user-188005641-39173-jobro-piano-ff-026.mp3'
    },
    {
        // D note
        'title' : 'Note 8',
        'url' : 'https://feeds.soundcloud.com/stream/319252561-user-188005641-39175-jobro-piano-ff-028.mp3'
    },
    {
        // E
        'title' : 'Note 9',
        'url' : 'https://feeds.soundcloud.com/stream/319252555-user-188005641-39177-jobro-piano-ff-030.mp3'
    },
    {
        // F
        'title' : 'Note 10',
        'url' : 'https://feeds.soundcloud.com/stream/319252550-user-188005641-39178-jobro-piano-ff-031.mp3'
    },
    {
        // G
        'title' : 'Note 11',
        'url' : 'https://feeds.soundcloud.com/stream/319252545-user-188005641-39180-jobro-piano-ff-033.mp3'
    },
    {
        // A
        'title' : 'Note 12',
        'url' : 'https://feeds.soundcloud.com/stream/319252537-user-188005641-39182-jobro-piano-ff-035.mp3'
    },
    {
        // B
        'title' : 'Note 13',
        'url' : 'https://feeds.soundcloud.com/stream/319252534-user-188005641-39184-jobro-piano-ff-037.mp3'
    }
];

var pianoChords = {
    // TODO Add chords
    'C major' : { 'url' : 'https://feeds.soundcloud.com/stream/319502949-user-188005641-grand-piano-fazioli-major-c-middle.mp3' } ,
    'D minor' : { 'url' : 'https://feeds.soundcloud.com/stream/319502831-user-188005641-grand-piano-fazioli-minor-chords-dm-lower.mp3' },
    'E minor' : { 'url' : 'https://feeds.soundcloud.com/stream/319502795-user-188005641-grand-piano-fazioli-minor-chords-em-lower.mp3' },
    'F major' : { 'url' : 'https://feeds.soundcloud.com/stream/319502936-user-188005641-grand-piano-fazioli-major-f-middle.mp3' },
    'G major' : { 'url' : 'https://feeds.soundcloud.com/stream/319502924-user-188005641-grand-piano-fazioli-major-g-middle.mp3' },
    'A minor' : { 'url' : 'https://feeds.soundcloud.com/stream/319502896-user-188005641-grand-piano-fazioli-minor-chords-am-lower.mp3' },
    'B minor' : { 'url' : 'https://feeds.soundcloud.com/stream/319502866-user-188005641-grand-piano-fazioli-minor-chords-bm-lower.mp3' }
};

var violinNotes = [
    // TODO Add notes
    {
    	'title' : 'Note 7',
    	'url' : 'https://feeds.soundcloud.com/stream/319252567-user-188005641-39173-jobro-piano-ff-026.mp3'
    },
    {
    	'title' : 'Note 8',
    	'url' : 'note_url.mp3'
    },
    {
    	'title' : 'Note 9',
    	'url' : 'note_url.mp3'
    },
    {
    	'title' : 'Note 10',
    	'url' : 'note_url.mp3'
    },
    {
    	'title' : 'Note 11',
    	'url' : 'note_url.mp3'
    },
    {
    	'title' : 'Note 12',
    	'url' : 'note_url.mp3'
    },
    {
    	'title' : 'Note 13',
    	'url' : 'note_url.mp3'
    }
];

var violinChords = {
    // TODO Add chords
    'C major' : { 'url' : 'https://feeds.soundcloud.com/stream/319252567-user-188005641-39173-jobro-piano-ff-026.mp3' } ,
    'D minor' : { 'url' : 'fixme.mp3' },
    'E minor' : { 'url' : 'fixme.mp3' },
    'F major' : { 'url' : 'fixme.mp3' },
    'G major' : { 'url' : 'fixme.mp3' },
    'A minor' : { 'url' : 'fixme.mp3' },
    'B minor' : { 'url' : 'fixme.mp3' }
};

var guitarNotes = [
    // TODO Add notes
    {
    	'title' : 'Note 7',
    	'url' : 'https://feeds.soundcloud.com/stream/319508065-user-188005641-guitar-c-mid.mp3'
    },
    {
    	'title' : 'Note 8',
    	'url' : 'https://feeds.soundcloud.com/stream/319508055-user-188005641-guitar-d-mid.mp3'
    },
    {
    	'title' : 'Note 9',
    	'url' : 'https://feeds.soundcloud.com/stream/319508047-user-188005641-guitar-e-mid.mp3'
    },
    {
    	'title' : 'Note 10',
    	'url' : 'https://feeds.soundcloud.com/stream/319508040-user-188005641-guitar-f-mid.mp3'
    },
    {
    	'title' : 'Note 11',
    	'url' : 'https://feeds.soundcloud.com/stream/319508033-user-188005641-guitar-g-mid.mp3'
    },
    {
    	'title' : 'Note 12',
    	'url' : 'https://feeds.soundcloud.com/stream/319508084-user-188005641-guitar-a-mid.mp3'
    },
    {
    	'title' : 'Note 13',
    	'url' : 'https://feeds.soundcloud.com/stream/319508076-user-188005641-guitar-b-mid.mp3'
    }
];

var guitarChords = {
    // TODO Add chords
    'C major' : { 'url' : 'https://feeds.soundcloud.com/stream/319508157-user-188005641-guitar-c-chord.mp3' } ,
    'D minor' : { 'url' : 'https://feeds.soundcloud.com/stream/319508149-user-188005641-guitar-dm-chord.mp3' },
    'E minor' : { 'url' : 'https://feeds.soundcloud.com/stream/319508142-user-188005641-guitar-em-chord.mp3' },
    'F major' : { 'url' : 'https://feeds.soundcloud.com/stream/319508130-user-188005641-guitar-f-chord.mp3' },
    'G major' : { 'url' : 'https://feeds.soundcloud.com/stream/319508123-user-188005641-guitar-g-chord.mp3' },
    'A minor' : { 'url' : 'https://feeds.soundcloud.com/stream/319508175-user-188005641-guitar-am-chord.mp3' },
    'B minor' : { 'url' : 'https://feeds.soundcloud.com/stream/319508169-user-188005641-guitar-bm-chord.mp3' }
};


module.exports = {
    pianoNotes,
    pianoChords,
    violinNotes,
    violinChords,
    guitarNotes,
    guitarChords
};

