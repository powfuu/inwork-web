import { useState,useEffect,useRef } from "react";
import 'jquery.cookie'
import $ from 'jquery'
import './chat.scss'
import Swal from 'sweetalert2'
import axios from 'axios'
import imgnts from '../.files/notfound.svg'
import chatsvg from '../.files/chat.svg'
import AOS from 'aos'
const Chat = ()=>{
    const [chatB,setChatB]=useState(false)
    const [matches, setMatches]=useState([])
    const [data,setData]=useState({
        banner:'default-profile-banner.png',
        pic:'default-profile-pic.png',
    })
    const [chat,setChat]=useState({
        fname:null,
        pic:'default-profile-pic.png',
        profession:null,
        type:null,
        id:null,
        idgroup:null,
        receiver:null,
        usrseen:null,
        myusrseen:null
    })
  const [msg, setMsg]=useState('')
  const [mss,setMss]=useState([])
  const [dotStatus,setDotStatus]=useState(false)
  const [chatStatus,setChatStatus]=useState(false)
  const [searchFilter,setSearchFilter]=useState('')

  useEffect(()=>{
        const interval = setInterval(() => { 
    axios.post(`${process.env.REACT_APP_HOST}/api/get-matches`,{},{headers:{'authorization':localStorage.getItem('token')}}).then((req)=>{
      if(req.data.matches){
        setMatches(req.data.matches);
        $('.chat-contacts').fadeIn(0)
       $('.empty-contacts').fadeOut(0)
      }else if(req.data.emptymatches){
        $('.empty-contacts').fadeIn(0)
        $('.chat-contacts').fadeOut(0)
      }
    })

  }, 1000)
  return () => clearInterval(interval)
  },[])
  useEffect(()=>{
    const interval = setInterval(()=>{
            axios.post(`${process.env.REACT_APP_HOST}/api/get-mss`,{
              idgroup:chat.idgroup
            }).then((req)=>{
                if(req.data.mss){
                  setMss(req.data.mss)
                  $('#mss-content').fadeIn()
                  $('#empty-mss-content').fadeOut(0)    
                }
              if(req.data.emptymss){
               $('#mss-content').fadeOut(0)
                $('#empty-mss-content').fadeIn()
              }
            })
      axios.post(`${process.env.REACT_APP_HOST}/api/get-notf-chat`,{
        
      },{
        headers:{'Authorization':`${localStorage.getItem('token')}`}
      }).then((req)=>{
        if(req.data.notifications){
          $('#notification-chat-closed').fadeIn()
        }else if(req.data.nonotifications){
          $('#notification-chat-closed').fadeOut()
        }
      })
    },1000)
    return () => clearInterval(interval)
  },[chat.idgroup])
  useEffect(()=>{
    AOS.init()
        axios.post(`${process.env.REACT_APP_HOST}/api/get-user-data`,
        { },{ headers: {'Authorization': `${localStorage.getItem('token')}`} })
        .then((req2)=>{
            if(req2.data.data){
                setData(req2.data.data);
            }})
    axios.post(`${process.env.REACT_APP_HOST}/api/get-matches`,{},{headers:{'authorization':localStorage.getItem('token')}}).then((req)=>{
      if(req.data.matches){
        setMatches(req.data.matches);
        $('.chat-contacts').fadeIn()
      }else if(req.data.emptymatches){
        $('.empty-contacts').fadeIn()
      }
    })
    },[])
        
  const sendMss = () =>{
    axios.post(`${process.env.REACT_APP_HOST}/api/send-mss`, {
      idgroup:chat.idgroup,
      sender:data.email,
      mss:msg,
      receiver:chat.receiver,
      usrseen:chat.usrseen
    }).then((req)=>{
      if(req.data.sended){
        $('#input-mss').val('');
        setMsg('')
        setTimeout(()=>{
    $('#mss-content').animate({ scrollTop: $('#mss-content')[0].scrollHeight }, 'slow');
        },1000)
      }else if(req.data.notsended){
 Swal.fire({
  title: `Failed to send your message`,
  text: "you cannot send an empty message!",
  icon: 'warning',
  iconColor:'#666',
padding:'60px',
   confirmButtonColor:"#24252A",
  confirmButtonText: 'Ok'
 })
      }
    })
   }

  return(
        <div className={chatB ? "chat-body active" : "chat-body inactive"}>
      <div id='closed-chat' onMouseOver={()=>{
        $('#path1svg').css({'fill':'white'})
        $('#path2svg').css({'fill':'white'})
      }}  onMouseLeave={()=>{
        $('#path1svg').css({'fill':'currentColor'})
        $('#path2svg').css({'fill':'currentColor'})
      }} onClick={()=>{
          localStorage.setItem('fds',false)
           setChatB(!chatB);
          chatB ?
          $('#gg-hello-css').css({'transform':'rotateY(190deg)'})
          :
          $('#gg-hello-css').css({'transform':'rotateY(0deg)'})

               }}> 
        <svg id='gg-hello-css'
      style={{transform:'rotateY(190deg)'}}
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M17.5 12C17.5 13.576 16.8371 14.9972 15.7749 16C14.7899 16.9299 13.4615 17.5 12 17.5C10.5385 17.5 9.21007 16.9299 8.22506 16C7.16289 14.9972 6.5 13.576 6.5 12H17.5Z"
        fill="#24252A"
      id='path1svg'
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1 7C1 3.68629 3.68629 1 7 1H17C20.3137 1 23 3.68629 23 7V17C23 20.3137 20.3137 23 17 23H1V7ZM3.75 12C3.75 7.44365 7.44365 3.75 12 3.75C16.5563 3.75 20.25 7.44365 20.25 12C20.25 16.5563 16.5563 20.25 12 20.25C7.44365 20.25 3.75 16.5563 3.75 12Z"
    fill="currentColor"
      id='path2svg'
  />
</svg>
    <div id='notification-chat-closed'/>
        </div>
        <div id='opened-chat'>

    <i className='bx bx-chevron-left' id='chevron-chat' onClick={()=>{
        localStorage.setItem('fds',false)
           setChatB(!chatB);
      if(chatB === true){
        $('#gg-hello-css').css({'transform':'rotateY(190deg)'});
        $('#closed-chat').css({'background':'white'})
      }else if(chatB === false){
          $('#gg-hello-css').css({'transform':'rotateY(0deg)'})
        $('#closed-chat').css({'background':'transparent'})
      }

    }}></i>
<i className='bx bx-search' id='search-chat'></i>
<input className='chat-header' onChange={(e)=>{
  setSearchFilter(e.target.value)
}} placeholder='Search for matches.'/>
        <div className='chat-contacts'>
        
          {matches.filter(val=>{
            let profession,fname,type;
            if(val.usr1===data.email){
              profession = val.usr2profession;
              fname = val.usr2fname;
              type = val.usr2type;
            }else if(val.usr2===data.email){
              profession = val.usr1profession;
              fname = val.usr1fname;
              type = val.usr1type;
            }
            if(profession.toLowerCase().includes(searchFilter.toLowerCase()) || fname.toLowerCase().includes(searchFilter.toLowerCase()) || type.toLowerCase().includes(searchFilter.toLowerCase())){
                return val
            }else{
                return undefined
            }
        }).map((contact)=>{
           let usr,pic,fname,profession,type,id,idgroup,receiver,usrseen,myusrseen,notfc;
          if(contact.usr1seen == false && data.email == contact.usr1){
            notfc = 'nonhidden'
          }else if(contact.usr1seen == true && data.email == contact.usr1){
            notfc = 'hidden'
          } 
          if(contact.usr2seen == false && data.email == contact.usr2){
            notfc = 'nonhidden'
          }else if(contact.usr2seen == true && data.email == contact.usr2){
            notfc = 'hidden'
          } 
          if(data.email === contact.usr2){
              usrseen = 'usr1seen'
              usr = contact.usr1;
              myusrseen = 'usr2seen'
              receiver = contact.usr1;
              pic = contact.usr1pic;
              fname = contact.usr1fname;
              profession = contact.usr1profession;
              type = contact.usr1type[0].toUpperCase()+contact.usr1type.slice(1);
              id = contact.usr1id;
              idgroup = contact.idgroup;
            }else if(data.email === contact.usr1){
              if(contact.usr1seen === true){
                notfc = 'hidden'
              }else if(contact.usr1seen === false){
                notfc = 'nonhidden'
              }
              usr = contact.usr2;
              usrseen = 'usr2seen'
              myusrseen='usr1seen'
              receiver = contact.usr2;
              pic = contact.usr2pic;
              fname = contact.usr2fname;
              profession = contact.usr2profession;
              type = contact.usr2type[0].toUpperCase()+contact.usr2type.slice(1);
              id = contact.usr2id;
              idgroup = contact.idgroup;
            }
            return(
              <div id='chat-contacts-content' onClick={()=>{
                setChat({
                  fname:fname.slice(0,10)+'...',
                  pic:pic,
                  type:type,
                  profession:profession,
                  id:id,
                  idgroup:idgroup,
                  receiver:receiver,
                  usrseen:usrseen,
                  myusrseen:myusrseen
                })
                setChatStatus(!chatStatus)
                  axios.post(`${process.env.REACT_APP_HOST}/api/set-seen-true`,{
          myusrseen:myusrseen,
          sender:data.email,
          idgroup:idgroup
                  })
                axios.post(`${process.env.REACT_APP_HOST}/api/get-mss`,{
              idgroup:contact.idgroup
            }).then((req)=>{
                if(req.data.mss){
                  setMss(req.data.mss)
                  $('#mss-content').fadeIn()
                  $('#empty-mss-content').fadeOut(0)
                   $('#mss-content').animate({ scrollTop: $('#mss-content')[0].scrollHeight }, 'slow');
                }
              if(req.data.emptymss){
               $('#mss-content').fadeOut(0)
                $('#empty-mss-content').fadeIn()
              }
            })
                }}>
                <img src={require(`../.files/database/${pic}`)} id='pic-chat'/> 
                <p id='fname-chat'>
                  {fname} 
                </p>
                <p id='profession-chat'>
                  {profession} 
                </p>
                <p id='type-chat'>
                  {type} 
                </p>
              <div id='notification-chat-opened' className={notfc}/>
              </div>
            )
          })}
        </div>
          <div className={chatStatus ? 'in-chat-content active' : 'in-chat-content inactive'}>
            <div className='in-chat-content header'>
              <i className='bx bx-chevron-left' id='exit-chat-b-c' onClick={()=>{
              setChatStatus(!chatStatus)
              }}></i>
               <p id='fname-chat-c'>
  {chat.fname} 
              </p>
              <i className='bx bx-dots-vertical-rounded' id={ dotStatus ? 'chat-dots' : 'chat-dots-changed' } onClick={()=>{
              setDotStatus(!dotStatus)
                dotStatus ? $('#chat-dots-menu').fadeOut() : $('#chat-dots-menu').fadeIn()
                }
              }></i>
              <div id='chat-dots-menu' onClick={()=>{
 Swal.fire({
  title: `You want to remove ${chat.fname} match?`,
  text: "if you remove the match, the chat and all messages will be removed",
  icon: 'warning',
  iconColor:'#666',
padding:'60px',
  showCancelButton: true,
  confirmButtonColor: '#24252A',
  cancelButtonColor: 'rgb(235,235,235)',
  cancelButtonText: '<p>Cancel</p>',
  confirmButtonText: 'Remove Match'
 }).then((req)=>{
   if(req.isConfirmed){
     axios.post(`${process.env.REACT_APP_HOST}/api/remove-match`,{
       idgroup:chat.idgroup
     }).then((req)=>{
       if(req.data.rmvd){
       setChatStatus(false)
       }
     })
   }
 })
                }}>
                <p id='chat-dots-menu-text'>
                  Remove Match 
                </p>
              </div>
              <img src={require(`../.files/database/${chat.pic}`)} id='chat-pic-c' onClick={()=>{
                  if(chat.type == 'personal'){
                                                $.cookie('httpurl', `${Math.floor(Math.random()*994815)+994815}.${user.name.toLowerCase()[0]}-${user.lastname.toLowerCase()[0]}.${user.ID}.${Math.floor(Math.random() * 6798245) + 1167474}-p`)
                  }
                if(chat.type == 'business'){

                                $.cookie('httpurl', `${Math.floor(Math.random()*994815)+994815}.${user.fname.toLowerCase().replace(/\s/g, '')}-${Math.floor(Math.random()*80)+80}.${user.id}.${Math.floor(Math.random() * 6798245) + 1167474}-b`)
                }
                 window.location.pathname=`/${$.cookie('httpurl')}` 
              }}/>
            </div>
            <div className='in-chat-content body'>
              <div className='mss-div-content'>
  <div id='mss-content' onScroll={()=>{
    if($("#mss-content").scrollTop() +400 >= $("#mss-content").height()) {
      axios.post(`${process.env.REACT_APP_HOST}/api/set-seen-true`,{
          myusrseen:chat.myusrseen,
          sender:data.email,
          idgroup:chat.idgroup
      })
   }
  }}> 
            {mss.map((ms)=>{
              let pMss,ptMss,dateid;
              if(ms.sender === data.email){
                pMss = 'mss-c sender'
                ptMss = 'mss-t sender'
                dateid = 'date-sender'
              }else if(ms.sender != data.email){
                pMss = 'mss-c receiver'
                ptMss = 'mss-t receiver'
                dateid = 'date-receiver'
              }
              return(
                <div className={pMss} data-aos='zoom-in-up' data-aos-offset='-9999999999'>
                <p className={ptMss}>
                {ms.mss.replaceAll('<br/>','\r\n')} 
                </p>
                <p id={dateid}>
                {ms.date}
                </p>
                </div>
              )
             })}
              </div>
              <div id='empty-mss-content'>
              <img src={chatsvg} id='empty-mss-svg'/>
              <p id='empty-mss-text'>
              This conversation does not have any message, start talking with {chat.fname} right now!
              </p>
              </div>
              </div>
              <div className='footer-chat'>
                <textarea onChange={(e)=>{
                  setMsg(e.target.value.replace(/(\r\n|\n|\r)/gm, "<br/>"));
                }} id='input-mss' placeholder={`Write a message to ${chat.fname}!`}/>
                <i className='bx bxs-send' id='send-mss-b' onClick={sendMss}></i>
              </div>
            </div>
          </div>
        <div className='empty-contacts'>
          <img src={imgnts} id='empty-contacts-img'/>
          <p id='empty-text-contacts'> 
            You do not have any match! 
          </p>
        </div>
        </div>
        </div>
    )
}
export default Chat;
