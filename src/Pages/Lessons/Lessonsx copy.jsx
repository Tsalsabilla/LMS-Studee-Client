import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/index.css';

const HomePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>terraceofdream. | Home</title>
        <link rel="icon" type="image/png" href="../img/logo1.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;1,400&display=swap"
        />
      </head>

      <body>
        {/* navigation bar */}
        <nav>
          <div className="nav-left">
            <div className="maskot">
              <a href="../html/home_page.html">
                <img src="../img/logo1.png" alt="Logo" />
              </a>
            </div>
            <div className="logo">
              <a href="../html/home_page.html">terraceofdream.</a>
            </div>
          </div>
          <div className="wrap-menu">
            <div className="menu1">
              <a href="../html/home_page.html">Home</a>
            </div>
            <div className="menu2">
              <a href="../html/login_page.html">Lessons</a>
            </div>
            <div className="menu3">
              <a href="../html/login_page.html">Quiz</a>
            </div>
            <div className="menu4">
              <a href="../html/login_page.html">Assignment</a>
            </div>
          </div>
          <div className="nav_right">
            <div className="nav_logout">
              <button>
                <a href="../html/login_page.html">Login</a>
              </button>
            </div>
            {/* navigation bar dropdown */}
            <div className="dropdown" style={{ float: 'right' }}>
              <button className="dropbtn">
                <img src="../img/menu.png" alt="dropdown" />
              </button>
              <div className="dropdown-content">
                <a href="../html/home_page.html">Home</a>
                <a href="../html/login_page.html">Lessons</a>
                <a href="../html/login_page.html">Quiz</a>
                <a href="../html/login_page.html">Assignment</a>
                <a href="../html/login_page.html">Login</a>
              </div>
            </div>
            {/* end navigation bar dropdown */}
          </div>
        </nav>
        {/* end navigation bar */}

        {/* hero section */}
        <div className="hero-section">
          <div className="hero-image" data-aos="fade-right" data-aos-delay="500">
            <img src="../img/hero_img.png" alt="Hero" />
          </div>
          <div className="hero-information" data-aos="fade-left" data-aos-delay="500">
            <h1>Your Journey of Learning Becomes a Pathway to Realizing Your Dreams</h1>
            <p>
              Our platform is a boundless garden of knowledge, a place where your aspirations take
              root and flourish.
            </p>
            <button>
              <a href="../html/login_page.html">Start Your Journey</a>
            </button>
          </div>
        </div>
        {/* end hero section */}

        <div className="homeCenter">
          {/* leaderboard */}
          <div className="leaderboard" data-aos="fade-down" data-aos-delay="500">
            <div className="congrats-to-our" id="congrats-to-our">
              Congrats to Our
            </div>
            <h1 className="title">Top 10 Score This Week</h1>
          </div>
          <div className="table-container" data-aos="fade-up" data-aos-delay="500">
            <div id="highScores" className="flex-center flex-column">
              <div id="userData" className="tabel"></div>
            </div>
          </div>
          {/* end leaderboard */}

          {/* about us */}
          <div className="main-section">
            <div className="main-box">
              {/* about us top */}
              <div className="main-top">
                <div className="top-title" data-aos="fade-down" data-aos-delay="500">
                  <div>
                    <h3>Meet Our Team</h3>
                  </div>
                  <div>
                    <p>About Us</p>
                  </div>
                </div>
                <div className="top-box">
                  {/* about us top camila */}
                  <div
                    className="main-form-green"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                  >
                    <img src="../img/camila.png" alt="Camila" />
                    <h3>Camila Ruben</h3>
                    <h2>Quality Assurance</h2>
                    <p>Sekolah Tinggi Ilmu Ekonomi Indonesia</p>
                    <p>Accounting</p>
                    <div className="inFlex">
                      <a href="https://www.linkedin.com/in/camilarbn">
                        <img src="../img/inWhite.png" alt="LinkedIn" />
                      </a>
                      <a href="mailto:tsalsabilla569@gmail.com">
                        <img src="../img/mailWhite.png" alt="Mail" />
                      </a>
                    </div>
                  </div>
                  {/* end about us top camila */}

                  {/* about us top dalipin */}
                  <div
                    className="main-form-green"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                  >
                    <img src="../img/dalipin.png" alt="Dalipin" />
                    <h3>Fadhlurrahman Arifin</h3>
                    <h2>Frontend Developer</h2>
                    <p>Universitas Pendidikan Indonesia</p>
                    <p>Computer Science Education</p>
                    <div className="inFlex">
                      <a href="http://linkedin.com/in/tsalsabillanf">
                        <img src="../img/inWhite.png" alt="LinkedIn" />
                      </a>
                      <a href="mailto:camilaruben130902@gmail.com">
                        <img src="../img/mailWhite.png" alt="Mail" />
                      </a>
                    </div>
                  </div>
                  {/* end about us top dalipin */}

                  {/* about us top kanthi */}
                  <div
                    className="main-form-green"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                  >
                    <img src="../img/kanthi.png" alt="Kanthi" />
                    <h3>Kanthi Malikhah</h3>
                    <h2>Frontend Developer</h2>
                    <p>Universitas Airlangga</p>
                    <p>Economic</p>
                    <div className="inFlex">
                      <a href="http://linkedin.com/in/kanthi-malikhah-76468b217">
                        <img src="../img/inWhite.png" alt="LinkedIn" />
                      </a>
                      <a href="mailto:kanthimalikhah@gmail.com">
                        <img src="../img/mailWhite.png" alt="Mail" />
                      </a>
                    </div>
                  </div>
                  {/* end about us top kanthi */}
                </div>
              </div>
              {/* end about us top */}

              {/* about us bottom */}
              <div className="main-center">
                {/* about us bottom rendi */}
                <div
                  className="main-form"
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <img src="../img/rendi.png" alt="Rendi" />
                  <h3>MuhammadRendi Rizaldi</h3>
                  <h2>Leader Team</h2>
                  <p>Universitas Pendidikan Indonesia</p>
                  <p>Computer Science Education</p>
                  <div className="inFlex">
                    <a href="http://linkedin.com/in/tsalsabillanf">
                      <img src="../img/inGreen.png" alt="LinkedIn" />
                    </a>
                    <a href="mailto:tsalsabilla569@gmail.com">
                      <img src="../img/mailGreen.png" alt="Mail" />
                    </a>
                  </div>
                </div>
                {/* end about us bottom rendi */}

                {/* about us bottom risma */}
                <div
                  className="main-form"
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <img src="../img/risma.png" alt="Risma" />
                  <h3>Risma Ayu Prastika</h3>
                  <h2>Backend Developer</h2>
                  <p>Universitas Muhammadiyah Semarang</p>
                  <p>Statistics</p>
                  <div className="inFlex">
                    <a href="https://www.linkedin.com/in/risma-ayu-prastika-b6b795228/">
                      <img src="../img/inGreen.png" alt="LinkedIn" />
                    </a>
                    <a href="mailto:rismaayuprastika03@gmail.com">
                      <img src="../img/mailGreen.png" alt="Mail" />
                    </a>
                  </div>
                </div>
                {/* end about us bottom risma */}

                {/* about us bottom salsa */}
                <div
                  className="main-form"
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <img src="../img/salsa.png" alt="Salsa" />
                  <h3>Tsalsabilla Nurfitriyatna Putri</h3>
                  <h2>Backend Developer</h2>
                  <p>Universitas Pendidikan Indonesia</p>
                  <p>Computer Science Education</p>
                  <div className="inFlex">
                    <a href="http://linkedin.com/in/tsalsabillanf">
                      <img src="../img/inGreen.png" alt="LinkedIn" />
                    </a>
                    <a href="mailto:tsalsabilla569@gmail.com">
                      <img src="../img/mailGreen.png" alt="Mail" />
                    </a>
                  </div>
                </div>
                {/* end about us bottom salsa */}
              </div>
              {/* end about us bottom */}
            </div>
          </div>
          {/* end about us */}
        </div>

        {/* aos animation */}
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>
          AOS.init();
        </script>
        {/* end aos animation */}
      </body>

      <footer>
        <div className="footer">
          {/* footer logo */}
          <div className="nav-left">
            <div className="maskot">
              <a href="../html/home_page.html">
                <img src="../img/logo1.png" alt="Logo" />
              </a>
            </div>
            <div className="logo">
              <a href="../html/home_page.html">terraceofdream.</a>
            </div>
          </div>
          {/* end footer logo */}

          {/* footer keywords */}
          <div className="bottom-information1">
            <div className="bottom-left">
              <h1>Start Your Journey</h1>
              <p>Math</p>
              <p>Social</p>
              <p>English</p>
              <p>Science</p>
            </div>
            <div className="bottom-center">
              <h1>Go To</h1>
              <p>Quiz</p>
              <p>Lessons</p>
            </div>
            <div className="bottom-right">
              <h1>About</h1>
              <p>FAQ</p>
            </div>
          </div>
          {/* end footer keywords */}

          <hr />

          {/* footer contact */}
          <div className="bottom-information">
            <div className="bottom-right">
              <div className="bottom-head"></div>
              <div className="socmed">
                <a href="https://instagram.com/kebudayaan.jatim?igshid=MzRlODBiNWFlZA==">
                  <img src="../img/ig.png" alt="instagram" />
                </a>
                <a href="https://youtube.com/shorts/7jvhVZJnySA?feature=shared">
                  <img src="../img/yt.png" alt="youtube" />
                </a>
              </div>
            </div>
            <div className="bottom-left">
              <div className="bottom-head"></div>
              <div className="call">
                <a href="https://adammukti.github.io/Tiktok/?by=anto">
                  <img src="../img/call.png" alt="call" />
                </a>
                <a href="https://adammukti.github.io/Tiktok/?by=anto">
                  <p>(021) 141 4141</p>
                </a>
              </div>
            </div>
            <div className="bottom-center">
              <div className="bottom-head"></div>
              <div className="loc">
                <a href="https://www.google.com/maps/place/41%C2%B018'14.1%22N+81%C2%B054'06.1%22W/@41.3039759,-81.9029918,17.68z/data=!4m4!3m3!8m2!3d41.3039167!4d-81.9016944?entry=ttu">
                  <img src="../img/loc.png" alt="location" />
                </a>
                <a href="https://www.google.com/maps/place/41%C2%B018'14.1%22N+81%C2%B054'06.1%22W/@41.3039759,-81.9029918,17.68z/data=!4m4!3m3!8m2!3d41.3039167!4d-81.9016944?entry=ttu">
                  <p>Terrace Street No.14 Seoul, Korea</p>
                </a>
              </div>
            </div>
          </div>
          {/* end footer contact */}

          {/* footer copyrights */}
          <div className="bottom-copyright">
            <p>
              © 2023 terraceofdream. | Capstone Project 14 Balikpapan RevoU X MSIB Batch 5 | All
              Rights Reserved | Created by 💖
            </p>
          </div>
          {/* end footer copyrights */}
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
