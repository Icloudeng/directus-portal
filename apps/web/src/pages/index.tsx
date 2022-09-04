import Layout from '@/components/layout/Layout';
import { HeroSection } from '@/components/sections/hero/HeroSection';
import Seo from '@/components/Seo';

// import Vercel from '~/svg/Vercel.svg';


export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Home' />
      <main className=''>
        <section className='hero-section py-10'>
          <HeroSection />
        </section>
        <section className='hero-section py-10 bg-white'>
          <h1>Hello from Cloud IT Engineering portal Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur numquam provident cum, fugit, rerum iste voluptates, nulla repudiandae mollitia similique dignissimos temporibus suscipit deleniti facilis! Porro obcaecati voluptatibus iste nesciunt!
            Hello from Cloud IT Engineering portal Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur numquam provident cum, fugit, rerum iste voluptates, nulla repudiandae mollitia similique dignissimos temporibus suscipit deleniti facilis! Porro obcaecati voluptatibus iste nesciunt!
            Hello from Cloud IT Engineering portal Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur numquam provident cum, fugit, rerum iste voluptates, nulla repudiandae mollitia similique dignissimos temporibus suscipit deleniti facilis! Porro obcaecati voluptatibus iste nesciunt!
            Hello from Cloud IT Engineering portal Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur numquam provident cum, fugit, rerum iste voluptates, nulla repudiandae mollitia similique dignissimos temporibus suscipit deleniti facilis! Porro obcaecati voluptatibus iste nesciunt!
            Hello from Cloud IT Engineering portal Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur numquam provident cum, fugit, rerum iste voluptates, nulla repudiandae mollitia similique dignissimos temporibus suscipit deleniti facilis! Porro obcaecati voluptatibus iste nesciunt!
            Hello from Cloud IT Engineering portal Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur numquam provident cum, fugit, rerum iste voluptates, nulla repudiandae mollitia similique dignissimos temporibus suscipit deleniti facilis! Porro obcaecati voluptatibus iste nesciunt!</h1>
        </section>
      </main>
    </Layout>
  );
}
