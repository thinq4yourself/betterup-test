import { Link } from 'react-router-dom'
import React from 'react'
import agent from '../../agent'
import { connect } from 'react-redux'
import { DELETE_ARTICLE } from '../../constants/actionTypes'
import { Button } from 'react-bootstrap'
import Modal from '../Modal'

const mapDispatchToProps = dispatch => ({
  onClickDelete: payload =>
    dispatch({ type: DELETE_ARTICLE, payload })
})

class ArticleActions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }
  render () {
    const article = this.props.article
    const { open } = this.state
    const del = () => {
      this.props.onClickDelete(agent.Articles.del(article.slug))
    }
    const onConfirm = () => {
      del()
      onClick()
    }
    const onClick = () => {
      this.setState((prevState) => ({ open: !prevState.open }))
    }

    if (this.props.canModify) {
      return (
        <span>

          <Link
            to={`/editor/${article.slug}`}
            className="btn btn-outline-primary btn-sm btn-pad-right">
            <i className="ion-edit"></i> Edit Article
          </Link>

          <button className="btn btn-outline-secondary btn-sm" onClick={onClick}>
            <i className="ion-trash-a"></i> Delete Article
          </button>

          <Modal show={open} onHide={onClick}>
            <div className='center-block'>
              <h1><small>Are you sure?</small></h1>
              <div className='padded'>
                <h3><small>The idea will be permanently deleted.</small></h3>
              </div>
              <button
                onClick={onClick}
                className="btn btn-link btn-default btn-link-default btn-pad-right">
                CANCEL
              </button>
              <button className="btn btn-link btn-success" onClick={onConfirm}>
                <i className="ion-trash-a"></i> OK
              </button>
            </div>
          </Modal>

        </span>
      )
    }

    return (
      <span>
      </span>
    )
  }

}

export default connect(() => ({}), mapDispatchToProps)(ArticleActions)
