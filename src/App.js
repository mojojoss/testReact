import React, {Component} from 'react';


class App extends Component {
 constructor(props) {
    super(props);
    this.state = { items: [], text: '', price: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
     this.priceChange = this.priceChange.bind(this);
     this.deleteItem = this.deleteItem.bind(this);
     
  }

  render() {
    return (
      <div>
        <h3>items table</h3>
        <Tablelist items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-item">
            название и цена
          </label>
          <br />
          <input
            id="new-item"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <input type="text"
            id="item-price"
            onChange={this.priceChange}
            value={this.state.price}
          />
          <button>
            добавить товар №{this.state.items.length + 1}
          </button>
        </form>
        <button onClick={this.deleteItem}>
            Удалить товар
        </button>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }
  priceChange(e) {
    this.setState({ price: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: this.state.items.length+1,
      price: this.state.price
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: '',
      price:''
    }));
  }
    deleteItem(){
    this.setState(prevState => ({
      items: prevState.items.slice(0, this.state.items.length-1),
      text: '',
      price:''
    }));;
    }
}

class Tablelist extends React.Component {
  render() {
    return (
      <table class="table">
      <thead>
          <tr>
              <th>название товара</th><th>цена товара</th><th>№ товара</th>
          </tr>
      </thead>
       <tbody>
        {this.props.items.map(item => (
            <tr>
                <td key={item.id}>{item.text}</td>
                <td>{item.price}</td>
                <td>{item.id}</td>
            </tr>
        
        ))}
        </tbody>
        </table>
    );
  }


}

export default App;
