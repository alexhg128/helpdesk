import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, ScrollToTop } from './components';
import { Home, Details } from './pages';
import { Container } from './components/Container';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Navbar/>
        <Container style={{ paddingTop: '3em', paddingBottom: '3em' }}>
          <Switch>

            <Route path="/detail/:id" component={ Details } />
            <Route path="/">
              <Home/>
            </Route>

          </Switch>
        </Container>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
