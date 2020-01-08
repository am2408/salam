import React from 'react';
import {Link} from 'react-router-dom';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                  };
  }

  render() {
    return (
      <div>
        <h1>Votre panier</h1>
        <p>Vous etes dans basket</p>
      </div>

    );
  }
}

export default Home;
