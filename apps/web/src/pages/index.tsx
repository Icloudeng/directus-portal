import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

// import Vercel from '~/svg/Vercel.svg';


export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Home' />
      {/* <Seo /> */}

      <main>
        <section className=''>
          <div className='layout flex flex-col items-center'>
            <h1 className='dark:text-dark text-blue-500'>
              Hello from Cloud IT Engineering portal
            </h1>
          </div>
        </section>
      </main>
    </Layout>
  );
}
