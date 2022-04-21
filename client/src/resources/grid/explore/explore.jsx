import './explore.scss'
import '../../dashboard/dashboard.scss'
import '../../dashboard/cards.scss'
import Nav from '../../navbar'
import { useEffect,useState } from 'react'
import axios from 'axios'
import $ from 'jquery'
import $$ from 'jquery.cookie'
const Explore = () =>{
    const [data,setData]=useState({
        banner:'default-profile-banner.png',
        pic:'default-profile-pic.png'
    })
    const [trends,setTrends]=useState([])
    const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
    useEffect(()=>{
        axios.post(`${process.env.REACT_APP_HOST}/api/get-user-data`,
            {  }, { headers: {'Authorization': `${localStorage.getItem('token')}`} }).then((req)=>{
                if(req.data.data){
                    setData(req.data.data);
                                axios.post(`${process.env.REACT_APP_HOST}/api/remove-matchmaking`,{
                email:req.data.data.email,
                type:req.data.data.type
            })
                    axios.post(`${process.env.REACT_APP_HOST}/api/get-trends`,{
                        email:req.data.data.email
                    }).then((reqtrends)=>{
                        setTrends(shuffle(reqtrends.data.trends))
                    })
                }
            })
    },[])
    return(
        <div className='dashboard-body'>
            <div id='stars2'></div>  
            <div className='trends-content'>
            <div className='trends-content-search' id='trend-content'>
<div id='based-on-title-d' data-aos='fade-up-left' className='trends-title'>
<i className="gg-search" style={{transform:'scale(.9)',color:'black'}} id='based-on-title-t'></i>
<h2 id='dashboard-title-business' style={{fontWeight:'400', color:'rgb(60,60,60)',fontSize:'1.12em'}}>Explore Business & Personal Accounts in <span id='i'>inWork</span></h2> 
</div>
        <div id='trends-content-vertical' style={{paddingBottom:'3em',textAlign:'center'}}>
                        {trends.map((user,i)=>{
                        let type = user.type;
                        let cdi = 'card-dash inactive'
                        let db='default-profile-banner.png'
                        let dp='default-profile-pic.png'
                        let fn;
                           if(user.type == 'personal'){
 fn=user.name+' '+user.lastname
                        if(user.name != undefined){
                            db=user.profile_banner;
                            dp=user.profile_pic;
                            cdi='card-dash'
                        }
                        if(fn.length >= 17){
                            fn=fn.slice(0,-3)+'...'
                        }
                           }else if(user.type == 'business'){
                               fn = user.business_name;
                               if(user.business_name != undefined){
                                   db=user.business_banner;
                                   dp=user.business_pic;
                                   cdi='card-dash'
                               }
                               if(fn.length>=17){
                                   fn=fn.slice(0,-3)+'...'
                               }
                           }
                       return(
                            <div className={`${cdi}`} onClick={()=>{
                                if(user.type == 'personal'){
                                    $.cookie('httpurl', `${Math.floor(Math.random()*994815)+994815}.${user.name.toLowerCase()[0]}-${user.lastname.toLowerCase()[0]}.${user.ID}.${Math.floor(Math.random() * 6798245) + 1167474}-p`)
                                }else if(user.type == 'business'){
                         $.cookie('httpurl', `${Math.floor(Math.random()*994815)+994815}.${user.business_name.toLowerCase().replace(/\s/g, '')}-${Math.floor(Math.random()*80)+80}.${user.ID}.${Math.floor(Math.random() * 6798245) + 1167474}-b`)
                                }
                                window.location.pathname=`/${$.cookie('httpurl')}` 
                            }} onMouseOver={()=>{
                                $(`.${i}-cdi`).fadeIn(1000)
                            }}> 
                          <img src={require(`../../../.files/database/${db}`)} id='imgcard'/>
                          <div className='card-content'>
                            <img src={require(`../../../.files/database/${dp}`)} id='imgcard-pic'/>
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

        </div>        </div>
    )
}
export default Explore;
