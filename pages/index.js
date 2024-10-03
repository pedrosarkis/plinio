import React from 'react';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="relative">
            <img src="/placeholder-hero-image.jpg" alt="Hero Image" className="w-full h-96 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <p className="text-white text-3xl font-bold text-center">
                "Your inspiring quote here."
                <br />
                <span className="text-xl">- Your Artist Name</span>
              </p>
            </div>
          </div>
        </section>

        <section>
          <h1 className="text-4xl font-bold mb-4">Your Artist Name: Featured Works, Biography & Quotes</h1>
          <p className="mb-4">
            Introduce your artist here with a brief overview of their importance and impact on the art world.
          </p>
          <img src="/placeholder-artist-image.jpg" alt="Artist Image" className="w-64 h-64 object-cover mb-4" />
          <p>
            Continue with more information about the artist, their style, and achievements.
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default Home;