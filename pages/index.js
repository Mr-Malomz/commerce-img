import Head from 'next/head';
import { Item } from '../components/Item';
import LogoIcon from '../components/LogoIcon';
import { CanvasClient, EnhancerBuilder, enhance } from '@uniformdev/canvas';
import { CANVAS_BIGCOMMERCE_PARAMETER_TYPES } from '@uniformdev/canvas-bigcommerce';
import { bigCommerceEnhancer } from '../components/utils';

export default function Home({ composition }) { //modify
  const {slots} = composition //add
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
              src={slots.ecomproduct[0].parameters.img.value[0].url}
              className='h-full w-full object-fit'
            />
          </div>
        </section>

        <section className='px-5 py-10'>
          <h3 className='mb-4 font-medium capitalize text-[#292961]'>
            featured products
          </h3>
          <div className='grid grid-col-1 lg:grid-cols-3 w-full h-96'>
            { slots.ecomproduct.slice(1).map((item, i) => (
              <Item
              key={i}
              img={item.parameters.img.value[0].url}
              title={item.parameters.details.value.name}
              price={item.parameters.details.value.price}
            />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  //fetching data from uniform
  const client = new CanvasClient({
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  });

  const { composition } = await client.getCompositionBySlug({
    slug: 'homepage',
  });

  //enhancing with bigcommerce
  const enhancers = new EnhancerBuilder().parameterType(
    CANVAS_BIGCOMMERCE_PARAMETER_TYPES,
    bigCommerceEnhancer
  );

  await enhance({ composition, enhancers, context: {} });

  return {
    props: {
      composition,
    },
  };
}
