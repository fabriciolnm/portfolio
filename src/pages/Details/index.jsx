import { Container } from "./styles";
import { Card } from "../../components/Card";
import { Bio } from "../../components/Bio";
import { Contact } from "../../components/Contact";
import { Gradient } from "../../components/Gradient";

import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineLaptop,
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

export function Details() {
  return (
    <Container>
      <Gradient />
      <section className="home">
        <nav>
          <a href="#">
            <AiOutlineHome />
          </a>
          <a href="#bio">
            <AiOutlineUser />
          </a>
          <a href="#projects">
            <AiOutlineLaptop />
          </a>
          <a href="#contact">
            <AiOutlineMail />
          </a>
        </nav>

        <div className="hero">
          <div className="links">
            <a href="https://www.linkedin.com/in/fabriciolnm" target="blank">
              <AiOutlineLinkedin />
            </a>
            <a href="https://github.com/moraisfabricio" target="blank">
              <AiOutlineGithub />
            </a>
          </div>

          <div className="image">
            <img src="/src/profile.png" alt="image of Fabricio Morais" />
          </div>
          
          <h1>Hello, I'm</h1>
          <h2>Fabricio Morais</h2>
          <h3>Front-end Developer</h3>
          <h4>Developer</h4>
          <h5>
            "Code enthusiast, through hard work and strong team player attitude,
            I'm developing my skills for a solid career."
          </h5>

        </div>
      </section>

      <div className="bio" id="bio">
        <Bio />
      </div>

      <section className="projects" id="projects">
        <h2>Projects</h2>
          <div className="cards">
          <Card
            url="/src/a1.png"
            title="Japanese Restaurant"
            description="japanese restaurant"
            github="https://github.com/moraisfabricio/namiesushi"
            livedemo="https://namiesushi.vercel.app/"
          />
          <Card
            url="/src/a2.png"
            title="Movies Website"
            description="movies website"
            github="https://github.com/moraisfabricio/megaflix"
            livedemo="https://megaflix-two.vercel.app/"
          />
          </div>
      </section>

      <section className="contact" id="contact">
        <Contact />
      </section>
    </Container>
  );
}
