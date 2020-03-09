

import React, {Component} from 'react';
import { HashRouter } from 'react-router-dom'
import { Provider, connect } from 'react-redux'
import store from './Redux/store'

import router from './router'



class App extends Component {



  async componentDidMount(props) {
   
  }

render(){




  return (

    <Provider store={store}>

    <HashRouter>

      <div>
        {router}
      </div>


    </HashRouter>
    </Provider>


  );
}
}

export default App
