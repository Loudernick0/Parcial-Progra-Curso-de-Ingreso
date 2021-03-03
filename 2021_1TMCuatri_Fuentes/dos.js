/*Alumno: Nicolás Mongia
División 1 G,
Enunciado:

Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
d) El promedio de nota por sexo
f) La edad y nombre del que cursa mas materias que no sean en forma remota*/




function mostrar()
{
  
  var nombreIngresado;
  var tipocursada;
  var cantidaddematerias;
  var sexo;
  var notapromedio;
  var contadoralumnosmasculino = 0;
  var contadoralumnosfemenino = 0;
  var contadoralumnosnobinario = 0;
  var acumuladornotasmasculino = 0;
  var acumuladornotasfemenino = 0;
  var acumuladornotasnobinario = 0;
  var promediomasculino;
  var promediofemenino;
  var promedionobinario;
  var flagmasjovenlibreprimeravez = true
  var nombremasjovenlibre;
  var edadmasjovenlibre = 0;
  var edad;
  var respuesta;
  var flagpromedionomasculino = true;
  var mejorpromedionomasculinoprimeravez = 0;
  var nombremejorpromediomasculino;
  var flagmasmateriasnoremotaprimeravez = true;
  var nombremasmateriasnoremota;
  var edadmateriasnoremota;
  var cantidadmasmateriasnoremota = 0;
  var mensajenohaymejorpromedio;
  var mensajenohaymasjoven;
  var mensajenohayremota;

  do
  {
    nombreIngresado = prompt("ingrese nombre del alumno");
    while(isNaN(nombreIngresado)==false)
    {
      nombreIngresado = prompt("ERROR!, nombre invalido, ingrese de nuevo");
    }
    tipocursada = prompt("ingrese el tipo de cursada");
    while(tipocursada != "libre" && tipocursada != "presencial" && tipocursada != "remota")
    {
      tipocursada = prompt("ERROR!, el tipo de cursada ingresado no es valido, ingrese nuevamente");
    }
    cantidaddematerias = prompt("ingrese cantidad de materias");
    cantidaddematerias = parseInt(cantidaddematerias);
    while(cantidaddematerias<0 || cantidaddematerias>8)
    {
      cantidaddematerias = prompt("ERROR!, la cantidad es invalida, ingrese nuevamente");
      cantidaddematerias = parseInt(cantidaddematerias);
    }
    sexo = prompt("ingrese sexo");
    while(sexo != "masculino" && sexo != "femenino" && sexo != "no binario")
    {
      sexo = prompt("ERROR!, el sexo no es valido, ingrese nuevamente");
    }
    notapromedio = prompt("ingrese la nota promedio del alumno");
    notapromedio = parseInt(notapromedio);
    while(notapromedio<0 && notapromedio>10)
    {
      notapromedio = prompt("ERROR!, la nota es invalida, ingrese nuevamente");
      notapromedio = parseInt(notapromedio);
    }
    edad = prompt("ingrese edad");
    edad = parseInt(edad);
    while(isNaN(edad) || edad<18 || edad>90)
    {
      edad = prompt("ERROR!, reingrese la edad");
      edad = parseInt(edad);
    }
    if(flagpromedionomasculino == true && sexo != "masculino")
    {
      mejorpromedionomasculinoprimeravez = notapromedio;
      nombremejorpromediomasculino = nombreIngresado;
      flagpromedionomasculino = false;
    }
    else
    {
      if(notapromedio>mejorpromedionomasculinoprimeravez && sexo != "masculino")
      {
        mejorpromedionomasculinoprimeravez = notapromedio;
        nombremejorpromediomasculino = nombreIngresado;
      }
      else
      {
        mensajenohaymejorpromedio = "no hay mejor promedio";
      }
    }
    switch(sexo)
    {
      case "masculino":
        contadoralumnosmasculino++;
        acumuladornotasmasculino = acumuladornotasmasculino + notapromedio;
        break;
      case "femenino":
        contadoralumnosfemenino++;
        acumuladornotasfemenino = acumuladornotasfemenino + notapromedio;
        break;
      case "no binario":
        contadoralumnosnobinario++;
        acumuladornotasnobinario = acumuladornotasnobinario + notapromedio;
        break;   
    }
    if(flagmasjovenlibreprimeravez == true && tipocursada == "libre")
    {
      nombremasjovenlibre = nombreIngresado;
      edadmasjovenlibre = edad;
      flagmasjovenlibreprimeravez = false;
    }
    else
    {
      if(edad<edadmasjovenlibre && tipocursada == "libre")
      {
        nombremasjovenlibre = nombreIngresado;
        edadmasjovenlibre = edad;
      }
      else
      {
        mensajenohaymasjoven = "no hay mas joven libre";
      }
    }
    if(flagmasmateriasnoremotaprimeravez == true && tipocursada != "remota")
    {
      nombremasmateriasnoremota = nombreIngresado;
      cantidadmasmateriasnoremota = cantidaddematerias;
      flagmasmateriasnoremotaprimeravez = false
    }
    else
    {
      if(cantidadmaterias>cantidadmasmateriasnoremota && tipocursada != "remota")
      {
        nombremasmateriasnoremota = nombreIngresado;
        cantidadmasmateriasnoremota = cantidadmaterias;
        edadmateriasnoremota = edad;
      }
      else
      {
        mensajenohayremota = "no hay alumno con mayor cantidad remoto";
      }
    }



    respuesta = confirm("desea ingresar un nuevo alumno?");

  }while(respuesta == true);


  promediomasculino = acumuladornotasmasculino / contadoralumnosmasculino;
  promediofemenino = acumuladornotasfemenino / contadoralumnosfemenino;
  promedionobinario = acumuladornotasnobinario / contadoralumnosnobinario;

  if(mejorpromedionomasculinoprimeravez==0)
  {
    document.write(mensajenohaymejorpromedio+"<br>");
  }
  else
  {
  document.write("el nombre del mejor promedio no masculino es: "+nombremejorpromediomasculino+"<br>");
  }
  if(edadmasjovenlibre == 0)
  {
    document.write(mensajenohaymasjoven+"<br>");
  }
  else
  {
  document.write("el alumno mas joven que cursa libre es: "+nombremasjovenlibre+"<br>");
  }
  document.write("el promedio de notas masculino es: "+promediomasculino+" el promedio femenino es: "+promediofemenino+" y el promedio no bianrio es: "+promedionobinario+"<br>");
  if(cantidadmasmateriasnoremota = 0)
  {
    document.write(mensajenohayremota+"<br>");
  }
  else
  {
  document.write("la edad del que cursa mas materias no remotas es "+edadmateriasnoremota+" y su nombre es: "+nombremasmateriasnoremota+"<br>");
  }

}
