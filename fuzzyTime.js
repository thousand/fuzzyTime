#!/usr/local/bin/node
var time = process.argv[2] ? new Date( process.argv[2] ) : new Date;
if ( !time.getTime() ) process.exit(1); // bomb if we can't create a new time

// IT E IS T TWENTY
// QUARTER U HALF
// TEN FIVE D PAST
// TO B TWELVE ONE
// TWO THREE FOUR
// FIVE SIX SEVEN
// EIGHT NINE TEN
// S O E ELEVEN E V D
// N O'CLOCK Y NOW

function roundMinute(minutes) {
  var rounded = (Math.round(minutes / 5).toFixed(0) * 5)
    , out
  ;

  if (minutes > 30 )
    out = 60 - rounded;
  else
    out = rounded;

  return out;

};


function fuzzyTimeBlock(time) {
  var out = ''
    , mins = time.getMinutes()
    , fuzzyMin = roundMinute( mins )
    , hours = time.getHours()
    , hrs = ( mins > 30 ? ( hours + 1 ) : hours ) % 12

  ;

  // ____ FIRST LINE

  out += 'IT IS ';

  if ( fuzzyMin == 20 || fuzzyMin == 25 ) out += 'TWENTY\n';
  else                                    out += '      \n';


  // ____ SECOND LINE

  if ( fuzzyMin == 15 ) out += 'QUARTER ';
  else                  out += '        ';


  if ( fuzzyMin == 30 ) out += 'HALF\n';
  else                  out += '    \n';



  // ____ THIRD LINE

  if ( fuzzyMin == 10 ) out += 'TEN';
  else                  out += '   ';

  if ( fuzzyMin == 5 || fuzzyMin == 25 )  out += 'FIVE ';
  else                                    out += '     ';

  if ( fuzzyMin && mins <= 30 ) out += 'PAST\n';
  else                          out += '    \n';


  // ____ FOURTH LINE

  if ( mins > 30 && mins <= 55  ) out += 'TO ';
  else             out += '   ';

  if ( hrs == 0  ) out += 'TWELVE'
  else             out += '      ';

  if ( hrs == 1  ) out += 'ONE\n'
  else             out += '   \n';


  // ____ FIFTH LINE

  if ( hrs == 2  ) out += 'TWO'
  else             out += '   ';

  if ( hrs == 3  ) out += 'THREE'
  else             out += '     ';

  if ( hrs == 4  ) out += 'FOUR\n'
  else             out += '    \n';


  // ____ SIXTH LINE

  if ( hrs == 5  ) out += 'FIVE'
  else             out += '    ';

  if ( hrs == 6  ) out += 'SIX'
  else             out += '   ';

  if ( hrs == 7  ) out += 'SEVEN\n'
  else             out += '     \n';


  // ____ SEVENTH LINE

  if ( hrs == 8  ) out += 'EIGHT'
  else             out += '     ';

  if ( hrs == 9  ) out += 'NINE'
  else             out += '    ';

  if ( hrs == 10 ) out += 'TEN\n'
  else             out += '   \n';


  // ____ EIGHTH LINE

  if ( hrs == 11 ) out += '   ELEVEN   \n'
  else             out += '            \n';

  // ____ NINETH LINE

  if ( fuzzyMin == 0 ) out += ' O\'CLOCK';
  else             out += '        ';

  out += ' NOW\n';


  return out;

};

// spit out a block.
console.log( fuzzyTimeBlock(time) );
