import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import Slider from '../components/Slider';
import About from '../components/About';
import Footer from '../components/Footer';

export default function Home() {
  const staticFlowers = [
    { id: 1, name: 'Ramos de Rosas', image: '/images/flower1.jpg', price: '$45.00' },
    { id: 2, name: 'Tulipanes Frescos', image: '/images/flower2.jpg', price: '$38.00' },
    { id: 3, name: 'Orquídeas Elegantes', image: '/images/flower3.jpg', price: '$55.00' },
    { id: 4, name: 'Girasoles Brillantes', image: '/images/flower4.jpg', price: '$42.00' },
  ];

  const sliderFlowers = [
    { id: 5, name: 'Arreglo Primaveral', image: '/images/flower1.jpg' },
    { id: 6, name: 'Centro de Mesa', image: '/images/flower2.jpg' },
    { id: 7, name: 'Ramo de Novia', image: '/images/flower3.jpg' },
    { id: 8, name: 'Plantas de Interior', image: '/images/flower4.jpg' },
    { id: 9, name: 'Cactus Decorativos', image: '/images/flower5.jpg' },
  ];

  return (
    <div>
      <Head>
        <title>Florería Bella - Flores Frescas y Hermosas</title>
        <meta name="description" content="Venta de flores frescas y arreglos florales personalizados" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      
      <main>
        <section id="productos">
          <Gallery flowers={staticFlowers} />
        </section>
        
        <section id="destacados">
          <Slider flowers={sliderFlowers} />
        </section>
        
        <section id="nosotros">
          <About />
        </section>
      </main>

      <Footer />
    </div>
  );
}