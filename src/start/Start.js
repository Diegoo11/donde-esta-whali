import "./Start.css"

const Start = (props) => {

  return (
    <div className="boxStart" style={{display: props.display}}>
      <img className="imgFondo" src="https://firebasestorage.googleapis.com/v0/b/where-is-whali.appspot.com/o/where2%20(1).jpg?alt=media&token=79a76c92-a115-4915-b9e2-a3a080e5c76a"/>
      <div>
        <div className="titleStart">Listo?</div>
        <div className="albun">
          <div className="page">
            <img className="imgStart" src="https://firebasestorage.googleapis.com/v0/b/where-is-whali.appspot.com/o/jakes.png?alt=media&token=1ce33c38-40ba-416e-99f0-3870d8962699"/>
            <span>Jake</span>
          </div>
          <div className="page">
            <img className="imgStart" src="https://firebasestorage.googleapis.com/v0/b/where-is-whali.appspot.com/o/leg.png?alt=media&token=11e2e403-dc36-48ed-8ec5-f5e20b9bdee2"/>
            <span>Leg</span>
          </div>
          <div className="page">
            <img className="imgStart" src="https://firebasestorage.googleapis.com/v0/b/where-is-whali.appspot.com/o/aliens.png?alt=media&token=e58d5f3f-367e-4ee6-aa82-76781b7cc47f"/>
            <span>Alien</span>
          </div>
        </div>
        <button className="go" onClick={props.click}>
          Go!
        </button>
      </div>

    </div>
  )
}

export default Start