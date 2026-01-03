import React from 'react'
import PropTypes from 'prop-types'

function Header(props) {
  return (
    <div>
      <header>
        <h1 className='bg-primary text-white text-start p-3'>{props.title}</h1>
      </header>
    </div>
  )
}
Header.propTypes = {
  title: PropTypes.string.isRequired
};
Header.defaultProps = {
  title: "Set Title Here"
};

export default Header
