import React, {Component} from 'react';
import './App.css';
import Main from './components/main.js';
import NavBar from './components/NavBar.js';
import { Container } from '@material-ui/core';

class App extends Component {
    render(){
	return (
            <div>
              <NavBar></NavBar>
              <Container>
                <Main/>
              </Container>
            </div>
        );
    }
}

export default App;
