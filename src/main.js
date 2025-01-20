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
  "./treeDrawings/tree1.jpg",
  "./treeDrawings/tree2.jpg",
  "./treeDrawings/tree3.jpg",
  "./treeDrawings/tree4.jpg",
];

const houses = [
  "./houseDrawings/house1.jpg",
  "./houseDrawings/house2.jpg",
  "./houseDrawings/house3.jpg",
  "./houseDrawings/house4.jpg",
];

document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row">
      Cadavre Exquis |
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

      ${/* Model 2 commented out}
      <div id="project-row">
      Model 2
        <div class="three-model">
          <div id="model2"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${trees
              .map(
                (trees, index) =>
                  `<img src="${trees}" alt="tree${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D tree model is a geometric representation of a tree, featuring a trunk, branches, and foliage. The trunk is typically cylindrical, with textured bark, while the branches extend outward to support leaves or a canopy. It may include roots or flowers for added detail.</h4>
        </div>
      </div>
*/""}

  ${/* Model 3 commented out}
      <div id="project-row">
      Model 3
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${houses
              .map(
                (house, index) => `<img src="${house}" alt="house${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D house model is a geometric representation of a house, featuring walls, a roof, and windows. It often includes additional details such as doors, chimneys, and balconies, with textures like brick, wood, or stucco to enhance realism. The interior may also feature rooms, furniture, and lighting for a more detailed design.</h4>
        </div>
      </div>
*/""}

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

// Create three.js scenes for each
//createThreeScene("#model1", "/3DModels/project1/cube.obj");
//createThreeScene("#model2", "/3DModels/project2/tree.obj");
//createThreeScene("#model3", "/3DModels/project3/cottage.obj");
