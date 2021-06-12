import React from 'react';
import './Hello.css'


  class Hello extends React.Component {
  handleEvent() {
    alert(`Esta es una web app hecha con React.`);
  }

  render() {
    return (
      <h1  onClick={this.handleEvent}>
        Hazme click
      </h1>
    );
  }
}
export default Hello