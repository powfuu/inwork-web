import './administrate.scss'
import './administrate-responsive.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'
import forgotpassword from '../../../.files/forgotpassword.svg'
import select from '../../../.files/select.svg'
import forgotpassword2 from '../../../.files/forgotpassword2.svg'
import secure_login from '../../../.files/secure_login.svg'
import $ from 'jquery'
import swal from 'sweetalert2'

const EditAccount = () =>{
    const [data,setData]=useState({
        banner:'default-profile-banner.png',
        pic:'default-profile-pic.png',
    });
    const [name,setName]=useState('')
    const [lastname,setLastname]=useState('')
    const [email,setEmail]=useState('')
    const [profession,setProfession]=useState('')
    const [val,setVal]=useState(1)
    const [title,setTitle]=useState('')
    const [description,setDescription]=useState('')
    const [add,setAdd]=useState('')
    const [add_tag,setAddTag]=useState('')
    const [add_tag_text,setAddTagText]=useState('')
    const[verificationE,setVerificationE]=useState('')

    const [updateName, setUpdateName] = useState('')
    const [updateLastname,setUpdateLastname]=useState('')
    const [updateProfession,setUpdateProfession]=useState('')
    const [updateBiography,setUpdateBiography]=useState('')
    const [updateProfilePic,setUpdateProfilePic]=useState('')
    const [businessName,setBusinessName]=useState('')
    const [pic,setPic]=useState([])
    const [banner,setBanner]=useState([])
    
    const [logo,setLogo]=useState([])
    const [experienceTitle,setExperienceTitle]=useState('')
    const [experienceDescription,setExperienceDescription]=useState('')

    const [newP,setNewP]=useState('')
    const [cNewP, setCNewP]=useState('')

    const [err,setErr]=useState('')
    //crear array para contar los tags
    const [tags,setTags]=useState([])
    
    const [hep,setHep]=useState([])

    const [skill,setSkill]=useState('')

    const [sf1, setSf1]=useState('');
    const [sf2, setSf3]=useState('');
    const [sf3, setSf2]=useState('');
    const [sk1,setSk1]=useState('');
    const [sk2,setSk2]=useState('');
    const [sk3,setSk3]=useState('');

    const [dsf1, setDsf1]=useState('ex. Android Developer');
    const [dsf2, setDsf2]=useState('ex. Ios Developer');
    const [dsf3, setDsf3]=useState('ex. Web Developer');
    const [dsk1, setDsk1]=useState('ex. Frontend Development');
    const [dsk2, setDsk2]=useState('ex. React.Js & React Native');
    const [dsk3, setDsk3]=useState('ex. Node.Js');
    const [l1,setl1]=useState('')
    const [l2,setl2]=useState('')
    const [getl1,setgetl1]=useState('')
    const [getl2,setgetl2]=useState('')
    const [languages,setLanguages]=useState([])
    const [addl,setaddl]=useState('')
    const [lSkill, setlSkill]=useState('Beginner')
    const [links,setLinks]=useState([])
    const [newLink,setNewLink]=useState('')
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

    const setVal1 = () =>{
        localStorage.setItem('?table',0)
        setVal(1)
 $('#links-content').fadeOut(0)
        $('#preferences-content').fadeIn()
        $('#login-security-content').fadeOut(0)
        $('#skilltags-content').fadeOut(0)
        $('#experienceprojects-content').fadeOut(0)
        $('#account-content').fadeOut(0)
        $('#languages-location-content').fadeOut(0)
        $('#gi1').css({color:'black'}); $('#gi1-text').css({color:'black'}); $('#gi1-text').css({borderRight:'4px solid black'});
        $('#ggi2').css({color:'rgb(140,140,140)'}); $('#ggi2-text').css({color:'rgb(140,140,140)'}); $('#ggi2-text').css({borderRight:'4px solid transparent'});
        $('#bi1').css({color:'rgb(140,140,140)'}); $('#bi1-text').css({color:'rgb(140,140,140)'}); $('#bi1-text').css({borderRight:'4px solid transparent'});
        $('#bi2').css({color:'rgb(140,140,140)'}); $('#bi2-text').css({color:'rgb(140,140,140)'}); $('#bi2-text').css({borderRight:'4px solid transparent'});
        $('#bi3').css({color:'rgb(140,140,140)'}); $('#bi3-text').css({color:'rgb(140,140,140)'}); $('#bi3-text').css({borderRight:'4px solid transparent'});
            $('#bi4').css({color:'rgb(140,140,140'}); $('#bi4-text').css({color:'rgb(140,140,140)',borderRight:'4px solid transparent'})
 $('#bi5').css({color:'rgb(140,140,140)'}); $('#bi5-text').css({color:'rgb(140,140,140)',borderRight:'4px solid transparent'});
    }
    const setVal2 = () =>{
      localStorage.setItem('?table',1)
        setVal(2)
 $('#links-content').fadeOut(0)
        $('#preferences-content').fadeOut(0)
        $('#login-security-content').fadeIn()
        $('#skilltags-content').fadeOut(0)
        $('#experienceprojects-content').fadeOut(0)
        $('#account-content').fadeOut(0)
 $('#languages-location-content').fadeOut(0)

        $('#bi3').css({color:'rgb(140,140,140)'}); $('#bi3-text').css({color:'rgb(140,140,140)'}); $('#bi3-text').css({borderRight:'4px solid transparent'});
        $('#ggi2').css({color:'rgb(140,140,140)'}); $('#ggi2-text').css({color:'rgb(140,140,140)'}); $('#ggi2-text').css({borderRight:'4px solid transparent'});
        $('#bi1').css({color:'black'}); $('#bi1-text').css({color:'black'}); $('#bi1-text').css({borderRight:'4px solid black'});
        $('#gi1').css({color:'rgb(140,140,140)'}); $('#gi1-text').css({color:'rgb(140,140,140)'}); $('#gi1-text').css({borderRight:'4px solid transparent'});
        $('#bi2').css({color:'rgb(140,140,140)'}); $('#bi2-text').css({color:'rgb(140,140,140)'}); $('#bi2-text').css({borderRight:'4px solid transparent'});
            $('#bi4').css({color:'rgb(140,140,140'}); $('#bi4-text').css({color:'rgb(140,140,140)',borderRight:'4px solid transparent'})
 $('#bi5').css({color:'rgb(140,140,140)'}); $('#bi5-text').css({color:'rgb(140,140,140)',borderRight:'4px solid transparent'});
    }
    const setVal3 = () =>{
      localStorage.setItem('?table',2)
        setVal(3)
 $('#links-content').fadeOut(0)
        $('#preferences-content').fadeOut(0)
        $('#login-security-content').fadeOut(0)
        $('#skilltags-content').fadeIn()
        $('#experienceprojects-content').fadeOut(0)
        $('#account-content').fadeOut(0)
 $('#languages-location-content').fadeOut(0)

        $('#bi3').css({color:'rgb(140,140,140)'}); $('#bi3-text').css({color:'rgb(140,140,140)'}); $('#bi3-text').css({borderRight:'4px solid transparent'});
        $('#ggi2').css({color:'rgb(140,140,140)'}); $('#ggi2-text').css({color:'rgb(140,140,140)'}); $('#ggi2-text').css({borderRight:'4px solid transparent'});
        $('#bi1').css({color:'rgb(140,140,140)'}); $('#bi1-text').css({color:'rgb(140,140,140)'}); $('#bi1-text').css({borderRight:'4px solid transparent'});
        $('#gi1').css({color:'rgb(140,140,140)'}); $('#gi1-text').css({color:'rgb(140,140,140)'}); $('#gi1-text').css({borderRight:'4px solid transparent'});
        $('#bi2').css({color:'black'}); $('#bi2-text').css({color:'black'}); $('#bi2-text').css({borderRight:'4px solid black'});
            $('#bi4').css({color:'rgb(140,140,140'}); $('#bi4-text').css({color:'rgb(140,140,140)',borderRight:'4px solid transparent'})
 $('#bi5').css({color:'rgb(140,140,140)'}); $('#bi5-text').css({color:'rgb(140,140,140)',borderRight:'4px solid transparent'});
    }
    const setVal4 = () =>{
      localStorage.setItem('?table',3)
        setVal(4)
 $('#links-content').fadeOut(0)
        $('#preferences-content').fadeOut(0)
        $('#login-security-content').fadeOut(0)
        $('#skilltags-content').fadeOut(0)
        $('#experienceprojects-content').fadeIn()
        $('#account-content').fadeOut(0)
 $('#languages-location-content').fadeOut(0)

        $('#bi3').css({color:'rgb(140,140,140)'}); $('#bi3-text').css({color:'rgb(140,140,140)'}); $('#bi3-text').css({borderRight:'4px solid transparent'});
        $('#ggi2').css({color:'black'}); $('#ggi2-text').css({color:'black'}); $('#ggi2-text').css({borderRight:'4px solid black'});
        $('#bi1').css({color:'rgb(140,140,140)'}); $('#bi1-text').css({color:'rgb(140,140,140)'}); $('#bi1-text').css({borderRight:'4px solid transparent'});
        $('#gi1').css({color:'rgb(140,140,140)'}); $('#gi1-text').css({color:'rgb(140,140,140)'}); $('#gi1-text').css({borderRight:'4px solid transparent'});
        $('#bi2').css({color:'rgb(140,140,140)'}); $('#bi2-text').css({color:'rgb(140,140,140)'}); $('#bi2-text').css({borderRight:'4px solid transparent'});
            $('#bi4').css({color:'rgb(140,140,140'}); $('#bi4-text').css({color:'rgb(140,140,140)',borderRight:'4px solid transparent'})
 $('#bi5').css({color:'rgb(140,140,140)'}); $('#bi5-text').css({color:'rgb(140,140,140)',borderRight:'4px solid transparent'});
    }
    const setVal5 = () =>{
      localStorage.setItem('?table',4)
        setVal(5)
 $('#links-content').fadeOut(0)
        $('#preferences-content').fadeOut(0)
        $('#login-security-content').fadeOut(0)
        $('#skilltags-content').fadeOut(0)
        $('#languages-location-content').fadeOut(0)
        $('#experienceprojects-content').fadeOut(0)
        $('#account-content').fadeIn()
        $('#bi3').css({color:'black'}); $('#bi3-text').css({color:'black'}); $('#bi3-text').css({borderRight:'4px solid black'});
        $('#ggi2').css({color:'rgb(140,140,140)'}); $('#ggi2-text').css({color:'rgb(140,140,140)'}); $('#ggi2-text').css({borderRight:'4px solid transparent'});
        $('#bi1').css({color:'rgb(140,140,140)'}); $('#bi1-text').css({color:'rgb(140,140,140)'}); $('#bi1-text').css({borderRight:'4px solid transparent'});
        $('#gi1').css({color:'rgb(140,140,140)'}); $('#gi1-text').css({color:'rgb(140,140,140)'}); $('#gi1-text').css({borderRight:'4px solid transparent'});
        $('#bi2').css({color:'rgb(140,140,140)'}); $('#bi2-text').css({color:'rgb(140,140,140)'}); $('#bi2-text').css({borderRight:'4px solid transparent'});
 $('#bi5').css({color:'rgb(140,140,140)'}); $('#bi5-text').css({color:'rgb(140,140,140)',borderRight:'4px solid transparent'});
            $('#bi4').css({color:'rgb(140,140,140'}); $('#bi4-text').css({color:'rgb(140,140,140)',borderRight:'4px solid transparent'})
    }
        const setVal6 = () =>{
      localStorage.setItem('?table',5)
        setVal(6)
        $('#preferences-content').fadeOut(0)
        $('#login-security-content').fadeOut(0)
        $('#skilltags-content').fadeOut(0)
        $('#experienceprojects-content').fadeOut(0)
        $('#account-content').fadeOut(0)
        $('#languages-location-content').fadeIn()
            $('#links-content').fadeOut(0)
            $('#bi5').css({color:'rgb(140,140,140)'}); $('#bi5-text').css({color:'rgb(140,140,140)',borderRight:'4px solid transparent'});
            $('#bi4').css({color:'black'}); $('#bi4-text').css({color:'black',borderRight:'4px solid black'});
            $('#bi3').css({color:'rgb(140,140,140'}); $('#bi3-text').css({color:'rgb(140,140,140)',borderRight:'4px solid transparent'})
        $('#ggi2').css({color:'rgb(140,140,140)'}); $('#ggi2-text').css({color:'rgb(140,140,140)'}); $('#ggi2-text').css({borderRight:'4px solid transparent'});
        $('#bi1').css({color:'rgb(140,140,140)'}); $('#bi1-text').css({color:'rgb(140,140,140)'}); $('#bi1-text').css({borderRight:'4px solid transparent'});
        $('#gi1').css({color:'rgb(140,140,140)'}); $('#gi1-text').css({color:'rgb(140,140,140)'}); $('#gi1-text').css({borderRight:'4px solid transparent'});
        $('#bi2').css({color:'rgb(140,140,140)'}); $('#bi2-text').css({color:'rgb(140,140,140)'}); $('#bi2-text').css({borderRight:'4px solid transparent'});
    }
        const setVal7 = () =>{
      localStorage.setItem('?table',6)
        setVal(7)
        $('#preferences-content').fadeOut(0)
        $('#login-security-content').fadeOut(0)
        $('#skilltags-content').fadeOut(0)
        $('#experienceprojects-content').fadeOut(0)
        $('#account-content').fadeOut(0)
        $('#languages-location-content').fadeOut(0)
            $('#links-content').fadeIn()
            $('#bi5').css({color:'black'}); $('#bi5-text').css({color:'black',borderRight:'4px solid black'});
            $('#bi4').css({color:'rgb(140,140,140)'}); $('#bi4-text').css({color:'rgb(140,140,140)',borderRight:'4px solid transparent'});
            $('#bi3').css({color:'rgb(140,140,140'}); $('#bi3-text').css({color:'rgb(140,140,140)',borderRight:'4px solid transparent'})
        $('#ggi2').css({color:'rgb(140,140,140)'}); $('#ggi2-text').css({color:'rgb(140,140,140)'}); $('#ggi2-text').css({borderRight:'4px solid transparent'});
        $('#bi1').css({color:'rgb(140,140,140)'}); $('#bi1-text').css({color:'rgb(140,140,140)'}); $('#bi1-text').css({borderRight:'4px solid transparent'});
        $('#gi1').css({color:'rgb(140,140,140)'}); $('#gi1-text').css({color:'rgb(140,140,140)'}); $('#gi1-text').css({borderRight:'4px solid transparent'});
        $('#bi2').css({color:'rgb(140,140,140)'}); $('#bi2-text').css({color:'rgb(140,140,140)'}); $('#bi2-text').css({borderRight:'4px solid transparent'});
    }

    const update_account = () =>{
      axios.post(`${process.env.REACT_APP_HOST}/api/update-account`, {
        name:updateName,
        lastname:updateLastname,
        profession:updateProfession,
        type:data.type,
        email:data.email,
        biography:updateBiography.replace(/(\r\n|\n|\r)/gm, "<br/>"),
        businessName:businessName
      }, { headers: {'Authorization': `${localStorage.getItem('token')}`}}).then((req)=>{
        if(req.data.updatedtask){
          localStorage.setItem('token', req.data.updatedtask)
          const formData = new FormData();
          formData.append('pic', pic);
          axios.post(`${process.env.REACT_APP_HOST}/api/update-pic`, formData,
           {headers: {'Authorization': `${localStorage.getItem('token')}`}}).then((req)=>{
            if(req.data.updatedPic){
              localStorage.setItem('token', req.data.updatedPic)
               }
              const formData = new FormData();
              formData.append('pic', banner);
              axios.post(`${process.env.REACT_APP_HOST}/api/update-banner`, formData,
              {headers: {'Authorization': `${localStorage.getItem('token')}`}}).then((req)=>{
                if(req.data.updatedBanner){
                  localStorage.setItem('token', req.data.updatedBanner)
                  window.location.reload()
                }else if(req.data.emptyBanner){
                window.location.reload()
                }
              })
          })
        
        }
      })
    }
    const updateExperience = ()=>{
      axios.post(`${process.env.REACT_APP_HOST}/api/update-experience`, {
        email:data.email,
        experienceTitle:experienceTitle,
        experienceDescription:experienceDescription.replace(/(\r\n|\n|\r)/gm, "<br/>")
      }).then((req)=>{
        if(req.data.experience){
          const formData = new FormData();
          formData.append('pic', logo)
          axios.post(`${process.env.REACT_APP_HOST}/api/update-experience-logo`,formData, {
            headers: {'Authorization': `${localStorage.getItem('token')}`}
          }).then((reqlogo)=>{
            window.location.reload()
          })
        }else if(req.data.err){
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${req.data.err}`,
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
    const updateSkills = () =>{
      axios.post(`${process.env.REACT_APP_HOST}/api/update-tags`,{
        email:data.email,
        skill:skill[0].toUpperCase()+skill.toLowerCase().slice(1),
        type:data.type
      }).then((req)=>{
        window.location.reload()
      })
    }
    const addlanguage = () =>{
        if(addl.length >=1){
            axios.post(`${process.env.REACT_APP_HOST}/api/add-language`,{
                email:data.email,
                language:addl,
                language_skill:lSkill
            }).then((req)=>{
                if(req.data.result){
                    window.location.reload()
                }
            })
        }else if(addl.length === 0){
            swal.fire({
                icon:'error',
                title:'Oops...',
                text:'Language field is empty!',
                confirmButtonColor:'#24252A',   showclassName: {
    popup: 'animate__animated animate__zoomInDown'
  },
  hideclassName: {
    popup: 'animate__animated animate__zoomOut'
  }
            })
        }
    }
    const updatelocation = () =>{
        let location = l1 + ', ' + l2;
        if(l1.length >=2, l2.length >=2){
        axios.post(`${process.env.REACT_APP_HOST}/api/update-location`,{
            location:location
        },{
            headers: {'Authorization': `${localStorage.getItem('token')}`}
        }).then((req)=>{
            if(req.data.locationupdated){
                localStorage.setItem('token', req.data.locationupdated)
                window.location.reload()
            }
        })
        }else{
            swal.fire({
                icon:'error',
                title:'Oops...',
                text:'Your location fields are empty or maybe are too short! ',
                confirmButtonColor:'#24252A',    showclassName: {
    popup: 'animate__animated animate__zoomInDown'
  },
  hideclassName: {
    popup: 'animate__animated animate__zoomOut'
  }
            })
        }
    }
    const addLinks = () =>{
        if(newLink.length >= 3){
        axios.post(`${process.env.REACT_APP_HOST}/api/add-links`,{
            email:data.email,
            link:newLink
        }).then((req)=>{
            if(req.data.added){
                window.location.reload()
            }
        })
        }else{
            swal.fire({
                icon:'error',
                title:'Oops...',
                text:'Link URL is too short!',
                confirmButtonColor:'#24252A',   showclassName: {
    popup: 'animate__animated animate__zoomInDown'
  },
  hideclassName: {
    popup: 'animate__animated animate__zoomOut'
  }
            })
        }
    }
    const updatePreferences = () =>{
      axios.post(`${process.env.REACT_APP_HOST}/api/update-preferences`, {
        email:data.email,
        sf1:sf1,
        sf2:sf2,
        sf3:sf3,
        sk1:sk1,
        sk2:sk2,
        sk3:sk3,
        name:data.name,
        location:data.location,
        biography:data.biography,
        profession:data.profession,
        pic:data.pic,
        banner:data.banner,
        id:data.id
      }).then((req)=>{
        if(req.data.updated){
          window.location.reload()
        }else if(req.data.notupdated){
          $('input').val('')
            swal.fire({
            icon:'error',
            title:'Oops...',
            text:`${req.data.notupdated}`,
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
    useEffect(()=>{
        $('#rad-elementary').attr("checked","checked")
           $("html, body").animate({ scrollTop: 0 }, "slow");
      if(!localStorage.getItem('?table')){
        localStorage.setItem('?table', 4)
      }
      if(localStorage.getItem('?table') == 0){
        $('#gi1').css({'color':'black'});
          $('#gi1-text').css({'color':'black',borderRight:'4px solid black'})
        $('#preferences-content').fadeIn()
      }
      if(localStorage.getItem('?table') == 1){
        $('#bi1').css({'color':'black'})
        $('#bi1-text').css({'color':'black',borderRight:'4px solid black'})
        $('#login-security-content').fadeIn()
      }
      if(localStorage.getItem('?table') == 2){
        $('#bi2').css({'color':'black'});
        $('#bi2-text').css({'color':'black',borderRight:'4px solid black'})
        $('#skilltags-content').fadeIn()
      }
      if(localStorage.getItem('?table') == 3){
        $('#experienceprojects-content').fadeIn()
        $('#ggi2').css({'color':'black'});
        $('#ggi2-text').css({'color':'black',borderRight:'4px solid black'})
      }
      if(localStorage.getItem('?table') == 4){
        $('#bi3').css({'color':'black'});
        $('#bi3-text').css({'color':'black',borderRight:'4px solid black'})
        $('#account-content').fadeIn()
      }
      if(localStorage.getItem('?table') == 5){
        $('#bi4').css({'color':'black'});
        $('#bi4-text').css({'color':'black',borderRight:'4px solid black'})
        $('#languages-location-content').fadeIn()
      }
      if(localStorage.getItem('?table') == 6){
        $('#bi5').css({'color':'black'});
        $('#bi5-text').css({'color':'black',borderRight:'4px solid black'})
        $('#links-content').fadeIn()
      }
        $('nav').addClass('importantNav');
        axios.post(`${process.env.REACT_APP_HOST}/api/get-user-data`,
        { },{ headers: {'Authorization': `${localStorage.getItem('token')}`} })
        .then((req)=>{
            if(req.data.data){
                setData(req.data.data);
                setgetl1(req.data.data.location.split(', ')[0])
                setgetl2(req.data.data.location.split(', ')[1])
                setLastname(req.data.data.name.split(' ')[1])
                setEmail(req.data.data.email)
                setProfession(req.data.data.profession)
                setBusinessName(req.data.data.name)
                setUpdateName(req.data.data.name.split(' ')[0])
                setUpdateLastname(req.data.data.name.split(' ')[1])
                setUpdateProfession(req.data.data.profession)
                setUpdateBiography(req.data.data.biography)
                setUpdateProfilePic(req.data.data.pic)

                $('.textarea-edit-co2').text(`${req.data.data.biography.replaceAll("<br/>", '\n')}`)
                //get links
                axios.post(`${process.env.REACT_APP_HOST}/api/get-links`, {
                    email:req.data.data.email
                }).then((reqlinks)=>{
                    if(reqlinks.data.links){
                        setLinks(reqlinks.data.links)
                        $('.nonempty-links-div').fadeIn()
                    }else if(reqlinks.data.emptylinks){
                        $('.empty-links-div').fadeIn()
                    }
                })
                //get languages
                axios.post(`${process.env.REACT_APP_HOST}/api/get-languages`,{
                    email:req.data.data.email
                }).then((reql)=>{
                    if(reql.data.languages){
                        setLanguages(reql.data.languages)
                            $('.nonempty-languages-div').fadeIn();
                    }else if(reql.data.emptylanguages){
                            $('.empty-languages-div').fadeIn();
                    }
                })
            axios.post(`${process.env.REACT_APP_HOST}/api/remove-matchmaking`,{
                email:req.data.data.email,
                type:req.data.data.type
            })
                //get tags
          axios.post(`${process.env.REACT_APP_HOST}/api/get-tags`,{ 
              email:req.data.data.email 
            }).then((reqx)=>{
                if(req.data.data.type == 'personal'){
                    setName(req.data.data.name.split(' ')[0])
                    $('#bi2-text').text('Skills')
                    $('#ggi2-text').text('Experience')
                    $('.experienceprojects-title').text('Experience')
                    $('.skilltag-title').text('Skills')
                    setTitle('Experience Title')
                    setDescription('Experience Description')
                    setAdd('Add Experience')
                    setAddTag('Add Skill')
                    setAddTagText('Skill')
                  $('#gi1-text').fadeOut(0).css({'display':'none !important'})
                    $('#lastname-bus-quit').fadeIn().css({display:'inline-block'})
                  $('#gi1').fadeOut(0).css({'display':'none !important'})
                    $('.left-part').fadeIn().css({display:'inline-block'})
                    $('#preferences-content').fadeOut(0)
                }else if(req.data.data.type=='business'){
                    setName(req.data.data.name)
                    $('#bi2-text').text('Tags')
                    $('.left-part').fadeIn().css({display:'inline-block'})
                    $('#ggi2-text').text('Projects')
                    $('.experienceprojects').text('Projects')
                    $('.experienceprojects-title').text('Projects')
                    $(".skilltag-title").text("Tags")
                    $('.name-ec').text('Business Name')
                    $('.email-ec').text('Business Email')
                    $('.profession-ec').text('Business Specialization');
                    $('.input-defaultv-name').attr('placeholder','Business Name')
                    $('.input-defaultv-email').attr('placeholder','Business Email')
                    $('.input-defaultv-profession').attr('placeholder','Business Specialization')
                    setTitle('Project Name')
                    setDescription('Project Description')
                    setAdd('Add Project')
                    setAddTag('Add Tag')
                    setAddTagText('Tag')
                }
                axios.post(`${process.env.REACT_APP_HOST}/api/get-preferences`, {
                  email:req.data.data.email
                }).then((reqp)=>{
                  if(reqp.data.result){
                    if(reqp.data.result.searchingfor1.length >= 1){
                      setDsf1(reqp.data.result.searchingfor1)
                    }
                    if(reqp.data.result.searchingfor2.length >= 1){
                      setDsf2(reqp.data.result.searchingfor2)
                    }
                    if(reqp.data.result.searchingfor3.length >= 1){
                      setDsf3(reqp.data.result.searchingfor3)
                    }
                    if(reqp.data.result.searchingskill1.length >= 1){
                      setDsk1(reqp.data.result.searchingskill1)
                    }
                    if(reqp.data.result.searchingskill2.length >= 1){
                      setDsk2(reqp.data.result.searchingskill2)
                    }
                    if(reqp.data.result.searchingskill3.length >= 1){
                      setDsk3(reqp.data.result.searchingskill3)
                    }
                  }
                })
                if(reqx.data.tags){
                    setTags(reqx.data.tags);
                    $('.skilltags-div-administrate').fadeIn()
                }else if(reqx.data.notags){
                    $('.noskilltags-div-administrate').fadeIn()
                    if(req.data.data.type === 'business'){
                        $('.skilltags-business-administrate').fadeIn()
                    }else{
                        $('.skilltags-personal-administrate').fadeIn()
                    }
                }
                axios.post(`${process.env.REACT_APP_HOST}/api/get-experience`, {email:req.data.data.email}).
                then((reqy)=>{
                    if(reqy.data.noexperience){
                        $('.noexperience-div-administrate').fadeIn()
                        if(req.data.data.type === 'business'){
                            $('.noexperience-business-administrate').fadeIn()
                        }else{
                            $('.noexperience-personal-administrate').fadeIn()
                        }
                    }else if(reqy.data.experience){
                        setHep(reqy.data.experience);
                        $('.experience-div-administrate').fadeIn()
                    }
                })
            })
        }
        })
    },[])
    return( 
        <div className="account-div">
            <div id='stars2'></div>

            <div className='body-div'>
                <div className='left-part'>
                    <ul className='aaul'>
                    <i id='gi1' className="gg-home" onClick={setVal1} style={{height:'15px',transform:'scale(.85)'}}></i><li onClick={setVal1} id='gi1-text' onMouseOver={()=>{ $('#gi1').css({color:'black'}) }} onMouseLeave={()=>{ if(val != 1){$('#gi1').css({color:'rgb(140,140,140)'})} }} style={{width:'88.10%'}}> Preferences</li>
                        <i id='bi1' onClick={setVal2} style={{fontSize:'1.3em',marginRight:'.25em'}} className='bx bx-key'></i><li onClick={setVal2} id='bi1-text' onMouseOver={()=>{ $('#bi1').css({color:'black'}) }} onMouseLeave={()=>{ if(val !=2){$('#bi1').css({color:'rgb(140,140,140)'})} }} style={{width:'88.16%'}}>Login & Security</li>
                        <i id='bi2'  onClick={setVal3} className='bx bx-hash'></i><li onClick={setVal3} onMouseOver={()=>{ $('#bi2').css({color:'black'}) }} id='bi2-text' onMouseLeave={()=>{ if( val !=3){$('#bi2').css({color:'rgb(140,140,140)'})} }} style={{width:'89.5%'}}></li>
                        <i id='ggi2' onClick={setVal4} style={{transform:'scale(1)',display:'inline-block',marginRight:'.50em'}} className="gg-format-separator"></i><li onClick={setVal4} id='ggi2-text' onMouseOver={()=>{ $('#ggi2').css({color:'black'}) }} onMouseLeave={()=>{ if(val !=4){$('#ggi2').css({color:'rgb(140,140,140)'})} }} style={{width:'88%'}}></li>
                        <i id='bi3' onClick={setVal5} style={{fontSize:'1.3em'}}  className='bx bx-user'></i><li id='bi3-text' onClick={setVal5} onMouseOver={()=>{ $('#bi3').css({color:'black'}) }} onMouseLeave={()=>{ if(val !=5){$('#bi3').css({color:'rgb(140,140,140)'})} }} style={{width:'86.9%'}}>Information</li>
                        <i id='bi4' onClick={setVal6} style={{fontSize:'1.3em'}}  className='bx bx-world'></i><li id='bi4-text' onClick={setVal6} onMouseOver={()=>{ $('#bi4').css({color:'black'}) }} onMouseLeave={()=>{ if(val !=6){$('#bi4').css({color:'rgb(140,140,140)'})} }} style={{width:'86.9%'}}>Languages & Location</li>
                        <i id='bi5' onClick={setVal7} style={{fontSize:'1.3em'}}  className='bx bx-link-external'></i><li id='bi5-text' onClick={setVal7} onMouseOver={()=>{ $('#bi5').css({color:'black'}) }} onMouseLeave={()=>{ if(val !=7){$('#bi5').css({color:'rgb(140,140,140)'})} }} style={{width:'86.9%'}}>Links</li>
                    </ul>
                    <span style={{cursor:'pointer'}} onClick={()=>{
				localStorage.clear();
				window.location.pathname='/signin'
			}}>
                    <i className='bx bx-exit' style={{position:'absolute',transform:'translate(-50%,-50%)',marginTop:'10em',fontSize:'1.5em'}} id='signout-i'></i>
				<h4 id='signout-t' style={{position:'absolute',transform:'translate(-50%,-50%)',marginTop:'15em',fontSize:'1em',marginLeft:'2.95em'}}>Sign Out</h4>
               </span>
                </div>
                <div className='right-part'>
                    <div className='li-content' id='preferences-content'>
                        <div id='preferences-title'> <i id='title-svg' className="gg-home"/><p id='title-title'>Preferences</p></div>
                   <h2 id='imsearching-text'>I'm Searching For</h2>
                   <h5 id='imsearching-tip'>Select at least 3 professions you want to search to your business ( ex. Android Developer, Ios Developer, Web Developer ).</h5>
                  <br/>
                        <form autoComplete='off'>
                  <input autoComplete='off' onChange={(e)=>{
                    setSf1(e.target.value)
                  }} className='input-experience-title' type='text' placeholder={dsf1} id='input-edit-co'/>
                   <input autoComplete='off' onChange={(e)=>{
                    setSf2(e.target.value)
                  }} className='input-experience-title' type='text' placeholder={dsf2} id='input-edit-co'/>
                   <input autoComplete='off' onChange={(e)=>{
                    setSf3(e.target.value)
                  }} className='input-experience-title' type='text' placeholder={dsf3} id='input-edit-co'/>
                  <br/><br/><br/> <h2 id='imsearching-text'>Skilled In</h2>
                   <h5 id='imsearching-tip'>Select at least 3 Skills ( ex. Frontend Development, React.Js & React Native, Node.Js ).</h5>
                  <br/> <input autoComplete='off' onChange={(e)=>{
                    setSk1(e.target.value)
                  }} className='input-experience-title' type='text' placeholder={dsk1} id='input-edit-co'/>
                   <input onChange={(e)=>{
                    setSk2(e.target.value)
                  }} autoComplete='off' className='input-experience-title' type='text' placeholder={dsk2} id='input-edit-co'/>
                   <input onChange={(e)=>{
                    setSk3(e.target.value)
                   }} autoComplete='off' className='input-experience-title' type='text' placeholder={dsk3} id='input-edit-co'/></form>
<br/> 
                   <button id='update-profile-preferences' onClick={updatePreferences} style={{marginTop:'2.35em'}}>Update Preferences</button>
                   <h4 id='update-profile-preferences-warning'>Empty fields will be restarted after update</h4>
                   <img src={select} id='select-svg'/><br/>
                    </div>

                    <div className='li-content' id='login-security-content'>
                    <div id='preferences-title'> <i id='title-svg' className="bx bx-key" style={{fontSize:'1.7em',verticalAlign:'bottom',marginRight:'.12em'}}/><p id='title-title'>Login & Security</p></div>
                    <div style={{textAlign:'center'}}>
                    <img src={forgotpassword2} id='forgot-password-2'/><br/>
                    <h5 id='forgot-text-signin' style={{marginTop:'1.25em', fontSize:'.95em',textDecoration:'underline',marginLeft:'.4em'}} data-aos="zoom-in-up"
                      data-aos-delay="540"
                      data-aos-duration="450" onClick={()=>{
                        $('.forgot-password-div').fadeIn()
                      }}>Change Password?</h5>
                      </div>
                    </div>

                    <div className='li-content' id='languages-location-content'>
                    <div id='preferences-title'> <i id='title-svg' className="bx bx-world" style={{fontSize:'1.7em',verticalAlign:'bottom',marginRight:'.12em'}}/><p id='title-title'>Languages & Location</p>
                    </div>
                        <div id='locatedin-div'>
                            <h1 id='located-in-text'>Located in</h1>
                            <form id='located-form' autoComplete='off'>
                                <input onChange={(e)=>{
                                setl1(e.target.value)
                                }} placeholder={getl1} id='input-location'/>
                              <p id='coma-input-location'>,</p>
                                <input onChange={(e)=>{
                                setl2(e.target.value)
                                }} placeholder={getl2} id='input-location'/>
                            </form>
                            <button id='update-location' onClick={updatelocation}>
                                 Update Location
                            </button>
                        </div>

                        <div id='add-language-div'>  
                            <form autoComplete='off' id='form-i-l'> 
                            <input id='input-language-add' onChange={(e)=>{ 
                                setaddl(e.target.value)
                            }}  placeholder='ex. English'/>
                            </form>
                            <button id='add-language-b' onClick={addlanguage}>
                            Add Language     
                            </button>
                            <form id='rad-b-form'>
                                <input type='radio' onChange={()=>{
                                setlSkill('Beginner')
                                }} name='lskill' id='rad-elementary' className='radio-b'/><label for='rad-elementary'>Beginner</label> 
                                <input type='radio'  onChange={()=>{
                                setlSkill('Advanced')
                                }}   name='lskill' id='rad-advanced'   className='radio-b'/> <label style={{marginLeft:'-.05em'}} for='rad-advanced'>Advanced</label>
                                <input type='radio'  onChange={()=>{
                                setlSkill('Native')
                                }}   name='lskill' id='rad-native'     className='radio-b'/><label for='rad-native'>Native</label> 
                            </form>

                        </div>

                        <div id='languages-div'>
                                          <div className='menu-motion-div'>
                                              <p id='languages-t'>Languages</p>
                    <i className="gg-menu-motion" id='menu-skilltags'></i>
                   <h4 id='menu-skilltags'>{languages.length}</h4>
                   </div>  
                            <div className='nonempty-languages-div'>
                                {languages.map((ldata)=>{
                                    return(
                               <div className='tag-map-content'>
                                 <h3 className='tag-content'>{ldata.language}</h3>
                                   <h4 className='tag-subcontent'>
                                       {ldata.language_skill}
                                   </h4>
                                 <svg onClick={()=>{
                                 axios.post(`${process.env.REACT_APP_HOST}/api/remove-language`,{
                                   email:ldata.email,
                                   id:ldata.id
                                 });
                                 window.location.reload()
                               }} xmlns="http://www.w3.org/2000/svg" id='trash-tags' viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#ff0000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">&lt;!--!  Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt;<path d="M20,6V19a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V6" fill="#ffffff" opacity="0"></path><line x1="2" y1="6" x2="22" y2="6"></line><path d="M8,6V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6"></path><line x1="9" y1="10" x2="9" y2="18"></line><line x1="15" y1="10" x2="15" y2="18"></line><path d="M20,6V19a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V6"></path></svg>
                                 <br/>
                               </div>
                                    )
                                })}
                            </div>
                           <div className='empty-languages-div'>
                           <img src={require(`../../../.files/projects.svg`).default} id='noprojects-pic'/>
                           <h5 id='noprojects-text' >You have not updated any language</h5>
                           </div>
                        </div>

                    </div>

<div className='li-content' id='links-content'>
                    <div id='preferences-title'> <i id='title-svg' className="bx
    bx-link-external"
                    style={{fontSize:'1.7em',verticalAlign:'bottom',marginRight:'.12em'}}/><p
                        id='title-title'>Links</p></div>
                        <div className='whyuselinks-div'>
                            <h1 id='whyuselinks-title'>
                                 How to use your links?
                            </h1>
                            <h3 id='whyuselinks-subtitle'>
                                 Using links can be usefull a lot, you can share your CV, Website Business/Portfolio, Youtube Channels, Facebook & Instagram & LinkedIn accounts to get more information about your account!
                            </h3>
                        </div>
    <form id='tag-form' autoComplete='off' style={{marginLeft:'-1em'}}> <input autoComplete='off' style={{transition:'.6s all ease-in-out',borderRadius:'4px',border:'0px',paddingLeft:'.5em',borderBottom:'1px solid rgb(220,220,220)',boxShadow:'none',marginTop:'0em',marginLeft:'1.5em'}} onKeyPress={(event)=>{

                    }} onChange={(e)=>{
                      setNewLink(e.target.value)
                    }} className='input-experience-title2' type='text' placeholder={`Link URL`} id='input-edit-co'/></form>
                  
  
    <button id='update-profile-exp2' onClick={addLinks} style={{verticalAlign:'bottom',marginTop:'2em',marginLeft:'1em'}}>Add Link</button>
                        <div className='empty-links-div'>
                           <img src={require(`../../../.files/projects.svg`).default} id='noprojects-pic'/>
                           <h5 id='noprojects-text' >You have not updated any links</h5>
                         </div>
                        <div className='nonempty-links-div'>
                             {links.map((data)=>{
                             
                             return(
                               <div className='tag-map-content' id='linkcontet'>
                                   <h3 className='tag-content' onClick={()=>{
                                   window.open(data.link, '_blank').focus();
                                   }} id='tag-content-link'>{data.link}</h3>
                                 <svg onClick={()=>{
                                 axios.post(`${process.env.REACT_APP_HOST}/api/remove-link`,{
                                   email:data.email,
                                   id:data.id
                                 });
                                 window.location.reload()
                               }} xmlns="http://www.w3.org/2000/svg" id='trash-tags' className='remove-link-trash' viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#ff0000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">&lt;!--!  Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt;<path d="M20,6V19a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V6" fill="#ffffff" opacity="0"></path><line x1="2" y1="6" x2="22" y2="6"></line><path d="M8,6V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6"></path><line x1="9" y1="10" x2="9" y2="18"></line><line x1="15" y1="10" x2="15" y2="18"></line><path d="M20,6V19a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V6"></path></svg>
                                 <br/>
                               </div>
                             )
                           })}
                         </div>
                    </div>


                    <div className='li-content' id='skilltags-content'>
                    <div id='preferences-title'> <i id='title-svg' className="bx bx-hash" style={{fontSize:'1.27em',verticalAlign:'bottom',marginRight:'.2em'}}/><p id='title-title' className='skilltag-title'></p></div>
                    <div className='profile-pic-content' style={{paddingBottom:'1.75em',marginTop:'-1.75em'}}>
                    <i id='title-svg' className="bx bx-hash" style={{fontSize:'1.1em',verticalAlign:'top',marginRight:'-.75em',marginTop:'2.15em',color:'rgb(125,125,125)'}}/>
                        <form id='tag-form'> <input autoComplete='off' style={{transition:'.6s all ease-in-out',borderRadius:'4px',border:'0px',paddingLeft:'.5em',borderBottom:'1px solid rgb(220,220,220)',boxShadow:'none',marginTop:'0em',marginLeft:'1.5em'}} onKeyPress={(event)=>{
                           var inputValue = event.charCode;
                           if(!(inputValue >= 65 && inputValue <= 120) && (inputValue != 32 && inputValue != 0)){
                               event.preventDefault();
                           }
                    }} onChange={(e)=>{
                      setSkill(e.target.value)
                    }} className='input-experience-title2' type='text' placeholder={`${add_tag_text}`} id='input-edit-co'/></form>
                  
  
                    <button id='update-profile-exp2' onClick={updateSkills} style={{marginTop:'2.12em'}}>{add_tag}</button>
                   </div>
                   <div className='skilltags-div-administrate'>
                   <div className='menu-motion-div'>
                   <i className="gg-menu-motion" id='menu-skilltags'></i>
                   <h4 id='menu-skilltags'>{tags.length}</h4>
                   </div>               
                   
                               {tags.map((data)=>{
                             
                             return(
                               <div className='tag-map-content'>
                                 <h3 className='tag-content'><span className='custom-hash'>#</span>{data.tag}</h3>
                                 <svg onClick={()=>{
                                 axios.post(`${process.env.REACT_APP_HOST}/api/remove-tag`,{
                                   email:data.email,
                                   id:data.id
                                 });
                                 window.location.reload()
                               }} xmlns="http://www.w3.org/2000/svg" id='trash-tags' viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#ff0000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">&lt;!--!  Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt;<path d="M20,6V19a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V6" fill="#ffffff" opacity="0"></path><line x1="2" y1="6" x2="22" y2="6"></line><path d="M8,6V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6"></path><line x1="9" y1="10" x2="9" y2="18"></line><line x1="15" y1="10" x2="15" y2="18"></line><path d="M20,6V19a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V6"></path></svg>
                                 <br/>
                               </div>
                             )
                           })}
                       </div>
                       <div className='noskilltags-div-administrate'>
                           <div className='skilltags-business-administrate'>
                           <img src={require(`../../../.files/projects.svg`).default} id='noprojects-pic'/>
                           <h5 id='noprojects-text'>You have not updated any Tag</h5>
                           </div>
                           <div className='skilltags-personal-administrate'>
                           <img src={require(`../../../.files/experience.svg`).default} id='noprojects-pic'/>
                           <h5 id='noprojects-text'>You have not updated any Skill</h5>
                           </div>
                       </div>
                    </div>

                    <div className='li-content' id='experienceprojects-content'>
                    <div id='preferences-title'> <i id='title-svg' className="gg-format-separator" style={{color:'rgb(120,120,120)',marginRight:'.4em'}}/><p id='title-title' className='experienceprojects-title'></p></div>
                    <div className='profile-pic-content' id='profile-pic-contentid'>
                    <img  style={{marginTop:'.95em'}} src={require(`../../../.files/database/work.png`)} id='profilepic-pic-content' className='logologologo'/>
                    <div id='buttons-togethers'>
                    <button className='upload-logo' onClick={()=>{
                      $('#logopic-file').click()
                    }} id='new-profilepic-but'>Upload</button>
                      <br/> <button className='remove-logo' onClick={()=>{
                            $('.logologologo').attr('src', require(`../../../.files/database/work.png`).default);
                            $('.logopic-file').val('')
                      }} id='remove-profilepic-but2'>Restore</button>
                      </div>
                        <form id='form-exp' autoComplete='off'><input autoComplete='off' className='input-experience-title' onChange={(e)=>{
                         setExperienceTitle(e.target.value)
                        }} type='text' placeholder={`${title}`} id='input-edit-co2'/></form>
                       <textarea id='textarea-edit-co' placeholder={`${description}`} onChange={(e)=>{
                         setExperienceDescription(e.target.value)
                       }} className='input-experience-description'/>
                          <button id='update-profile-exp' onClick={updateExperience}>{add}</button>
                       <input type='file' name='pic' id='logopic-file'  onChange={(e)=>{
                var ext = e.target.files[0]['name'].substring(e.target.files[0]['name'].lastIndexOf('.') + 1).toLowerCase();
                if (e.target.files && e.target.files[0] && (ext == "png" || ext == "jpeg" || ext == "jpg")){ 
                var reader = new FileReader();
                setLogo(e.target.files[0])
                 reader.onload = function (c) {
                $('.logologologo').attr('src', c.target.result);
                }
                 reader.readAsDataURL(e.target.files[0]);
              }
                           }}/>
                   </div>
                   <div className='experience-administrate-content'>
                       <div className='experience-div-administrate' id='hp-t'><br/>
                         {hep.map((data)=>{
                           let title=data.experience_title;
                           let desc=data.experience_description.replaceAll('<br/>','\r\n');
                           if(data.experience_title.length === 0){
                             title = 'No title defined'
                           }
                           if(data.experience_description.length === 0){
                             desc = 'No description defined'
                           }
                           return(
                             <div className='experience-content-base'>
                               <img src={require(`../../../.files/database/${data.experience_logo}`)} id='experience-logo-content'/>
                               <h2 id='experience-title-content'>{title}</h2>
                              <div id='expdc'><h5 id='experience-description-content' >{desc}</h5></div>
                               <br/>
                               <svg onClick={()=>{
                                 axios.post(`${process.env.REACT_APP_HOST}/api/remove-experience`,{
                                   email:data.email,
                                   id:data.id
                                 });
                                 window.location.reload()
                               }} xmlns="http://www.w3.org/2000/svg" className='trash-hep'  id='trash' viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#ff0000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">&lt;!--!  Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt;<path d="M20,6V19a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V6" fill="#ffffff" opacity="0"></path><line x1="2" y1="6" x2="22" y2="6"></line><path d="M8,6V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6"></path><line x1="9" y1="10" x2="9" y2="18"></line><line x1="15" y1="10" x2="15" y2="18"></line><path d="M20,6V19a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V6"></path></svg>                             </div>
                           )
                         })}
                       </div><br/>
                       <div className='noexperience-div-administrate'>
                           <div className='noexperience-business-administrate'>
                           <img src={require(`../../../.files/projects.svg`).default} id='noprojects-pic'/>
                           <h5 id='noprojects-text'>You have not published any project from your business</h5>
                           </div>
                           <div className='noexperience-personal-administrate'>
                           <img src={require(`../../../.files/experience.svg`).default} id='noprojects-pic'/>
                           <h5 id='noprojects-text'>You have not published any experience</h5>
                           </div>
                       </div>
                   </div>
                    </div>

                    <div className='li-content' id='account-content'>
                    <div id='preferences-title'> <i id='title-svg' className="bx bx-user" style={{fontSize:'1.5em',verticalAlign:'bottom',marginRight:'.3em'}}/><p id='title-title'>Information</p></div>
                   <div className='profile-pic-content'>
                       <div className='pic-profile-edit'>
                       <h3 id='profile-pic-text'>Your Profile Pictures</h3>
                       <img src={require(`../../../.files/database/${data.pic}`)} className='picpicpic' id='profilepic-pic-content'/>
                       <button id='new-profilepic-but' onClick={()=>{
                         $('#profilepic').click()
                       }}>Upload</button>
                       <button id='remove-profilepic-but' onClick={()=>{
                          $('.picpicpic').attr('src', require(`../../../.files/database/${data.pic}`));
                          $('.profilepicfile').val('')
                       }}>Restore</button>
                       </div>
                      <div className='banner-profile-edit'>
                      <img style={{borderRadius:'4px', width:'140px'}} src={require(`../../../.files/database/${data.banner}`)} className='bannerbannerbanner' id='profilepic-pic-content'/>
                       <button id='new-profilepic-but' onClick={()=>{
                         $('#bannerpic').click()
                       }}>Upload</button>
                       <button id='remove-profilepic-but' onClick={()=>{
                          $('.bannerbannerbanner').attr('src', require(`../../../.files/database/${data.banner}`));
                          $('.bannerpicfile').val('')
                       }}>Restore</button>
                      </div>

                       <input type='file' name='pic' onChange={(e)=>{
                var ext = e.target.files[0]['name'].substring(e.target.files[0]['name'].lastIndexOf('.') + 1).toLowerCase();
                if (e.target.files && e.target.files[0] && (ext == "svg" ||ext == "png" || ext == "jpeg" || ext == "jpg")){ 
                var reader = new FileReader();
                setBanner(e.target.files[0])
                 reader.onload = function (c) {
                $('.bannerbannerbanner').attr('src', c.target.result);
                }
                 reader.readAsDataURL(e.target.files[0]);
              }
                           }} className='bannerpicfile' id='bannerpic'/>
                                                 
                   <input type='file' name='pic' onChange={(e)=>{
                var ext = e.target.files[0]['name'].substring(e.target.files[0]['name'].lastIndexOf('.') + 1).toLowerCase();
                if (e.target.files && e.target.files[0] && (ext == "png" || ext == "jpeg" || ext == "jpg")){ 
                var reader = new FileReader();
                setPic(e.target.files[0])
                 reader.onload = function (c) {
                $('.picpicpic').attr('src', c.target.result);
                }
                 reader.readAsDataURL(e.target.files[0]);
              }
                           }} className='profilepicfile' id='profilepic'/>
                   </div>
                   <div className='account-info-edit'>
                       <div className='div-edit-co'>
                         <h5 id='title-edit-co' className='name-ec'>Name</h5>
                         <input autoComplete='off' onPaste={(e)=> e.preventDefault()} onKeyPress={(e)=>{
                              if(data.type == 'personal'){
                              if (e.which === 32) {
                                e.preventDefault();
                                return false;
                              }
                              }
                         }} onChange={(e)=>{
                           setUpdateName(e.target.value)
                           setBusinessName(e.target.value)
                         }} type='text' placeholder='Name' id='input-edit-co' className='input-defaultv-name' defaultValue={`${name}`}/>
                         </div>
                         <div className='div-edit-co' id='lastname-bus-quit' style={{marginLeft:'2em'}}>
                         <h5 id='title-edit-co' className='lastname-ec'>Last Name</h5>
                         <input autoComplete='off' onPaste={(e)=> e.preventDefault()} onKeyPress={(e)=>{
                              if (e.which === 32) {
                                e.preventDefault();
                                return false;
                              }
                         }} onChange={(e)=>{
                           setUpdateLastname(e.target.value)
                         }} type='text' placeholder='Last Name'  id='input-edit-co' defaultValue={`${lastname}`}/>
                         </div><br/>
                         <div className='div-edit-co'>
                         <h5 id='title-edit-co' className='email-ec'>Email</h5>
                         <input autoComplete='off' type='text' placeholder='Email'  id='input-edit-co' className='input-defaultv-email' defaultValue={`${email}`} disabled/>
                         </div>
                         <div className='div-edit-co' style={{marginLeft:'2em'}}>
                         <h5 id='title-edit-co' className='profession-ec'>Profession</h5>
                         <input autoComplete='off' onChange={(e)=>{
                           setUpdateProfession(e.target.value)
                         }} type='text' placeholder='Profession' id='input-edit-co' className='input-defautv-profession' defaultValue={`${profession}`}/>
                         </div>
                         <div id='div-edit-co' style={{marginLeft:'.5em',marginTop:'1em'}}>
                         <h5 id='title-edit-co'>Biography | Description</h5>
                         <textarea id='textarea-edit-co' onChange={(e)=>{
                           setUpdateBiography(e.target.value)
                         }} className='textarea-edit-co2'/>
                         </div>
                         <button id='update-profile-info' onClick={update_account}>Update Account</button>
                   </div>
                    </div>
                </div>
                
            </div>
            <div className='forgot-password-div' style={{height:'118vh'}}>
      <div className='forgot-password-div-content'>
      <i className='bx bx-arrow-back' id='arrow-left-modal-login' onClick={close_forgot_password_modal}></i>
      <h4 id='forgot-password-text'>Change Password</h4>
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
         <input type='text' maxLength='1' autoComplete='off' className="solo-input" id='1i'/>
         <input type='text' maxLength='1' autoComplete='off' className="solo-input" id='2i'/>
         <input type='text' maxLength='1' autoComplete='off' className="solo-input" id='3i'/>
         <input type='text' maxLength='1' autoComplete='off' className="solo-input" id='4i'/>
         <input type='text' maxLength='1' autoComplete='off' className="solo-input" id='5i'/>
         <input type='text' maxLength='1' autoComplete='off' className="solo-input" id='6i'/>
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
      <button id='next-step1' className="last-step-button" onClick={close_forgot_password_modal} style={{marginTop:'3.3em', marginRight:'7.99em'}}>Return to Account</button>
      </div>
      </div>
    </div>
        </div>
    )
}
export default EditAccount;
