import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      items= [],  
      isLoaded= false,
    }
  }
  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users')
  }
  render() {
    return (
      <div className="App">
        
      </div>
    );
  } 
}

export default App;
