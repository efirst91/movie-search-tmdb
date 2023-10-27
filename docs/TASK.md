# Buscador de películas

## El objetivo es obtener una aplicación web SPA desarrollada con Angular que permita la búsqueda de películas mediante el uso del API de TMDb. La aplicación debe ser totalmente responsive y manejar correctamente aquellos elementos que permiten garantizar accesibilidad, posicionamiento web y una buena experiencia de usuario.

* Todo el desarrollo debe estar versionado usando GIT. La aplicación final deberá ser publicada en un repositorio público en GitHub o GitLab. En la fecha y hora definida en el correo se deberá enviar la url del repositorio en un correo notificando la culminación. Cualquier cambio realizado luego de esta hora no será tenido en cuenta en la revisión.

Te recomendamos leer detenidamente todos los requerimientos antes de comenzar a trabajar. Si encuentras alguna incongruencia no dudes en comunicarte para aclararla.


1: Obtener un token de acceso al API de TMDb.

- Regístrate en el sitio web de TMDb para obtener una cuenta de desarrollador https://www.themoviedb.org/signup.
- Inicia sesión o crea una cuenta.
- Ve a la sección "API" dentro de tu perfil de desarrollador https://www.themoviedb.org/settings/api.
- Genera un nuevo token de acceso.
- Guarda el token de acceso generado, este debe ser enviado en las cabeceras en cada petición al API de TMDb.


2: Iniciar aplicación

- Crea una aplicación usando la última versión estable de Angular.
- Utiliza scss para la definición de estilos
- Incorpora @angular/material para utilizar los componentes que sean necesarios en la elaboración de las vistas requeridas.


3: Buscador de películas.

- Crea una página a la cual se accederá desde la ruta base "/".
- En esta página coloca un formulario de búsqueda con los parámetros query & year, para realizar una búsqueda en el listado de películas utilizando el endpoint descrito en https://developer.themoviedb.org/reference/search-movie.
- Al realizar la búsqueda, implementa un mecanismo para incluir el token de acceso en todas las solicitudes al API de TMDb (ver punto 5).
- Muestra los resultados de la búsqueda en tarjetas que contengan la imagen, el nombre de la película, año y su valoración promedio. Para localizar las imágenes consulta la siguiente documentación https://developer.themoviedb.org/docs/image-basics
- Cada tarjeta de película debe ser un enlace a otra página con enlace "/pelicula/{id_pelicula}" que cargará los detalles completos de la película seleccionada.
- Garantice que al navegar desde esta vista a los detalles de una película y regresar, la búsqueda conserve su estado (criterios de búsqueda, página y resultados). Para esto utilice las librerías que consideres necesarias.
- Es necesario que al realizar una búsqueda se pueda compartir la ruta que da exactamente a dichos resultados, por lo que al buscar la ruta actual debe cambiar para incluir los parámetros utilizados (al compartir el enlace este debe cargar la página con los mismos criterios de búsqueda y página de los resultados).


4: Detalles de una película.

- Esta página debe estar implementada en otro módulo cargado a demanda, enviando el id mediante la url.
- El diseño es de libre consideración pero se recomienda reutilizar el máximo posible de los componentes disponibles en angular material que satisfagan las necesidades de cada vista.
- Se deben mostrar los siguientes datos (title, overview, poster_path, release_date, original_language, original_title, backdrop_path, vote_average, vote_count, popularity).


5: Gestión del token de acceso

- Al acceder a cualquiera de las vistas se debe verificar la existencia del token de acceso en el almacenamiento local del navegador. De no existir el usuario debe ser dirigido a la ruta /token-acceso donde se mostrará un input para introducir el token de TMDb y guardarlo en el almacenamiento local. Una vez guardado el usuario debe ser redireccionado a la url que en principio intentó acceder. Si luego se quiere cambiar el token deberá bastar con acceder directamente a esta url y volver a ejecutar la acción.


6: Manejar errores y reintento de solicitudes.

- Implementa un mecanismo centralizado para manejar los mensajes de error que resulten de consultar al API de TMDb. Usar librería de libre selección para mostrar mensaje flotante en cada ocasión que ocurra un error.
- Ante la ocurrencia de un error consultando al API, realiza al menos un reintento siempre y cuando el error no sea de acceso (401, 403). Este reintento debe estar espaciado 2 segundos de la petición inicial.


7: Internacionalización

- Traducir la aplicación en 2 idiomas (inglés y español). Tener en cuenta solicitar los datos al API según idioma seleccionado.
- El acceso a la aplicación para cada idioma será a partir de la url base /es/  /en/ . Se puede tener como idioma principal cualquiera de los dos.
- Proveer un control para cambiar de idioma disponible en todas las vistas.
- Al ejecutarse una búsqueda que no brinde resultados se debe incluir una opción que sugiera cambiar de idioma y ejecutar la búsqueda de inmediato en el nuevo idioma.


8: Pruebas

- Implemente al menos 2 pruebas unitarias utilizando las librerías que prefieras o mejor conozcas.
