export default function Info() {
    return (
      <div>
            <img className="headShot" src="src/images/kevHeadshot.jpg"/>
            <h1>Kevin Pelletier</h1>
            <h3>Frontend Developer</h3>
            <h4>KP.website</h4>
            <div className="buttons">
                <button className="emailBtn">
                    <img className="emailIcon" src="src/images/IconEmail.png"/>
                    Email
                </button>
                <button className="linkedInBtn">
                <img className="linkenInIcon" src="src/images/linkedinlink.png"/>
                    LinkenIn
                </button>
            </div>
      </div>
    )
  }