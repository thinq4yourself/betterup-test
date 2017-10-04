import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {
  LOGOUT
} from '../constants/actionTypes';

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <div className='center-block sidebar-logo-container'>
        <Link
          to='/home'
          className="nav-link text-white center-block">
          <img src='/images/logo.png' className="sidebar-logo" />
          <br />
          {props.appName}
        </Link>
      </div>
    )
  }
  return null
}

const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <div>
        <div className='center-block sidebar-logo-container'>
          <Link
            to='/home'
            className="nav-link text-white center-block">
            <img src='/images/logo.png' className="sidebar-logo" />
            <br />
            {props.appName}
          </Link>
        </div>
        <div className='center-block'>
          <Link
            to={`/@${props.currentUser.username}`}
            className="nav-link center-block">
            <img src={props.currentUser.image} className="sidebar-avatar" alt={props.currentUser.username} />
          </Link><br />
          <Link
            to={`/@${props.currentUser.username}`}
            className="nav-link text-white center-block">
            My Articles
          </Link><br /><br />
          <button
            onClick={props.onClickLogout}
            className="btn btn-outline-default">
            Logout
          </button>
        </div>
      </div>
    )
  }

  return null
}

class Sidebar extends React.Component {
  render() {
    return (
      <nav className='col-sm-3 col-md-2 left-sidebar'>
        <LoggedOutView currentUser={this.props.currentUser} appName={this.props.appName} />
        <LoggedInView onClickLogout ={this.props.onClickLogout} appName={this.props.appName} currentUser={this.props.currentUser} />
      </nav>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.common.currentUser
})

const mapDispatchToProps = dispatch => ({
  onClickLogout: () => dispatch({ type: LOGOUT })
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
