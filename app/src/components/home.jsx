import React from 'react';
import 'homecss.css';  // Import your CSS file

const Home = () => {
  return (
    <div className="home-section">
      {/* Header Section */}
      <header className="header">
        <nav className="navc">
          <div className="logo">
            <img src="images/logo.png" alt="Logo" />
          </div>
          <ul>
            <li className="list"><a href="home.html" className="link">Home</a></li>
            <li className="list"><a href="calculator.html" className="link">Calculator</a></li>
            <li className="list"><a href="bid.html" className="link">Bidsphere</a></li>
            <li className="list"><a href="s-c-h-e-m-e.html" className="link">Schemes</a></li>
            <li className="list"><a href="ENGINEER.html" className="link">Engineers</a></li>
            <li className="list"><a href="profile.html" className="link">MY profile</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <img className="bac-image" src="images/train.jpg" alt="Background" />
        <div className="overlay"></div>
        <div className="content">
          <div className="h-title">
            <h4>Cost-craft</h4>
          </div>
          <div className="catchy-line">
            <h1>Build smarter, bid better</h1>
          </div>
          <div className="abstract">
            <p>"At CostCraft, we predict construction costs with precision and empower users to reduce expenses through strategic bidding. Join us in revolutionizing construction economics and building smarter projects."</p>
          </div>
        </div>
      </main>

      {/* Materials Section */}
      <section className="materials">
        <div className="cont-m">
          <h1 className="h-head">"Wanna find material for your dream house,User?</h1>
          <div className="date-cont">
            {[
              { title: 'Cement,Steel and Tiles', link: 'https://www.buildersmart.in/' },
              { title: 'For Hardware Products', link: 'https://www.thesolvere.life/' },
              { title: 'For Paintings and Coatings', link: 'https://www.constrobazaar.com/' },
              { title: 'Plumbing and electrics', link: 'https://builders9.com/' }
            ].map((item, index) => (
              <div className="dateItemBox d" key={index}>
                <div className="d_circle"></div>
                <div className="d_info">
                  <p className="d_da">{item.title}</p>
                  <p className="dc_info">
                    <a href={item.link}>Click here</a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Content Sections */}
      <section className="sec-3">
        <div className="b">
          <h1 className="h2-head">Inspire Your Style: Top Picks Await!</h1>
          {['Cement', 'Bricks', 'Steel'].map((material, index) => (
            <div className="one-item" key={index}>
              <h2 className="items">{material}</h2>
              <div className="mat-flex">
                {[1, 2, 3].map((i) => (
                  <div className="mat-flex-item" key={i}>
                    <img src="images/object.jpg" alt="" />
                    <h1>Material {i}</h1>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <div className="box"></div>
      </footer>
    </div>
  );
};

export default Home;
