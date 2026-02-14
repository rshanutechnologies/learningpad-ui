function Hero(){
  return(
    <section>
      <div className="container" style={{display:"flex",alignItems:"center",gap:"60px"}}>
        <div style={{flex:1}}>
          <h1 style={{fontSize:"52px",lineHeight:"1.2"}}>
            Empowering global education with 
            <span style={{color:"#1e73e8"}}> AI-driven, immersive learning</span>
          </h1>

          <p style={{margin:"20px 0",color:"#666"}}>
            Revolutionizing how teachers teach and students learn.
          </p>

          <button style={{
            padding:"12px 30px",
            borderRadius:"30px",
            border:"2px solid #1e73e8",
            background:"transparent",
            color:"#1e73e8"
          }}>
            Request a Demo
          </button>
        </div>

        <div style={{flex:1}}>
          <img src="https://via.placeholder.com/500x350"
               style={{width:"100%",borderRadius:"20px"}}/>
        </div>
      </div>
    </section>
  )
}

export default Hero
