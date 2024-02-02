import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';




 export default function Home(){

  
    return(
        <>
       <div>
  <div className="loader_bg">
    <div className="loader"><img src="images/loading.gif" alt="#" /></div>
  </div>
  <Header></Header>
  <section className="banner_main">
    <div id="myCarousel" className="carousel slide banner" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to={0} className="active" />
        <li data-target="#myCarousel" data-slide-to={1} />
        <li data-target="#myCarousel" data-slide-to={2} />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="first-slide" src="images/dsc_0764.jpg" alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="second-slide" src="images/PS2_0211.jpg" alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="third-slide" src="images/club.jpg" alt="Third slide" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
    <div className="booking_ocline">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="book_room">
              <h1>Welcome to Colombo Swimming Club</h1>
              <form className="book_now">
                <div className="row">
                  
                 
                  <div className="col-md-12">
                    <button className="book_btn">Get Started</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 
  <div className="about">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-5">
          <div className="titlepage">
            <h2>About Us</h2>
            <p>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum. </p>
            <a className="read_more" href="Javascript:void(0)"> Read More</a>
          </div>
        </div>
        <div className="col-md-7">
          <div className="about_img">
            <figure><img src="images/club.jpg" alt="#" /></figure>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="our_room">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="titlepage">
            <h2>Our Rooms</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-6">
          <div id="serv_hover" className="room">
            <div className="room_img">
              <figure><img src="images/PS2_0180.jpg" alt="#" /></figure>
            </div>
            <div className="bed_room">
              <h3>Super Delux</h3>
              <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div id="serv_hover" className="room">
            <div className="room_img">
              <figure><img src="images/PS2_0018.jpg" alt="#" /></figure>
            </div>
            <div className="bed_room">
              <h3>Delux</h3>
              <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div id="serv_hover" className="room">
            <div className="room_img">
              <figure><img src="images/PS2_0091.jpg" alt="#" /></figure>
            </div>
            <div className="bed_room">
              <h3>Standard</h3>
              <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="gallery">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="titlepage">
            <h2>Gallery</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="gallery_img">
            <figure><img src="images/PS2_0127.jpg" alt="#" /></figure>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="gallery_img">
            <figure><img src="images/305574526_445855484230325_8489984921460138451_n.jpg" alt="#" /></figure>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="gallery_img">
            <figure><img src="images/PS2_0083.jpg" alt="#" /></figure>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="gallery_img">
            <figure><img src="images/PS2_0113.jpg" alt="#" /></figure>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="gallery_img">
            <figure><img src="images/PS2_9979.jpg" alt="#" /></figure>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="gallery_img">
            <figure><img src="images/PS2_9957.jpg" alt="#" /></figure>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="gallery_img">
            <figure><img src="images/307564400_458606342955239_4792511070680855904_n.jpg" alt="#" /></figure>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="gallery_img">
            <figure><img src="images/307507615_458606346288572_6342474080777310474_n.jpg" alt="#" /></figure>
          </div>
        </div>
      </div>
    </div>
  </div>
 
  <div className="contact">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="titlepage">
            <h2>Contact Us</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <form id="request" className="main_form">
            <div className="row">
              <div className="col-md-12 ">
                <input className="contactus" placeholder="Name" type="type" name="Name" /> 
              </div>
              <div className="col-md-12">
                <input className="contactus" placeholder="Email" type="type" name="Email" /> 
              </div>
              <div className="col-md-12">
                <input className="contactus" placeholder="Phone Number" type="type" name="Phone Number" />                          
              </div>
              <div className="col-md-12">
                <textarea className="textarea" placeholder="Message" type="type" message="Name" defaultValue={"Message"} />
              </div>
              <div className="col-md-12">
                <button className="send_btn">Send</button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <div className="map_main">
            <div className="map-responsive">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.6188558561535!2d79.84540692975568!3d6.915019946566775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25941434b3111%3A0x70cc2783a7082ac2!2sColombo%20Swimming%20Club!5e0!3m2!1sen!2slk!4v1706861966150!5m2!1sen!2slk"  width={600} height={400} frameBorder={0} style={{border: 0, width: '100%'}} allowFullScreen />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
</div>

  
<Footer></Footer>

        </>
    )
 }