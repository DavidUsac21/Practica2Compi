%lex

%%
\s+            {/*espacio en blanco*/}

"Wison" { 
    //console.log('Detecto WISON'); 
     return 'WISON'; 
    }
"lambda" { 
    //console.log('Detecto LAMBDA'); 
     return 'LAMBDA'; 
    }

"¿" { 
    //console.log('Detecto INTERROGACION_ABIERTA'); 
     return 'INTERROGACION_ABIERTA'; 
    }

\| { 
    //console.log('Detecto OPERADOR_O'); 
     return 'OPERADOR_O'; 
    }

"(" { 
    //console.log('Detecto PARENTESIS_ABIERTO'); 
     return 'PARENTESIS_ABIERTO'; 
    }

")" { 
    //console.log('Detecto PARENTESIS_CERRADO'); 
     return 'PARENTESIS_CERRADO'; 
    }

"Lex"   { 
    //console.log('Detecto LEX'); 
     return 'LEX';
    }

"{"   { 
    //console.log('Detecto LLAVE_ABIERTA'); 
     return 'LLAVE_ABIERTA'; 
    } 

":" { 
    //console.log('Detecto DOS_PUNTOS'); 
     return 'DOS_PUNTOS'; 
    }

"Terminal" { 
    //console.log('Detecto TERMINAL'); 
     return 'TERMINAL'; 
    }

";" { 
    //console.log('Detecto PUNTO_COMA'); 
     return 'PUNTO_COMA'; 
    }

"Syntax" { 
    //console.log('Detecto SYNTAX'); 
     return 'SYNTAX'; 
    }

"No_Terminal" { 
    //console.log('Detecto NO_TERMINAL'); 
     return 'NO_TERMINAL'; 
    }

"}" { 
    //console.log('Detecto LLAVE_CERRADA'); 
     return 'LLAVE_CERRADA'; 
    }

"?" { 
    //console.log('Detecto INTERROGACION_CERRADA'); 
     return 'INTERROGACION_CERRADA'; 
    }

"Initial_Sim" { 
    //console.log('Detecto INICIO_SIMBOLO'); 
     return 'INICIO_SIMBOLO'; 
    }

"#"[^\n]* { 
    //console.log('Detecto COMENTARIO_LINEA'); 
    }

"$_"[^\n";<|) "]* { 
    //console.log('Detecto NOMBRE_LEX '+yytext); 
     return 'NOMBRE_LEX';
    }

\'[^\n]*\' { 
    //console.log('Detecto EXPRESION_LEXICA '+yytext); 
     return 'EXPRESION_LEXICA'; 
    }

"*" { 
    //console.log('Detecto CERRADURA_CLENEE'); 
     return 'CERRADURA_CLENEE'; 
    }

"+" { 
    //console.log('Detecto CERRADURA_POSITIVA'); 
     return 'CERRADURA_POSITIVA'; 
    }

"%_"[^\n";\| "]* { 
    //console.log('Detecto NOMBRE_SYNTAX '+yytext); 
     return 'NOMBRE_SYNTAX'; 
    }

"/**"[^*"/"]*"*/" { 
    //console.log('Detecto COMENTARIO_BLOQUE'); 
    }

"<-" { 
    //console.log('Detecto ASIGNACION_LEXEMA'); 
     return 'ASIGNACION_LEXEMA'; 
    }

"[0-9]" { 
    //console.log('Detecto EXPRESION_DIGITO'); 
     return 'EXPRESION_DIGITO'; 
    }

"[aA-zZ]" { 
    //console.log('Detecto EPXRESION_ALFABETO'); 
     return 'EPXRESION_ALFABETO'; 
    }

"<=" { 
    //console.log('Detecto ASIGNACION_PRODUCCION'); 
     return 'ASIGNACION_PRODUCCION'; 
    }

<<EOF>>   return 'EOF';

.					{     
    errores.push(['Lexico','dato: '+yytext,'Linea '+yylloc.first_line,'columna '+yylloc.first_column]);
    }
/lex
%{
var nombresTerminales = [];
var listadoTerminales = [];
var noTerminales = [];
var produccion = [];
var posNuevaProduccion = [];
var subProduccion = [];
var arreglo1 = [];
var simboloInicial = "vacio";
var errores = [];
%}

%start S0

%%
S0 : S1 EOF {
    console.log('Termino analisis terminales :');
    if(simboloInicial == "vacio")errores.push(['Sintactico','dato: simbolo no iniciado','Linea '+(this._$.first_line+1),'columna '+(this._$.first_column+1)]);
    /*
    for(var e=0;e<listadoTerminales.length;e++){    
        console.log("Nombre: "+listadoTerminales[e][0]+" Ex: "+listadoTerminales[e][1]);        
    }
    console.log('No terminales: ');
    for(var e in noTerminales){
        console.log("Nombre: "+noTerminales[e]);        
    }    
    console.log('producciones: ');
    var contador = 0;        
    for(var e in produccion){
        console.log('Derecho: '+produccion[e][0]+' Tipo: '+produccion[e][1]+' dato: '+produccion[e][2]);
        if(e==posNuevaProduccion[contador]){
            contador++;
            console.log('Nueva produccion');
        }
    }    

    //(listadoTerminales:any[],listadoNoTerminales:any[],listadoProducciones:any[],listadoPosicionesNuevasProd:any[])
    */
    let {Solicitudes} = require('../manejadorAnalizador/Solicitudes');    
    var sol = new Solicitudes(listadoTerminales,noTerminales,produccion,posNuevaProduccion,simboloInicial,errores);
    //return new Solicitudes(listadoTerminales,noTerminales,produccion,posNuevaProduccion,simboloInicial,errores);
    
    
    nombresTerminales = [];
    listadoTerminales = [];
    noTerminales = [];
    produccion = [];
    posNuevaProduccion = [];
    subProduccion = [];
    arreglo1 = [];
    simboloInicial = "vacio";
    errores = [];
    
    return sol;
}
;

S1 : WISON INTERROGACION_ABIERTA S3 INTERROGACION_CERRADA WISON
    {

    }
    | error INTERROGACION_ABIERTA 
        {
            //console.error('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column)
            errores.push(['Sintactico','dato: '+$1,'Linea '+(this._$.first_line+1),'columna '+(this._$.first_column+1)]);
        }
    | error DOS_PUNTOS 
        {            
            errores.push(['Sintactico','dato: '+$1,'Linea '+(this._$.first_line+1),'columna '+(this._$.first_column+1)]);
        }
    | error WISON 
        {            
            errores.push(['Sintactico','dato: '+$1,'Linea '+(this._$.first_line+1),'columna '+(this._$.first_column+1)]);
        }
    | error LLAVE_CERRADA
        {            
            errores.push(['Sintactico','dato: '+$1,'Linea '+(this._$.first_line+1),'columna '+(this._$.first_column+1)]);
        }
    ;

S3 : S4 S12
    {

    };

S4 : LEX LLAVE_ABIERTA DOS_PUNTOS S5 DOS_PUNTOS LLAVE_CERRADA
    {

    };

S5 : S5 S6 
        {

        }
    | S6 
        {

        }
    | error TERMINAL
        {            
            errores.push(['Sintactico','dato: '+yytext,'Linea '+(this._$.first_line+1),'columna '+(this._$.first_column+1)]);
        }
    | error NOMBRE_LEX    
        {            
            errores.push(['Sintactico','dato: '+$1,'Linea '+(this._$.first_line+1),'columna '+(this._$.first_column+1)]);
        }
    | error ASIGNACION_LEXEMA
        {            
            errores.push(['Sintactico','dato: '+$1,'Linea '+(this._$.first_line+1),'columna '+(this._$.first_column+1)]);
        }
    ;

S6 : TERMINAL NOMBRE_LEX ASIGNACION_LEXEMA S7 PUNTO_COMA 
        {
            listadoTerminales.push([$2,$4[0],$4[1]]);
            nombresTerminales.push($2);
        }
    |error PUNTO_COMA 
        {            
            errores.push(['Sintactico','dato: '+$1,'Linea '+(this._$.first_line+1),'columna '+(this._$.first_column+1)]);
        }
    ;

S7 : S7 S21
        {            
            $$ = $2;
        }
     | S21
        {            
            $$ = $1;
        }
     | S11
        {
            var concat = "";
            for(var i in $1){
                concat+=$1[i][0]+$1[i][1];
            }
            arreglo1 = [];
            $$ = [concat,"concatenacion"];
        };

S21 : S8 
        {
            $$ = $1;
        } 
    ;

S8 : EXPRESION_DIGITO S9 
        {
            $$ = [$1,$2];
        }
    | EXPRESION_LEXICA S9 
        {
            $$ = [$1,$2];
        }
    | EPXRESION_ALFABETO S9 
        {
            $$ = [$1,$2];
        }
    | NOMBRE_LEX S9 
        {
            $$ = [$1,$2];
        };

S9 : {$$="";}
    |
    CERRADURA_CLENEE 
        {
            $$ = '*';
        }
    | CERRADURA_POSITIVA
        {
            $$ = '+';
        } 
    | INTERROGACION_CERRADA 
        {
            $$ = '?';
        };

S11 : S11 S22
        {
            $1.push($2);
            $$ = $1;
        }
     | S22
        {
            arreglo1.push($1);
            $$ = arreglo1;
        };

S22 : PARENTESIS_ABIERTO S8 PARENTESIS_CERRADO
    {
        $$ = ['('+$2[0],$2[1]+')'];
    } ;

S12 : SYNTAX LLAVE_ABIERTA LLAVE_ABIERTA DOS_PUNTOS S13 DOS_PUNTOS LLAVE_CERRADA LLAVE_CERRADA;

S13 : S13 S14 | S14 
    | error NO_TERMINAL 
        {            
            errores.push(['Sintactico','dato: '+$1,'Linea '+(this._$.first_line+1),'columna '+(this._$.first_column+1)]);
        }
    | error NOMBRE_SYNTAX
        {            
            errores.push(['Sintactico','dato: '+$1,'Linea '+(this._$.first_line+1),'columna '+(this._$.first_column+1)]);
        }
    | error PUNTO_COMA 
        {            
            errores.push(['Sintactico','dato: '+$1,'Linea '+(this._$.first_line+1),'columna '+(this._$.first_column+1)]);
        }
    | error ASIGNACION_PRODUCCION
        {            
            errores.push(['Sintactico','dato: '+$1,'Linea '+(this._$.first_line+1),'columna '+(this._$.first_column+1)]);
        }
    ;

S14 : S15 | S16 | S17;

S15 : NO_TERMINAL NOMBRE_SYNTAX PUNTO_COMA
    {        
        noTerminales.push($2);
    };

S16 : INICIO_SIMBOLO NOMBRE_SYNTAX PUNTO_COMA 
    {
        if(noTerminales.includes($2)){
            if(simboloInicial == "vacio"){
                simboloInicial = $2;
            }else{
                errores.push(['Semantico','dato: '+$2+' simboloInicial ya declarado ','Linea '+(this._$.first_line+1),'columna '+(this._$.first_column+1)]);    
            }
            
        }else{
            errores.push(['Semantico','dato: '+$2+' no declarado ','Linea '+(this._$.first_line+1),'columna '+(this._$.first_column+1)]);
        }
        
    };

S17 : NOMBRE_SYNTAX ASIGNACION_PRODUCCION S18 PUNTO_COMA
    {
        for(var e in subProduccion){
            produccion.push([$1,subProduccion[e][0],subProduccion[e][1]]);
        }
        subProduccion = [];
        posNuevaProduccion.push(produccion.length-1);
    };

S18 : S19 ;

S19 : S19 S20
        {

        }
    | S20;

S20 :  LAMBDA {
       subProduccion.push(['N','lambda']);
        }
    | NOMBRE_LEX {
        if(nombresTerminales.includes($1)){
            subProduccion.push(['T',$1]);
        }else{
            errores.push(['Semantico','dato: '+$1+' no declarado','Linea '+(this._$.first_line+1),'columna '+(this._$.first_column+1)]);
        }                
    } 
    | NOMBRE_SYNTAX {
        if(noTerminales.includes($1)){
            subProduccion.push(['N',$1]);
        }else{
            errores.push(['Semantico','dato: '+$1+' no declarado','Linea '+(this._$.first_line+1),'columna '+(this._$.first_column+1)]);
        }        
    }
    | OPERADOR_O {
        subProduccion.push(['separador','separador']);
    }    
    ;

//quedo en S22
