import heroImg from '../assets/images/hero.png';

const Hero = () => {
  return (
    <div className="hero-container">
        <div className="hero-leftSide">
            <h2>Unlock Global Markets with Our Expert Export Solutions</h2>
            <p>Welcome to Brayen Export, your trusted partner in exporting quality goods worldwide. We specialize in connecting businesses to lucrative markets, ensuring seamless trade experiences and maximum profitability. Explore our range of products and services today.</p>
            <div className="hero-buttons">
                <button className="btn active-btn">Get Started</button>
                <button className="btn normal-btn">Learn More..</button>
            </div>
        </div>
        <div className="hero-rightSide">
            <img src={heroImg} alt="hero image" />
        </div>
    </div>
  )
}

export default Hero