import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Name from './Name'
import Mobile from './Mobile'
import NameMobile from './NameMobile'

function App(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Name} />
        <Route path="/Mobile" component={Mobile} />
        <Route path="/NameMobile" component={NameMobile} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
