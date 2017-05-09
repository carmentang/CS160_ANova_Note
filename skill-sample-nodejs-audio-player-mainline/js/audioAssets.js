'use strict';

var instrumentImages = {
    'PIANO' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/instrument_images/piano-01.png',
    'VIOLIN' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/instrument_images/violin-01.png',
    'GUITAR' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/instrument_images/guitar-01.png'
};
    

var noteImages = [
    {
        // C
        'title' : 'Note 0',
        'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/note_images/c_note-01.png'
    },
    {
        // C#/Db
        'title' : 'Note 1',
        'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/note_images/c_note-01.png'
    },
    {
        // D
        'title' : 'Note 2',
        'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/note_images/d_note-01.png'
    },
    {
        // D#/Eb
        'title' : 'Note 3',
        'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/note_images/d_note-01.png'
    },
    {
        // E
        'title' : 'Note 4',
        'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/note_images/e_note-01.png'
    },
    {
        // F
        'title' : 'Note 5',
        'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/note_images/f_note-01.png'
    },
    {
        // F#/Gb
        'title' : 'Note 6',
        'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/note_images/f_note-01.png'
    },
    {
        // G
        'title' : 'Note 7',
        'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/note_images/g_note-01.png'
    },
    {
        // G#/Ab
        'title' : 'Note 8',
        'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/note_images/g_note-01.png'
    },
    {
        // A
        'title' : 'Note 9',
        'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/note_images/a_note-01.png'
    },
    {
        // A#/Bb
        'title' : 'Note 10',
        'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/note_images/a_note-01.png'
    },
    {
        // B
        'title' : 'Note 11',
        'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/note_images/b_note-01.png'
    }
];

var chordImages = {
    'C major' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/c_chord-01.png' } ,
    'C minor' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/c_chord-01.png' } ,
    'C# major' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/c_chord-01.png' } ,
    'C# minor' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/c_chord-01.png' } ,
    'Db major' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/d_minor_chord-01.png' },
    'Db minor' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/d_minor_chord-01.png' },
    'D major' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/d_minor_chord-01.png' },
    'D minor' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/d_minor_chord-01.png' },
    'D# major' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/d_minor_chord-01.png' },
    'D# minor' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/d_minor_chord-01.png' },
    'Eb major' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/e_minor_chord-01.png' },
    'Eb minor' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/e_minor_chord-01.png' },
    'E major' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/e_minor_chord-01.png' },
    'E minor' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/e_minor_chord-01.png' },
    'F major' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/f_chord-01.png' },
    'F minor' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/f_chord-01.png' },
    'F# major' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/f_chord-01.png' },
    'F# minor' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/f_chord-01.png' },
    'Gb major' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/g_chord-01.png' },
    'Gb minor' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/g_chord-01.png' },
    'G major' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/g_chord-01.png' },
    'G minor' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/g_chord-01.png' },
    'G# major' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/g_chord-01.png' },
    'G# minor' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/g_chord-01.png' },
    'Ab major' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/a_minor_chord-01.png' },
    'Ab minor' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/a_minor_chord-01.png' },
    'A major' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/a_minor_chord-01.png' },
    'A minor' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/a_minor_chord-01.png' },
    'A# major' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/a_minor_chord-01.png' },
    'A# minor' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/a_minor_chord-01.png' },
    'Bb major' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/b_chord-01.png' },
    'Bb minor' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/b_chord-01.png' },
    'B major' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/b_chord-01.png' },
    'B minor' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/b_chord-01.png' }
};

var pianoNotes = [
    // TODO Add lower octove note 0-6, and higher octave notes 14-20
    {
        // C note
    	'title' : 'Note 0',
    	'url' : 'https://feeds.soundcloud.com/stream/319252567-user-188005641-39173-jobro-piano-ff-026.mp3'
    },
    {
        // C#/Db  note
    	'title' : 'Note 1',
    	'url' : 'https://feeds.soundcloud.com/stream/319252567-user-188005641-39173-jobro-piano-ff-026.mp3'
    },
    {
        // D note
        'title' : 'Note 2',
        'url' : 'https://feeds.soundcloud.com/stream/319252561-user-188005641-39175-jobro-piano-ff-028.mp3'
    },
    {
        // D#/Eb note
        'title' : 'Note 3',
        'url' : 'https://feeds.soundcloud.com/stream/319252561-user-188005641-39175-jobro-piano-ff-028.mp3'
    },
    {
        // E
        'title' : 'Note 4',
        'url' : 'https://feeds.soundcloud.com/stream/319252555-user-188005641-39177-jobro-piano-ff-030.mp3'
    },
    {
        // F
        'title' : 'Note 5',
        'url' : 'https://feeds.soundcloud.com/stream/319252550-user-188005641-39178-jobro-piano-ff-031.mp3'
    },
    {
        // F#/Gb
        'title' : 'Note 6',
        'url' : 'https://feeds.soundcloud.com/stream/319252550-user-188005641-39178-jobro-piano-ff-031.mp3'
    },
    {
        // G
        'title' : 'Note 7',
        'url' : 'https://feeds.soundcloud.com/stream/319252545-user-188005641-39180-jobro-piano-ff-033.mp3'
    },
    {
        // G#/Ab
        'title' : 'Note 8',
        'url' : 'https://feeds.soundcloud.com/stream/319252545-user-188005641-39180-jobro-piano-ff-033.mp3'
    },
    {
        // A
        'title' : 'Note 9',
        'url' : 'https://feeds.soundcloud.com/stream/319252537-user-188005641-39182-jobro-piano-ff-035.mp3'
    },
    {
        // A#/Bb
        'title' : 'Note 10',
        'url' : 'https://feeds.soundcloud.com/stream/319252537-user-188005641-39182-jobro-piano-ff-035.mp3'
    },
    {
        // B
        'title' : 'Note 11',
        'url' : 'https://feeds.soundcloud.com/stream/319252534-user-188005641-39184-jobro-piano-ff-037.mp3'
    }
];

var pianoChords = {
    // TODO Add chords
    'C major' : { 'url' : 'https://feeds.soundcloud.com/stream/319502949-user-188005641-grand-piano-fazioli-major-c-middle.mp3' } ,
    'C minor' : { 'url' : 'https://feeds.soundcloud.com/stream/319502949-user-188005641-grand-piano-fazioli-major-c-middle.mp3' } ,
    'C# major' : { 'url' : 'https://feeds.soundcloud.com/stream/319502949-user-188005641-grand-piano-fazioli-major-c-middle.mp3' } ,
    'C# minor' : { 'url' : 'https://feeds.soundcloud.com/stream/319502949-user-188005641-grand-piano-fazioli-major-c-middle.mp3' } ,
    'D major' : { 'url' : 'https://feeds.soundcloud.com/stream/319502831-user-188005641-grand-piano-fazioli-minor-chords-dm-lower.mp3' },
    'D minor' : { 'url' : 'https://feeds.soundcloud.com/stream/319502831-user-188005641-grand-piano-fazioli-minor-chords-dm-lower.mp3' },
    'D# major' : { 'url' : 'https://feeds.soundcloud.com/stream/319502831-user-188005641-grand-piano-fazioli-minor-chords-dm-lower.mp3' },
    'D# minor' : { 'url' : 'https://feeds.soundcloud.com/stream/319502831-user-188005641-grand-piano-fazioli-minor-chords-dm-lower.mp3' },
    'E major' : { 'url' : 'https://feeds.soundcloud.com/stream/319502795-user-188005641-grand-piano-fazioli-minor-chords-em-lower.mp3' },
    'E minor' : { 'url' : 'https://feeds.soundcloud.com/stream/319502795-user-188005641-grand-piano-fazioli-minor-chords-em-lower.mp3' },
    'F major' : { 'url' : 'https://feeds.soundcloud.com/stream/319502936-user-188005641-grand-piano-fazioli-major-f-middle.mp3' },
    'F minor' : { 'url' : 'https://feeds.soundcloud.com/stream/319502936-user-188005641-grand-piano-fazioli-major-f-middle.mp3' },
    'F# major' : { 'url' : 'https://feeds.soundcloud.com/stream/319502936-user-188005641-grand-piano-fazioli-major-f-middle.mp3' },
    'F# minor' : { 'url' : 'https://feeds.soundcloud.com/stream/319502936-user-188005641-grand-piano-fazioli-major-f-middle.mp3' },
    'G major' : { 'url' : 'https://feeds.soundcloud.com/stream/319502924-user-188005641-grand-piano-fazioli-major-g-middle.mp3' },
    'G minor' : { 'url' : 'https://feeds.soundcloud.com/stream/319502924-user-188005641-grand-piano-fazioli-major-g-middle.mp3' },
    'G# major' : { 'url' : 'https://feeds.soundcloud.com/stream/319502924-user-188005641-grand-piano-fazioli-major-g-middle.mp3' },
    'G# minor' : { 'url' : 'https://feeds.soundcloud.com/stream/319502924-user-188005641-grand-piano-fazioli-major-g-middle.mp3' },
    'A major' : { 'url' : 'https://feeds.soundcloud.com/stream/319502896-user-188005641-grand-piano-fazioli-minor-chords-am-lower.mp3' },
    'A minor' : { 'url' : 'https://feeds.soundcloud.com/stream/319502896-user-188005641-grand-piano-fazioli-minor-chords-am-lower.mp3' },
    'A# major' : { 'url' : 'https://feeds.soundcloud.com/stream/319502896-user-188005641-grand-piano-fazioli-minor-chords-am-lower.mp3' },
    'A# minor' : { 'url' : 'https://feeds.soundcloud.com/stream/319502896-user-188005641-grand-piano-fazioli-minor-chords-am-lower.mp3' },
    'B major' : { 'url' : 'https://feeds.soundcloud.com/stream/319502866-user-188005641-grand-piano-fazioli-minor-chords-bm-lower.mp3' },
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
        // C
    	'title' : 'Note 0',
    	'url' : 'https://feeds.soundcloud.com/stream/319508065-user-188005641-guitar-c-mid.mp3'
    },
    {
        // C#/Db
    	'title' : 'Note 1',
    	'url' : 'https://feeds.soundcloud.com/stream/321674308-user-188005641-guitar-c-sharp-mid.mp3'
    },
    {
        // D
    	'title' : 'Note 2',
    	'url' : 'https://feeds.soundcloud.com/stream/319508055-user-188005641-guitar-d-mid.mp3'
    },
    {
        // D#/Eb
    	'title' : 'Note 3',
    	'url' : 'https://feeds.soundcloud.com/stream/321674302-user-188005641-guitar-d-sharp-mid.mp3'
    },
    {
        // E
    	'title' : 'Note 4',
    	'url' : 'https://feeds.soundcloud.com/stream/319508047-user-188005641-guitar-e-mid.mp3'
    },
    {
        // F
    	'title' : 'Note 5',
    	'url' : 'https://feeds.soundcloud.com/stream/319508040-user-188005641-guitar-f-mid.mp3'
    },
    {
        // F#/Gb
    	'title' : 'Note 6',
    	'url' : 'https://feeds.soundcloud.com/stream/321674292-user-188005641-guitar-f-sharp-mid.mp3'
    },
    {
        // G
    	'title' : 'Note 7',
    	'url' : 'https://feeds.soundcloud.com/stream/319508033-user-188005641-guitar-g-mid.mp3'
    },
    {
        // G#/Ab
    	'title' : 'Note 8',
    	'url' : 'https://feeds.soundcloud.com/stream/321674281-user-188005641-guitar-g-sharp-mid.mp3'
    },
    {
        // A
    	'title' : 'Note 9',
    	'url' : 'https://feeds.soundcloud.com/stream/319508084-user-188005641-guitar-a-mid.mp3'
    },
    {
        // A#/Bb
    	'title' : 'Note 10',
    	'url' : 'https://feeds.soundcloud.com/stream/321674322-user-188005641-guitar-a-sharp-mid.mp3'
    },
    {
        // B
    	'title' : 'Note 11',
    	'url' : 'https://feeds.soundcloud.com/stream/319508076-user-188005641-guitar-b-mid.mp3'
    }
];

var guitarChords = {
    // TODO Add chords
    'C major' : { 'url' : 'https://feeds.soundcloud.com/stream/319508157-user-188005641-guitar-c-chord.mp3' } ,
    'C minor' : { 'url' : 'https://feeds.soundcloud.com/stream/321674402-user-188005641-guitar-cm-chord.mp3' } ,
    'C# major' : { 'url' : 'https://feeds.soundcloud.com/stream/321674390-user-188005641-guitar-c-sharp-chord.mp3' } ,
    'C# minor' : { 'url' : 'https://feeds.soundcloud.com/stream/321674409-user-188005641-guitar-cm-sharp-chord.mp3' } ,
    'Db major' : { 'url' : 'https://feeds.soundcloud.com/stream/321674390-user-188005641-guitar-c-sharp-chord.mp3' },
    'Db minor' : { 'url' : 'https://feeds.soundcloud.com/stream/321674409-user-188005641-guitar-cm-sharp-chord.mp3' },
    'D major' : { 'url' : 'https://feeds.soundcloud.com/stream/321674417-user-188005641-guitar-d-chord.mp3' },
    'D minor' : { 'url' : 'https://feeds.soundcloud.com/stream/319508149-user-188005641-guitar-dm-chord.mp3' },
    'D# major' : { 'url' : 'https://feeds.soundcloud.com/stream/321674427-user-188005641-guitar-d-sharp-chord.mp3' },
    'D# minor' : { 'url' : 'https://feeds.soundcloud.com/stream/321674433-user-188005641-guitar-dm-sharp-chord.mp3' },
    'Eb major' : { 'url' : 'https://feeds.soundcloud.com/stream/321674427-user-188005641-guitar-d-sharp-chord.mp3' },
    'Eb minor' : { 'url' : 'https://feeds.soundcloud.com/stream/321674433-user-188005641-guitar-dm-sharp-chord.mp3' },
    'E major' : { 'url' : 'https://feeds.soundcloud.com/stream/321674447-user-188005641-guitar-e-chord.mp3' },
    'E minor' : { 'url' : 'https://feeds.soundcloud.com/stream/319508142-user-188005641-guitar-em-chord.mp3' },
    'F major' : { 'url' : 'https://feeds.soundcloud.com/stream/319508130-user-188005641-guitar-f-chord.mp3' },
    'F minor' : { 'url' : 'https://feeds.soundcloud.com/stream/321674459-user-188005641-guitar-fm-chord.mp3' },
    'F# major' : { 'url' : 'https://feeds.soundcloud.com/stream/321674464-user-188005641-guitar-f-sharp-chord.mp3' },
    'F# minor' : { 'url' : 'https://feeds.soundcloud.com/stream/321674467-user-188005641-guitar-fm-sharp-chord.mp3' },
    'Gb major' : { 'url' : 'https://feeds.soundcloud.com/stream/321674464-user-188005641-guitar-f-sharp-chord.mp3' },
    'Gb minor' : { 'url' : 'https://feeds.soundcloud.com/stream/321674467-user-188005641-guitar-fm-sharp-chord.mp3' },
    'G major' : { 'url' : 'https://feeds.soundcloud.com/stream/319508123-user-188005641-guitar-g-chord.mp3' },
    'G minor' : { 'url' : 'https://feeds.soundcloud.com/stream/321674471-user-188005641-guitar-gm-chord.mp3' },
    'G# major' : { 'url' : 'https://feeds.soundcloud.com/stream/321674479-user-188005641-guitar-g-sharp-chord.mp3' },
    'G# minor' : { 'url' : 'https://feeds.soundcloud.com/stream/321674485-user-188005641-guitar-gm-sharp-chord.mp3' },
    'Ab major' : { 'url' : 'https://feeds.soundcloud.com/stream/321674479-user-188005641-guitar-g-sharp-chord.mp3' },
    'Ab minor' : { 'url' : 'https://feeds.soundcloud.com/stream/321674485-user-188005641-guitar-gm-sharp-chord.mp3' },
    'A major' : { 'url' : 'https://feeds.soundcloud.com/stream/321674490-user-188005641-guitar-a-chord.mp3' },
    'A minor' : { 'url' : 'https://feeds.soundcloud.com/stream/319508175-user-188005641-guitar-am-chord.mp3' },
    'A# major' : { 'url' : 'https://feeds.soundcloud.com/stream/321674493-user-188005641-guitar-a-sharp-chord.mp3' },
    'A# minor' : { 'url' : 'https://feeds.soundcloud.com/stream/321674503-user-188005641-guitar-am-sharp-chord.mp3' },
    'Bb major' : { 'url' : 'https://feeds.soundcloud.com/stream/321674493-user-188005641-guitar-a-sharp-chord.mp3' },
    'Bb minor' : { 'url' : 'https://feeds.soundcloud.com/stream/321674503-user-188005641-guitar-am-sharp-chord.mp3' },
    'B major' : { 'url' : 'https://feeds.soundcloud.com/stream/321674510-user-188005641-guitar-b-chord.mp3' },
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

