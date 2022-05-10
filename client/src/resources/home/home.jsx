import './home.scss'
import{ useEffect,useState } from 'react'
import $ from 'jquery'
import missionpng from '../../.files/mission.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../../.files/logo-white.png';
import logog from "../../.files/logo.png";
import {Link} from 'react-router-dom';
const Home = () => {
  const [load,setLoaded]=useState(false)
    useEffect(()=>{
        setTimeout(() => {
          setLoaded(true)
        }, 2520);
        AOS.init();
        $('.l1').hover(
          function() {
              var $this = $(this); // caching $(this)
              $this.data('Official Website', $this.text());
              $this.text("{ Official Website }");
          },
          function() {
              var $this = $(this); // caching $(this)
              $this.text($this.data('Official Website'));
          }
      );
      $('.l2').hover(
        function() {
            var $this = $(this); // caching $(this)
            $this.data('Development Services', $this.text());
            $this.text("{ Development Services}");
        },
        function() {
            var $this = $(this); // caching $(this)
            $this.text($this.data('Development Services'));
        }
    );
    
    })

  if(load==false){return(
    <div className = "load-screen-d" >
            <div data-aos = "fade-up"
            data-aos-duration = "500" >
            <i className = "bx bx-shape-triangle" id = "logo-shape-loading" > </i> 
            <br/>
            <progress value = "1"
            max = "1"
            id = "loader-screen" />
            </div> <div id = "loading-screen-logo"
            data-aos = "zoom-in-up"
            data-aos-duration = "1000" >
            <h5 id = "loading-from" > FROM </h5> <img src = { logog }
            id = "logo-footer" />
            <img src = { require(`../../.files/evercode-logo.png`) }
            id = "logo-text-footer" />
            </div> </div>
    )}else{
  return(
        <div className='f-d-t'>

<div id='stars3'></div>
    <div className='hmed'>
 <nav className='home-nav home'>
        <i className='bx bx-shape-triangle' data-aos="zoom-in-right" id='logo-shape'></i>
            <h3 id='logo-text' data-aos="zoom-in-up">in<span id='half-blue'>Work</span></h3>
   <Link to='/signin'><button id='login-but' data-aos="zoom-in-left"><i className='bx bx-user' id='bx-user'/>Sign In</button></Link>
        </nav>
        <div className='section-1-h' onMouseOver={(e)=>{
           $('#section-1').css({'font-size':'17px','color':'black'})
           $('#section-2').css({'font-size':'9px','color':'rgb(80,80,80)'})
           $('#section-3').css({'font-size':'9px','color':'rgb(80,80,80)'})
           $('#section-4').css({'font-size':'9px','color':'rgb(80,80,80)'})
           $('#section-5').css({'font-size':'9px','color':'rgb(80,80,80)'})
        }}><br/><br/><br/><br/><br/>
            <h1 id='section-1-title' data-aos='zoom-in-up'>Become a part of our <span className='gradient'>network</span></h1>
           <img data-aos='zoom-in-up' data-aos-duration='800' data-aos-offset='-600'  src={require(`../../.files/3.svg`).default} id='become-img'/>
           <h5 id='text-home-1' data-aos='zoom-in-up' data-aos-duration='500' data-aos-offset='-600'>Power up your <span className='gradient'>Business</span></h5>
            <h3 id='section-1-subtitle' data-aos="zoom-in-up" data-aos-offset='-400'>Chose your Account</h3> 
          <Link to='/signup-business'><button data-aos-offset='-100' id='section-1-b1'  data-aos="zoom-in-right">Business Account</button></Link>
            <Link to='/signup-personal'><button data-aos-offset='-100' id='section-1-b2'  data-aos="zoom-in-left">Personal Account</button></Link><br/>
            <h6 id='section-1-b1-text' data-aos-offset='-100' data-aos="zoom-in-right">if you're searching for someone to work for you.</h6>
            <h6 id='section-1-b2-text' data-aos-offset='-100' data-aos="zoom-in-left">if you're searching to work for somenone.</h6>
        </div>
        <i className='bx bx-down-arrow-alt' data-aos='zoom-in-up' data-aos-offset='-400' id='arrow-scrollBottom'/>
        <div className='sections-d'>
            <i className='bx bxs-circle' val='false' id='section-1'/>     
            <i className='bx bxs-circle' val='false' id='section-2'/>      
            <i className='bx bxs-circle' val='false' id='section-3'/>      
            <i className='bx bxs-circle' val='false' id='section-4'/>      
            <i className='bx bxs-circle' val='false' id='section-5'/>       
          </div>
          <div className='over-world-d'  onMouseOver={(e)=>{
           $('#section-2').css({'font-size':'17px','color':'black'})
           $('#section-1').css({'font-size':'9px','color':'rgb(80,80,80)'})
           $('#section-3').css({'font-size':'9px','color':'rgb(80,80,80)'})
           $('#section-4').css({'font-size':'9px','color':'rgb(80,80,80)'})
           $('#section-5').css({'font-size':'9px','color':'rgb(80,80,80)'})        }}>
          <h1 data-aos='zoom-in-up' id='overtst'>Over <span className='gradient'>1,000.000 Projects</span> in the world are using <span className='gradient'>inWork</span></h1>
          <br/><div data-aos='zoom-in' className='conjunt-projects-d'>
          <div className='conjunt-d' data-aos='zoom-in-left'>
              <i className='bx bxl-amazon' id='conjunt-item' ></i>
            </div>
              <div className='conjunt-d' data-aos='zoom-in-left'>
              <i className='bx bxl-spotify' id='conjunt-item'></i>
              </div>
              <div className='conjunt-d'data-aos='zoom-in-left'>
              <i className='bx bxl-youtube' id='conjunt-item'></i>
            </div>
            <div className='conjunt-d'data-aos='zoom-in-left'>
              <i className='bx bxl-android' id='conjunt-item'></i>
            </div>
            <div className='conjunt-d'data-aos='zoom-in-left'>
              <i className='bx bxl-html5' id='conjunt-item'></i>
            </div><br/>
            <div className='conjunt-d'data-aos='zoom-in-left'>
              <i className='bx bxl-microsoft' id='conjunt-item'></i>
            </div>
            <div className='conjunt-d'data-aos='zoom-in-left'>
              <i className='bx bxl-javascript' id='conjunt-item'></i>
            </div>
            <div className='conjunt-d'data-aos='zoom-in-left'>
              <i className='bx bxl-react' id='conjunt-item'></i>
            </div>
            <div className='conjunt-d'data-aos='zoom-in-left'>
              <i className='bx bxl-wordpress' id='conjunt-item'></i>
            </div>
            <div className='conjunt-d'data-aos='zoom-in-left'>
              <i className='bx bxl-deviantart' id='conjunt-item'></i>
            </div><br/>
            <div className='conjunt-d'data-aos='zoom-in-left'>
              <i className='bx bxl-invision' id='conjunt-item'></i>
            </div>
            <div className='conjunt-d' data-aos='zoom-in-left'>
              <i className='bx bxl-apple' id='conjunt-item'></i>
            </div>
            <div className='conjunt-d' data-aos='zoom-in-left'>
              <i className='bx bxl-instagram-alt' id='conjunt-item'></i>
            </div>
            <div className='conjunt-d' data-aos='zoom-in-left'>
              <i className='bx bxl-unity' id='conjunt-item'></i>
            </div>
            <div className='conjunt-d' data-aos='zoom-in-left'>
              <i className='bx bxl-digitalocean' id='conjunt-item'></i>
            </div>
          </div>
          </div>
          <div className='three-steps-d' data-aos="fade-up"
     data-aos-duration="1500" onMouseOver={(e)=>{
                       $('#section-3').css({'font-size':'17px','color':'black'})
                       $('#section-2').css({'font-size':'9px','color':'rgb(80,80,80)'})
                       $('#section-1').css({'font-size':'9px','color':'rgb(80,80,80)'})
                       $('#section-4').css({'font-size':'9px','color':'rgb(80,80,80)'})
                       $('#section-5').css({'font-size':'9px','color':'rgb(80,80,80)'})
        }}>
              <h1 id='tst'><span className='gradient'>THREE STEPS</span> TECHNIQUE</h1>
              <i className='bx bx-shape-triangle' id='logo-shape-steps'></i>
              <br/><br/>
              <div  className='circle-d'><br/>
              <i className='bx bxs-circle' data-aos="zoom-in-up" data-aos-duration='800' id='circle'/> <h5 id='step-t'>Search for Recruiters</h5>  
              <div className='box-presentation' data-aos="zoom-in-right">
                  <h4 id='searching-text'>Searching for recruiters...</h4>
                  <progress value="1" max="1" id='loader-presentation'/>
              </div>
                <br/><br/>
              <i className='bx bxs-circle' data-aos="zoom-in-up" data-aos-duration='800' id='circle'/>  <h5 id='step-t'>Know the recruiter and the pending project</h5>
  <br/>
  <div className="chat-bubble" data-aos="zoom-in-right">
<div className="typing">
  <div className="dot"></div>
  <div className="dot"></div>
  <div className="dot"></div>
</div>
              </div>
          <br/>  
        <br/><br/>
              <i className='bx bxs-circle' data-aos="zoom-in-up" data-aos-duration='800' id='circle'/>   <h5 id='step-t'>Work on the project</h5>
              <i className='bx bxs-check-circle' id='check-green' data-aos="zoom-in-right"></i>
              </div>  
          </div><br/><br/><br/><br/>
          <div className='mission-d'  onMouseOver={(e)=>{
                     $('#section-4').css({'font-size':'17px','color':'black'})
                     $('#section-2').css({'font-size':'9px','color':'rgb(80,80,80)'})
                     $('#section-3').css({'font-size':'9px','color':'rgb(80,80,80)'})
                     $('#section-1').css({'font-size':'9px','color':'rgb(80,80,80)'})
                     $('#section-5').css({'font-size':'9px','color':'rgb(80,80,80)'})
        }}>
              <h1 data-aos="zoom-in-left">Our Platform <span className='gradient'>Mission</span></h1>
              <h4 id='mission-text' data-aos="zoom-in-up" data-aos-duration='1000'><span className='gradient'>inWork</span> Mission is give opportunities to every person with enough skills to work into a business project.<br/>This platform it's oriented to online services (Developers, Translators, musicians, and every "remote" job). <br/> In our platform you'll get opportunities to talk with recruiters. or any person interested on give you a "job" or a freelance project.<br/>Our <span className='gradient'>Mission</span> it's create opportunities to our users.</h4>
            <img src={missionpng} data-aos="zoom-in-up" data-aos-duration='500' id='mission-png'/>
          </div>
          <div className='footer-d' onMouseOver={(e)=>{
                      $('#section-5').css({'font-size':'17px','color':'white'})
                      $('#section-2').css({'font-size':'9px','color':'rgb(80,80,80)'})
                      $('#section-3').css({'font-size':'9px','color':'rgb(80,80,80)'})
                      $('#section-4').css({'font-size':'9px','color':'rgb(80,80,80)'})
                      $('#section-1').css({'font-size':'9px','color':'rgb(80,80,80)'})
        }}>
          <div data-aos="zoom-in-right">
          <div id='logo-div'>
             <img src={logo} id='logo-footer'/>
             <img src={require(`../../.files/evercode-logo-white.png`).default} id='logo-text-footer'/>
             </div>
             <div>
             <div id='off-web-div'>
               <h4 id='bold-text-footer'>About</h4>
               <h5 id='link-footer' className='l1'>Official Website</h5>
               <h5 id='link-footer' className='l2'>Development Services</h5>
             </div>
             <i className='bx bxl-linkedin' id='linkedin-ico'></i>
             <i className='bx bxl-youtube' id='linkedin-ico'></i>
             <div id='inwork-cr-div4'>
             <i className='bx bx-shape-triangle' id='logo-shape2'></i>
            <h3 id='logo-text2'>in<span id='half-blue'>Work</span></h3>
             </div>
             </div>
             </div>
          </div>
     
    </div>
         
        </div>
    )

  }}

export default Home;
