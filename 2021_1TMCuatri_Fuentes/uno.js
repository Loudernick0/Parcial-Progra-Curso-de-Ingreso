/* Alumno: Nicolás Mongia
División: 1 G

Enunciado:

Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos */



function mostrar()
{

	var nombreproductoIngresado;
	var tipoProducto;
	var precioProducto;
	var cantidadunidades;
	var tipoInflamable;
	var contadorcantidadalcohol = 0;
	var contadorcantidadIAC = 0;
	var contadorcantidadQuat = 0;
	var contadorIACmenora200 = 0;
	var contadortotalproductos = 0;
	var promediodecantidad;
	var marca;
	var tipoinflamableconmascantidad;
	var contadortipoinflamableconmascantidad;
	var marcamascara;
	var tipomascaro;
	var preciomascaro;
	var i = 0;

	while(i<5)
	{
		nombreproductoIngresado = prompt("ingrese el nombre de su producto");
		while(isNaN(nombreproductoIngresado)==false)
		{
			nombreproductoIngresado = prompt("ERROR!,el nombre no es valido, ingrese nuevamente");
		}
		tipoProducto = prompt("ingrese el tipo de producto");
		while(tipoProducto != "alcohol" && tipoProducto != "IAC" && tipoProducto != "Quat")
		{
			tipoProducto = prompt("ERROR!, el tipo de producto no es valido, ingrese nuevamente");
		} 
		precioProducto = prompt("ingrese el precio del producto");
		precioProducto = parseInt(precioProducto);
		while(precioProducto<100 || precioProducto>300)
		{
			precioProducto = prompt("ERROR!, el precio no es valido, ingrese nuevamente");
			precioProducto = parseInt(precioProducto);
		}
		cantidadunidades = prompt("ingrese la cantidad de unidades");
		cantidadunidades = parseInt(cantidadunidades);
		while(cantidadunidades<1 || cantidadunidades>1000)
		{
			cantidadunidades = prompt("ERROR!, la cantidad de unidades no es valida, ingrese nuevamente");
			cantidadunidades = parseInt(cantidadunidades);
		}
		tipoInflamable = prompt("ingrese el tipo de inflamable");
		while(tipoInflamable != "ignifugo" && tipoInflamable != "combustible" && tipoInflamable != "explosivo")
		{
			tipoInflamable = prompt("ERROR!, el tipo inflamable no es valido, ingrese nuevamente");

		}
		marca = prompt("ingrese la marca");
		while(isNaN(marca)==false)
		{
			marca = prompt("ERROR!, ingrese la marca nuevamente");
		}
		switch(tipoProducto)
		{
			case "alcohol":
				contadorcantidadalcohol++;
				break;
			case "IAC":
				contadorcantidadIAC++;
				if(precioProducto<201)
				{
					contadorIACmenora200++;
				}
				break;
			case "Quat":
				contadorcantidadQuat++;
				break;		
		}
		if(i == 0)
		{
			tipoinflamableconmascantidad = nombreproductoIngresado;
			contadortipoinflamableconmascantidad = cantidadunidades;
		}
		else
		{
			if(cantidadunidades>contadortipoinflamableconmascantidad)
			{
				tipoinflamableconmascantidad = nombreproductoIngresado;
				contadortipoinflamableconmascantidad = cantidadunidades;
			}
		}
		if(i==0)
		{
			marcamascara = marca;
			tipomascaro = tipoProducto;
			preciomascaro = precioProducto;
		}
		else
		{
			if(precioProducto>preciomascaro)
			{
				marcamascara = marca;
				tipomascaro = tipo;
				preciomascaro = precio;
			}
		}

		i++;
	}

	contadortotalproductos = contadorcantidadIAC + contadorcantidadalcohol + contadorcantidadQuat;
	promediodecantidad = contadortotalproductos / 3;




	document.write("el promedio de cantidad por tipo es: "+promediodecantidad+"<br>");
	document.write("el tipo de inflamable con mas cantidad de productos en el total de la compra es: "+tipoinflamableconmascantidad+" con una cantidad de "+contadortipoinflamableconmascantidad+" de unidades"+"<br>");
	document.write("la cantidad de unidades de IAC con precio menor a 200 es: "+contadorIACmenora200+"<br>");
	document.write("la marca del mas caro de los productos es: "+marcamascara+"y el tipo mas caro es "+tipomascaro+"<br>");

}
