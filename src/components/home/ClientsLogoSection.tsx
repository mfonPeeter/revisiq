import Image from 'next/image';

const clientLogos = [
  { client: 'Goviral', imgPath: 'go-viral-logo.svg' },
  { client: 'Book Weenie', imgPath: 'book-weenie-logo.svg' },
  {
    client: 'Green Yields',
    imgPath: 'green-yields-logo.svg',
  },
  {
    client: 'Lotus Winery',
    imgPath: 'lotus-winery-logo.svg',
  },
];

const ClientsLogoSection = () => {
  return (
    <section className="relative mb-28 overflow-hidden py-7 pb-16">
      <div className="container relative mx-auto px-6">
        <div className="relative overflow-hidden">
          {/* Fade effect on edges */}
          <div className="absolute bottom-0 left-0 top-0 z-10 w-16 bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-white to-transparent"></div>

          {/* Infinite scrolling logos */}
          <div className="flex justify-center overflow-hidden">
            <div className="animate-marquee-smooth flex gap-x-16">
              {clientLogos.map(({ client, imgPath }) => (
                <Image
                  src={`/svgs/clients-logo/${imgPath}`}
                  key={client}
                  alt={client}
                  width={106}
                  height={106}
                  className="filter"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsLogoSection;
