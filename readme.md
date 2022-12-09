# ¿Qué es un _CDN_?

Un _CDN_ es una red de servidores que se utilizan para **servir recursos** (normalmente estáticos) como archivos multimedia, librerias de _JS, CSS_ ... Esta serie de servidores están distribuidos por todo el mundo para un mayor alcance y velocidad para los usuarios, ya que normalmente, nos conectamos al servidor que tenemos más cercano. (Así no se colapsa uno únicamente).




## Principal inconveniente de importar _CDN_. (Opinión perosnal)
El principal inconveniente que tiene **importar (y no descargar)** una libreria de un _CDN_ es que cuando hagan una modificación en esas librerias, el cambio también se te hará a tí y depende de las distintas versiones que tengas puede que se creen errores por compatibilidad. En cambio, si descargamos la librería, por mucho que modifiquen esa librería los cambios no te afectarán y podrás seguir trabajando con ellas el tiempo que necesites.



- ### Ventajas de importar librerías descargándolas en local y utilizando un CDN ![Correcto](./img/correcto.jpg)  
> Local
>> Siempre vas a poder trabajar con ellas

>> No sufren modificaciones

>> No hace falta que estes conectado a internet

>> No ocupan ancho de banda


> CDN
>> Suelen ser rápidos por lo general (peticiones)

>> No ocupan espacio en tu disco


- ### Inconvenientes de importar librerías descargándolas en local y utilizando un CDN ![Incorrecto](./img/inco.jpg)
> Local
>> Ocupan espacio en tu disco

>> Puede que se queden obsoletas

>> Si las borras, las tienes que volver a poner


> CDN
>> Se puede colapsar el servidor de muchas peticiones

>> Puede tener funciones ocultas (como archivos dañinos)




## Información sobre más proyectos 
[InfovaroBlog](https://infovaroblog.wordpress.com/) 