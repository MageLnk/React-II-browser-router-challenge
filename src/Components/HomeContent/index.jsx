// Components
import CarouselCakes from "./CarouselCakes";
// App
const HomeContent = () => {
  return (
    <div className="home-content-container">
      <h1>
        Bienvenido a <span>Happy Cake</span>
      </h1>
      <span className="home-content-subtitle">El lugar donde se hacen los pateles felices</span>
      <div className="home-content-carousel-container">
        <CarouselCakes />
      </div>
      <span className="home-content-subtitle" style={{ fontWeight: "700" }}>
        ¡Ven y únete a la felicidad!
      </span>
    </div>
  );
};

export default HomeContent;
