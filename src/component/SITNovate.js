import React from 'react';
import './css/SITNovate.css';
import ParticlesComponent from './particles';

function SITNovate() {
  return (
    <div className="sitnovate-container">
      <ParticlesComponent id="particles" />
      <section className="about">
        <img src="./image/SIT_NGPR_1.png" alt="SIT Logo" className="logo" />
        <h1 className="title">SITNovate 2025</h1>
        <p className="subtitle">A Great Fundraising Opportunity to Showcase Your Talent</p>
        <img src="/image/sitNovet.png" alt="SITNovate POSTER" className='image_SITNovate'/>
        <div className="details">
          <p><strong>Date:</strong> 19th Feb, 2025</p>
          {/* <p><strong>Eligibility:</strong> </p> */}
        </div>
        <div className="description">
          <h2>About the Event</h2>
          <p>
          <b>SITNovate</b> is an exhilarating 24-hour hackathon crafted to push the boundaries of creativity, innovation, and technical prowess. Designed for teams of three, this event provides a platform for participants to ideate, code, and build groundbreaking projects in a vibrant and competitive environment.
Throughout the hackathon, participants will benefit from mentorship sessions, hands-on workshops, and access to essential resources, fostering both learning and collaboration. It's an excellent opportunity to not only showcase your skills but also to network with like-minded individuals and industry experts.
With exciting prizes up for grabs, <b>SITNovate</b> is the ultimate arena for coding enthusiasts, design aficionados, and problem-solvers to unleash their potential. Whether you're a seasoned developer or just starting out, <b>SITNovate</b> promises a memorable journey of innovation, teamwork, and discovery!
          </p>
        </div>
        <button className="Register"  onClick={() => window.open("https://forms.gle/KGf7H5EJgw6TK6qp8", "_blank")}>Register Now</button>
        <div className="highlights">
          <h2>Key Highlights of the Event</h2>
          <div className="button-list">
          <button className="highlight-button">
            <img src="https://cdn-icons-png.flaticon.com/512/9669/9669634.png" alt="Investment Opportunity" />
            24-Hour Hackathon
          </button>
          <button className="highlight-button">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/026/987/978/small_2x/single-one-line-drawing-two-young-businessmen-helping-each-other-to-go-up-to-pile-of-cogs-teamwork-people-trust-assistance-technology-gear-collaboration-solution-continuous-line-draw-design-png.png" alt="Potential Seed Funding" />
            Team Collaboration
          </button>
          <button className="highlight-button">
            <img src="https://static.vecteezy.com/system/resources/previews/021/666/207/original/3d-trophy-cup-with-gift-boxes-and-award-medal-winner-with-prize-and-golden-cup-3d-rendering-png.png" alt="Attractive Prizes" />
            Exciting Prizes & Recognition
          </button>
          <button className="highlight-button">
            <img src="https://static.vecteezy.com/system/resources/previews/014/432/446/non_2x/innovation-creativity-or-imagination-for-business-success-illustration-png.png" alt="Participation Certificate" />
            Innovative Challenges
          </button>
          <button className="highlight-button">
            <img src="https://www.pngplay.com/wp-content/uploads/7/Networking-Transparent-Background.png" alt="Incubation Assistance" />
            Networking Opportunities
          </button>
          <button className="highlight-button">
            <img src="https://cdn-icons-png.flaticon.com/512/2344/2344491.png" alt="Online Mentoring" />
            Unleash Your Potentia
          </button>
        </div>
          <p className="timing">Exact timings of the event will be published here soon.</p>
        </div>
        <div className="contact">
          <h2>Contact Us</h2>
          <p>For any inquiries or further details, please contact:</p>
          <p>SITNovation Team</p>
          <p>Phone: +91 9975661769 , +91 9712935674</p>

        </div>
      </section>
      <footer className="footer">
        <p className='text-center'>&copy; 2025 Enthusia. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default SITNovate;
