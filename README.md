Este es un proyecto [Next.js](https://nextjs.org/) iniciado con [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages /crear-siguiente-aplicación).

## Empezando

Primero, ejecute el servidor de desarrollo:

```bash
npm ejecutar dev
# o
desarrollador de hilo
```

Abra [http://localhost:3000](http://localhost:3000) con su navegador para ver el resultado.

Puede comenzar a editar la página modificando `pages/index.js`. La página se actualiza automáticamente a medida que edita el archivo.

Se puede acceder a [rutas API] (https://nextjs.org/docs/api-routes/introduction) en [http://localhost:3000/api/hello](http://localhost:3000/api/hello ). Este punto final se puede editar en `pages/api/hello.js`.

El directorio `pages/api` está asignado a `/api/*`. Los archivos en este directorio se tratan como [rutas API](https://nextjs.org/docs/api-routes/introduction) en lugar de páginas React.

Este proyecto utiliza [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) para optimizar y cargar automáticamente Inter, una fuente personalizada de Google.

## Aprende más

Para obtener más información sobre Next.js, eche un vistazo a los siguientes recursos:

- [Documentación de Next.js] (https://nextjs.org/docs): obtenga información sobre las funciones y la API de Next.js.
- [Learn Next.js] (https://nextjs.org/learn): un tutorial interactivo de Next.js.

Puede consultar [el repositorio Next.js GitHub](https://github.com/vercel/next.js/) - ¡Sus comentarios y contribuciones son bienvenidos!

## Implementar en Vercel

La forma más fácil de implementar su aplicación Next.js es usar la [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app -readme) de los creadores de Next.js.
## Desplegar en Vercel

1. La implementación de una aplicación Next.js en Vercel es un proceso simple que se puede realizar en solo unos pocos pasos. Aquí hay una descripción general del proceso:

2. Cree un nuevo proyecto en Vercel. Puede hacerlo yendo a [Zasalast/esp32/incubadora-nex](https://github.com/Zasalast/esp32-incubadora-nex) y seleccionando "Fork" o Clonarlo con "git clone https://github.com/Zasalast/esp32-incubadora-nex" en el terminal, pero no es recomendado a menos que desee desarrollar en local cambios. 

3. Conecte su repositorio de GitHub o GitLab a su proyecto de Vercel. Puede hacerlo yendo a la pestaña "Importar" en el panel de control de Vercel y seleccionando su repositorio.

4. Después de conectar su repositorio, Vercel detectará automáticamente que su proyecto es una aplicación Next.js y configurará los ajustes necesarios para la implementación.

5. Una vez que su proyecto esté conectado, Vercel implementará automáticamente nuevos cambios en su aplicación cada vez que ingrese a la rama principal del repositorio conectado.

6. Una vez completada la implementación, puede visitar la pestaña "Implementaciones" para ver el estado de su implementación y acceder a la URL de su aplicación en vivo.

7. Para configurar su dominio personalizado para su aplicación, vaya a la pestaña de configuración y en la sección de dominios agregue su dominio personalizado.

8. Antes de implementar su aplicación, se recomienda configurar variables de entorno para mantener la privacidad de su información confidencial. En el panel de control de Vercel, vaya a la pestaña "Configuración", luego a "Variables de entorno" y agregue sus variables de entorno allí.

9. Luego, puede probar su aplicación en un entorno de desarrollo instalando Vercel CLI y ejecutando el comando "vercel dev" en su terminal.

10. ¡Eso es! Su aplicación Next.js ahora está implementada en Vercel y lista para que sus usuarios la accedan.



## Modelos de DESTER(DSTR)
Puede usar e interactuar con el, de la siguiente forma:

* Se pueda Dar Click en "DSTR"  o en "Temperatura y Humedad Actual" para visualizar los Widgets que muestran los valores de la temperatura, humedad tanto en interior de criadora de pollos como los valores de afuera.

![Cabecera](https://github.com/Zasalast/esp32-incubadora-nex/blob/main/assets/Header.jpg)
![Seleccionar cabecera](https://github.com/Zasalast/esp32-incubadora-nex/blob/main/assets/HeaderSeleccion.jpg)
* Si da Click en "Historial de Datos" puede visualizar los datos como puede ver acontunuación

![Grafica](https://github.com/Zasalast/esp32-incubadora-nex/blob/main/assets/Grafica.jpg)
[Grafica](https://esp32-incubadora-7hkboj3a9-zasalast.vercel.app/grafica/GraficaHumedad)
El dato visto en número, si es humedad es el procentaje de Humedad, Si es Temperatura, se encuentra en grados centigrados.
![Card](https://github.com/Zasalast/esp32-incubadora-nex/blob/main/assets/card.jpg)
[Vea El dato actual](https://esp32-incubadora-7hkboj3a9-zasalast.vercel.app/)

Se recomienda usar el celular de forma Horizontal para una mejor experiencia.


Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
