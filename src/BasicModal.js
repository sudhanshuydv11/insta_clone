import React,{useState,useEffect} from 'react';
import {auth} from "./firebase"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Input } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  background:'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const [opensignin,setSignin]=useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const loginhandleOpen = () => setSignin(true);
  const loginhandleClose = () => setSignin(false);
  const [user,setUser]=useState(null);
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [email,setEmail]=useState("");
  
  const onSignup=(event)=>{
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email,password)
    .then((au)=>{
      return au.user.updateProfile({
        displayName:username
      })
    })
    .catch((err)=>alert(err.message))
  }

  const onSignin=(event)=>{
    event.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .catch((err)=>alert(err.message));
     
    loginhandleClose();
  }

  useEffect(() => {
    const unsbscribe=auth.onAuthStateChanged((aU)=>{
      if(aU){
        setUser(aU);
        console.log(aU);
        if(aU.displayName)
        {
          console.log(aU.displayName)
        }
        else{
          return aU.updateProfile({
            displayName:username
          });
        }
      }
      else{
       setUser(null);
      }
    })
    return ()=>{
      //cleanup
      unsbscribe();
    }
  }, [user,username])
  

  return (
<div>
    {(user)?(
     <Button onClick={()=>auth.signOut()}>LogOut</Button>
     ):(
     
      <div>
        {console.log(user)}
       <Button onClick={handleOpen}>SignUP</Button> 
       <Button onClick={loginhandleOpen}>Signin</Button>
      </div>
     
     )}
      

{/*SIGNUP */}



  <Modal
        open={opensignin}
        onClose={loginhandleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
    <Box sx={style}>
     <form style={{display:'flex',flexDirection:'column'}}>
        <Input
        type="email"
        placeholder='email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <Input
        type="password"
        placeholder='password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        
        <Button type='submit' onClick={onSignin}>SignIN</Button>
      </form>
    </Box>
  </Modal>



 {/*LOG IN*/}

 <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
    <Box sx={style}>
     <form style={{display:'flex',flexDirection:'column'}}>
        <Input
        type="text"
        placeholder='username'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        />
        <Input
        type="email"
        placeholder='email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <Input
        type="password"
        placeholder='password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        
        <Button type='submit' onClick={onSignup}>SignUp</Button>
      </form>
    </Box>
  </Modal>



</div>
  );
}