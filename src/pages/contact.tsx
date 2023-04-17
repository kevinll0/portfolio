import { HeadFC } from 'gatsby';
import React from 'react';
import Layout from '../components/layouts';

function Contact() {
  return (
    <Layout>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold">Contact Me</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium">Get in Touch</h3>
              <p className="mt-1">Fill out the form below to send me a message and I'll get back to you as soon as possible.</p>
              <form className="mt-6" action="#" method="POST">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium light:text-gray-800">
                    Name
                  </label>
                  <div className="mt-1">
                    <input type="text" name="name" id="name" className="py-2 px-3 block w-full rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Your Name" />
                  </div>
                </div>
                <div className="mt-4">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <div className="mt-1">
                    <input type="email" name="email" id="email" className="py-2 px-3 block w-full rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="you@example.com" />
                  </div>
                </div>
                <div className="mt-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea id="message" name="message" rows={4} className="py-2 px-3 block w-full rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Write your message here"></textarea>
                  </div>
                </div>
                <div className="mt-4">
                  <button type="submit" className="py-2 px-4 bg-blue-500 hover:bg-blue-600 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full rounded-md shadow-sm sm:text-sm">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export const Head: HeadFC = () => <title>Contact me | Kevin Grande</title>
export default Contact;