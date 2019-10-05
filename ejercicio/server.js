const http=require('http')
const port=5555
const hostname="localhost"
const files=require('fs')
const sistemaop=require('os')

const server=http.createServer(function(req,res){
 escribir()
 var x=""

 files.stat("texto.txt",function(error){
 if(error==null)
 leer();
 else
 console.log("No existe")
 })

 eliminar()
 carpeta("ejemplos")
 res.statusCode=200
 res.setHeader('Content-type','text/plain')
 res.end('Hola mundo: '+x)

});

function escribir(){
  var sistema=sistemaop.type()+" "+sistemaop.platform()+"-"+sistemaop.arch()+"-"+sistemaop.release()
 files.writeFile('texto.txt','sistema:' +sistema,function(error){
	if(error)
	console.log(error)
	else
	console.log("Archivo creado")
 }); 
} 

function leer(){
files.readFile("texto.txt","utf-8",function(error,datos){
	if(error)
	return console.log(error)
	else
	console.log(datos)
	return datos
})
}
function eliminar(){
files.unlink("texto.txt",function(error){
	if(error)
	console.log(errror)
	else
	console.log("archivo Eliminado")
})
}

function carpeta(Nombre){
	if(!files.existsSync(Nombre)){
	  files.mkdirSync(Nombre)	
	}
}


server.listen(port,hostname,function(){

console.log("servidor corriendo")

})
