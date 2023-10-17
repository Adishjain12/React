import React from 'react';
import { socialinks } from '../data';
import { links } from '../data';

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
      {links.map((ele)=>{
            return (<li key={ele.id}>
              <a href={ele.href} className="footer-link"> {ele.text} </a>
            </li>)
          })}
      </ul>
      <ul className="footer-icons">
      {socialinks.map((link) => {
                            const { id, href, icon } = link;
                            return (
                                <li key={id}>
                                    <a href={href} target="_blank"  className="footer-icon" rel="noreferrer"
                                    ><i className={icon}></i></a>

                                </li>
                            );
                        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer