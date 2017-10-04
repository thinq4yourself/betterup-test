import agent from '../agent'
import React from 'react'
import { connect } from 'react-redux'
import { APP_LOAD, REDIRECT, LOGOUT } from '../constants/actionTypes'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import Article from '../components/Article'
import Editor from '../components/Editor'
import Home from '../components/Home'
import Login from '../components/Login'
import Profile from '../components/Profile'
import ProfileFavorites from '../components/ProfileFavorites'
import Register from '../components/Register'
import Settings from '../components/Settings'
import { store } from '../store'
import { push } from 'react-router-redux'
import { Link } from 'react-router-dom'
import './App.css'

const mapStateToProps = state => {
  return {
    appLoaded: state.common.appLoaded,
    appName: state.common.appName,
    currentUser: state.common.currentUser,
    redirectTo: state.common.redirectTo
  }}

const mapDispatchToProps = dispatch => ({
  onClickLogout: () => dispatch({ type: LOGOUT }),
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
  onRedirect: () =>
    dispatch({ type: REDIRECT })
})

class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      // this.context.router.replace(nextProps.redirectTo)
      store.dispatch(push(nextProps.redirectTo))
      this.props.onRedirect()
    }
  }

  componentWillMount() {
    const token = window.localStorage.getItem('jwt')
    if (token) {
      agent.setToken(token)
    }

    this.props.onLoad(token ? agent.Auth.current() : null, token)
  }

  render() {
    if (this.props.appLoaded) {
      return (
        <div className='container-fluid'>
          <div className='row'>
            <Sidebar currentUser={this.props.currentUser} appName={this.props.appName} />
            <div className='col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main'>
              <div>
                <Header
                  appName={this.props.appName}
                  currentUser={this.props.currentUser} />
                  <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route exact path='/home' component={Home}/>
                  <Route path='/login' component={Login} />
                  <Route path='/register' component={Register} />
                  <Route path='/editor/:slug' component={Editor} />
                  <Route path='/editor' component={Editor} />
                  <Route path='/article/:id' component={Article} />
                  <Route path='/settings' component={Settings} />
                  <Route path='/@:username/favorites' component={ProfileFavorites} />
                  <Route path='/@:username' component={Profile} />
                  </Switch>
              </div>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div>
        <Header
          appName={this.props.appName}
          currentUser={this.props.currentUser} />
      </div>
    )
  }
}

// App.contextTypes = {
//   router: PropTypes.object.isRequired
// }

export default connect(mapStateToProps, mapDispatchToProps)(App)
