import Head from 'next/head'


export default function Content() {
  
  return (
    <div className="container">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Will Taylor Llapitan</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans+Caption:wght@700&family=Righteous&display=swap" rel="stylesheet" />        <link href="https://fonts.googleapis.com/css2?family=PT+Sans+Caption:wght@700&display=swap" rel="stylesheet" />

      </Head>

      <main>
      <div className="frontpage">
        <div className="title">
          <h1>Will Taylor Llapitan</h1>
          </div>
          <div className="title2">
            <p>Full Stack Software Developer <br></br> Email: willtaylor@willtaylormade.com</p>
          </div>
        <div className="header">
    </div>
          <div className="info">
            <img className="mainpic" src="/cover.jpg" alt="main pic"></img>
          </div>
        </div>
        <div id="aboutMe">
        <p> </p>
        </div>
    
    <div className="landing" >
        <h1>About Me</h1>
        <div className="brandBox">
            <div className="pbrand">
                <strong>"</strong>
                <blockquote>  I am a full stack software developer who believes in using my rich and diverse skillset
                to solve complex problems and change our world for the better. Empathy enriches the
                technology I create and makes a better product, stronger client relations, and healthier
                work environments.   </blockquote>
                <strong>"</strong>
            </div>    
        </div>
        <h1>Skills</h1>
            <div className="aboutMe">
                <div className="listcontainer">
                        <div className="list">
                                <p className="listitem">JavaScript</p>
                                <p className="listitem">React</p>
                                <p className="listitem">Node.js</p>
                                <p className="listitem">Python</p>
                                <p className="listitem">Express</p>
                                <p className="listitem">EJS</p>
                                <p className="listitem">MongoDB</p>
                        </div>
                        <div className="list">
                                <p className="listitem">Next.js</p>
                                <p className="listitem">CSS</p>
                                <p className="listitem">HTML</p>
                                <p className="listitem">Typescript</p>
                                <p className="listitem">SQL/Sequepze</p>
                                <p className="listitem">Git</p>
                                <p className="listitem">Materialize</p>
                        </div>
                        <div className="list">
                                <p className="listitem">React-Native</p>
                                <p className="listitem">Firebase</p>
                                <p className="listitem">Mongoose</p>
                                <p className="listitem">Gatsby</p>
                                <p className="listitem">Bootstrap</p>
                                <p className="listitem">Phaser.js</p>
                                <p className="listitem">Django</p>
                        </div>
                </div>
            </div>
        </div>

    <div className="landing" id="projects">
        <h1>My Projects</h1>
        <div className="projectbox">
                <div className="projectimg">
                    <img className="websiteimg" src="/farmstand.png"></img>
                </div>
                <div className="projecttext">
                    <h2>Neighborhood Farmstand</h2>
                    <p>Neighborhood Farmstand solves the problem of growing too many vegetables! Post an ad for your homegrown veggies to your neighborhood and trade with others!</p>
                    <div>
                        <a href="https://neighborhoodfarmstand.herokuapp.com/">
                            <img className="iconimg" src="/heroku.png"></img>
                        </a>
                        <a href="https://github.com/ObtuseSpruce/NeighborhoodFarmstand">
                            <img className="iconimg" src="/githubwhite.png"></img>
                        </a>
                        <p>Express | Bootstrap | EJS</p>
                    </div>
                </div>
        </div>

        <div className="projectbox">
            <div className="projectimg">
                <img className="websiteimg" src="/planahead.png"></img>
            </div>
            <div className="projecttext">
                <h2>Plan-Ahead</h2>
                <p>Plan-Ahead is a resource for teachers and students to schedule homework on a calendar. Join a class if your student or create one if you're a teacher.</p>
                <div>
                    <a href="https://pugetsoundclient.herokuapp.com/">
                        <img className="iconimg" src="/heroku.png"></img>
                    </a>
                    <a href="https://github.com/ObtuseSpruce/pugetsound-client">
                        <img className="iconimg" src="/githubwhite.png"></img>
                    </a>
                    <p>React | Typescript | MongoDB</p>
                </div>
            </div>
        </div>
        <div className="projectbox">
            <div className="projectimg">
                <img className="websiteimg" src="/donutdunker.png"></img>
            </div>
            <div className="projecttext">
                <h2>Donut Dunker</h2>
                <p>Donut Dunker is small game built for IOS. Tap the screen to get more points then spend them on more donuts!</p>
                <div>
                    <a href="https://github.com/ObtuseSpruce/DonutDunker">
                        <img className="iconimg" src="/githubwhite.png"></img>
                    </a>
                    <p>React-Native | Firebase | React</p>
                </div>
            </div>
        </div>

    </div>
      

      </main>

      <footer>
      </footer>

      <style jsx>{`
        .title2{
            margin-top: -6vh;
            margin-bottom: -4vh;
        }
        #projects{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding-bottom: 5vh;
        }
        .iconimg{
            margin: 0 5px;
            height: 64px;
        }
        .projectimg {
            width: 30vw;
        }
        .projecttext {
            margin: 10px;
            width: 50vw;
        }
        .projectbox{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            background-color: rgba(34, 34, 59, .9);
            padding: 10px;
            margin-top: 10px;
        }
        .websiteimg{
            width: 30vw;
        }
        .abouttext {
            width: 40vw;
        }
        h1{
            margin-bottom: -10px 0;
        }
        .aboutMe{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .listitem {
            font-size: 2.15vh;
            border-bottom: 2px solid white;
        }
        .listbox {
        }
        .listcontainer {
        }
        .list {
            display: inline-block;
            margin: 10px;
            padding: 10px;
        }
        li {
            border-bottom: 2px solid white;
        }
        ul {
            list-style-type: none;
        }
        .brandBox {
            margin-top: 5vh;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            width: 100vw;
        }
        .pbrand{
            align-items: center;
            display: flex;
            flex-direction: row;
            max-width: 80vw;
            border-bottom: 2px solid white;
            border-top: 2px solid white;

        }
        strong {
            font-size: 100px;
            font-weight: bold;
            display: inline-block;
        }
        .frontpage {
            height: 100vh;
        }
        .landing {
            margin-top: 5vh;
        }
        .title {
          margin-top: 10vh;
          font-family: 'Righteous', cursive;
          font-size: 40px;
        }
        .header {
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          margin-bottom: 15px;
        }
        .mainpic {
          border: 5px solid white;
          height: 60vh;
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
          align-items: center;
          padding: 0;
          margin: 0;
          font-family: 'PT Sans Caption', sans-serif;
          }
        * {
          box-sizing: border-box;
        }
        main {
            background-image: url("https://i.imgur.com/H1mZ4ZI.png");
        }
      `}</style>
    </div>
  )
}
