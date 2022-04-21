import "./login.scss";
import "./signup-particles.scss";
import logo from "../../.files/logo.png";
import $ from "jquery";
import AOS from "aos";
import { useEffect, useState } from "react";
import axios from 'axios'
import forgotpassword from '../../.files/forgotpassword.svg'
import secure_login from '../../.files/secure_login.svg'
import { Link } from "react-router-dom";
import "aos/dist/aos.css";

const Signin = () =>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const[verificationE,setVerificationE]=useState('')

    const [newP,setNewP]=useState('')
    const [cNewP, setCNewP]=useState('')

    const [err,setErr]=useState('')

    useEffect(()=>{
      AOS.init({ offset: "-400" });
    },[])
    const signin = () =>{
      
      $('.loader-white').addClass('anim')
      setTimeout(()=>{
        $('.loader-white').removeClass('anim')
      },2000)
      axios.post(`${process.env.REACT_APP_HOST}/api/signin`, {
        email:email,
        password:password
      }).then((req)=>{
        if(req.data.token){
          localStorage.setItem('token',req.data.token)
          window.location.pathname='/dashboard'
        }else if(req.data.failed_signin){
          $('#err-mss-signin').fadeIn()
          setErr(req.data.failed_signin)
        }
      })
    }
    const close_forgot_password_modal = () =>{
      $('.forgot-password-div').fadeOut()
      setTimeout(()=>{
        $('input').css({borderColor:'rgb(220,220,220)'}).val('')
        setVerificationE('')
        setNewP('')
        setCNewP('')
        $('.forgot-password-step1').css({display:'block'})
        $('.forgot-password-step2').css({display:'none'})
        $('.forgot-password-step3').css({display:'none'})
        $('.forgot-password-step4').css({display:'none'})
      },380)
    }
    const close_terms_conditions_modal = () =>{
      $('.terms-conditions-div').fadeOut()
    }
    if(localStorage.getItem('token')){
      window.location.pathname='/dashboard'
 }else{
  return(
    <div className="login-body">
  <div className='f-d-t3'>
    <progress className="loader-white" value={100}/>
    <div id="stars3"></div>
      <div className='f-d-t3-modal'>
      <div id='logo-signin' data-aos='zoom-in-right'>
      <img src={logo} id="logo-footer2" className='logo-f-2-2' />
          <img
            src={require(`../../.files/evercode-logo.png`).default}
            style={{ marginLeft: "-1em" }}
            id="logo-text-footer" className='logo-f-2'
          />
          </div>
          <Link to='/'><div className='button-right-signin'>
          <i className='bx bx-arrow-back' id='arrow-right-signin' data-aos='zoom-in-left'></i>
          <h4 id='text-right-signin' data-aos='zoom-in-left'>Registrate your account</h4>
          </div></Link>
          <div className='bottom-signin'>
          <h2
          id="welcome-signup-text"
          data-aos="fade-up"
          data-aos-duration="600"
          style={{margin:'0'}}
          className='w-s-t'
        >
          Sign In to <span id="i">inWork</span>
        </h2>
        <h3
        style={{margin:'0',marginTop:'.5em',marginBottom:'.35em'}}
          id="registrate-signup-text"
          data-aos="zoom-in-left"
          data-aos-delay="240"
          data-aos-duration="450"
          className='w-s-t-2'
        >
          Start working with Us
        </h3>
          </div>
          <br/><br/>
          <form autoComplete='nope' style={{textAlign:'center'}}>
          <input autoComplete='off'
                      data-aos="zoom-in-left"
                      data-aos-delay="240"
                      data-aos-duration="450"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            onMouseOver={() => {
              $(".i1-t").css({ color: "#009e89" });
            }}
            onMouseLeave={() => {
              $(".i1-t").css({ color: "rgb(100,100,100)" });
            }}
            className="email-signin"
            placeholder="Email"
            id="input-signin"
          />
            <i
                        data-aos="zoom-in-left"
                        data-aos-delay="200"
                        data-aos-duration="450"
            className="bx bxs-group" id='email-signin2'
          />
            <input autoComplete='new-password'
              data-aos="zoom-in-left"
              data-aos-delay="280"
              data-aos-duration="450"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="password-signin"
            onMouseOver={() => {
              $(".i3-t").css({ color: "#009e89" });
            }}
            onMouseLeave={() => {
              $(".i3-t").css({ color: "rgb(100,100,100)" });
            }}
            placeholder="Password"
            id="input-signin"
          />
              <i className="bx bx-key" id='password-signin2'
                data-aos="zoom-in-left"
                data-aos-delay="480"
                data-aos-duration="450"></i>
              <i className='bx bxs-lock'   data-aos="zoom-in-right"
                      data-aos-delay="540"
                      data-aos-duration="450" onClick={()=>{
                $('#lock-pw1').fadeOut(0)
                $('#lock-pw2').fadeIn().css({display:'block'})
                $('.password-signin').attr('type','text')
              }}  id='lock-pw1'></i>
              <i className='bx bxs-lock-open' onClick={()=>{
                $('#lock-pw2').fadeOut(0)
                $('#lock-pw1').fadeIn().css({display:'block'})
                $('.password-signin').attr('type','password')
              }} id='lock-pw2'></i>
                          </form>
                          <div style={{textAlign:'center'}}>
              <button onClick={signin} id='signin-but-signin' data-aos="zoom-in-left"
                      data-aos-delay="840"
                      data-aos-duration="450" >Sign In</button>
                      <h5 id='err-mss-signin'>{err}</h5>
              <div id='footer-signin'>
          <h5 id='forgot-text-signin' data-aos="zoom-in-up"
                      data-aos-delay="540"
                      data-aos-duration="450" onClick={()=>{
                        $('.forgot-password-div').fadeIn()
                      }}>Forgot Password?</h5>
          <h5 id='terms-conditions-signin' data-aos="zoom-in-up"
                      data-aos-delay="540"
                      data-aos-duration="450" onClick={()=>{
                        $('.terms-conditions-div').fadeIn()
                      }}>Terms and Conditions</h5>
          </div>
          </div>
      </div>
  </div>
  <div className='forgot-password-div'>
      <div className='forgot-password-div-content'>
      <i className='bx bx-arrow-back' id='arrow-left-modal-login' onClick={close_forgot_password_modal} data-aos='zoom-in-left'></i>
      <h4 id='forgot-password-text'>Forgot Password</h4>
      <div className="forgot-password-step1">
        {/*SEND EMAIL TO TAKE A VERIFICATION CODE*/}
        <h4 id='step1-text1'>Account Email</h4>
        <input
            type="email" onChange={(e) => {
              setVerificationE(e.target.value);
              if(e.target.value.length > 0){
                $('.i2').attr('style', 'border-color: #009e89 !important');
              }
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
            autoComplete="off"
          />
          <i
            className="bx bxl-google" 
            style={{ fontSize: "1.2em", left: "1.55em", marginTop: ".77em" }}
            id="key-forgot"
          ></i><br/>
          <img src={forgotpassword} id='step1-svg'/>
        <button id='next-step1' onClick={()=>{
          if(verificationE.length === 0){
            $('.i2').attr('style', 'border-color: red !important');
          }else{
            axios.post(`${process.env.REACT_APP_HOST}/api/send-verification-code`,{
              verificationE:verificationE
            }).then((req)=>{
              if(req.data.sended_code){
                $('.forgot-password-step1').fadeOut(0)
                $('.forgot-password-step2').fadeIn()
              }
              if(req.data.failed_sending_code){
                alert(req.data.failed_sending_code)
              }
            })
          }
        }}>Next</button>
      </div>
      <div className="forgot-password-step2">
        <h2 id='verification-code-title'>We have send you a verification code to <br/>{verificationE}</h2>
        <br/>
        <h3 id='verification-code-text'>Verification Code</h3><br/><br/><br/><br/><br/><br/>
         <input type='text' maxLength='1' autoComplete="off" className="solo-input" id='1i'/>
         <input type='text' maxLength='1' autoComplete="off" className="solo-input" id='2i'/>
         <input type='text' maxLength='1' autoComplete="off" className="solo-input" id='3i'/>
         <input type='text' maxLength='1' autoComplete="off" className="solo-input" id='4i'/>
         <input type='text' maxLength='1' autoComplete="off" className="solo-input" id='5i'/>
         <input type='text' maxLength='1' autoComplete="off" className="solo-input" id='6i'/>
         <button id='next-step1' className="next-step1-className" style={{marginTop:'10em'}} onClick={()=>{
           let verCode = $('#1i').val() + $('#2i').val() + $('#3i').val() + $('#4i').val() + $('#5i').val() + $('#6i').val();
           axios.post(`${process.env.REACT_APP_HOST}/api/check-verification-code`, {
             verCode:verCode,
             verificationE:verificationE
           }).then((req)=>{
             if(req.data.codeMatch){
               // code match
               $('.forgot-password-step2').fadeOut(0)
               $('.forgot-password-step3').fadeIn()
             }else if(req.data.codeMatchInverse){
               // code does not match
               alert(req.data.codeMatchInverse)
              }
           })
        }}>Next</button>        </div>
      <div className="forgot-password-step3">
        {/*CREATE A NEW PASSWORD TO YOUR ACCOUNT*/}
        <h3 id='step3-title'>Create new password</h3><br/><br/>
        <h4
            id="input-title"
            className="i3-t"
            data-aos="zoom-in-right"
            data-aos-duration="650"
            data-aos-delay="650"
            style={{float:'left', fontSize:'.92em'}}
          >
            New password
          </h4><br/>
          <input
          autoComplete="off"
            type="password"
            onChange={(e) => {
              setNewP(e.target.value);
            }}
            className="i3"
            onMouseOver={() => {
              $(".i3-t").css({ color: "#009e89" });
            }}
            onMouseLeave={() => {
              $(".i3-t").css({ color: "rgb(100,100,100)" });
            }}
            style={{marginTop:'.3em'}}
            placeholder="7+ characters"
            id="input-signup"
          />
          <i className="bx bx-key" style={{ fontSize: "1.2em", left: "1.55em", marginTop: ".59em" }} id="key-forgot"></i>
          <br/>
          <h4
            id="input-title"
            className="i4-t"
            data-aos="zoom-in-right"
            data-aos-duration="650"
            data-aos-delay="650"
            style={{float:'left', fontSize:'.92em'}}
          >
            Confirm new password
          </h4><br/>
          <form autoComplete="off">
          <input
          autoComplete="off"
            type="password"
            onChange={(e) => {
              setCNewP(e.target.value);
            }}
            className="i4"
            onMouseOver={() => {
              $(".i4-t").css({ color: "#009e89" });
            }}
            onMouseLeave={() => {
              $(".i4-t").css({ color: "rgb(100,100,100)" });
            }}
            style={{marginTop:'.3em'}}
            placeholder="7+ characters"
            id="input-signup"
          />
          <i className="bx bx-key" style={{ fontSize: "1.2em", left: "1.55em", marginTop: ".59em" }} id="key-forgot"></i>
          </form>
          <img src={secure_login} style={{height:'7em',float:'left'}} id='step1-svg'/>
          <button id='next-step1' style={{marginTop:'7.5em'}} onClick={()=>{
            axios.post(`${process.env.REACT_APP_HOST}/api/change-account-password`,{
              newP:newP,
              cNewP:cNewP,
              email:verificationE
            }).then((req)=>{
              if(req.data.changedPassword){
                $('.forgot-password-step3').fadeOut(0)
                $('.forgot-password-step4').fadeIn()
              }else if(req.data.changedPasswordInverse){
                $('#input-signup').css({borderColor:'red'})
              }
            })
        }}>Next</button>
      </div>
      <div className="forgot-password-step4">
      <i className='bx bxs-check-circle' id='check-changed-password'></i>
      <h3 id='changed-password-text'>Your password has been changed correctly!</h3>
      <button id='next-step1' className="last-step-button" onClick={close_forgot_password_modal} style={{marginTop:'3.3em', marginRight:'7.99em'}}>Return to Signin</button>
      </div>
      </div>
    </div>
    <div className='terms-conditions-div'>
      <div className="terms-conditions-div-content" style={{overflow:'scroll'}}>
      <i className='bx bx-arrow-back' onClick={close_terms_conditions_modal} id='arrow-left-modal-login' style={{display:'inline-block'}} data-aos='zoom-in-left'></i>
      <h4 id='forgot-password-text' style={{ display:'inline-block',marginRight:'-5em'}}>Terms & Conditions</h4>
  <div className="container-fluid">
    <div className="row terms-and-conditions-section">
      <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
        <div className="content">
          <h2 className="section-title">1. Use of inWork Platform</h2>
          <p>
            To use <span className="gradient">inWork</span>, you must (i) have a gmail Account (ii) authorize <span className="gradient">inWork</span> to access your Customer Data to provide us security, (iii) provide accurate <span className="gradient">inWork</span> account information any time, and (v) be a human over the age of 15. Uses by automated methods are not permitted. You grant <span className="gradient">inWork</span> a non-exclusive, royalty-free, and worldwide license to use, store, and copy your Customer Data in order to provide <span className="gradient">inWork</span>.
          </p>
          <p>
            You must comply with all applicable <span className="gradient">inWork</span> policies and terms of service. <span className="gradient">inWork</span> is not responsible for any acts or omissions of <span className="gradient">inWork</span> whether related to your account or otherwise.
          </p>
          <p>
          <span className="gradient">inWork</span> reserves the right to enforce quotas and usage limits (to any resources, including the API) at its sole discretion, with or without notice, which may result in <span className="gradient">inWork</span> disabling or throttling your usage of the Service for any amount of time.
          </p>
          <p>
            You are responsible for obtaining access to <span className="gradient">inWork</span> and that access may involve third party fees (such as Internet service provider or airtime charges). You are responsible for those fees. In addition, you must provide and are responsible for all equipment necessary to access the Site.
          </p>
          <p>
            You may not use <span className="gradient">inWork</span>:
          </p>
          <ul>
            <li>
              for any illegal purpose, in any manner inconsistent with applicable laws, regulations, or ordinances, or to submit, post, upload, or otherwise transmit any Customer Data or Content that is unlawful, defamatory, libelous, invasive of another's privacy, abusive, threatening, harassing, vulgar, obscene, indecent or otherwise objectionable;
            </li>
            <li>
              to submit, post, upload or otherwise transmit any Customer Data or Content that infringes or otherwise violates the rights of any third party, including without limitation privacy rights, fiduciary rights and proprietary rights;
            </li>
            <li>
              to submit, post, upload or otherwise transmit Customer Data or Content that contains viruses, corrupted files, or any other similar software or programs that may damage the operation of <span className="gradient">inWork</span> or another person's computer; or
            </li>
            <li>
              if you are a person barred from receiving <span className="gradient">inWork</span> under the laws of the United States or other countries, including the country in which you are resident or from which you use <span className="gradient">inWork</span>.
            </li>
          </ul>
          <h2 className="section-title">2. Cancellation and Termination</h2>
          <p>
            To cancel your subscription, account, and access to <span className="gradient">inWork</span>, send us an email at support.evercode@gmail.com instructing us to do so.
          </p>
          <p>
            You agree that <span className="gradient">inWork</span>, in its sole discretion and for any or no reason, may terminate or suspend your account. You agree that any termination of your access to the Service may be without prior notice, and you agree that <span className="gradient">inWork</span> will not be liable to you or any third party for such termination. 
          </p>

          <h2 className="section-title">3. Customer Data</h2>
          <p>
          <span className="gradient">inWork</span> claims no ownership or control over any Customer Data.</p>
          <p>
            You understand that projects in <span className="gradient">inWork</span> will display Customer Data to you and any collaborators that you designate for that project. You are solely responsible for any collaborators and third-parties (including third-party services) that you allow to view Customer Data and entrust them at your own risk.
          </p>
          <p>
            You are solely responsible for configuring <span className="gradient">inWork</span> to allow appropriate access to your Customer Data. <span className="gradient">inWork</span> is not responsible if you fail to configure, or misconfigure, your project and inadvertently allow unauthorized parties to view any Customer Data.
          </p>

          <h2 className="section-title">4. Ideas and Feedback</h2>
          <p>
            As part of your use of <span className="gradient">inWork</span>, you may choose, or we may invite you, to submit comments, feedback or ideas about <span className="gradient">inWork</span>, including but not limited to ideas about improving <span className="gradient">inWork</span> or our other offerings ("Ideas"). You hereby grant <span className="gradient">inWork</span> a perpetual, royalty-free, unlimited, worldwide license to use and/or incorporate such Ideas into any <span className="gradient">inWork</span> offering (including <span className="gradient">inWork</span>) at any time in <span className="gradient">inWork</span>’s sole discretion. Ideas you submit will not be afforded any confidential treatment by <span className="gradient">inWork</span>, regardless of whether you request such treatment or otherwise designate Ideas as proprietary or confidential.
          </p>

          <h2 className="section-title">5. External Sites and Content</h2>
          <p>
            The Project Hub may contain links to other websites or content (“Third Party Sites”). <span className="gradient">inWork</span> does not endorse, sanction or verify the accuracy or ownership of the information contained in/on any Third Party Site or any products or services advertised on Third Party Sites. If you decide to leave the Site and navigate to Third Party Sites, or install any software or download content from any such Third Party Sites, you do so at your own risk. Once you access a Third Party Site through a link on our Site, you may be subject to the terms and conditions of such Third Party Site. You should review the applicable policies, including privacy and data gathering practices, of any Third Party Site to which you navigate from the Site, or relating to any software you use or install from a Third Party Site, including any applicable license agreement. Concerns regarding a Third Party Site should be directed to the Third Party Site itself. <span className="gradient">inWork</span> bears no responsibility for any action associated with any Third Party Site.
          </p>

          <h2 className="section-title">6. License and Restrictions</h2>
          <p>
          </p>
          <p>
          </p>
          <p>
            You will not, nor will you attempt to (or allow anyone else to or attempt to):
          </p>
          <ul>
            <li>
              copy, modify, create a derivative work of, reverse engineer, decompile or otherwise attempt to extract the source code of <span className="gradient">inWork</span> or any part thereof;
            </li>
            <li>
              attempt to disable or circumvent any security or verification mechanism used by <span className="gradient">inWork</span>;
            </li>
            <li>
              use <span className="gradient">inWork</span> in any manner, or otherwise engage in any activity, that could damage, disable, overburden or impair our servers or networks, or interfere with or disrupt <span className="gradient">inWork</span> or any other users' use or enjoyment of <span className="gradient">inWork</span>.
            </li>
            <li>
              attempt to gain unauthorized access to any of <span className="gradient">inWork</span>, member accounts, or computer systems or networks, through hacking, password mining or any other means.
            </li>
            <li>
              remove any notices of copyright, trademark or other proprietary rights contained in/on or accessible through <span className="gradient">inWork</span> or in any content or other material obtained via <span className="gradient">inWork</span>;
            </li>
            <li>
              use any robot, spider, website search/retrieval application, or other automated device, process or means to access, retrieve or index any portion of <span className="gradient">inWork</span>;
            </li>
            <li>
              reformat or frame any portion of the web pages that are part of <span className="gradient">inWork</span>;
            </li>
            <li>
              use Project Hub for commercial purposes not permitted under these Terms;
            </li>
            <li>
              in connection with your use of <span className="gradient">inWork</span>, make unauthorized use of others’ <span className="gradient">inWork</span> accounts or Customer Data;
            </li>
            <li>
              create user accounts by automated means or under false or fraudulent pretenses;
            </li>
            <li>
              provide or use tracking or monitoring functionality in connection with <span className="gradient">inWork</span>, including, without limitation, to identify other users’ actions or activities;
            </li>
            <li>
              impersonate or attempt to impersonate any other person or entity, including without limitation <span className="gradient">inWork</span> or any employee, contractor or associate of <span className="gradient">inWork</span>; or
            </li>
            <li>
              collect or store personal data about other users in connection with the prohibited activities described in this paragraph.
            </li>
          </ul>

          <h2 className="section-title">7. Open Source Software</h2>
          <p>
            Open source software licenses for components of Project Hub released under an open source license constitute separate written agreements. To the limited extent that the open source software licenses expressly supersede these Terms, the open source licenses govern your agreement with <span className="gradient">inWork</span> only for the use of the components of <span className="gradient">inWork</span> released under an open source license.
          </p>

          <h2 className="section-title">8. Monitoring of Content</h2>
          <p>
            You understand that <span className="gradient">inWork</span> may access and disclose Customer Data or otherwise provide third parties access to it for the following reasons:
          </p>
          <ul>
            <li>
              to send an email message to you upon your request;
            </li>
            <li>
              to maintain the Site and <span className="gradient">inWork</span> and to develop new and useful features and services;
            </li>
            <li>
              to follow a court order, subpoena, complaint or a lawful request from governmental authorities;
            </li>
            <li>
              to enforce these Terms;
            </li>
            <li>
              to respond to claims that any Customer Data or Content violates third party rights;
            </li>
            <li>
              to respond to your requests for customer service; and
            </li>
            <li>
              to protect the rights, property, or personal safety of Xmartlabs, users of <span className="gradient">inWork</span> offerings, including without limitation <span className="gradient">inWork</span>, and the public.
            </li>
          </ul>

          <h2 className="section-title">9. Our Copyright Dispute Policy</h2>
          <p>
          <span className="gradient">inWork</span> respects the intellectual property of others and requires that our users do the same. If you believe that material or content residing on or accessible through <span className="gradient">inWork</span> infringes a copyright, please send a notice of copyright infringement containing the following information to the Designated Copyright Agent listed below:
          </p>
          <ul>
            <li>
              identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works are covered by a single notification, a representative list of such works;
            </li>
            <li>
              identification of the claimed infringing material and information reasonably sufficient to permit us to locate the material on <span className="gradient">inWork</span> (providing the URL(s) of the claimed infringing material satisfies this requirement);
            </li>
            <li>
              information reasonably sufficient to permit us to contact you, such as an address, telephone number, and an email address;
            </li>
            <li>
              a statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law;
            </li>
            <li>
              a statement by you, made under penalty of perjury, that the above information in your notification is accurate and that you are the copyright owner or are authorized to act on the copyright owner's behalf; and
            </li>
            <li>
              your physical or electronic signature.
            </li>
          </ul>
          <p>
            Our Designated Copyright Agent for notification of claimed infringement can be reached by email at: support.evercode@gmail.com 
          </p>
            <b>Disclaimer of Warranties:</b>
          <p>
            IF YOU ACCESS <span className="gradient">inWork</span>, YOU DO SO AT YOUR OWN RISK. WE PROVIDE <span className="gradient">inWork</span> “AS IS,” “WITH ALL FAULTS” AND “AS AVAILABLE.” WE MAKE NO EXPRESS OR IMPLIED WARRANTIES OR GUARANTEES ABOUT <span className="gradient">inWork</span>. TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE HEREBY DISCLAIM ALL SUCH WARRANTIES, INCLUDING ALL STATUTORY WARRANTIES, WITH RESPECT TO <span className="gradient">inWork</span>, INCLUDING WITHOUT LIMITATION ANY WARRANTIES THAT <span className="gradient">inWork</span> IS MERCHANTABLE, OF SATISFACTORY QUALITY, ACCURATE, FIT FOR A PARTICULAR PURPOSE OR NEED, OR NON-INFRINGING. WE DO NOT GUARANTEE THAT THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF <span className="gradient">inWork</span> WILL BE EFFECTIVE, RELIABLE OR ACCURATE OR WILL MEET YOUR REQUIREMENTS. WE DO NOT GUARANTEE THAT YOU WILL BE ABLE TO ACCESS OR USE <span className="gradient">inWork</span> (EITHER DIRECTLY OR THROUGH THIRD-PARTY NETWORKS) AT TIMES OR LOCATIONS OF YOUR CHOOSING. WE ARE NOT RESPONSIBLE FOR THE ACCURACY, RELIABILITY, TIMELINESS OR COMPLETENESS OF INFORMATION PROVIDED BY ANY OTHER USERS OF <span className="gradient">inWork</span> OR ANY OTHER DATA OR INFORMATION PROVIDED OR RECEIVED THROUGH <span className="gradient">inWork</span>. EXCEPT AS EXPRESSLY SET FORTH HEREIN, <span className="gradient">inWork</span> MAKES NO WARRANTIES ABOUT THE INFORMATION SYSTEMS, SOFTWARE AND FUNCTIONS MADE ACCESSIBLE BY OR THROUGH <span className="gradient">inWork</span> OR ANY SECURITY ASSOCIATED WITH THE TRANSMISSION OF SENSITIVE INFORMATION. <span className="gradient">inWork</span> DOES NOT WARRANT THAT <span className="gradient">inWork</span> WILL OPERATE ERROR-FREE, THAT ERRORS IN THE SERVICE WILL BE FIXED, THAT LOSS OF DATA WILL NOT OCCUR, OR THAT <span className="gradient">inWork</span> IS FREE OF COMPUTER VIRUSES, CONTAMINANTS OR OTHER HARMFUL ITEMS. UNDER NO CIRCUMSTANCES WILL <span className="gradient">inWork</span>, ANY OF OUR AFFILIATES, DISTRIBUTORS, PARTNERS, LICENSORS, AND/OR ANY OF OUR OR THEIR DIRECTORS, OFFICERS, EMPLOYEES, CONSULTANTS, AGENTS, OR OTHER REPRESENTATIVES BE LIABLE FOR ANY LOSS OR DAMAGE CAUSED BY YOUR RELIANCE ON INFORMATION OBTAINED THROUGH THE SERVICE.
          </p>

          <h2 className="section-title">10. Limitations on Liability</h2>
          <p>
            YOUR SOLE AND EXCLUSIVE REMEDY FOR ANY DISPUTE WITH US IS THE CANCELLATION OF YOUR USE OF <span className="gradient">inWork</span>. IN NO EVENT SHALL WE BE LIABLE TO YOU (OR TO ANY THIRD PARTY CLAIMING UNDER OR THROUGH YOU) FOR ANY DAMAGES WHATSOEVER, INCLUDING, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, PUNITIVE OR EXEMPLARY DAMAGES OR ANY BODILY INJURY, EMOTIONAL DISTRESS, DEATH OR ANY OTHER DAMAGES ARISING FROM YOUR USE OF OR INABILITY TO USE <span className="gradient">inWork</span>, WHETHER ON-LINE OR OFF-LINE, OR OTHERWISE IN CONNECTION WITH <span className="gradient">inWork</span>. THESE EXCLUSIONS APPLY TO ANY CLAIMS FOR LOST PROFITS, LOST DATA, LOSS OF GOODWILL OR BUSINESS REPUTATION, COST OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, WORK STOPPAGE, COMPUTER FAILURE OR MALFUNCTION, ANY OTHER COMMERCIAL DAMAGES OR LOSSES, OR ANY PERSONAL INJURY OR PROPERTY DAMAGES, EVEN IF WE KNEW OR SHOULD HAVE KNOWN OF THE POSSIBILITY OF SUCH DAMAGES. <span className="gradient">inWork</span> LIABILITY UNDER THESE TERMS SHALL BE LIMITED TO THE FEES YOU PAID <span className="gradient">inWork</span> IN THE TWELVE MONTHS PRIOR TO THE DATE THE CLAIM AROSE. BECAUSE SOME STATES OR JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR THE LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, IN SUCH STATES OR JURISDICTIONS, OUR LIABILITY SHALL BE LIMITED TO THE EXTENT PERMITTED BY LAW.
          </p>

          <h2 className="section-title">11. Indemnification</h2>
          <p>
            You agree to hold harmless and indemnify <span className="gradient">inWork</span>, and its subsidiaries, affiliates, officers, agents, employees, advertisers, licensors, suppliers or partners from and against any third party claim arising from or in any way related to (a) your breach of the Terms, (b) your use of <span className="gradient">inWork</span>, (c) your violation of applicable laws, rules or regulations in connection with <span className="gradient">inWork</span>, or (d) your Customer Data, including any liability or expense arising from all claims, losses, damages (actual and consequential), suits, judgments, litigation costs and attorneys' fees, of every kind and nature. In such a case, <span className="gradient">inWork</span> will provide you with written notice of such claim, suit or action.
          </p>

          <h2 className="section-title">12. Choice of Law and Dispute Resolution</h2>
          <p>
            These Terms will be governed by and construed in accordance with the laws of the State of California without giving effect to principles of conflict of laws, and the parties consent to the jurisdiction of the federal courts of the State of California. Each party irrevocably submits to the jurisdiction and venue of any such court in any such action or proceeding. The United Nations Convention on Contracts for the International Sale of Goods will not apply to These Terms.
          </p>

          <h2 className="section-title">13. General Legal Terms</h2>
          <p>
            These Terms constitute the whole legal agreement between you and <span className="gradient">inWork</span> and govern your use of the Service and completely replace any prior agreements between you and <span className="gradient">inWork</span>, written or oral, in relation to <span className="gradient">inWork</span>.
          </p>
          <p>
            If any part of the Terms is held invalid or unenforceable, that portion shall be construed in a manner consistent with applicable law to reflect, as nearly as possible, the original intentions of the parties, and the remaining portions shall remain in full force and effect.
          </p>
          <p>
            The failure of <span className="gradient">inWork</span> to exercise or enforce any right or provision of the Terms shall not constitute a waiver of such right or provision.
          </p>
          <p>
          <span className="gradient">inWork</span> shall not be liable for failing or delaying performance of its obligations resulting from any condition beyond its reasonable control, including but not limited to, governmental action, acts of terrorism, earthquake, fire, flood or other acts of God, labor conditions, power failures, and Internet disturbances.
          </p>
          <p>
          <span className="gradient">inWork</span> may assign this contract at any time to any parent, subsidiary, or any affiliated company, or as part of the sale to, merger with, or other transfer of our company to another entity. You may not assign these Terms.
          </p>
          <p>
            Version 3.1, June, 2022
          </p>
        </div>
<br/>          <button id='accept-terms-conditions-but' onClick={close_terms_conditions_modal}>Confirm and Return to Signin</button>
<br/>
      </div>
    </div>
  </div>
        </div>
    </div>
    </div>
  )
 }
}
export default Signin;
