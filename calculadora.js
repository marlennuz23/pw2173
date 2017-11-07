//variable global

var operador = "";
function numero(num){
	if (operador =="") {//operador1
		var valorinicial=document.calculadora.operado1.value;
		if (valorinicial=="0") {
			document.calculadora.operado1.value="";

		}
		//concatena los valores de num
		//con los de operando1
		document.calculadora.operando1.value=
		document.calculadora.operando1.value + num;
	}else{//operando2}

		var valorinicial=document.calculadora.operado2.value;
		if (valorinicial=="0") {
			document.calculadora.operado2.value="";
		}
		//concatena los valores de num
		//con los de operando2
		document.calculadora.operando2.value=
		document.calculadora.operando2.value + num;


	}
}
function operadores(ope){
	operador = ope
}