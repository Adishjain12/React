import React from 'react'
import { links } from '../data'
const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
      {links.map((ele)=>{
            return <li key={ele.id}>
              <a href={ele.href} className="nav-link"> {ele.text} </a>
            </li>
          })}
      </ul>
      <ul className="footer-icons">
        <li>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="footer-icon"
            ><i className="fab fa-facebook"></i
          ></a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="footer-icon"
            ><i className="fab fa-twitter"></i
          ></a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="footer-icon"
            ><i className="fab fa-squarespace"></i
          ></a>
        </li>
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer