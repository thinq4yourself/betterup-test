import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {
  LOGOUT
} from '../constants/actionTypes';

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <div className='center-block sidebar-logo'>
        <img src='/images/logo.svg' className="sidebar-avatar" />
        <br />
        <Link
          to='/home'
          className="nav-link center-block">
          The Idea Pool
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
        <div className='center-block sidebar-logo'>
          <img src='/images/logo.svg' className="sidebar-avatar" />
          <br />
          <Link
            to='/home'
            className="nav-link center-block">
            The Idea Pool
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
            className="nav-link center-block">
            {props.currentUser.username}
          </Link><br /><br />
          <button
            onClick={props.onClickLogout}
            className="btn btn-outline-success">
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
        <LoggedOutView currentUser={this.props.currentUser} />
        <LoggedInView onClickLogout ={this.props.onClickLogout} currentUser={this.props.currentUser} />
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
