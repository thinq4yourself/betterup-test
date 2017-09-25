import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Link } from 'components'

const Nav = styled.nav`
  display: block;
  text-align: right;
  list-style: none;
  > :not(:first-child) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  li {display: inline;}
  a {
    font-weight: 400;
    color: ${palette('grayscale', 3)};
    font-size: 1.05rem;
    &.active {
      color: ${palette('grayscale', 8)};
    }
  }
`

const PrimaryNavigation = (props) => {
  return (
    <Nav {...props}>
      <li><Link to="/" activeClassName="active">Welcome</Link></li>
      <li><Link to="/test" onlyActiveOnIndex activeClassName="active">Editor</Link></li>
    </Nav>
  )
}

PrimaryNavigation.propTypes = {
  reverse: PropTypes.bool,
}

export default PrimaryNavigation
