import React from 'react'
import { Link } from 'gatsby'

const Footer = ({ author }) => (
  <div
    style={{
      background: '#fafafa',
      paddingBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 760,
        padding: '1.45rem 1.0875rem',
        fontSize: '0.7rem',
        color: '#444',
      }}
    >
      &copy; 2011-{new Date().getFullYear()} {author} Some Rights Reserved.
      <Link style={{ boxShadow: 'none' }} to={'/ko/copyright'}>
        ?
      </Link>
    </div>
  </div>
)

export default Footer