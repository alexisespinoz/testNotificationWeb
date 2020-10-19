import React from 'react';
import ReactDom from 'react-dom';
import Notification from 'react-web-notification'
import './App.css';

//allow react dev tools work
window.React = React;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ignore: true,
      title: ''
    };
  }

  handlePermissionGranted(){
    console.log('permiso aceptado');
    this.setState({
      ignore: false
    });
  }

  handlePermissionDenied(){
    console.log('permiso negado');
    this.setState({
      ignore: true
    });
  }

  handleNotSupported(){
    console.log('Notificaciones no soportado');
    this.setState({
      ignore: true
    });
  }

  handleNotificationOnClick(e, tag){
    console.log(e, 'Notification clicked tag:' + tag);
  }

  handleNotificationOnError(e, tag){
    console.log(e, 'Notification error tag:' + tag);
  }

  handleNotificationOnClose(e, tag){
    console.log(e, 'Notification closed tag:' + tag);
  }

  handleNotificationOnShow(e, tag){
    console.log(e, 'Notification shown tag:' + tag);
  }


  handleButtonClick() {

    if(this.state.ignore) {
      return;
    }

    const now = Date.now();

    const title = 'Notificacion' + now;
    const body = 'Mensaje de la notificación' + new Date();
    const tag = now;
    const icon = 'http://mobilusoss.github.io/react-web-notification/example/Notifications_button_24.png';
    // const icon = 'http://localhost:3000/Notifications_button_24.png';

    // Available options
    // See https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification
    const options = {
      tag: tag,
      body: body,
      icon: icon,
      lang: 'es',
      dir: 'ltr',
      sound: ''
    }
    this.setState({
      title: title,
      options: options
    });
  }

  handleButtonClick2() {
    this.props.swRegistration.getNotifications({}).then(function(notifications) {
      console.log(notifications);
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleButtonClick.bind(this)}>Notificación</button>
        {document.title === 'swExample' && <button onClick={this.handleButtonClick2.bind(this)}>swRegistration.getNotifications</button>}
        <Notification
          ignore={this.state.ignore && this.state.title !== ''}
          notSupported={this.handleNotSupported.bind(this)}
          onPermissionGranted={this.handlePermissionGranted.bind(this)}
          onPermissionDenied={this.handlePermissionDenied.bind(this)}
          onShow={this.handleNotificationOnShow.bind(this)}
          onClick={this.handleNotificationOnClick.bind(this)}
          onClose={this.handleNotificationOnClose.bind(this)}
          onError={this.handleNotificationOnError.bind(this)}
          timeout={5000}
          title={this.state.title}
          options={this.state.options}
          swRegistration={this.props.swRegistration}
        />
      </div>
    )
  }
};
export default App;
