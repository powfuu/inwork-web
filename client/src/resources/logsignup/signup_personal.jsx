import "./signup.scss";
import img1 from "../../.files/business_plan3.svg";
import "./signup-particles.scss";
import logo from "../../.files/logo.png";
import $ from "jquery";
import AOS from "aos";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import axios from "axios";
const Signup = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [changed, setchanged] = useState(false);
  const [err,setErr]=useState('')
  const mailformat =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  useEffect(() => {
    AOS.init({ offset: "-400" });
  }, []);
  useEffect(() => {
    if (window.innerWidth <= 1024) {
      if (changed == true) {
        $("#signup-left").fadeIn();
        $("#signup-right").fadeOut(0);
      }
      if (changed == false) {
        $("#signup-right").fadeIn();
        $("#signup-left").fadeOut(0);
      }
    }
  });
  const change = () => {
    if (changed == true) {
      setchanged(false);
    }
    if (changed == false) {
      setchanged(true);
    }
  };
  const signup = () => {
   if(name.length >= 2 && lastname.length >=2 && email.match(mailformat) && password.length >=7 && password == cpassword){
    $('.loader-white').addClass('anim')
    setTimeout(()=>{
      $('.loader-white').removeClass('anim')
    },2000)
    axios
    .post(`${process.env.REACT_APP_HOST}/api/signup-personal`, {
      name: name,
      lastname: lastname,
      email: email,
      password: password,
    })
    .then((req) => {
      if (req.data.success_signup) {
        window.location.pathname = req.data.success_signup;
      }
      if(req.data.failed_signup){
        $('#err-email-t').fadeIn()
      }
    });
   }else{
     let error;
    if(name.length < 2){
      error = 'Name must be bigger than 2 characters!'
      $('.i1').attr('style','border-color: red !important')
    }else{
      $('.i1').attr('style','border-color: rgb(220,220,220) !important')
    }
    if(lastname.length < 2){
      error = 'Lastname must be bigger than 2 characters!'
     $('.i0').attr('style','border-color: red !important')
    }else{
      $('.i0').attr('style','border-color: rgb(220,220,220) !important')
    }
    if(!email.match(mailformat)){
      error = 'Invalid Email!'
     $('.i2').attr('style','border-color: red !important')
    }else{
      $('.i2').attr('style','border-color: rgb(220,220,220) !important')
    }
    if(password.length < 7 ){
      error = 'Password must be bigger than 6 characters!'
      $('.i3').attr('style', 'border-color: red !important')
     }else{
       $('.i3').attr('style','border-color: rgb(220,220,220) !important')
     }
    if(password != cpassword || password.length < 7 && cpassword.length < 7){
      error = 'Passwords does not match!'
      $('.i4').attr('style','border-color: red !important')
      $('.i3').attr('style', 'border-color: red !important')
    }else{
      $('.i3').attr('style','border-color: rgb(220,220,220) !important')
      $('.i4').attr('style','border-color: rgb(220,220,220) !important')
    }
    $('#err-mss-signup').fadeIn()
    setErr(error)
   }
  };
  return (
    <div className="f-d-t2">
            <progress className="loader-white" value={100}/>
      <div id="stars3"></div>
      <div className="signup-div">
        <div id="signup-left">
          <i onClick={change} id="back-to" className="bx bx-minus-back"></i>
          <div
            id="logo-signup"
            data-aos="zoom-in-right"
            data-aos-duration="800"
            data-aos-delay="0"
          >
            <img src={logo} id="logo-footer" />
            <img
              src={require(`../../.files/evercode-logo-white.png`).default}
              style={{ marginLeft: "-1em" }}
              id="logo-text-footer"
            />
          </div>
          <div id="whatis-div">
            <div id='whatis-camo'>
            <h2
              id="what-can-you-do-title"
              data-aos="zoom-in-up"
              data-aos-duration="800"
              data-aos-delay="0"
            >
              What can you do with a Personal Account?
            </h2>
            <h5
              id="what-can-you-do-text"
              data-aos="zoom-in-left"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              With a personal account, you'll search for work to a business.
              <br />
              Your work experience will grow up and you will have better
              opportunities!
            </h5>
            </div>
          </div>
          <img
            src={img1}
            data-aos="zoom-out-down"
            data-aos-duration="800"
            data-aos-delay="400"
            id="img1-signup"
          />
        </div>
        <div id="signup-right">
          <img src={logo} id="logo-footer-right" />
          <h4
            id="text-signup-1"
            data-aos="zoom-in-right"
            data-aos-duration="750"
          >
            Already have an account?{" "}
            <Link to="/signin">
              <button id="signin-signup-b">Sign In</button>
            </Link>
          </h4>
          <br />
          <h2
            id="welcome-signup-text"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Welcome to <span id="i">inWork</span>!
          </h2>
          <h3
            id="registrate-signup-text"
            data-aos="zoom-in-left"
            data-aos-delay="200"
            data-aos-duration="450"
          >
            Registrate your Account
          </h3>
          <form id="form-signup" autoComplete='nope'>
            <h3
              data-aos="zoom-in-right"
              data-aos-duration="650"
              data-aos-delay="450"
              id="input-title"
              className="i1-t"
            >
              Name
            </h3>
            <input
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              onMouseOver={() => {
                $(".i1-t").css({ color: "#009e89" });
              }}
              onMouseLeave={() => {
                $(".i1-t").css({ color: "rgb(100,100,100)" });
              }}
              className="i1"
              placeholder="Name"
              id="input-signup"
            />
            <i
              className="bx bxs-group"
              style={{ fontSize: "1.2em", left: "22.23em", marginTop: ".77em" }}
              id="key2"
            ></i>
            <h3
              data-aos="zoom-in-right"
              data-aos-duration="650"
              data-aos-delay="450"
              id="input-title"
              className="i0-t"
            >
              Last Name
            </h3>
            <input
              type="text"
              onChange={(e) => {
                setLastname(e.target.value);
              }}
              onMouseOver={() => {
                $(".i0-t").css({ color: "#009e89" });
              }}
              onMouseLeave={() => {
                $(".i0-t").css({ color: "rgb(100,100,100)" });
              }}
              className="i0"
              placeholder="Last Name"
              id="input-signup"
            />
            <i
              className="bx bxs-group"
              style={{ fontSize: "1.2em", left: "22.23em", marginTop: ".77em" }}
              id="key2"
            ></i>
            <h3 autoComplete='off'
              id="input-title"
              data-aos="zoom-in-right"
              data-aos-duration="650"
              data-aos-delay="550"
              className="i2-t"
            >
              Email
            </h3>
            <input
              type="email" onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="i2"
              onMouseOver={() => {
                $(".i2-t").css({ color: "#009e89" });
              }}
              onMouseLeave={() => {
                $(".i2-t").css({ color: "rgb(100,100,100)" });
              }}
              placeholder="assistant.evercode@gmail.com"
              id="input-signup"
            />
            <i
              className="bx bxl-google"
              style={{ fontSize: "1.2em", left: "22.23em", marginTop: ".77em" }}
              id="key2"
            ></i>
                        <h5 id='err-email-t'>Email is already using</h5>
            <h3
              id="input-title"
              className="i3-t"
              data-aos="zoom-in-right"
              data-aos-duration="650"
              data-aos-delay="650"
            >
              Password
            </h3>
            <input autoComplete='new-password'
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="i3"
              onMouseOver={() => {
                $(".i3-t").css({ color: "#009e89" });
              }}
              onMouseLeave={() => {
                $(".i3-t").css({ color: "rgb(100,100,100)" });
              }}
              placeholder="7+ characters"
              id="input-signup"
            />
            <i className="bx bx-key" id="key"></i>
            <h3
              id="input-title"
              className="i4-t"
              data-aos="zoom-in-right"
              data-aos-duration="650"
              data-aos-delay="750"
            >
              Confirm Password
            </h3>
            <input
              type="password"
              onChange={(e) => {
                setCpassword(e.target.value);
              }}
              className="i4"
              onMouseOver={() => {
                $(".i4-t").css({ color: "#009e89" });
              }}
              onMouseLeave={() => {
                $(".i4-t").css({ color: "rgb(100,100,100)" });
              }}
              placeholder={"Confirm Password"}
              id="input-signup"
            />
            <i className="bx bx-key" id="key"></i>
          </form>
          <button
            data-aos="zoom-in-up"
            data-aos-duration="650"
            data-aos-delay="350"
            id="signup-but"
            onClick={signup}
          >
            Sign up
          </button>
          <i onClick={change} id="help-b" className="bx bxs-help-circle"></i>
          <h5 id='err-mss-signup'>{err}</h5>
        </div>
      </div>
    </div>
  );
};
export default Signup;
