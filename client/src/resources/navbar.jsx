import axios from 'axios'
import Chatf from './chat.jsx'
import { useEffect, useState } from 'react'
import './navbar.scss'
import $ from 'jquery'
import matchsvg from '../.files/match.svg'
import { Link, useHistory } from 'react-router-dom'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import $$ from 'jquery.cookie'
import Swal from 'sweetalert2'
const Nav = () =>{
    const [data,setData]=useState({
        banner:'default-profile-banner.png',
        pic:'default-profile-pic.png',
    })
    let history = useHistory();
    const [matchtitle, setMatchtitle]=useState('')
    const [matchsubtitle, setMatchsubtitle]=useState('')
	const [pic,setPic]=useState('default-profile-pic.png')
	const [banner,setBanner]=useState('default-profile-banner.png')
	const [name,setName]=useState('');
	const [datatype,setDataType]=useState('')
    const [searchResults,setSearchResults]=useState([])
    const [searchFilter,setSearchFilter]=useState('')
    const [sr,setSr]=useState([])
    const [notf,setNotf]=useState([])
    const [starsupd,setstarupd]=useState(0)

     useEffect(()=>{
        const interval = setInterval(() => {
            axios.post(`${process.env.REACT_APP_HOST}/api/checknotf`,{
                email:data.email
            }).then((reqnotf)=>{
                if(reqnotf.data.has){
                    $('#circle-notification-bell').fadeIn();
                }
            }) 
  }, 2000)
  return () => clearInterval(interval)
    })
   useEffect(()=>{
        axios.post(`${process.env.REACT_APP_HOST}/api/get-user-data`,
        { },{ headers: {'Authorization': `${localStorage.getItem('token')}`} })
        .then((req)=>{
            if(req.data.data){
                setData(req.data.data);





                axios.post(`${process.env.REACT_APP_HOST}/api/checknotf`, {
                    email:req.data.data.email
                }).then((reqcn)=>{
                    if(reqcn.data.has){
                        $('#circle-notification-bell').fadeIn()
                    }
                })


                axios.post(`${process.env.REACT_APP_HOST}/api/get-notf`,{
                    email:req.data.data.email
                }).then((reqnotf)=>{
                    if(reqnotf.data.notf){
                        setNotf(reqnotf.data.notf)
                        $('.notf-content').fadeIn()
                    }else if(reqnotf.data.undefinednotf){
                    }
                })
                axios.post(`${process.env.REACT_APP_HOST}/api/search-results`,{
                    email:req.data.data.email
                }).then((reqsr)=>{
                    if(reqsr.data.sr){
                        setSearchResults(reqsr.data.sr)
                    }
                })
				if(req.data.data.type === 'personal'){
					setDataType('Personal')
                   				}else{
					setDataType('Business')
                   				}
				setName(req.data.data.name)
				setPic(req.data.data.pic)
				setBanner(req.data.data.banner)
            }
        })
    }, [])
	useScrollPosition(({ prevPos, currPos }) => {
		if(currPos.y <= -1){
			$('.home-nav').css({boxShadow:'1px 1px 2px .5px rgba(0,0,0,0.15)',
								background:'rgba(255,255,255,.75)'})
		}else{
			$('.home-nav').css({boxShadow:'1px 1px 2px .5px rgba(0,0,0,0)',
								background:'transparent'})
		}
	   })
    return(
<nav className='home-nav' id='nav-nav'>
    <div id='left-nav-side'>
		<Link to='/dashboard'><span id='span-logo1' style={{cursor:'pointer'}}>
        <i className='bx bx-shape-triangle'  style={{float:'none', marginLeft:'4em'}} data-aos="zoom-in-right" id='logo-shape'></i>
		</span> 
			<h3 id='logo-text'  className='nav-logo-text' style={{float:'none',cursor:'pointer'}} data-aos="zoom-in-up">in<span id='half-blue'>Work</span></h3></Link>
            <div className="searchbox">
		<button className="btn-menu">
            <i className='bx bx-shape-triangle' onClick={()=>{
                history.push('/dashboard')
            }} style={{float:'none'}} data-aos="zoom-in-right" id='logo-shape'></i>

		</button>
        <form id='form-nav'>
            <input id="search"  autoComplete='off' onChange={(e)=>{
                setSearchFilter(e.target.value)		
                if(e.target.value.length === 1 || e.target.value.length === 0){
							$("#Modal").fadeOut();
						}else{
							$("#Modal").fadeIn();
							$('#notification-modal').fadeOut(0);
							$('#settings-modal').fadeOut(0)
						}
                }} type="text" placeholder="Search..." name="search"
            className="search"/> </form>
            <button  className="btn-search">
                <i className="gg-search" style={{cursor:'default',transform:'scale(.85)',marginRight:'.15em'}}></i>
			</button>
</div>


<div id='notification-modal' className="search-modal">
		<div className="search-modal-header">
				<h3 style={{fontSize:'.95em',padding:'.25em'}}>
				<i className="gg-loadbar-doc" id='grid' style={{display:'inline-block',marginRight:'.5em',marginTop:'.08em',transform:'scale(1.01)'}}></i>
				Notifications</h3>
				<span id="close" onClick={()=>{
                    $("#notification-modal").fadeOut();
            }}><i className='close-m'></i></span>
		</div>
    <div className='undefinednotf-content'>
        Undefined 
    </div>
            <div className='notf-content'>
    {notf.map((nf)=>{
        let nftitleb='nftitleb';
        return(
            <div className="search-modal-body" onClick={()=>{
                if(nf.notftitle == `${nf.fname} has modify your stars.`){
                    history.push('/account')
                }else if(nf.notftitle == `${nf.fname} has requested you to match!`){
                    Swal.fire({
  title: `You want to accept the request match from ${nf.fname}?`,
  text: "if you decline the request, you can accept it later!",
  icon: 'warning',
  iconColor:'#666',
padding:'60px',
  showCancelButton: true,
  confirmButtonColor: '#24252A',
  cancelButtonColor: 'rgb(235,235,235)',
  cancelButtonText: '<p>Decline Request</p>',
  confirmButtonText: 'Accept Request'
}).then((resultq) => {
    if (resultq.isConfirmed) {
        setNotf([])
        $('#notification-modal').fadeOut()
        axios.post(`${process.env.REACT_APP_HOST}/api/match`,{
            from:nf.fr0m,
            to:nf.t0
        },{headers:{'authorization':`${localStorage.getItem('token')}`}}).then((reqxx)=>{
        });

      Swal.fire({
          title:`Accepted Request!`,
          icon:'success',
          text:`You has matched with ${nf.fname}, if chat does not created restart the page! (We are solving this issue)`,
          confirmButtonColor:'#24252A'
      })
  }
})
                }
                }}>
			<div className="message">
					<div className="message-avatar">
							<img src={require(`../.files/database/${nf.pic}`)} alt=""/>
					</div>
				<div className="message-body">
						<p className={nftitleb}>{nf.notftitle}</p>
					<small>{nf.date}</small>
				</div>
                 
			</div>
                <span id='i' className='type-notf' style={{marginTop:'-2.35em'}}>
                        {nf.type.toUpperCase()[0]}{nf.type.slice(1)} 
                    </span>
		</div>
        )
    })}
    </div>
</div>
<div id='settings-modal' className="search-modal">
		<div className="search-modal-header">
				<h3 style={{fontSize:'.95em',padding:'.25em'}}>
				<i className='bx bxs-grid' id='grid'></i>Grid</h3>

				<span id="close" onClick={()=>{
												$("#settings-modal").fadeOut();
				}}><i className='close-m'></i></span>
		</div>
		<div className="search-modal-body">
		<img src={ require(`../.files/database/${banner}`)} id='nav-user-banner-modal'/>
		<img src={ require(`../.files/database/${pic}`) } className='profile-pic' id='nav-user-pic-modal'/>
		<h3 id='am-fullname'>{name}</h3>
		<h3 id='am-profession'>{data.profession} (<i className='bx bxs-star' id='star-small'></i><span id='stars-t'>{starsupd}</span>)</h3>
		<br/>
		<div className='administrate-account-cards'>
			<Link to='/account'><div className='card' onClick={()=>{
				$('.search-modal').fadeOut()
			}} onMouseOver={()=>{
				$('#ct1').css({color:'rgb(125,125,125)'})
			}} onMouseOut={()=>{
				$('#ct1').css({color:'white'})
			}}>
			<img src={require(`../.files/database/${pic}`)} id='nav-user-pic' style={{margin:0}} className='card-svg'/>
	<br/>		<h5 className='card-text' id='ct1'>Account</h5>
			</div></Link>
			<Link to='/explore'>
			<div className='card' onClick={()=>{
				$('.search-modal').fadeOut()
			}} onMouseOver={()=>{
				$('#ct2').css({color:'rgb(125,125,125)'})
			}} onMouseOut={()=>{
				$('#ct2').css({color:'white'})
			}}>
			<i className='bx bx-compass' id='settings-bx'></i>
			<h5 className='card-text' id='ct2'>Explore</h5>
			</div></Link>
			<Link to='/administrate-account'>
			<div className='card' onClick={()=>{
				$('.search-modal').fadeOut()
			}} onMouseOver={()=>{
				$('#ct3').css({color:'rgb(125,125,125)'})
			}} onMouseOut={()=>{
				$('#ct3').css({color:'white'})
			}}>
			<i className='bx bxs-cog' id='settings-bx'></i>
			<h5 className='card-text' id='ct3'>Edit Account</h5>
			</div></Link>
			<span id='signout-span' onClick={()=>{
				localStorage.clear();
                window.location.pathname='/signin'
            }}>
			<i className='bx bx-exit' id='signout-i-nav'></i>
				<h4 id='signout-t-nav'>Sign Out</h4>
			</span>
		</div>
		</div>
		
</div>

<div id="Modal" className="search-modal">
		<div className="search-modal-header">
				<h3 style={{fontSize:'.95em',padding:'.25em'}}>
				<i className='bx bx-search' id='grid'></i>Search results</h3>
				<span id="close" onClick={()=>{
												$("#Modal").fadeOut();
				}}><i className='close-m' ></i></span>
		</div>
    <div className='search-results-father'>
        {searchResults.filter(val=>{
            let name;
            if(val.type=='personal'){
                name = val.name + ' ' + val.lastname;
            }
            if(val.type=='business'){
                name = val.business_name;
            }
            if(val.profession.toLowerCase().includes(searchFilter.toLowerCase()) || name.toLowerCase().includes(searchFilter.toLowerCase()) || val.location.toLowerCase().includes(searchFilter.toLowerCase())){
                return val
            }else{
                return undefined
            }
        }).map((sr)=>{
        let name;
        let pic ='default-business-pic.png'
        if(sr.type == 'personal'){
            name = sr.name + ' ' + sr.lastname;
            pic = sr.profile_pic;
        }
        if(sr.type == 'business'){
            name = sr.business_name;
            pic = sr.business_pic;
        }
        return(
            <div className="search-modal-body" onClick={()=>{ 
                if(sr.type == 'personal'){
                $.cookie('httpurl', `${Math.floor(Math.random()*994815)+994815}.${sr.name.toLowerCase()}-${sr.lastname.toLowerCase()}.${sr.ID}.${Math.floor(Math.random() * 6798245) + 1167474}-p`)
                }
                if(sr.type == 'business'){
              $.cookie('httpurl', `${Math.floor(Math.random()*994815)+994815}.${sr.business_name.toLowerCase().replace(/\s/g, '')}-${Math.floor(Math.random()*80)+80}.${sr.ID}.${Math.floor(Math.random() * 6798245) + 1167474}-b`)
                }
                 window.location.pathname=`/${$.cookie('httpurl')}` 
                }}>
			<div className="message">
					<div className="message-avatar">
							<img src={require(`../.files/database/${pic}`)}  alt=""/>
					</div>
				<div className="message-body">
						<p id='name-mb'>{name}</p>
                    <small>               <p id='location-t-c' style={{float:'left',marginTop:'1em',marginLeft:'1em',fontSize:'.9em',color:'rgb(120,120,120)'}}>
                        <i className='bx bxs-map' style={{fontSize:'.95em'}} id='map-location-bx'></i>{sr.location} - <span style={{color:'rgb(55,55,55)'}}>{sr.profession}</span>
                    </p></small>
				</div>
			</div>
		</div>
        )

            })}	
    </div>
		
</div>
            </div>
            <div id='right-nav-side' className="animate__animated animate__fadeInDown">
                <p id='circle-notification-bell'></p>
			<svg 
							 id='notification-nav' onClick={()=>{
								$('#notification-modal').fadeIn()
                axios.post(`${process.env.REACT_APP_HOST}/api/get-notf`,{
                    email:data.email
                }).then((reqnotf)=>{
                    if(reqnotf.data.notf){
                        setNotf(reqnotf.data.notf)
                        $('.notf-content').fadeIn()
                    }else if(reqnotf.data.undefinednotf){
                    }
                })
                                 axios.post(`${process.env.REACT_APP_HOST}/api/upnotf`,{
                                     email:data.email
                                 }).then((req0)=>{
                                     if(req0.data.upnotf){
                                         $('#circle-notification-bell').fadeOut()
                                     }
                                 })
								$('#Modal').fadeOut(0);
								$('#settings-modal').fadeOut(0)
							}} style={{display:'inline-block',transform:'scale(1.25)',verticalAlign:'bottom',marginRight:'.62em'}}
			xmlns="http://www.w3.org/2000/svg" width="33" height="31" fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">&lt;!--!  Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt;<path d="M19.2,14.27l1.6,2.13A1,1,0,0,1,20,18H4a1,1,0,0,1-.8-1.6l1.6-2.13a1,1,0,0,0,.2-.6V9.29A7.2,7.2,0,0,1,11.78,2,7,7,0,0,1,19,9v4.67A1,1,0,0,0,19.2,14.27Z"></path><path d="M16,18a4,4,0,1,1-8,0"></path></svg>			
                        <img src={ require(`../.files/database/${pic}`) } onClick={()=>{
                axios.post(`${process.env.REACT_APP_HOST}/api/get-starupd`,{
                    email:data.email,
                    type:data.type
                }).then((reqstarupd)=>{
                    if(reqstarupd.data.starupd){
                        setstarupd(reqstarupd.data.starupd)
                    }
                })
				$('#settings-modal').fadeIn()
				$('#notification-modal').fadeOut(0);
				$('#Modal').fadeOut(0)
			}} className='profile-pic' id='nav-user-pic'/>
             
    <Link to='/matchmaking'><button className='match-b' id='login-but' style={{float:'right',marginTop:'.8em'}} data-aos="zoom-in-left"><i className="gg-search" id='match-search' style={{marginLeft:'.0em',marginRight:'.2em',display:'inline-block',transform:'scale(.67)',color:'white'}}></i>Match</button></Link>
						<div className='identify-nav'>
				<h5 id='type-account-text-nav'>{datatype}</h5>
				<h5 id='name-account-text-nav'>{name}</h5>
			</div>
					    </div>
                        <Chatf/> 
        </nav>
    )
} 
export default Nav;
