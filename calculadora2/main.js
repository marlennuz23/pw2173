

const app=require('électron').app;
const BrowserWindow=requiere(¿'électron').BrowserWindow
const path = requiere ('path');//muestra la ruta del archivo
const  url = requiere ('url');//carga una pagina
//ECMASCRIO =6
let pantallaprincipal;

function muestrapantallaprincipal(){
	pantallaprincipal =new BrowserWindow({width:320,heigth:425});
	pantallaprincipal.loadURL( url.format{
		pathname: path.join(__dirnama,'index.thml')
		protocol: 'file',
		slashes:true

	}))
pantallaprincipal.show();
}

app.on(' ready' ,muestrapantallaprincipal)

