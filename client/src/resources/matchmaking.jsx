import axios from 'axios'
import { useEffect, useState } from 'react'
import './matchmaking.scss'
import $ from 'jquery'
import matchsvg from '../.files/match.svg'
import { Link } from 'react-router-dom'
import $$ from 'jquery.cookie'
import Swal from 'sweetalert2'

const Match = () =>{
        const [data,setData]=useState({
        banner:'default-profile-banner.png',
        pic:'default-profile-pic.png',
    })
        const [sf,setSf]=useState({})
    const [list,setList]=useState([])
    const [sMatch,setSMatch]=useState(false)

    useEffect(()=>{
        const interval = setInterval(() => {
            if(sMatch === true){
            //obtener lista en tiempo real
            axios.post(`${process.env.REACT_APP_HOST}/api/get-list`,{
                email:data.email,
                type:data.type,
                profession:data.profession,
                sf1:sf.searchingfor1,
                sf2:sf.searchingfor2,
            sf3:sf.searchingfor3
            }).then((req)=>{
                if(req.data.list){
                    $('.pyd2').fadeOut(0)
                    $('#match-div').fadeIn()
                    setList(req.data.list)
                }else if(req.data.nolist){
                    $('.pyd2').fadeIn()
                    $('#match-div').fadeOut(0)
                    $('.pt2').text("You are in Qeue, if list does not appears that means the list is empty, if takes too long please check if your account preferences are correct!")
                }
            })

            }
        }, 1000)
  return () => clearInterval(interval)
    })
 useEffect(()=>{
     setTimeout(()=>{
         $('#posting-you-div').fadeOut(0)
         $('#match-div').fadeIn()
         setSMatch(true)
     },3200)
        axios.post(`${process.env.REACT_APP_HOST}/api/get-user-data`,
        { },{ headers: {'Authorization': `${localStorage.getItem('token')}`} })
        .then((req)=>{
            if(req.data.data){
                setData(req.data.data);
                if(req.data.data.type == 'personal'){
                    $('#posting-text').text("We're posting your account on the recruiters list, please be wait... ( remember you only will appear in the list while you're in matchmaking page, searching is in real time! ) ")
                }else if(req.data.data.type == 'business'){
                axios.post(`${process.env.REACT_APP_HOST}/api/get-preferences`,{
                    email:req.data.data.email
                }).then((rqp)=>{
                    if(rqp.data.result){
                        setSf(rqp.data.result)
                    }
                })
                    $('#posting-text').text("We're posting your business on the list, please be wait... ( remember you only will appear in the list while you're in matchmaking page, searching is in real time! ) ")
                }
                        axios.post(`${process.env.REACT_APP_HOST}/api/create-matchmaking`,{
                email:req.data.data.email,
                type:req.data.data.type,
                pic:req.data.data.pic,
                banner:req.data.data.banner,
                profession:req.data.data.profession,
                location:req.data.data.location,
                name:req.data.data.name,
                id:req.data.data.id
            })
            }
        })
    }, [])

    return(
        <div className='dashboard-body'>
           <div id='stars2'></div>
        <div id='posting-you-div' data-aos='zoom-in-right'>
        <i className="gg-loadbar" id='posting-bar'></i><br/>
         <h4 id='posting-text'>

         </h4>
        </div>
        <div id='posting-you-div' className='pyd2' data-aos='zoom-in-right'>
        <i className="gg-loadbar" id='posting-bar'></i><br/>
         <h4 id='posting-text' className='pt2'>

         </h4>
        </div>
        <div id='match-div'>
            {
                list.map((_list)=>{
                    let isPSF=''
                    let isPT=''
                    let profid;
                    let idtag;
                    let searchid='search-list-inactive'
                    let tag;
                    let profclass;
                    if(_list.type === 'personal'){
                        profid='profid'
                        profclass = 'profclass inactive'
                        isPSF = `${_list.profession}`
                        if(_list.tag1===null){
                            isPT+=``
                        }else{
                            isPT+=`#${_list.tag1}\n`
                        }
                        if(_list.tag2===null){
                            isPT+=``
                        }else{
                            isPT+=`#${_list.tag2}\n`
                        }
                        if(_list.tag3===null){
                            isPT+=``
                        }else{
                            isPT+=`#${_list.tag3}\n`
                        }
                        idtag='tag-list' 
                    }else if(_list.type === 'business'){
                        searchid='search-list'
                        profclass = 'profclass active'
                        idtag='tag-list inactive'
                        if(_list.sf1 != 'null' ){
                            isPSF+=`${_list.sf1}\n`
                        }
                        if(_list.sf2 != 'null'){
                            isPSF+=`${_list.sf2}\n`
                        }
                        if(_list.sf3 != 'null'){
                            isPSF+=`${_list.sf3}`
                        }
                    }
                    return(
                        <div id='list-body' data-aos='zoom-in-up' data-aos-offset='-1000'>
                            <img src={require(`../.files/database/${_list.banner}`)} id='banner-list' /> 
                            <img src={require(`../.files/database/${_list.pic}`)} id='pic-list'/>

                            <p id='location-list'>
                            <p id='location-t-c'>
                    <i className='bx bxs-map' id='map-location-bx'></i>{_list.location}
                         </p>
                            </p>
                            <p id='name-list'>
                        {_list.name}
                            </p><br/>
                            <p id='profession-list' className={profclass}>
                                <i className="gg-search" id={searchid}></i>{isPSF}
                            </p>

                            <button onClick={()=>{
        axios.post(`${process.env.REACT_APP_HOST}/api/request-match`,{
            hrdemail: _list.email,
            hrdtype: _list.type
        }, {headers:{'Authorization':localStorage.getItem('token')}}).then((req)=>{
            if(req.data.sendednewrequest){ 
            Swal.fire({
            icon: 'success',
            title: 'Match request has been sended',
            text: `We'll send you soon a notification if the match request is accepted or declined.`,
            confirmButtonColor:'#24252A',
                  showClass: {
    popup: 'animate__animated animate__fadeInDown'
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp'
  }
            }) 
            }
            if(req.data.alreadysendedrequest){
            Swal.fire({
            icon: 'question',
            title: 'Request match is in process!',
            text: `When account accepts or decline the request match we'll send you a notification. (if you don't send any match request you should check your notifications to see if you have the request match)`,
            confirmButtonColor:'#24252A',
                  showClass: {
    popup: 'animate__animated animate__zoomInDown'
  },
  hideClass: {
    popup: 'animate__animated animate__zoomOut'
  }
            }) 
            }
            if(req.data.none){
            Swal.fire({
            icon: 'question',
            title: 'You has been match with this account!',
            text: `Check your message list if you want to contact with this user again!`,
            confirmButtonColor:'#24252A',
                  showClass: {
    popup: 'animate__animated animate__zoomInDown'
  },
  hideClass: {
    popup: 'animate__animated animate__zoomOut'
  }
            }) 

            }
        })
                                }} id='request-match-b-list'>
                                Request Match 
                            </button>
                            <br/>
                                <p className={idtag}>
                                    {isPT}
                                </p>
                        </div>
                    )
            })
            } 
        </div>
        </div>
    )
}
export default Match;
