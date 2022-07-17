import Head from 'next/head';
import { Item } from '../components/Item';
import LogoIcon from '../components/LogoIcon';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Commerce IMG</title>
        <meta name='description' content='Commerce Landing Page in Nextjs' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <header className='p-5 bg-[#292961] shadow-slate-400'>
          <div className='flex items-center'>
            <LogoIcon />
            <p className='text-white ml-4'>Pattern Store</p>
          </div>
        </header>

        <section className='flex h-[500px]'>
          <div className='w-1/2 bg-[#d8dbe2] h-full flex justify-center items-center'>
            <h1 className='text-4xl px-4 lg:px-5 font-medium'>
              {' '}
              Uniform, Bigcommerce, and Cloudinary{' '}
              <span className='text-[#292961]'>powered</span> pattern store
            </h1>
          </div>
          <div className='w-1/2 h-full'>
            <img
              alt='hero'
              src='/hero.jpg'
              className='h-full w-full object-fit'
            />
          </div>
        </section>

        <section className='px-5 py-10'>
          <h3 className='mb-4 font-medium capitalize text-[#292961]'>
            featured products
          </h3>
          <div className='grid grid-col-1 lg:grid-cols-3 w-full h-96'>
            <Item
              img='1.jpg'
              title='Pattern 1 active layout'
              price='450'
              totalSold='900'
            />
            <Item
              img='2.jpg'
              title='Pattern 2 active layout'
              price='270'
              totalSold='700'
            />
            <Item
              img='3.jpg'
              title='Pattern 3 active layout'
              price='700'
              totalSold='2800'
            />
          </div>
        </section>
      </main>
    </div>
  );
}
