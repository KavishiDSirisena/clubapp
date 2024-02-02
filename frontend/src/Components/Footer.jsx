export default function Footer(){
    return(
        <>
        <footer>
  <div className="footer">
    <div className="container">
      <div className="row">
        <div className=" col-md-4">
          <h3>Contact US</h3>
          <ul className="conta">
            <li><i className="fa fa-map-marker" aria-hidden="true" /> Address</li>
            <li><i className="fa fa-mobile" aria-hidden="true" /> +01 1234569540</li>
            <li> <i className="fa fa-envelope" aria-hidden="true" /><a href="#"> colomboswimmingclub@gmail.com</a></li>
          </ul>
        </div>
        <div className="col-md-4">
          <h3>Menu Link</h3>
          <ul className="link_menu">
            <li className="active"><a href="#">Home</a></li>
            <li><a href="about.html"> about</a></li>
            <li><a href="room.html">Our Room</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </div>
        <div className="col-md-4">
          <h3>Follow Us On</h3>
          
          <ul className="social_icon">
            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
            <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
            <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true" /></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="copyright">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <p>
              © 2024 All Rights Reserved.
              <br /><br />
              Colombo Swimming Club
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
</>
    )
}