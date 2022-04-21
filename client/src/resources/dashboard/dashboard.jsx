import './dashboard.scss'
import './cards.scss'
import Nav from '../navbar'
import { useEffect,useState } from 'react'
import axios from 'axios'
import $ from 'jquery'
import $$ from 'jquery.cookie'
import swal from 'sweetalert2'
const Dashboard = () =>{
    const [data,setData]=useState({
        banner:'default-profile-banner.png',
        pic:'default-profile-pic.png'
    })
    const [prefs,setPrefs]=useState([])
    const [users,setUsers]=useState([])
    const [business,setBusiness]=useState([])


    useEffect(()=>{
        //get business data
        axios.post(`${process.env.REACT_APP_HOST}/api/get-user-data`,
            {  }, { headers: {'Authorization': `${localStorage.getItem('token')}`} }).then((req)=>{
                if(req.data.data){
                    setData(req.data.data);
            axios.post(`${process.env.REACT_APP_HOST}/api/remove-matchmaking`,{
                email:req.data.data.email,
                type:req.data.data.type
            })
                    if(req.data.data.type=='personal'){
                        $('.dashboard-personal-body').fadeIn();
                        axios.post(`${process.env.REACT_APP_HOST}/api/get-business-data`,{
                            myprofession:req.data.data.profession
                        }).then((reqbd)=>{
                            if(reqbd.data.b_em){
                                setBusiness(reqbd.data.b_em)
                            }else if(reqbd.data.nob_em){
                                // no results
                      swal.fire({
            icon: 'error',
            title: `Error while searching for business!`,
            text: `Nobody is searching for ${req.data.data.profession}, check if everything is correct! (remember using completed and correct words )`,
            confirmButtonColor:'#24252A',   showclassName: {
    popup: 'animate__animated animate__zoomInDown'
  },
  hideclassName: {
    popup: 'animate__animated animate__zoomOut'
  }
            }) 
                            } 
                        })
                    }
                    if(req.data.data.type=='business'){
                        $('.dashboard-business-body').fadeIn();
    axios.post(`${process.env.REACT_APP_HOST}/api/get-preferences-dashboard`,{
                            email:req.data.data.email
                        }).then((req2)=>{
                            if(req2.data.prefs){
                                setPrefs(req2.data.prefs)
            axios.post(`${process.env.REACT_APP_HOST}/api/get-personal-users`,
                            {
                                email:req.data.data.email,
                                sf1:req2.data.prefs.searchingfor1,
                                sf2:req2.data.prefs.searchingfor2,
                                sf3:req2.data.prefs.searchingfor3
                            }).then((req_user)=>{
                                if(req_user.data.users){
                                    setUsers(req_user.data.users);
                                }else if(req_user.data.nousers){
                                    // no results
            swal.fire({
            icon: 'error',
            title: `Error while searching for personal!`,
                text: `Nobody match with your results... (remember using completed and correct words in your preferences)`,
            confirmButtonColor:'#24252A',   showclassName: {
    popup: 'animate__animated animate__zoomInDown'
  },
  hideclassName: {
    popup: 'animate__animated animate__zoomOut'
  }
        })

                                }
                            })


                            }
                        })
                    }
                }
            })
    },[])
    return(
        <div className='dashboard-body'>

            <div id='stars2'></div>
            <div className='dashboard-personal-body'>
                <div id='based-on-title-d'>
  <i className="gg-search" id='based-on-title-t'></i>
                    <h1 id='dashboard-title-business'>Business interested on:</h1> 
                    <h5 id='dashboard-title-business-searchingfor' style={{fontSize:'1em'}}>{data.profession}</h5>
                </div>
                <div className='personal-users-dashboard'>
                    {business.map((user,i)=>{
                        let cdi = 'card-dash inactive'
                        let db='default-profile-banner.png'
                        let dp='default-profile-pic.png'
                        let biog = user.biography;
                        let bio;
                        if(biog != null){
                        bio = biog.replaceAll('<br/>','\r\n');
                        } 
                        let fn=user.fname;
                        if(user.fname != undefined){
                            db=user.banner;
                            dp=user.pic;
                            cdi='card-dash'
                        }
                        if(fn.length >= 17){
                            fn=fn.slice(0,-3)+'...'
                        }

                        return(
                           <div className={`${cdi}`} onClick={()=>{
                                $.cookie('httpurl', `${Math.floor(Math.random()*994815)+994815}.${user.fname.toLowerCase().replace(/\s/g, '')}-${Math.floor(Math.random()*80)+80}.${user.id}.${Math.floor(Math.random() * 6798245) + 1167474}-b`)
                                window.location.pathname=`/${$.cookie('httpurl')}` 
                            }} onMouseOver={()=>{
                                $(`.${i}-cdi`).fadeIn(1000)
                            }}> 
                          <img src={require(`../../.files/database/${db}`)} id='imgcard'/>
                          <div className='card-content'>
                            <img src={require(`../../.files/database/${dp}`)} id='imgcard-pic'/>
                            <h3 id='card-name'>{fn}</h3>

                            <h5 id='card-profession'>{user.profession}</h5>
                              <br/><br/><br/>
                              <p id='location-t-c' style={{float:'left',marginTop:'2em',marginLeft:'1em',fontSize:'.9em',color:'rgb(120,120,120)'}}>
                                  <i className='bx bxs-map' style={{fontSize:'.95em'}} id='map-location-bx'></i>{data.location}
                </p>
                              <p id='card-desc' className={`${i}-cdi`}>{bio}</p><br/><br/>
                          </div>
                          </div>

                        )
                    })} 
        </div>  
            </div>
            <div className='dashboard-business-body'>
                <div id='based-on-title-d' className="animate__animated animate__fadeInLeft">
  <i className="gg-search" id='based-on-title-t'></i>
                <h1 id='dashboard-title-business'>Based on your Preferences</h1> 
                    <h5 id='dashboard-title-business-searchingfor'>You are searching for: <br/></h5>
 <div id='span-spanxd'> <span id='blacki'>{prefs.searchingfor1}</span><span style={{marginLeft:'2em'}} id='blacki'>{prefs.searchingfor2}</span><br/><span id='blacki'>{prefs.searchingfor3}</span></div>

 
                </div>
                <div className='personal-users-dashboard'>
                    {users.map((user,i)=>{
                        let cdi = 'card-dash inactive'
                        let db='default-profile-banner.png'
                        let dp='default-profile-pic.png'
                        let fn=user.name+' '+user.lastname
                        if(user.name != undefined){
                            db=user.profile_banner;
                            dp=user.profile_pic;
                            cdi='card-dash'
                        }                                $.cookie('httpurl', `${Math.floor(Math.random()*994815)+994815}.${user.name.toLowerCase()[0]}-${user.lastname.toLowerCase()[0]}.${user.ID}.${Math.floor(Math.random() * 6798245) + 1167474}-p`)
                        if(fn.length >= 17){
                            fn=fn.slice(0,-3)+'...'
                        }
                        return(
                            <div className={`${cdi}`} onClick={()=>{
                                $.cookie('httpurl', `${Math.floor(Math.random()*994815)+994815}.${user.name.toLowerCase()[0]}-${user.lastname.toLowerCase()[0]}.${user.ID}.${Math.floor(Math.random() * 6798245) + 1167474}-p`)
                                window.location.pathname=`/${$.cookie('httpurl')}` 
                            }} onMouseOver={()=>{
                                $(`.${i}-cdi`).fadeIn(1000)
                            }}> 
                          <img src={require(`../../.files/database/${db}`)} id='imgcard'/>
                          <div className='card-content'>
                            <img src={require(`../../.files/database/${dp}`)} id='imgcard-pic'/>
                            <h3 id='card-name'>{fn}</h3>

                            <h5 id='card-profession'>{user.profession}</h5>
                              <br/><br/><br/>
                              <p id='location-t-c' style={{float:'left',marginTop:'2em',marginLeft:'1em',fontSize:'.9em',color:'rgb(120,120,120)'}}>
                                  <i className='bx bxs-map' style={{fontSize:'.95em'}} id='map-location-bx'></i>{data.location}
                </p>
                              <p id='card-desc' className={`${i}-cdi`}>{user.biography.replaceAll("<br/>",'\n')}</p><br/><br/>
                          </div>
                          </div>
                    )
                    })}
                  </div>  
                </div>
        </div>
    )
}
export default Dashboard;
