import React, { useState } from 'react';
import {v4 as uuidV4} from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [roomId, setRoomId] =useState('');
  const [username, setUsername] =useState('');
  const createNewRoom = (e) => {
    e.preventDefault();
    const id =uuidV4();
    setRoomId(id);
    toast.success('Created a new Room');
  };

  const joinRoom =() =>{
    if(!roomId || !username) {
      toast.error('ROOM ID & Username is Required');
      return;
    }

    //Redirect
    navigate(`/editor/${roomId}`,{
      state:{
        username,
      },
    });
  };

  const handleInputEnter =(e) =>{
    console.log('event',e.code);
    if(e.code === 'Enter'){
      joinRoom();
    }
  };
  return (
    <div className="homePageWrapper">
        <div className="formWrapper">
            <img 
              className="homePageLogo"
              src="/code-sync.png" 
              alt="code-sync-logo" 
            />
            <h4 className="mainlabel">Paste Invitation Room ID</h4>
            <div className="inputGroup">
              <input 
                type="text" 
                className="inputBox" 
                placeholder="ROOM ID"
                onChange={(e) => setRoomId(e.target.value)}
                value={roomId}
                onKeyUp ={handleInputEnter}
              />
              <input 
                type="text" 
                className="inputBox" 
                placeholder="USERNAME"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                onKeyUp ={handleInputEnter}
              />
              <button className="btn joinBtn" onClick={joinRoom}>Join</button>
              <span className="createInfo">
                If you don't have an Invite then create &nbsp;
                <a onClick={createNewRoom} href="" className="createNewBtn">
                  New Room
                </a>
              </span>
            </div>
        </div>
        <footer>
          <h4>Built with &#128155;&nbsp;by&nbsp;
             <a href="https://www.linkedin.com/in/prakharvermavirtualprakhar/">&nbsp;Virtual Prakhar</a></h4>
        </footer>
    </div>
  )
}

export default Home;