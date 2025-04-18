import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const cubes = [
  "./Frank/3133.png",
  "./Frank/3134.png",
  "./Frank/3135.png",
  "./Frank/3136.png",
  "./Frank/3137.png",
  "./Frank/3138.png",
];

const trees = [
  "./Geo/A2Dsgn313PDF.png",
  "./Geo/A2Dsgn313PDF2.png",
];

const houses = [
  "./houseDrawings/Echavez_JohnPaul_30209996_DSGN313_A3.png",
  "./houseDrawings/Echavez_JohnPaul_30209996_DSGN313_A33.png",
  "./houseDrawings/Echavez_JohnPaul_30209996_DSGN313_A35.png",
  "./houseDrawings/Echavez_JohnPaul_30209996_DSGN313_A36.png",
  "./houseDrawings/Echavez_JohnPaul_30209996_DSGN313_A37.png",
];

const rocks = [
  "./Erdem/Screenshot(411).png",
  "./Erdem/Screenshot(412).png",
  "./Erdem/Screenshot(413).png",
  "./Erdem/Screenshot(414).png",
  "./Erdem/Screenshot(416).png",
];

const marios = [
  "./Marios/RenderedIsland.png",
  "./Marios/DSGN311_GameEngine2.png",
  "./Marios/DSGN311_GameEngine3.png",
  "./Marios/DSGN311_GameEngine5.png",
  "./Marios/DSGN311_GameEngine6.png",
  "./Marios/DSGN311_GameEngine7.png",
];

document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row">
      Project: Cadavre Exquis |
      Painting a Better World
        <div class="three-model">
          <a href="./Echavez_JohnPaul_30209996_DSGN313_A1 - Copy.png"><img src="./Echavez_JohnPaul_30209996_DSGN313_A1 - Copy.png" id="model1" alt="Model 1 Image" /></a>
        </div>
        <div id="images-description">
          <div id="images">
            ${cubes
              .map(
                (cube, index) => `<a href="${cube}" target="_blank"><img src="${cube}" alt="cube${index + 1}" /></a>`
              )
              .join("")}
          </div>
          <h4 id="description"> This	exquisite	corpse,	titled	“Painting	a	Better	World,”	reflects	my	artistic	
background and current design education, as well as my beliefs that art and 
design	can	provide	a	positive	future.	At	the	start	of	this	project,	I	reflected	on	what	
motivates me as an artist. That motivation is establishing a meaningful impact on a 
viewer of my art. When I thought about this, I realized that my motivation and ideals 
of	art	were	similar	to	the	design	practice.	Both	the	art	and	design	fields	allow	me	
to tackle projects that could positively impact people, especially during a volatile 
period in our world. With this in mind, I began producing the exquisite corpse to 
showcase this belief, using images that resonated with me in the collage such as 
artistic material, books, people, and nature.
 The images chosen highlight the artistic and design process intending to focus 
on the human experience, as well as the connection between the outcome and 
the beginning purpose of a creative process, seen in the painting of a vibrant and 
better world in the middle surrounded by decaying polluted visuals. However, I was 
surprised	that	I	resonated	with	images	correlating	to	trash	and	pollution.	Reflecting	
upon this use of visuals, I realized that a major world problem that I focus on and is 
personal to me is pollution and excessive wastefulness. Regardless of the problem, 
I believe that art and design can change society and the world for the better. 
</h4>
        </div>
      </div>

      
      <div id="project-row">
      Project: Interoperability 
        <div class="three-model">
          <div id="model2"></div>
        </div>
        <div id="images-description">
          <div id="images">
             ${trees
              .map(
                (trees, index) => `<a href="${trees}" target="_blank"><img src="${trees}" alt="tree${index + 1}" /></a>`
              )
              .join("")}
          </div>
          <h4 id="description">Assignment to learn about interoperability and modelling using Blender and Rhino.</h4>
        </div>
      </div>


      <div id="project-row">
      Project: Object Design |
      Hand of Creation
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${houses
              .map(
                (houses, index) => `<a href="${houses}" target="_blank"><img src="${houses}" alt="house${index + 1}" /></a>`
              )
              .join("")}
          </div>
          <h4 id="description"> A wearable multitool that allows artists and designers to paint, draw, and create, as well as being a symbol of human creation and want. .</h4>
        </div>
      </div>

    </div>
      <div id="project-row">
      Project: Place Making |
      Paracosm
        <div class="three-model">
          <div id="model4"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${rocks
              .map(
                (rocks, index) => `<a href="${rocks}" target="_blank"><img src="${rocks}" alt="rock${index + 1}" /></a>`
              )
              .join("")}
          </div>
          <h4 id="description">Paracosm is a visionary pavillion where architecture converges with art in a realm of limitless imagination. Its two gracefully curving arms, defined by louvre facades and supported by bold diagonal frames, invite visitors to traverse a living gallery. Here, every step unfolds a dynamic space of regenerative art—a place where creativity transforms architecture into an immersive, interactive world.</h4>
        </div>
      </div>
  

    </div>
      <div id="project-row">
      Project: Game Engine |
      The Painted World
        <div class="three-model">
          <div id="model5"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${marios
              .map(
                (marios, index) => `<a href="${marios}" target="_blank"><img src="${marios}" alt="mario${index + 1}" /></a>`
              )
              .join("")}
          </div>
          <h4 id="description">A Spatial world made in Unity and Blender containing projects and semester outcomes.</h4>
        </div>
      </div>

    </section>

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${
  data.contact.linkedin
}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${
  data.contact.github
}</a></li>
    </ul>
  </main>
`;

// Create three.js scenes for eachq
//createThreeScene("#model1", "/3DModels/project1/cube.obj");
createThreeScene("#model2", "/3DModels/project2/geo.obj");
createThreeScene("#model3", "/3DModels/project3/sexyhand.obj");
