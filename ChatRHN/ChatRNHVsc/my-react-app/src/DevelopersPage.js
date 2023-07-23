import React from 'react';
import { Link } from 'react-router-dom';

function DevelopersPage() {
  return (
    <div>
      <div className="meetsUs">
        <h1>Meet us!</h1>
      </div>

      <div className="nicoleInfo">
        <h2>Nicole Nguyen:</h2>
        <h3 className="right-aligned-nicole">
          Hey there! I'm Nicole Nguyen, an easy-going, friendly, and social individual. On my extra time, I enjoy playing <br />
          video games, especially Diablo 4, League Of Legends and TFT. I was introduced to coding early on by playing with <br />
          MySpace and Facebook. While I initially pursued a career in veterinary medicine and the medical field, I eventually<br />
          realized it wasn't the right fit for me. Determined to follow my passion, I enrolled in Tech Elevator's<br />
          14-week boot camp for software engineering.<br />
          <br />
          <br />
          At Tech Elevator, I gained valuable experience as a full-stack developer and had the pleasure of meeting Raul.<br />
          We both share a sarcastic sense of humor, which inspired me to create ChatRHN, a sassy version of ChatGPT.<br />
          With Raul's help, my vision came true.<br />
        </h3>
      </div>

      <br />
      <br />
      <br />

      <div className="raulsInfo">
        <h2>Raul Haro:</h2>
        <h3 className="right-aligned-raul">
          Hey there! I'm Raul Haro, a laid-back individual who enjoys video games like Mother 3 and Killer7. I also love<br />
          exploring teas, capturing moments through photography, and bringing smiles to people's faces. By studying<br />
          Computer Science and completing a full-stack software development boot camp at Tech Elevator, my dream is to<br />
          contribute to a team that strives to produce technology that would make a positive impact on the world at<br />
          large. I'm also interested in exploring music production to create some funky fresh tunes.<br />
        </h3>
      </div>
      <br />
      <br />

      <div className="devChatLink">
      <h2 ><Link to="/" className="fake-chat-link">Go back to ChatRHN Home</Link></h2>
      </div>
    </div>
  );
}

export default DevelopersPage;