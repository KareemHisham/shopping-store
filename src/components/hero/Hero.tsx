import HeroImg from '../../../public/assets/collection/hero.png';
import HeroCard from './HeroCard';
const Hero = () => {
  return (
    <section className="w-full h-[calc(100vh-73px)] relative">
      <img
        src={HeroImg}
        alt="interior mockup wall decal background"
        className="w-full h-full object-cover"
      />
      <HeroCard />
    </section>
  );
};

export default Hero;
