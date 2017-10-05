import React from 'react';
import { Link } from 'react-router-dom';
import agent from '../agent';
import { connect } from 'react-redux';
import { ARTICLE_FAVORITED, ARTICLE_UNFAVORITED } from '../constants/actionTypes';

const FAVORITED_CLASS = 'btn btn-sm btn-primary';
const NOT_FAVORITED_CLASS = 'btn btn-sm btn-outline-primary';

const mapDispatchToProps = dispatch => ({
  favorite: slug => dispatch({
    type: ARTICLE_FAVORITED,
    payload: agent.Articles.favorite(slug)
  }),
  unfavorite: slug => dispatch({
    type: ARTICLE_UNFAVORITED,
    payload: agent.Articles.unfavorite(slug)
  })
});

const ArticlePreview = props => {
  const article = props.article;
  const favoriteButtonClass = article.favorited ?
    FAVORITED_CLASS :
    NOT_FAVORITED_CLASS;

  const handleClick = ev => {
    ev.preventDefault();
    if (article.favorited) {
      props.unfavorite(article.slug);
    } else {
      props.favorite(article.slug);
    }
  };

  return (
    <div className="list-group-item">
      <div class="pad">
        <Link to={`/article/${article.slug}`} className="preview-link">
          <div className="pull-xs-right">
            <button className={favoriteButtonClass} onClick={handleClick}>
              <i className="ion-heart"></i> {article.favoritesCount}
            </button>
          </div>
          <h1><small>{article.title}</small></h1>
          <p>{article.description}</p>
          <ul className="tag-list">
            {
              article.tagList.map(tag => {
                return (
                  <li className="tag-default tag-pill tag-outline" key={tag}>
                    {tag}
                  </li>
                )
              })
            }
          </ul>
        </Link>
        <div className="article-meta">
          <h4 className="list-group-item-heading">
            <small>
              <Link to={`/@${article.author.username}`}>
                <img src={article.author.image ? article.author.image : 'https://static.productionready.io/images/smiley-cyrus.jpg'} alt={article.author.username} />
              </Link>
              <div className="info">
                <Link className="author" to={`/@${article.author.username}`}>
                  {article.author.username}
                </Link>
                <span className="date">
                  {new Date(article.createdAt).toDateString()}
                </span>
              </div>
            </small>
          </h4>
          <Link to={`/article/${article.slug}`} className="preview-link">
            <span className='btn-text btn-secondary btn-sm'>Read more...</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default connect(() => ({}), mapDispatchToProps)(ArticlePreview);
