import Head from 'next/head'


export default function NavBar() {
  
  return (
      <div>

      <div className="infoside">
        <div>
          <a href="https://github.com/ObtuseSpruce" target="_blank">
            <img src="/githubwhite.png" className="navicon" alt="github icon"></img>
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/williamllapitan" target="_blank">
            <img src="/linkedinlogo.png" className="navicon" alt="linkedin icon"></img>
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/williamllapitan" target="_blank">
            <img src="/resume.png" className="navicon" alt="resume icon"></img>
          </a>
        </div>

        <div>
          <a href="#aboutMe">
            <img src="/aboutmeicon.png" className="navicon" alt="about me icon"></img>
          </a>
        </div>
        <div>
          <a href="#projects">
            <img src="/project.png" className="navicon" alt="about me icon"></img>
          </a>
        </div>
        <div>
          <a href="#contact">
            <img src="/email.png" className="navicon" alt="contact icon"></img>
          </a>
        </div>
      </div>

      <style jsx>{`
        img{
            border-radius: 5px;
        }
        img:hover{
            opacity: 0.6;
        }
        .navicon {
          margin: 0 15px;
            max-height: 64px;
          max-width: 10vw;
        }
        .infoside{
            opacity: .95;
            background-color: #22223b;
            z-index: 1;
            align-items: center;
            justify-content: center;
            display: flex;
            flex-direction: row;
            position: fixed;
            align-items: center;
            overflow: hidden;
            z-index: 1;
            width: 100vw;
            top: 0;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          background: rgb(34,34,59);
          background: linear-gradient(0deg, rgba(34,34,59,1) 0%, rgba(109,89,122,1) 33%, rgba(227,100,20,1) 66%, rgba(255,89,94,1) 100%);          color: white;
          justify-content: center;
          background-color: #22223b;
          text-align: center;
          padding: 0;
          margin: 0;
          font-family: 'PT Sans Caption', sans-serif;
          }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
