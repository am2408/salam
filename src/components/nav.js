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
        <nav id="menu">
          <h2 className="nav-title"><Link to={'/'}>Home</Link></h2>
          <h2 className="nav-title"><Link to={'/basket'}>Basket</Link></h2>
        </nav>
      </div>

    );
  }
}

export default Home;
