<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<h1 align="center">Stellar</h1>

  <p align="center">
	A social media app created using React, Typescript, Express.
    <br />
    <a href="https://github.com/mnaphade18/chat-server">Backend server</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About

Social media app built with React and TypeScript, with an Express server backend and MongoDB for data.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built with

<br/>

[![React][react.js]][react-url] &nbsp; [![TypeScript][typescript]][typescript-url] &nbsp; [![Express][express]][express-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## How to get started

### Prerequisites

- Node.js: https://nodejs.org/en/download/
- MongoDB Cluster with following schemas:

  ```
  users: {
    name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
  }

  postMessages: {
    title: String,
  message: String,
  name: String,
  createdBy: String,
  tags: [String],
  selectedFile: String,
  stars: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  }
  ```

- npm
  ```sh
  npm install npm@latest -g
  ```
- yarn
  ```sh
  npm install --global yarn
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/astro3012/stellar.git
   ```
2. Install packages in both `/server` and `/client`
   ```sh
   npm install
   ```
   ```sh
   yarn install
   ```
3. In `/server` folder copy the `.env.example` and rename to `.env`. Paste your MongoDB cluster connection string for `CONNECTION_URL` param.
4. Run the client & server
   ```sh
   npm run start
   ```
   ```sh
   yarn start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Project Link: [Stellar](https://github.com/astro3012/stellar)
<br />
Linkedin: [Tanmay Lanjewar](https://www.linkedin.com/in/tanmaylanjewar)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/astro3012/chatter.svg?style=for-the-badge
[contributors-url]: https://github.com/astro3012/chatter/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/astro3012/chatter.svg?style=for-the-badge
[forks-url]: https://github.com/astro3012/chatter/network/members
[stars-shield]: https://img.shields.io/github/stars/astro3012/chatter.svg?style=for-the-badge
[stars-url]: https://github.com/astro3012/chatter/stargazers
[issues-shield]: https://img.shields.io/github/issues/astro3012/chatter.svg?style=for-the-badge
[issues-url]: https://github.com/astro3012/chatter/issues
[license-shield]: https://img.shields.io/github/license/astro3012/chatter.svg?style=for-the-badge
[license-url]: https://github.com/astro3012/chatter/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[typescript-url]: https://www.typescriptlang.org/
[typescript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[express-url]: https://expressjs.com/
[express]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
