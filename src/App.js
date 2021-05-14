import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Todo from './pages/Todo';
import StorePage from './pages/Store';
import Joke from './pages/Joke';
import Header from './components/Header';
import { StoreProvider } from 'easy-peasy';
import store from './store';

// function App() {
//   const clickMe = () => {
//     console.log('Click btn');
//   };
//   return (
//     <div className="App">
//       <div className="text-center uppercase txt-red">Hello world</div>
//       <div className="text-center btn-red">
//         <button onClick={clickMe}>Click me</button>
//       </div>
//     </div>
//   );
// }

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     count: 0,
  //     name: 'JayJay',
  //   };
  // }

  // handlerPlus() {
  //   const { count } = this.state;
  //   this.setState({
  //     count: count + 1,
  //   });
  // }

  // handlerMinus() {
  //   const { count } = this.state;
  //   this.setState({
  //     count: count - 1,
  //   });
  // }

  // inputText = (e) => {
  //   const value = e.target.value;
  //   this.setState({
  //     name: value,
  //   });
  // };

  render() {
    // const { count, name } = this.state;
    return (
      <div className="App">
        {/* <Count
          total={count}
          handlerPlus={() => this.handlerPlus()}
          handlerMinus={() => this.handlerMinus()}
        />
        <div className="text-center">{name}</div>
        <InputText inputText={this.inputText} />
        <div className="text-center uppercase txt-red">Hello world</div> */}

        <StoreProvider store={store}>
          <Router>
            <div>
              <Header />

              {/* <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Todo">Todo</Link>
                </li>
              </ul>
            </nav> */}

              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/Todo">
                  <Todo />
                </Route>
                <Route path="/store">
                  <StorePage />
                </Route>
                <Route path="/joke">
                  <Joke />
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router>
        </StoreProvider>
      </div>
    );
  }
}

export default App;
