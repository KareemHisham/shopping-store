import HeroImg from '../../../public/assets/collection/hero.png';
const Hero = () => {
  return (
    <section className="w-full h-[calc(100vh-73px)] relative">
      <img
        src={HeroImg}
        alt="interior mockup wall decal background"
        className="w-full h-full object-cover"
      />
    </section>
  );
};

export default Hero;
