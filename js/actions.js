  let fichas = 100;

  let GPleno = 50;
  let GColor = 10;
  let GParidad = 30;
  let GMayor = 10;
  let GMenor = 10;

  $( document ).ready( function() {

  	let apuesta = [ 0, 0, 0, 0, 0, 0, 0 ];
  	/*
  	    apuesta[0] = Apuesta a rojo
  	    apuesta[1] = Apuesta a negro
  	    apuesta[2] = Apuesta a par
  	    apuesta[3] = Apuesta a impar
  	    apuesta[4] = Apuesta a mayor
        apuesta[5] = Apuesta a menor
        apuesta[6] = Apuesta a pleno
        apuesta[7] = Numero del pleno
    */

  	$( "#fichas" ).html( 'Tiene un total de ' + fichas + ' para ser utilizadas' );

  	$( "#jugar" ).on( "click", function() {
  		resultado( apuesta );
  	} );

  	$( "#APUESTAROJO" ).change( function() {
  		apuesta[ 0 ] = $( this ).val();
  	} );

  	$( "#APUESTANEGRO" ).change( function() {
  		apuesta[ 1 ] = $( this ).val();
  	} );

  	$( "#APUESTAPAR" ).change( function() {
  		apuesta[ 2 ] = $( this ).val();
  	} );

  	$( "#APUESTAIMPAR" ).change( function() {
  		apuesta[ 3 ] = $( this ).val();
  	} );

  	$( "#APUESTAMAYOR" ).change( function() {
  		apuesta[ 4 ] = $( this ).val();
  	} );

  	$( "#APUESTAMENOR" ).change( function() {
  		apuesta[ 5 ] = $( this ).val();
  	} );

  	$( "#APUESTAPLENO" ).change( function() {
  		apuesta[ 6 ] = $( this ).val();
  		apuesta[ 7 ] = $( "#NUMEROPLENO" ).val();
  	} );

  } );

  function resultado( apuesta ) {
  	if ( verificarApuestas( apuesta ) == false ) {
  		alert( "No tiene suficiente dinero" );
  	} else {

  		let numero = Math.round( ( Math.random() * 3 ) );
  		alert( numero );

  		if ( numero === apuesta[ 7 ] ) {
  			fichas = fichas + GPleno * apuesta[ 6 ];
  			alert( "Usted Gano el pleno" );
  		} else {
  			alert( "No gano el pleno" );
  			fichas = fichas - apuesta[ 6 ];
  		}

  		let color = colores( numero );

  		if ( apuesta[ 0 ] != 0 ) {
  			if ( color === "rojo" ) {
  				premio = GColor * apuesta[ 0 ]
  				fichas = fichas + premio;
  				$( "#resultado1" ).html( 'El numero que salio es el rojo, gano: ' + premio + ' fichas' );
  			} else {
  				fichas = fichas - apuesta[ 0 ];
  				$( "#resultado2" ).html( 'El numero que salio no es el rojo, perdio: ' + apuesta[ 0 ] + ' fichas' )
  			}
  		}

  		if ( apuesta[ 1 ] != 0 ) {
  			if ( color === "negro" ) {
  				premio = GColor * apuesta[ 1 ];
  				fichas = fichas + premio;
  				$( "#resultado3" ).html( 'El numero que salio es el negro, usted gano: ' + premio + ' fichas' );
  			} else {
  				$( "#resultado4" ).html( 'El numero que salio no es el negro, usted perdio: ' + apuesta[ 1 ] + ' fichas' )
  			}
  		}
  	}
  	$( "#fichas" ).html( 'Tiene un total de ' + fichas + ' para ser utilizadas' );
  };

  function verificarApuestas( apuesta ) {
  	let total = 0;
  	for ( i = 0; i < apuesta.length; i++ ) {
  		total += apuesta[ i ] << 0
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
