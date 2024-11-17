import React from 'react'

const Home = () => {
  return (
    <div className="homePageWrapper">
        <div className="formWrapper">
            <img src="/code-sync.png" alt="code-sync-logo" />
            <h4 className="mainlabel">Paste Invitation Room ID</h4>
            <div className="inputGroup">
              <input 
                type="text" 
                className="inputBox" 
                placeholder="ROOM ID"
              />
              <input 
                type="text" 
                className="inputBox" 
                placeholder="USERNAME"
              />
              <button className="btn joinBtn">Join</button>
              <span className="createInfo">
                If you don't have an Invite then create &nbsp;
                <a href="" className="createNewBtn">
                  New Room
                </a>
              </span>
            </div>
        </div>
        <footer>
          <h4>Built with &#128155;&nbsp;by{''}
             <a href="https://www.linkedin.com/in/prakharvermavirtualprakhar/">&nbsp;Virtual Prakhar</a></h4>
        </footer>
    </div>
  )
}

export default Home
