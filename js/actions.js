  let fichas = 100;

  let GPleno = 50;
  let GColor = 10;
  let GParidad = 30;
  let GMayor = 10;
  let GMenor = 10;

  $( document ).ready( function() {

  	let value = [ 0, 0, 0, 0, 0, 0, 0 ];
  	/*
  	    value[0] = Apuesta a rojo
  	    value[1] = Apuesta a negro
  	    value[2] = Apuesta a par
  	    value[3] = Apuesta a impar
  	    value[4] = Apuesta a mayor
        value[5] = Apuesta a menor
        value[6] = Apuesta a pleno
        value[7] = Numero del pleno
    */

  	$( "#fichas" ).html( 'Tiene un total de ' + fichas + ' para ser utilizadas' );

  	$( "#jugar" ).on( "click", function() {
  		resultado( value );
  	} );

  	$( "#APUESTAROJO" ).change( function() {
  		value[ 0 ] = $( this ).val();
  	} );

  	$( "#APUESTANEGRO" ).change( function() {
  		value[ 1 ] = $( this ).val();
  	} );

  	$( "#APUESTAPAR" ).change( function() {
  		value[ 2 ] = $( this ).val();
  	} );

  	$( "#APUESTAIMPAR" ).change( function() {
  		value[ 3 ] = $( this ).val();
  	} );

  	$( "#APUESTAMAYOR" ).change( function() {
  		value[ 4 ] = $( this ).val();
  	} );

  	$( "#APUESTAMENOR" ).change( function() {
  		value[ 5 ] = $( this ).val();
  	} );

  	$( "#APUESTAPLENO" ).change( function() {
  		value[ 6 ] = $( this ).val();
  		value[ 7 ] = $( "#NUMEROPLENO" ).val();
  	} );

  } );

  function resultado( value ) {
  	if ( verificarApuestas( value ) == false ) {
  		alert( "No tiene suficiente dinero" );
  	} else {

  		let numero = Math.round( ( Math.random() * 3 ) );
  		alert( numero );

  		if ( numero === value[ 7 ] ) {
  			fichas = fichas + GPleno * value[ 6 ];
  			alert( "Usted Gano el pleno" );
  		} else {
  			alert( "No gano el pleno" );
  			fichas = fichas - value[ 6 ];
  		}

  		let color = colores( numero );

  		if ( value[ 0 ] != 0 ) {
  			if ( color === "rojo" ) {
  				premio = GColor * value[ 0 ]
  				fichas = fichas + premio;
  				$( "#resultado1" ).html( 'El numero que salio es el rojo, gano: ' + premio + ' fichas' );
  			} else {
  				fichas = fichas - value[ 0 ];
  				$( "#resultado2" ).html( 'El numero que salio no es el rojo, perdio: ' + value[ 0 ] + ' fichas' )
  			}
  		}

  		if ( value[ 1 ] != 0 ) {
  			if ( color === "negro" ) {
  				premio = GColor * value[ 1 ];
  				fichas = fichas + premio;
  				$( "#resultado3" ).html( 'El numero que salio es el negro, usted gano: ' + premio + ' fichas' );
  			} else {
  				$( "#resultado4" ).html( 'El numero que salio no es el negro, usted perdio: ' + value[ 1 ] + ' fichas' )
  			}
  		}
  	}
  	$( "#fichas" ).html( 'Tiene un total de ' + fichas + ' para ser utilizadas' );
  };

  function verificarApuestas( value ) {
  	let total = 0;
  	for ( i = 0; i < value.length; i++ ) {
  		total += value[ i ] << 0
  	};
  	if ( total > fichas ) {
  		return false;
  	};
  };

  function colores( number ) {
  	if ( ( ( number == 1 ) || ( number == 3 ) || ( number == 5 ) || ( number == 6 ) || ( number == 8 ) ) ) {
  		return "rojo";
  	} else {
  		if ( number == 0 ) {
  			return "nulo";
  		} else {
  			return "negro";
  		}
  	}
  };
