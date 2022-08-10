import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

// import Vercel from '~/svg/Vercel.svg';


export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Home' />
      {/* <Seo /> */}

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <h1 className='mt-4'>
              Hello from Cloud IT Engineering portal
            </h1>
          </div>
        </section>
      </main>
    </Layout>
  );
}
