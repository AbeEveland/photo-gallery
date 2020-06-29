import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomePage } from './components/HomePage'
import { PhotoList } from './components/PhotoList'
import { PhotoDetail } from './components/PhotoDetail'
import { Header } from './components/Header'

class App extends Component {
  render() {
    return (
      <body>
        <Router>
          <main>
            <Header />
            <section className="section">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/:categoryName" component={PhotoList} />
                <Route
                  path="/:categoryName/:arrayIndexOfThePhoto"
                  component={PhotoDetail}
                />
              </Switch>
            </section>
          </main>
        </Router>
      </body>
    )
  }
}

export default App
