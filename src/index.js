import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'daniel',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password === this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {
    const login= (<form action="#" onSubmit= {this.authorize}>
      <p>chsss: una pista...mi nombre en minúsculas</p>
    <input type='password' placeholder='Password'/>
    <input type="submit"/>
    </form>)
    const contactInfo = (
    
        <ul>
          <li>
           <a href='mailto:danugarri@gmail.com'>danugarri@gmail.com </a> 
          </li>
          <li>
          666228068
          </li>
        </ul>
    )
    return (
      <div id="authorization">
        <h1>{this.state.authorized ?  'Contacto' :'Introduce la contraseña'} 
        </h1>
        {this.state.authorized ? contactInfo :login}
      </div>
    );
  }
}

ReactDOM.render(
  <Contact />, 
  document.getElementById('root')
);


