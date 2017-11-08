var inicia = function (){
	
		//JSON =Javascript objecto notation
		$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data.){
  alert(data.result[0].name.first+" "+data.results[0].name.last);
    //console.log(data);
  }

}

// iniciamos jquery
//cuando la pagina esta lista
//ejecuta la funcion inicia.

$(documento).ready(function(inicia));	