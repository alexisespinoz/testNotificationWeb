import React, { useState, useEffect } from "react"

function notificationNormal(props){
    const [isAvaible, setAvaible] = useState(false);
    const [isPermission, setPermission] = useState(false);

    useEffect(() => {
        if (!("Notification" in window)) {
            console.log("Notificacion no es Disponible en el navegador");
            setAvaible(false);
          } else {
            console.log("Notifications es soportada");
            setAvaible(true);
            //Solicitar Permiso
            Notification.requestPermission();
        }
    }, [])


    const showNotification = () => {
        new Notification('Hey, esto es una notificaion normal')
    }

    
    return (
          <div>
            <button onClick={showNotification()}>
              Notificacion normal
            </button>
          </div>
    );
}
export default notificationNormal