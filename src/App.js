import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeContext, UserContext } from './context';
import CounterSection from './components/CounterSection';

class App extends Component {
  state = {
    theme: 'LIGHT',
  };

  toggleTheme = () => {
    this.setState((prevState) => ({
      theme: prevState.theme === 'LIGHT' ? 'DARK' : 'LIGHT',
    }));
  };

  render() {
    return (
      <>
        <UserContext.Provider value={{ firstName: 'Ivan', lastName: 'Ivanov' }}>
          <ThemeContext.Provider value={this.state.theme}>
            <Header toggleTheme={this.toggleTheme} />
            <CounterSection />
            <Footer />
          </ThemeContext.Provider>
        </UserContext.Provider>
      </>
    );
  }
}

export default App;
