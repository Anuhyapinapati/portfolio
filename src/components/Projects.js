import React from "react";
import ProjectCard from "./ProjectCard";

// Import project images (assuming they are in src/components/images/)
import cafeImg from "./cafe.jpg.png";
import shrubImg from "./logo.png";
// import calcImg from "./images/calculator.jpg";
import lemonImg from "./lemon.png";

export default function Projects() {
  const projectData = [
    {
      title: "Cafe Website",
      description: "A cool project built with React.", 
      image: cafeImg,
      link: "https://github.com/Anuhyapinapati/cafe-website"
    },
    {
      title: "Lucky Shrub",
      description: "Another amazing app with APIs.", 
      image: shrubImg,
      link: "https://github.com/Anuhyapinapati/luckyshrub"
    },
    // {
    //   title: "Calculator",
    //   description: "Portfolio project with CSS magic.", 
    //   image: calcImg,
    //   link: "https://your-calculator-link.com"
    // },
    {
      title: "Little Lemon Restaurant",
      description: "Full-stack app with Node backend.", 
      image: lemonImg,
      link: "https://your-littlelemon-link.com"
    },
  ];

  return (
    <div className="projects-grid">
      {projectData.map((p, index) => (
        <ProjectCard 
          key={index}
          title={p.title} 
          description={p.description} 
          image={p.image} 
          link={p.link} 
        />
      ))}
    </div>
  );
}
