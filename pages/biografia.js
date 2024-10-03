import React from 'react';
import Layout from '../components/Layout';
import SidebarNav from '../components/SidebarNav';
import YouTubeEmbed from '../components/YoutubeEmbed';

const BiographyPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 flex">
        <aside className="w-1/4 pr-8">
          <SidebarNav />
        </aside>
        <main className="w-3/4">
          <h1 className="text-4xl font-bold mb-8">Your Artist Biography</h1>
          
          <img src="/placeholder-artist-image.jpg" alt="Artist Portrait" className="w-full mb-4" />
          <p className="text-sm text-gray-600 mb-8">Artist Photo</p>
          
          <p className="mb-6">
            As a significant influence on 20th-century art, [Your Artist] was an innovative artist who experimented and innovated during their career.
            They were not only a master painter but also a sculptor, printmaker, ceramics artist, etching artist and writer. Their work matured from the naturalism of their
            early years through various periods, shaping the direction of modern and contemporary art through the decades.
          </p>

          <h2 className="text-2xl font-bold mb-4">Early Years: [Year Range]</h2>
          <p className="mb-6">
            [Write about the artist's early years, birthplace, family, and initial artistic education]
          </p>

          <YouTubeEmbed videoId="your-youtube-video-id" title="Artist at Work" />

          <h2 className="text-2xl font-bold mt-8 mb-4">[Artistic Period Name]</h2>
          <p className="mb-6">
            [Describe this artistic period, its characteristics, and notable works]
          </p>

          {/* Add more sections as needed */}
        </main>
      </div>
    </Layout>
  );
};

export default BiographyPage;