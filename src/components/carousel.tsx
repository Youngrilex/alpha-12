import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../index.css';
import 'swiper/css/effect-fade';

interface Slide {
  image: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    image: '/image-1.jpg',
    title: 'Latest News & Updates',
    description:
      'Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.',
  },
  {
    image: '/image-2.jpg',
    title: 'Latest News & Updates',
    description:
      'Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.',
  },
  {
    image: '/image-3.jpg',
    title: 'Latest News & Updates',
    description:
      'Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.',
  },
];


const SlideItem: React.FC<Slide> = ({ image, title, description }) => (
  <div className="relative">
    <img src={image} alt={title} className="w-full h-[320px] object-cover object-top" />
    <div className="absolute bottom-6 left-6 text-white">
      <h2 className="text-sm font-semibold">{title}</h2>
      <p className="text-xs font-normal mt-1">{description}</p>
    </div>
  </div>
);

export function CustomCarousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, EffectFade]}
      navigation
      pagination={{ clickable: true }}
      loop={true} 
      effect="fade"
      fadeEffect={{ crossFade: true }} 
      className="w-full rounded-[5px]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <SlideItem {...slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
