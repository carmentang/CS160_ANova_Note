'use strict';

var instrumentImages = {
    'PIANO' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/instrument_images/piano-01.png',
    'VIOLIN' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/instrument_images/violin-01.png',
    'GUITAR' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/instrument_images/guitar-01.png'
};
    

var noteImages = [
    {
        'title' : 'Note 7',
        'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/note_images/c_note-01.png'
    },
    {
        'title' : 'Note 8',
        'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/note_images/d_note-01.png'
    },
    {
        'title' : 'Note 9',
        'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/note_images/e_note-01.png'
    },
    {
        'title' : 'Note 10',
        'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/note_images/f_note-01.png'
    },
    {
        'title' : 'Note 11',
        'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/note_images/g_note-01.png'
    },
    {
        'title' : 'Note 12',
        'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/note_images/a_note-01.png'
    },
    {
        'title' : 'Note 13',
        'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/note_images/b_note-01.png'
    }
];

var chordImages = {
    'C major' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/c_chord-01.png' } ,
    'D minor' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/d_minor_chord-01.png' },
    'E minor' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/e_minor_chord-01.png' },
    'F major' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/f_chord-01.png' },
    'G major' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/g_chord-01.png' },
    'A minor' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/a_minor_chord-01.png' },
    'B minor' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/b_chord-01.png' }
};

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
    guitarChords,
    noteImages,
    chordImages,
    instrumentImages
};

