import React from 'react'
import Logo from '../assets/github-light.png'

function GitRepo() {
    const style = {
        position: "fixed",
        right: 8,
        bottom: 8,
    }
  return (
    <div style={style}>
        <a target='_blank' rel="noreferrer" href='https://github.com/Raj4646/tnd'><img width='40px' src={Logo} alt="GitHub logo"/></a>
    </div>
  )
}

export default GitRepo
