## Libreria utilizada

react-web-notification, más que nada ofrece un uso más definido para crear notificaciones, con estilo y sonidos.
Problema encontrado con esta es que no pude definirlo a nivel de hook. pero funciona bastante bien para implementar como un utils o servicio dentro de la plataforma

## Notificacion nivel Hook

Existe la metodologia de lanzar notificaciones a nivel de html5, que es muy simple, pero es más acotado que la libreria de arriba en estilos. Se habilito un component para ese caso (NotificationNormal.jsx), pero me fallo en reglas de hooks

## One Signal

Ese no lo tengo completado, cree el servicio pero no está en este codigo, en otro proyecto react. Si se pudiera implementar bien este metodo, no es necesario la implementación de los socket en el front, ya que one signal actua como un socket natural. 
Las desventajas es que tiene un limite de usuario inscritos web de 10k





