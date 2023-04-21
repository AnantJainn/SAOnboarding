/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Chat Dapp",
    description:
      "Its is the decentralised Chat application based on Blockchain and the smart Contracts are written in solidity.In this your can invite and chat with them publicaly.It uses Metamask for the transaction.Tech Stack used was Next.js, Solidity, Tailwind CSS, etc.",
    url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  },
  {
    title: "Decentralized Drive",
    description:
      "This project is build using solidity and tested and deployed using hardhat. Its basically a decentralized version of Google Drive which has share access and display all pictures functionaliy. All the images are stored pinata IPFS file network.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "Dog Breed Identifier",
    description:
      "This project aims to classify dog breeds using deep learning with TensorFlow and a convolutional neural network (CNN). We will use the Stanford Dogs Dataset which contains 20,580 images of 120 breeds of dogs.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "Waste~Wizard",
    description:
      "This app is help you to classify your waste with 9 different waste materials. The recycling process of these waste materials are very hard and even it's very difficult to classify these 9 different waste materials at recycling factory.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
