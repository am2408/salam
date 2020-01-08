import React from 'react';
import {Link} from 'react-router-dom';
import {article} from './div';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products:[],
      min:0,
      max:15
                  };
  }

  componentDidMount() {
    this.setState(
      ()=>{
          article()
            .then((res)=>{
              this.setState({products: res});
              console.log(res);
            })
      }
    )

  }

  displayList(){
      return this.state.products.map((product, index)=>{

          return <article key={index}>
                      <img src={product.url} alt="150"/>
                       <h3>{product.title}</h3>
                       <button><i className="fas fa-plus"></i></button>
                </article>
      })
  }

  render() {
    return (
      <div className="container">
        <h1>Nos produits</h1>
        {this.displayList()}
      </div>

    );
  }
}

export default Home;
