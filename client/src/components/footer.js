import React from 'react'
// import "./Footerstyle.css"
import "../components/footer.css";
export default function Footer() {
  return (
    <div className='footer'>
    <div className='top'>
<div>
    <h1>AdmissionSeeker</h1>
    <p>Education is the key to success</p>
</div>
<a href='/'>
    <i className='fa-brands fa-facebook-square'></i>
</a>
<a href='/'>
    <i className='fa-brands fa-instagram-square'></i>
</a>
<a href='/'>
    <i className='fa-brands fa-twitter-square'></i>
</a>
    </div>
      <div className='bottom'>
<div>
    <h4>Project</h4>
    <a href="/">Changelog</a>
    <a href="/">Status</a>
    <a href="/">Lisence</a>
    <a href="/">All versions</a>
</div>
<div>
    <h4>Community</h4>
    <a href="/">Cithub</a>
    <a href="/">Issues</a>
    <a href="/">Projects</a>
    <a href="/">Twitter</a>
</div>
<div>
    <h4>Help</h4>
    <a href="/">Support</a>
    <a href="/">TroubleShooting</a>
    <a href="/">Contact Us</a>
</div>



      </div>
    </div>
  )
}