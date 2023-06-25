import React from 'react';

function DevelopersPage() {
  return (
    <div>
      <div className="meetsUs">
        <h1>Meet us!</h1>
      </div>

      <div className="nicoleInfo">
        <h2>Nicole Nguyen:</h2>
        <h3>
          Hey there! I'm Nicole Nguyen, an easy-going, friendly, and social individual. On my extra time, I enjoy playing
          video games, especially League Of Legends and TFT. I was introduced to coding early on by playing with MySpace
          and Facebook. While I initially pursued a career in veterinary medicine and the medical field, I eventually
          realized it wasn't the right fit for me. Determined to follow my passion, I enrolled in Tech Elevator's
          14-week boot camp for software engineering.
          <br />
          <br />
          At Tech Elevator, I gained valuable experience as a full-stack developer and had the pleasure of meeting Raul.
          We both share a sarcastic sense of humor, which inspired me to create ChatRHN, a sassy version of ChatGPT.
          With Raul's help, my vision came true.
        </h3>
      </div>

      <br />

      <div className="raulsInfo">
        <h2>Raul Haro:</h2>
        <h3>
          Hey there! I'm Raul Haro, a laid-back individual who enjoys video games like Mother 3 and Killer7. I also love
          exploring teas, capturing moments through photography, and bringing smiles to people's faces. By studying
          Computer Science and completing a full-stack software development boot camp at Tech Elevator, my dream is to
          contribute to a team that strives to produce technology that would make a positive impact on the world at
          large. I'm also interested in exploring music production to create some funky fresh tunes.
        </h3>
      </div>

      <div className="devChatLink">
        <h2><a href="ChatRHN.html">Go back to ChatRHN</a></h2>
      </div>
    </div>
  );
}

export default DevelopersPage;