import React from 'react';
import Layout from '../components/layouts';
import { HeadFC } from 'gatsby';

function About() {
  return (
    <Layout>
      <section className="py-20 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold">About Me</h2>
          <div className="mt-6 text-lg">
            <p>
              Hi, my name is Kevin Grande ✋ and I'm a frontend developer. I became interested in web development when I was in higschool studying Software Development. At first, I was more interested in backend development, but as I started working on projects and building websites, I realized that I really enjoyed working on the frontend.
            </p>
            <p className="mt-4">
              I started learning HTML, CSS, and JavaScript on my own and eventually started taking online courses and attending meetups to learn more. Then I got into college, and I got interested in how we can design systems taking in consideration the user's requirements. Eventually I decided to apply for an intership as a Frontend Developer, it was not an easy path at the beginning but as I was practicing I realized that it could be possible and it was.
            </p>
            <p className="mt-4">
              Over the years, I've continued to develop my skills and stay up-to-date with the latest frontend technologies. I'm passionate about building beautiful and user-friendly interfaces and I love the challenge of solving complex problems with code.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
export const Head: HeadFC = () => <title>About | Kevin Grande</title>
export default About;