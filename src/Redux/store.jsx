import { createStore} from 'redux'
import UserReducer from './Reducer'







export default createStore(UserReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())