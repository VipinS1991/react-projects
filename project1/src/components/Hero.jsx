const Hero = () => {
    return <main className="hero container">
        <div className="hero-content">
            <h1>Mera Joota Japaani</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. 
                Quisquam commodi rem, numquam, illo hic deleniti 
                optio consequatur minus saepe dolorum quibusdam eligendi 
                voluptas nulla fuga harum ipsum distinctio labore corporis.
            </p>

            <div className="hero-btn">
                <button>Shop Now</button>
                <button className="secondary-btn">Category</button>
            </div>

            <div className="shopping">
                <p>Also available on</p>
                <div className="brand-icons">
                    <img src="amazon.png" alt="Amazon" />
                    <img src="flipkart.png" alt="Amazon" />
                </div>
            </div>
            <hero-image>
            <img src="amazon.png" alt="Shoes-Logo" />
            </hero-image>
        </div>
    </main>
}

export default Hero;