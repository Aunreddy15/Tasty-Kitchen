import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import Cart from './components/Cart'
import './App.css'

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/cart" component={Cart} />
      <ProtectedRoute exact path="/bad-path" component={NotFound} />
      <ProtectedRoute component={NotFound} />
    </Switch>
  </>
)

export default App
