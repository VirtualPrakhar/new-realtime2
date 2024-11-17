import React, {useState} from 'react'

const EditorPage = () => {
  const [clients, setClients] = useState([
    {socketId: 1, username: 'Rajesh K'},
    {socketId: 2, username: 'Durgesh K'},

  ]);
  return (
    <div className="mainWrap"> 
      <div className="aside">
        <div className="asideInner">
          <div className="logo">
            <img 
              className="logoImage" 
              src="/code-sync.png" 
              alt="logo"
            ></img>
          </div>
          <h3>Connected</h3>
          <div className="clientsList">
            {clients.map((client) => (
              <Client />
            ))}
          </div>
        </div>
      </div>
      <div className="editorWrap">Editor goes here...</div>
    </div>
  );
};

export default EditorPage;