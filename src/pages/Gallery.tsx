
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CompanyRegistration from '@/components/gallery/CompanyRegistration';
import TechnologyProducts from '@/components/gallery/TechnologyProducts';
import SystemVideos from '@/components/gallery/SystemVideos';
import GalleryHero from '@/components/gallery/GalleryHero';

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <GalleryHero />
        <CompanyRegistration />
        <TechnologyProducts />
        <SystemVideos />
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
