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
        'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/note_images/c_sharp-01.png'
    },
    {
        // D
        'title' : 'Note 2',
        'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/note_images/d_note-01.png'
    },
    {
        // D#/Eb
        'title' : 'Note 3',
        'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/note_images/d_sharp-01.png'
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
        'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/note_images/f_sharp-01.png'
    },
    {
        // G
        'title' : 'Note 7',
        'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/note_images/g_note-01.png'
    },
    {
        // G#/Ab
        'title' : 'Note 8',
        'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/note_images/g_sharp-01.png'
    },
    {
        // A
        'title' : 'Note 9',
        'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/note_images/a_note-01.png'
    },
    {
        // A#/Bb
        'title' : 'Note 10',
        'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/note_images/a_sharp-01.png'
    },
    {
        // B
        'title' : 'Note 11',
        'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/note_images/b_note-01.png'
    }
];

var chordImages = {
    'C major' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/c_chord-01.png' } ,
    'C minor' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/c_minor_chord-01.png' } ,
    'C# major' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/c_sharp_major_chord-01.png' } ,
    'C# minor' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/c_sharp_minor_chord-01.png' } ,
    'Db major' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/c_sharp_major_chord-01.png' },
    'Db minor' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/c_sharp_minor_chord-01.png' },
    'D major' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/d_major_chord-01.png' },
    'D minor' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/d_minor_chord-01.png' },
    'D# major' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/d_sharp_major_chord-01.png' },
    'D# minor' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/d_sharp_minor_chord-01.png' },
    'Eb major' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/d_sharp_major_chord-01.png' },
    'Eb minor' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/d_sharp_minor_chord-01.png' },
    'E major' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/e_minor_chord-01.png' },
    'E minor' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/e_minor_chord-01.png' },
    'F major' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/f_chord-01.png' },
    'F minor' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/f_minor_chord-01.png' },
    'F# major' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/f_sharp_major_chord-01.png' },
    'F# minor' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/f_sharp_minor_chord-01.png' },
    'Gb major' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/f_sharp_major_chord-01.png' },
    'Gb minor' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/f_sharp_minor_chord-01.png' },
    'G major' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/g_chord-01.png' },
    'G minor' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/g_minor_chord-01.png' },
    'G# major' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/g_sharp_major_chord-01.png' },
    'G# minor' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/g_sharp_minor_chord-01.png' },
    'Ab major' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/g_sharp_major_chord-01.png' },
    'Ab minor' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/g_sharp_minor_chord-01.png' },
    'A major' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/a_major_chord-01.png' },
    'A minor' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/a_minor_chord-01.png' },
    'A# major' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/a_sharp_major_chord-01.png' },
    'A# minor' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/a_sharp_minor_chord-01.png' },
    'Bb major' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/a_sharp_major_chord-01.png' },
    'Bb minor' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/a_sharp_minor_chord-01.png' },
    'B major' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/b_chord-01.png' },
    'B minor' : { 'url' : 'https://s3-us-west-1.amazonaws.com/cs160-group27/chord_images/b_chord-01.png' }
};

var pianoNotes = [
    {
        // C note
    	'title' : 'Note 0',
    	'url' : 'https://feeds.soundcloud.com/stream/319252561-user-188005641-39175-jobro-piano-ff-028.mp3'
    },
    {
        // C#/Db  note
    	'title' : 'Note 1',
    	'url' : 'https://feeds.soundcloud.com/stream/321767680-user-188005641-39176-jobro-piano-ff-029.mp3'
    },
    {
        // D note
        'title' : 'Note 2',
        'url' : 'https://feeds.soundcloud.com/stream/319252555-user-188005641-39177-jobro-piano-ff-030.mp3'
    },
    {
        // D#/Eb note
        'title' : 'Note 3',
        'url' : 'https://feeds.soundcloud.com/stream/319252550-user-188005641-39178-jobro-piano-ff-031.mp3'
    },
    {
        // E
        'title' : 'Note 4',
        'url' : 'https://feeds.soundcloud.com/stream/321767738-user-188005641-39179-jobro-piano-ff-032.mp3'
    },
    {
        // F
        'title' : 'Note 5',
        'url' : 'https://feeds.soundcloud.com/stream/319252545-user-188005641-39180-jobro-piano-ff-033.mp3'
    },
    {
        // F#/Gb
        'title' : 'Note 6',
        'url' : 'https://feeds.soundcloud.com/stream/321767748-user-188005641-39181-jobro-piano-ff-034.mp3'
    },
    {
        // G
        'title' : 'Note 7',
        'url' : 'https://feeds.soundcloud.com/stream/319252537-user-188005641-39182-jobro-piano-ff-035.mp3'
    },
    {
        // G#/Ab
        'title' : 'Note 8',
        'url' : 'https://feeds.soundcloud.com/stream/321767759-user-188005641-39183-jobro-piano-ff-036.mp3'
    },
    {
        // A
        'title' : 'Note 9',
        'url' : 'http://feeds.soundcloud.com/stream/319252534-user-188005641-39184-jobro-piano-ff-037.mp3'
    },
    {
        // A#/Bb
        'title' : 'Note 10',
        'url' : 'https://feeds.soundcloud.com/stream/321769122-user-188005641-39185-jobro-piano-ff-038.mp3'
    },
    {
        // B
        'title' : 'Note 11',
        'url' : 'https://feeds.soundcloud.com/stream/321767766-user-188005641-39186-jobro-piano-ff-039.mp3'
    }
];

var pianoChords = {
    'C major' : { 'url' : 'https://feeds.soundcloud.com/stream/321773226-user-188005641-grand-piano-fazioli-major-c-low.mp3' } ,
    'C minor' : { 'url' : 'https://feeds.soundcloud.com/stream/321772965-user-188005641-grand-piano-fazioli-minor-chords-cm-lower.mp3' } ,
    'C# major' : { 'url' : 'https://feeds.soundcloud.com/stream/321773216-user-188005641-grand-piano-fazioli-major-c-sharp.mp3' } ,
    'C# minor' : { 'url' : 'https://feeds.soundcloud.com/stream/321772990-user-188005641-grand-piano-fazioli-minor-chords-cm-sharp-lower.mp3' } ,
    'Db major' : { 'url' : 'https://feeds.soundcloud.com/stream/321773216-user-188005641-grand-piano-fazioli-major-c-sharp.mp3' } ,
    'Db minor' : { 'url' : 'https://feeds.soundcloud.com/stream/321772990-user-188005641-grand-piano-fazioli-minor-chords-cm-sharp-lower.mp3' } ,
    'D major' : { 'url' : 'https://feeds.soundcloud.com/stream/321773203-user-188005641-grand-piano-fazioli-major-d.mp3' },
    'D minor' : { 'url' : 'https://feeds.soundcloud.com/stream/319502831-user-188005641-grand-piano-fazioli-minor-chords-dm-lower.mp3' },
    'D# major' : { 'url' : 'https://feeds.soundcloud.com/stream/321773189-user-188005641-grand-piano-fazioli-major-d-sharp.mp3' },
    'D# minor' : { 'url' : 'https://feeds.soundcloud.com/stream/321772945-user-188005641-grand-piano-fazioli-minor-chords-dm-sharp-lower.mp3' },
    'Eb major' : { 'url' : 'https://feeds.soundcloud.com/stream/321773189-user-188005641-grand-piano-fazioli-major-d-sharp.mp3' },
    'Eb minor' : { 'url' : 'https://feeds.soundcloud.com/stream/321772945-user-188005641-grand-piano-fazioli-minor-chords-dm-sharp-lower.mp3' },
    'E major' : { 'url' : 'https://feeds.soundcloud.com/stream/321773173-user-188005641-grand-piano-fazioli-major-e.mp3' },
    'E minor' : { 'url' : 'https://feeds.soundcloud.com/stream/321772911-user-188005641-grand-piano-fazioli-minor-chords-em-lower.mp3' },
    'F major' : { 'url' : 'https://feeds.soundcloud.com/stream/321773156-user-188005641-grand-piano-fazioli-major-f.mp3' },
    'F minor' : { 'url' : 'https://feeds.soundcloud.com/stream/321772863-user-188005641-grand-piano-fazioli-minor-chords-fm-lower.mp3' },
    'F# major' : { 'url' : 'https://feeds.soundcloud.com/stream/321773133-user-188005641-grand-piano-fazioli-major-f-sharp.mp3' },
    'F# minor' : { 'url' : 'https://feeds.soundcloud.com/stream/321772892-user-188005641-grand-piano-fazioli-minor-chords-fm-sharp-lower.mp3' },
    'Gb major' : { 'url' : 'https://feeds.soundcloud.com/stream/321773133-user-188005641-grand-piano-fazioli-major-f-sharp.mp3' },
    'Gb minor' : { 'url' : 'https://feeds.soundcloud.com/stream/321772892-user-188005641-grand-piano-fazioli-minor-chords-fm-sharp-lower.mp3' },
    'G major' : { 'url' : 'https://feeds.soundcloud.com/stream/321773109-user-188005641-grand-piano-fazioli-major-g.mp3' },
    'G minor' : { 'url' : 'https://feeds.soundcloud.com/stream/321772700-user-188005641-grand-piano-fazioli-minor-chords-gm-lower.mp3' },
    'G# major' : { 'url' : 'https://feeds.soundcloud.com/stream/321773090-user-188005641-grand-piano-fazioli-major-g-sharp.mp3' },
    'G# minor' : { 'url' : 'https://feeds.soundcloud.com/stream/321772845-user-188005641-grand-piano-fazioli-minor-chords-gm-sharp-lower.mp3' },
    'Ab major' : { 'url' : 'https://feeds.soundcloud.com/stream/321773090-user-188005641-grand-piano-fazioli-major-g-sharp.mp3' },
    'Ab minor' : { 'url' : 'https://feeds.soundcloud.com/stream/321772845-user-188005641-grand-piano-fazioli-minor-chords-gm-sharp-lower.mp3' },
    'A major' : { 'url' : 'https://feeds.soundcloud.com/stream/321773263-user-188005641-grand-piano-fazioli-major-a.mp3' },
    'A minor' : { 'url' : 'https://feeds.soundcloud.com/stream/321773025-user-188005641-grand-piano-fazioli-minor-chords-am-lower.mp3' },
    'A# major' : { 'url' : 'https://feeds.soundcloud.com/stream/321773251-user-188005641-grand-piano-fazioli-major-a-sharp.mp3' },
    'A# minor' : { 'url' : 'https://feeds.soundcloud.com/stream/321773062-user-188005641-grand-piano-fazioli-minor-chords-am-sharp-lower.mp3' },
    'Bb major' : { 'url' : 'https://feeds.soundcloud.com/stream/321773251-user-188005641-grand-piano-fazioli-major-a-sharp.mp3' },
    'Bb minor' : { 'url' : 'https://feeds.soundcloud.com/stream/321773062-user-188005641-grand-piano-fazioli-minor-chords-am-sharp-lower.mp3' },
    'B major' : { 'url' : 'https://feeds.soundcloud.com/stream/321773237-user-188005641-grand-piano-fazioli-major-b.mp3' },
    'B minor' : { 'url' : 'https://feeds.soundcloud.com/stream/321773005-user-188005641-grand-piano-fazioli-minor-chords-bm-lower.mp3' }
};

var violinNotes = [
    {
        // C
    	'title' : 'Note 0',
    	'url' : 'https://feeds.soundcloud.com/stream/321780440-user-188005641-153590-carlos-vaquero-violin-c-5-tenuto-non-vibrato.mp3'
    },
    {
        // C#/Db
    	'title' : 'Note 1',
    	'url' : 'https://feeds.soundcloud.com/stream/321780423-user-188005641-153591-carlos-vaquero-violin-c-5-sharp-tenuto-non-vibrato.mp3'
    },
    {
        // D
    	'title' : 'Note 2',
    	'url' : 'https://feeds.soundcloud.com/stream/321780406-user-188005641-153592-carlos-vaquero-violin-d-5-tenuto-non-vibrato.mp3'
    },
    {
        // D#/Eb
    	'title' : 'Note 3',
    	'url' : 'https://feeds.soundcloud.com/stream/321780386-user-188005641-153593-carlos-vaquero-violin-d-5-sharp-tenuto-non-vibrato.mp3'
    },
    {
        // E
    	'title' : 'Note 4',
    	'url' : 'https://feeds.soundcloud.com/stream/321780360-user-188005641-153594-carlos-vaquero-violin-e-5-tenuto-non-vibrato.mp3'
    },
    {
        // F
    	'title' : 'Note 5',
    	'url' : 'https://feeds.soundcloud.com/stream/321780343-user-188005641-153595-carlos-vaquero-violin-f-5-tenuto-non-vibrato.mp3'
    },
    {
        // F#/Gb
    	'title' : 'Note 6',
    	'url' : 'https://feeds.soundcloud.com/stream/321780325-user-188005641-153596-carlos-vaquero-violin-f-5-sharp-tenuto-non-vibrato.mp3'
    },
    {
        // G
    	'title' : 'Note 7',
    	'url' : 'https://feeds.soundcloud.com/stream/321780545-user-188005641-153585-carlos-vaquero-violin-g-4-tenuto-non-vibrato.mp3'
    },
    {
        // G#/Ab
    	'title' : 'Note 8',
    	'url' : 'https://feeds.soundcloud.com/stream/321780522-user-188005641-153586-carlos-vaquero-violin-g-4-sharp-tenuto-non-vibrato.mp3'
    },
    {
        // A
    	'title' : 'Note 9',
    	'url' : 'https://feeds.soundcloud.com/stream/321780510-user-188005641-153587-carlos-vaquero-violin-a-4-tenuto-non-vibrato.mp3'
    },
    {
        // A#/Bb
    	'title' : 'Note 10',
    	'url' : 'https://feeds.soundcloud.com/stream/321780485-user-188005641-153588-carlos-vaquero-violin-a-4-sharp-tenuto-non-vibrato.mp3'
    },
    {
        // B
    	'title' : 'Note 11',
    	'url' : 'https://feeds.soundcloud.com/stream/321780460-user-188005641-153589-carlos-vaquero-violin-b-4-tenuto-non-vibrato.mp3'
    }
];

var violinChords = {
    // TODO Can't find free violin chord sound library
    'C major' : { 'url' : '' } ,
    'D minor' : { 'url' : '' },
    'E minor' : { 'url' : '' },
    'F major' : { 'url' : '' },
    'G major' : { 'url' : '' },
    'A minor' : { 'url' : '' },
    'B minor' : { 'url' : '' }
};

var guitarNotes = [
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

