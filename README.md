<h1 align="center"> Challenge Amigo Secreto </h1>

## Descripción
Este es un Challenge para Alura Latam, diseñado para realizar sorteos de "amigo secreto" de manera eficiente. 
Permite agregar participantes, validar entradas y realizar sorteos aleatorios sin repeticiones hasta que todos hayan sido seleccionados.

## Características
- **Agregar amigos** mediante el botón "Añadir" o la tecla **Enter**.
- **Validación** para evitar nombres vacíos.
- **Lista** que muestra los amigos agregados.
- **Sorteo aleatorio** sin repetir nombres hasta que todos sean sorteados.
- **Mensaje de finalización** cuando todos los amigos han sido seleccionados.

## Tecnologías utilizadas
- **HTML** → Estructura del proyecto.
- **CSS** → Diseño y estilos.
- **JavaScript** → Lógica del sorteo y manipulación del DOM.

## Cómo usar el proyecto
1. **Abrir `index.html` en el navegador**.
2. **Ingresar nombres en el campo de texto** y presionar **Enter** o el botón "Añadir".
3. **Presionar "Sortear amigo"** para seleccionar un nombre aleatorio.
4. **Cuando todos los amigos han sido sorteados, se muestra un mensaje.**

## Explicación del Código
- **`agregarAmigo()`** → Agrega nombres a la lista y actualiza la interfaz.
- **`actualizarLista()`** → Muestra los nombres agregados en pantalla.
- **`sortearAmigo()`** → Selecciona un nombre aleatorio y lo elimina de la lista de disponibles.
- **`keydown`** → Permite agregar amigos sin hacer clic en el botón, con la tecla "Enter".

## Licencia

Este proyecto es de uso libre. ¡Siéntete libre de mejorarlo y compartirlo!
