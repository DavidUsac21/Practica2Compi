/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var analizador = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,25],$V1=[2,10,18],$V2=[1,33],$V3=[1,41],$V4=[1,43],$V5=[1,42],$V6=[10,38,39,44],$V7=[1,63],$V8=[1,60],$V9=[1,61],$Va=[1,62],$Vb=[1,64],$Vc=[1,72],$Vd=[1,73],$Ve=[1,71],$Vf=[1,74],$Vg=[19,22,26,28,29],$Vh=[19,22,26,28,29,33],$Vi=[19,22,26,28,29,34],$Vj=[2,24],$Vk=[1,81],$Vl=[1,79],$Vm=[1,80],$Vn=[19,22,39,48,49];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"S0":3,"S1":4,"EOF":5,"WISON":6,"INTERROGACION_ABIERTA":7,"S3":8,"INTERROGACION_CERRADA":9,"DOS_PUNTOS":10,"LLAVE_CERRADA":11,"S4":12,"S12":13,"LEX":14,"LLAVE_ABIERTA":15,"S5":16,"S6":17,"TERMINAL":18,"NOMBRE_LEX":19,"ASIGNACION_LEXEMA":20,"S7":21,"PUNTO_COMA":22,"S21":23,"S11":24,"S8":25,"EXPRESION_DIGITO":26,"S9":27,"EXPRESION_LEXICA":28,"EPXRESION_ALFABETO":29,"CERRADURA_CLENEE":30,"CERRADURA_POSITIVA":31,"S22":32,"PARENTESIS_ABIERTO":33,"PARENTESIS_CERRADO":34,"SYNTAX":35,"S13":36,"S14":37,"NO_TERMINAL":38,"NOMBRE_SYNTAX":39,"ASIGNACION_PRODUCCION":40,"S15":41,"S16":42,"S17":43,"INICIO_SIMBOLO":44,"S18":45,"S19":46,"S20":47,"LAMBDA":48,"OPERADOR_O":49,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",6:"WISON",7:"INTERROGACION_ABIERTA",9:"INTERROGACION_CERRADA",10:"DOS_PUNTOS",11:"LLAVE_CERRADA",14:"LEX",15:"LLAVE_ABIERTA",18:"TERMINAL",19:"NOMBRE_LEX",20:"ASIGNACION_LEXEMA",22:"PUNTO_COMA",26:"EXPRESION_DIGITO",28:"EXPRESION_LEXICA",29:"EPXRESION_ALFABETO",30:"CERRADURA_CLENEE",31:"CERRADURA_POSITIVA",33:"PARENTESIS_ABIERTO",34:"PARENTESIS_CERRADO",35:"SYNTAX",38:"NO_TERMINAL",39:"NOMBRE_SYNTAX",40:"ASIGNACION_PRODUCCION",44:"INICIO_SIMBOLO",48:"LAMBDA",49:"OPERADOR_O"},
productions_: [0,[3,2],[4,5],[4,2],[4,2],[4,2],[4,2],[8,2],[12,6],[16,2],[16,1],[16,2],[16,2],[16,2],[17,5],[17,2],[21,2],[21,1],[21,1],[23,1],[25,2],[25,2],[25,2],[25,2],[27,0],[27,1],[27,1],[27,1],[24,2],[24,1],[32,3],[13,8],[36,2],[36,1],[36,2],[36,2],[36,2],[36,2],[37,1],[37,1],[37,1],[41,3],[42,3],[43,4],[45,1],[46,2],[46,1],[47,1],[47,1],[47,1],[47,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

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

break;
case 2: case 7: case 8:


    
break;
case 3:

            //console.error('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column)
            errores.push(['Sintactico','dato: '+$$[$0-1],'Linea '+(this._$.first_line+1),'columna '+(this._$.first_column+1)]);
        
break;
case 4: case 5: case 6: case 12: case 13: case 15: case 34: case 35: case 36: case 37:
            
            errores.push(['Sintactico','dato: '+$$[$0-1],'Linea '+(this._$.first_line+1),'columna '+(this._$.first_column+1)]);
        
break;
case 9: case 10: case 45:


        
break;
case 11:
            
            errores.push(['Sintactico','dato: '+yytext,'Linea '+(this._$.first_line+1),'columna '+(this._$.first_column+1)]);
        
break;
case 14:

            listadoTerminales.push([$$[$0-3],$$[$0-1][0],$$[$0-1][1]]);
            nombresTerminales.push($$[$0-3]);
        
break;
case 16: case 17:
            
            this.$ = $$[$0];
        
break;
case 18:

            var concat = "";
            for(var i in $$[$0]){
                concat+=$$[$0][i][0]+$$[$0][i][1];
            }
            arreglo1 = [];
            this.$ = [concat,"concatenacion"];
        
break;
case 19:

            this.$ = $$[$0];
        
break;
case 20: case 21: case 22: case 23:

            this.$ = [$$[$0-1],$$[$0]];
        
break;
case 24:
this.$="";
break;
case 25:

            this.$ = '*';
        
break;
case 26:

            this.$ = '+';
        
break;
case 27:

            this.$ = '?';
        
break;
case 28:

            $$[$0-1].push($$[$0]);
            this.$ = $$[$0-1];
        
break;
case 29:

            arreglo1.push($$[$0]);
            this.$ = arreglo1;
        
break;
case 30:

        this.$ = ['('+$$[$0-1][0],$$[$0-1][1]+')'];
    
break;
case 41:
        
        noTerminales.push($$[$0-1]);
    
break;
case 42:

        if(noTerminales.includes($$[$0-1])){
            if(simboloInicial == "vacio"){
                simboloInicial = $$[$0-1];
            }else{
                errores.push(['Semantico','dato: '+$$[$0-1]+' simboloInicial ya declarado ','Linea '+(this._$.first_line+1),'columna '+(this._$.first_column+1)]);    
            }
            
        }else{
            errores.push(['Semantico','dato: '+$$[$0-1]+' no declarado ','Linea '+(this._$.first_line+1),'columna '+(this._$.first_column+1)]);
        }
        
    
break;
case 43:

        for(var e in subProduccion){
            produccion.push([$$[$0-3],subProduccion[e][0],subProduccion[e][1]]);
        }
        subProduccion = [];
        posNuevaProduccion.push(produccion.length-1);
    
break;
case 47:

       subProduccion.push(['N','lambda']);
        
break;
case 48:

        if(nombresTerminales.includes($$[$0])){
            subProduccion.push(['T',$$[$0]]);
        }else{
            errores.push(['Semantico','dato: '+$$[$0]+' no declarado','Linea '+(this._$.first_line+1),'columna '+(this._$.first_column+1)]);
        }                
    
break;
case 49:

        if(noTerminales.includes($$[$0])){
            subProduccion.push(['N',$$[$0]]);
        }else{
            errores.push(['Semantico','dato: '+$$[$0]+' no declarado','Linea '+(this._$.first_line+1),'columna '+(this._$.first_column+1)]);
        }        
    
break;
case 50:

        subProduccion.push(['separador','separador']);
    
break;
}
},
table: [{2:[1,4],3:1,4:2,6:[1,3]},{1:[3]},{5:[1,5]},{7:[1,6]},{6:[1,9],7:[1,7],10:[1,8],11:[1,10]},{1:[2,1]},{8:11,12:12,14:[1,13]},{5:[2,3]},{5:[2,4]},{5:[2,5]},{5:[2,6]},{9:[1,14]},{13:15,35:[1,16]},{15:[1,17]},{6:[1,18]},{9:[2,7]},{15:[1,19]},{10:[1,20]},{5:[2,2]},{15:[1,21]},{2:[1,24],16:22,17:23,18:$V0},{10:[1,26]},{2:[1,29],10:[1,27],17:28,18:$V0},o($V1,[2,10]),{18:[1,30],19:[1,31],20:[1,32],22:$V2},{19:[1,34]},{2:[1,37],36:35,37:36,38:$V3,39:$V4,41:38,42:39,43:40,44:$V5},{11:[1,44]},o($V1,[2,9]),{22:$V2},o($V1,[2,11]),o($V1,[2,12]),o($V1,[2,13]),o($V1,[2,15]),{20:[1,45]},{10:[1,46],37:47,38:$V3,39:$V4,41:38,42:39,43:40,44:$V5},o($V6,[2,33]),{22:[1,50],38:[1,48],39:[1,49],40:[1,51]},o($V6,[2,38]),o($V6,[2,39]),o($V6,[2,40]),{39:[1,52]},{39:[1,53]},{40:[1,54]},{35:[2,8]},{19:$V7,21:55,23:56,24:57,25:58,26:$V8,28:$V9,29:$Va,32:59,33:$Vb},{11:[1,65]},o($V6,[2,32]),o($V6,[2,34]),o($V6,[2,35]),o($V6,[2,36]),o($V6,[2,37]),{22:[1,66]},{22:[1,67]},{19:$Vc,39:$Vd,45:68,46:69,47:70,48:$Ve,49:$Vf},{19:$V7,22:[1,75],23:76,25:58,26:$V8,28:$V9,29:$Va},o($Vg,[2,17]),o($Vg,[2,18],{32:77,33:$Vb}),o($Vg,[2,19]),o($Vh,[2,29]),o($Vi,$Vj,{27:78,9:$Vk,30:$Vl,31:$Vm}),o($Vi,$Vj,{27:82,9:$Vk,30:$Vl,31:$Vm}),o($Vi,$Vj,{27:83,9:$Vk,30:$Vl,31:$Vm}),o($Vi,$Vj,{27:84,9:$Vk,30:$Vl,31:$Vm}),{19:$V7,25:85,26:$V8,28:$V9,29:$Va},{11:[1,86]},o($V6,[2,41]),o($V6,[2,42]),{22:[1,87]},{19:$Vc,22:[2,44],39:$Vd,47:88,48:$Ve,49:$Vf},o($Vn,[2,46]),o($Vn,[2,47]),o($Vn,[2,48]),o($Vn,[2,49]),o($Vn,[2,50]),o($V1,[2,14]),o($Vg,[2,16]),o($Vh,[2,28]),o($Vi,[2,20]),o($Vi,[2,25]),o($Vi,[2,26]),o($Vi,[2,27]),o($Vi,[2,21]),o($Vi,[2,22]),o($Vi,[2,23]),{34:[1,89]},{9:[2,31]},o($V6,[2,43]),o($Vn,[2,45]),o($Vh,[2,30])],
defaultActions: {5:[2,1],7:[2,3],8:[2,4],9:[2,5],10:[2,6],15:[2,7],18:[2,2],44:[2,8],86:[2,31]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this,
        stack = [0],
        tstack = [], // token stack
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    var args = lstack.slice.call(arguments, 1);

    //this.reductionCount = this.shiftCount = 0;

    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    // copy state
    for (var k in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
        sharedState.yy[k] = this.yy[k];
      }
    }

    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);

    var ranges = lexer.options && lexer.options.ranges;

    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }

    function popStack (n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

_token_stack:
    var lex = function () {
        var token;
        token = lexer.lex() || EOF;
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length - 1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

_handle_error:
        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {
            var error_rule_depth;
            var errStr = '';

            // Return the rule stack depth where the nearest error rule can be found.
            // Return FALSE when no error recovery rule was found.
            function locateNearestErrorRecoveryRule(state) {
                var stack_probe = stack.length - 1;
                var depth = 0;

                // try to recover from error
                for(;;) {
                    // check for error recovery rule in this state
                    if ((TERROR.toString()) in table[state]) {
                        return depth;
                    }
                    if (state === 0 || stack_probe < 2) {
                        return false; // No suitable error recovery rule available.
                    }
                    stack_probe -= 2; // popStack(1): [symbol, action]
                    state = stack[stack_probe];
                    ++depth;
                }
            }

            if (!recovering) {
                // first see if there's any chance at hitting an error recovery rule:
                error_rule_depth = locateNearestErrorRecoveryRule(state);

                // Report error
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push("'"+this.terminals_[p]+"'");
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol)+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == EOF ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected,
                    recoverable: (error_rule_depth !== false)
                });
            } else if (preErrorSymbol !== EOF) {
                error_rule_depth = locateNearestErrorRecoveryRule(state);
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol === EOF || preErrorSymbol === EOF) {
                    throw new Error(errStr || 'Parsing halted while starting to recover from another error.');
                }

                // discard current lookahead and grab another
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            if (error_rule_depth === false) {
                throw new Error(errStr || 'Parsing halted. No suitable error recovery rule available.');
            }
            popStack(error_rule_depth);

            preErrorSymbol = (symbol == TERROR ? null : symbol); // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {
            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(lexer.yytext);
                lstack.push(lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = lexer.yyleng;
                    yytext = lexer.yytext;
                    yylineno = lexer.yylineno;
                    yyloc = lexer.yylloc;
                    if (recovering > 0) {
                        recovering--;
                    }
                } else {
                    // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2:
                // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length-(len||1)].range[0], lstack[lstack.length-1].range[1]];
                }
                r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3:
                // accept
                return true;
        }

    }

    return true;
}};

var nombresTerminales = [];
var listadoTerminales = [];
var noTerminales = [];
var produccion = [];
var posNuevaProduccion = [];
var subProduccion = [];
var arreglo1 = [];
var simboloInicial = "vacio";
var errores = [];
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/*espacio en blanco*/
break;
case 1: 
    //console.log('Detecto WISON'); 
     return 6; 
    
break;
case 2: 
    //console.log('Detecto LAMBDA'); 
     return 48; 
    
break;
case 3: 
    //console.log('Detecto INTERROGACION_ABIERTA'); 
     return 7; 
    
break;
case 4: 
    //console.log('Detecto OPERADOR_O'); 
     return 49; 
    
break;
case 5: 
    //console.log('Detecto PARENTESIS_ABIERTO'); 
     return 33; 
    
break;
case 6: 
    //console.log('Detecto PARENTESIS_CERRADO'); 
     return 34; 
    
break;
case 7: 
    //console.log('Detecto LEX'); 
     return 14;
    
break;
case 8: 
    //console.log('Detecto LLAVE_ABIERTA'); 
     return 15; 
    
break;
case 9: 
    //console.log('Detecto DOS_PUNTOS'); 
     return 10; 
    
break;
case 10: 
    //console.log('Detecto TERMINAL'); 
     return 18; 
    
break;
case 11: 
    //console.log('Detecto PUNTO_COMA'); 
     return 22; 
    
break;
case 12: 
    //console.log('Detecto SYNTAX'); 
     return 35; 
    
break;
case 13: 
    //console.log('Detecto NO_TERMINAL'); 
     return 38; 
    
break;
case 14: 
    //console.log('Detecto LLAVE_CERRADA'); 
     return 11; 
    
break;
case 15: 
    //console.log('Detecto INTERROGACION_CERRADA'); 
     return 9; 
    
break;
case 16: 
    //console.log('Detecto INICIO_SIMBOLO'); 
     return 44; 
    
break;
case 17: 
    //console.log('Detecto COMENTARIO_LINEA'); 
    
break;
case 18: 
    //console.log('Detecto NOMBRE_LEX '+yy_.yytext); 
     return 19;
    
break;
case 19: 
    //console.log('Detecto EXPRESION_LEXICA '+yy_.yytext); 
     return 28; 
    
break;
case 20: 
    //console.log('Detecto CERRADURA_CLENEE'); 
     return 30; 
    
break;
case 21: 
    //console.log('Detecto CERRADURA_POSITIVA'); 
     return 31; 
    
break;
case 22: 
    //console.log('Detecto NOMBRE_SYNTAX '+yy_.yytext); 
     return 39; 
    
break;
case 23: 
    //console.log('Detecto COMENTARIO_BLOQUE'); 
    
break;
case 24: 
    //console.log('Detecto ASIGNACION_LEXEMA'); 
     return 20; 
    
break;
case 25: 
    //console.log('Detecto EXPRESION_DIGITO'); 
     return 26; 
    
break;
case 26: 
    //console.log('Detecto EPXRESION_ALFABETO'); 
     return 29; 
    
break;
case 27: 
    //console.log('Detecto ASIGNACION_PRODUCCION'); 
     return 40; 
    
break;
case 28:return 5;
break;
case 29:     
    errores.push(['Lexico','dato: '+yy_.yytext,'Linea '+yy_.yylloc.first_line,'columna '+yy_.yylloc.first_column]);
    
break;
}
},
rules: [/^(?:\s+)/,/^(?:Wison\b)/,/^(?:lambda\b)/,/^(?:¿)/,/^(?:\|)/,/^(?:\()/,/^(?:\))/,/^(?:Lex\b)/,/^(?:\{)/,/^(?::)/,/^(?:Terminal\b)/,/^(?:;)/,/^(?:Syntax\b)/,/^(?:No_Terminal\b)/,/^(?:\})/,/^(?:\?)/,/^(?:Initial_Sim\b)/,/^(?:#[^\n]*)/,/^(?:\$_[^\n";<|) "]*)/,/^(?:'[^\n]*')/,/^(?:\*)/,/^(?:\+)/,/^(?:%_[^\n";\| "]*)/,/^(?:\/\*\*[^*"\/"]*\*\/)/,/^(?:<-)/,/^(?:\[0-9\])/,/^(?:\[aA-zZ\])/,/^(?:<=)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = analizador;
exports.Parser = analizador.Parser;
exports.parse = function () { return analizador.parse.apply(analizador, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}