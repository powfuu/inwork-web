import './account.scss'
import { useEffect,useState } from 'react'
import axios from 'axios'
import $ from 'jquery'
import 'jquery.cookie'
import swal from 'sweetalert2'
const Account = () =>{
        const [data,setData]=useState({
        banner:'default-profile-banner.png',
        pic:'default-profile-pic.png',
    });
    const [desc,setDesc]=useState('')
    const [ddtype,sddtype]=useState('')
    const [ddname,sddname]=useState('')
    //crear array para contar los tags
    const [tags,setTags]=useState([])
    const [hep,setHep]=useState([])
    const [links,setLinks]=useState([])
    const [languages,setLanguages]=useState([])
    const [currentId, setCurrentId]=useState('')
    const [currentType, setCurrentType]=useState('')
    const [starState, setStarState]=useState('bxnotdefined')
    const [starVal, setStarVal]=useState(0)
    const requestMatch=()=>{
        axios.post(`${process.env.REACT_APP_HOST}/api/request-match`,{
            hrdemail: data.email,
            hrdtype: data.type
        }, {headers:{'Authorization':localStorage.getItem('token')}}).then((req)=>{
            if(req.data.sendednewrequest){ 
            swal.fire({
            icon: 'success',
            title: 'Match request has been sended',
            text: `We'll send you soon a notification if the match request is accepted or declined.`,
            confirmButtonColor:'#24252A',
                  showclassName: {
    popup: 'animate__animated animate__fadeInDown'
  },
  hideclassName: {
    popup: 'animate__animated animate__fadeOutUp'
  }
            }) 
            }
            if(req.data.alreadysendedrequest){
            swal.fire({
            icon: 'question',
            title: 'Request match is in process!',
            text: `When account accepts or decline the request match we'll send you a notification. (if you don't send any match request you should check your notifications to see if you have the request match)`,
            confirmButtonColor:'#24252A',
                  showclassName: {
    popup: 'animate__animated animate__zoomInDown'
  },
  hideclassName: {
    popup: 'animate__animated animate__zoomOut'
  }
            }) 
            }
            if(req.data.none){
            swal.fire({
            icon: 'question',
            title: 'You has been match with this account!',
            text: `Check your message list if you want to contact with this user again!`,
            confirmButtonColor:'#24252A',
                  showclassName: {
    popup: 'animate__animated animate__zoomInDown'
  },
  hideclassName: {
    popup: 'animate__animated animate__zoomOut'
  }
            }) 

            }
        })
    }
    const giveStar=()=>{
        axios.post(`${process.env.REACT_APP_HOST}/api/give-star`,
            {
                email:data.email,
                currentId:currentId,
                currentType:currentType
            },{ headers:{'authorization' : `${localStorage.getItem('token')}`}}).then((req)=>{
                if(req.data.pa_stars_updated){
                    setTimeout(()=>{
                        setStarState(req.data.pa_stars_updated)
                        setStarVal(req.data.counter)
                    },400) 
                }
            })
    }
    useEffect(()=>{ 
        let arr=$.cookie('httpurl').split('.');
        let arrt=$.cookie('httpurl').split('-');
        setCurrentId($.cookie('httpurl').split('.')[2])
        setCurrentType($.cookie('httpurl').split('-')[2])
        axios.post(`${process.env.REACT_APP_HOST}/api/get-user-data-hrd`,
            {
                id:arr[2],
                type:arrt[2]
            })
        .then((req)=>{
            if(req.data.data){
                setData({
                    pic:req.data.data.profile_pic,
                    banner:req.data.data.profile_banner,
                    stars:req.data.data.stars,
                    email:req.data.data.email,
                    profession:req.data.data.profession,
                    location:req.data.data.location
                })
            axios.post(`${process.env.REACT_APP_HOST}/api/remove-matchmaking`,{
                email:req.data.data.email,
                type:req.data.data.type
            })
                setStarVal(req.data.data.stars)
                axios.post(`${process.env.REACT_APP_HOST}/api/set-search-trend`,{
                    email:req.data.data.email,
                    type:arrt[2]
                })
                axios.post(`${process.env.REACT_APP_HOST}/api/get-star-state`,{
                    email:req.data.data.email,
                    type:arrt[2]
                }, {headers:{'Authorization':`${localStorage.getItem('token')}`}}).then((reqss)=>{
                    if(reqss.data.ss){
                        setStarState(reqss.data.ss);
                        $('#star-b').fadeIn()
                    }
                })
        if(arrt[2]==='p'){
            sddname(`${req.data.data.name} ${req.data.data.lastname}`)
        }
        if(arrt[2]==='b'){
            sddname(`${req.data.data.name}`)
        }
                setDesc(req.data.data.biography.replaceAll('<br/>','\r\n'))
                //get links
                axios.post(`${process.env.REACT_APP_HOST}/api/get-links`, {
                    email:req.data.data.email
                }).then((reqlinks)=>{
                    if(reqlinks.data.links){
                        setLinks(reqlinks.data.links)
                        $('.links-div-content').fadeIn()
                    }else if(reqlinks.data.emptylinks){
                        $('.nolinks-div').fadeIn()
                    }
                })
                //get languages
                axios.post(`${process.env.REACT_APP_HOST}/api/get-languages`,{
                    email:req.data.data.email
                }).then((reql)=>{
                    if(reql.data.languages){
                        setLanguages(reql.data.languages)
                            $('.languages-div-content').fadeIn();
                    }else if(reql.data.emptylanguages){
                            $('.nolanguages-div').fadeIn();
                    }
                })
                //get tags
          axios.post(`${process.env.REACT_APP_HOST}/api/get-tags`,{ 
              email:req.data.data.email 
            }).then((reqx)=>{
                if(arrt[2]==='p'){
                    $('.personal-skills-t').fadeIn()
                    $('#notags-t').text('This user has not defined their skills!')
                    $('.experience-text').text('ABOUT ME | EXPERIENCE')
                }else if(arrt[2]==='b'){
                    $('.experience-text').fadeIn()
                    $('.business-tags-t').fadeIn()
                    $('#notags-t').text('This business has not defined any tag!')
                    $('.experience-text').text('ABOUT US | PROJECTS')
                }
                if(reqx.data.tags){
                    setTags(reqx.data.tags);
                    $('.tags-div').fadeIn();
                }else if(reqx.data.notags){
                    $('.notags-div').fadeIn();
                }
                axios.post(`${process.env.REACT_APP_HOST}/api/get-experience`, {email:req.data.data.email}).
                then((reqy)=>{
                    if(reqy.data.noexperience){
                        $('.noexperience-div').fadeIn()
                    }else if(reqy.data.experience){
                        setHep(reqy.data.experience);
                        $('.experience-div').fadeIn()
                    }
                })
            })
        }
        })
    },[])
    return(
 <div className="account-div">
            <div id='stars2'></div>
            <div className='biography-section'>
                {/*  
                This section will contain Banner, Pic, Name, Stars, Profession, Biography.
                */}
                <img src={require(`../../../.files/database/${data.banner}`)} id='banner-img'/>
                <img src={require(`../../../.files/database/${data.pic}`)} id='pic-img'/>
                <h4 id='fullname-profile'>{ddname}</h4>
                <button id='request-match-b' onClick={requestMatch}>Request Match</button>
        <i tabIndex="0" className={`${starState}`} onClick={giveStar} id='star-b'></i>         
        <h4 id='type-profile'>{ddtype}</h4>
                <h5 id='profession-profile'>{data.profession} (<i className='bx bxs-star' id='star-small'></i><span id='stars-t'>{starVal}</span>)</h5>
                <div id='biography-profile-div'>
                 <h6 id='biography-profile'>{desc}</h6> 
                </div>
                           </div>
            <div className='skills-section'>
                <h4 id='skills-text' className='personal-skills-t'>SKILLS                   <i className="gg-menu-motion" id='menu-skilltags'></i>
                   <h4 id='menu-skilltags'>{tags.length}</h4>
</h4>
                <h4 id='skills-text' className='business-tags-t'>BUSINESS TAGS</h4>
                {/*
                    this section will contain TAGS from your profile, that tags will be
                    your SKILLS of your Profession.
                */}
                <div className='tags-div'>
<br/>
                    {tags.map((tag)=>{
                    
                        return(
                            <div id={`skilltag-c-d`}>
                                <h3 id='skilltag-tag-c'>
                                    #{tag.tag}
                                </h3>
                            </div>
                        )
                    })} 
                    </div>
                <div className='notags-div'>
                    <h3 id='notags-t'></h3>
                    <img src={require(`../../../.files/notfound.svg`).default} id='notags-svg'/>
                </div>
            </div>
            <div className='cards-section'>
                {/*
                This section will contain exclusive content from user like cards that will have
                the significate of your 'experience' for example: 
                a card that will have a logo, title and description.
                this will be something like your CV
                */}
            <h4 id='skills-text' className='experience-text'></h4>
                <div className='experience-div'><br/><br/><br/><br/><br/>
            {hep.map((hepd)=>{
                return(
<div className="container">
  <div className="card">
    <div className="imgBx">
      <img src={require(`../../../.files/database/${hepd.experience_logo}`)}/>
    </div>
      <div className="contentBx" >
      <h2>{hepd.experience_title}</h2>
          <div className="color" style={{marginTop:'1em'}} >
              <h3>{hepd.experience_description.replaceAll('<br/>','\r\n')}</h3>
      </div>
     </div>
  </div>
</div>
                )
            })}
            </div>
            <div className='noexperience-div'>
            <h3 id='notags-t' className='ex-ii'>There's nothing to show here!</h3>
            <img className='ex-ii-svg' style={{opacity:.6,marginLeft:'-.3em'}} src={require(`../../../.files/nothing-to-show.svg`).default} id='notags-svg'/>            </div>
            </div>


            <h4 id='skills-text' className='business-tags-t' style={{marginLeft:'4.5em',display:'block'}}>Languages | Location</h4><br/>
            <div className='languages-div-content'>
                {languages.map((lang)=>{
                    return(
                        <div className='lang-content'>
                            <p id='lang'>{lang.language} |</p>
                            <p id='lang_skill'>{lang.language_skill}</p>
                        </div>
                    )
                })}
                <p id='location-t-c'>
                    <i className='bx bxs-map' id='map-location-bx'></i>{data.location}
                </p>
            </div>
            <div className='nolanguages-div'>
            <h3 id='notags-t' className='ex-ii'>There's nothing to show here!</h3>
            <img className='ex-ii-svg' style={{opacity:.6,marginLeft:'-.3em'}} src={require(`../../../.files/experience.svg`).default} id='notags-svg'/>  
            </div>
            <br/><br/><br/>
            <h4 id='skills-text' style={{display:'block'}} className='business-tags-t'>URL Links</h4><br/>
                <div className='links-div-content'>
                    {links.map((link)=>{
                        return(
                            <div className='link-content'>
                                <a href={link.link} target='_blank'>
                                    {link.link}
                                </a>
                            </div>
                        )
                    })}
            </div>
            <div className='nolinks-div'>
            <h3 id='notags-t' className='ex-ii'>There's nothing to show here!</h3>
            <img className='ex-ii-svg' style={{opacity:.6,marginLeft:'-.3em'}} src={require(`../../../.files/nothing-to-show.svg`).default} id='notags-svg'/>  
            </div>
        </div>

    )
}
export default Account
