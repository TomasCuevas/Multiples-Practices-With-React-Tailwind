import { ClientTestimonials } from "./components/ClientTestimonials";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { GraphicDesign } from "./components/GraphicDesign";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Photography } from "./components/Photography";
import { StandOut } from "./components/StandOut";
import { StandOutText } from "./components/StandOutText";
import { Transform } from "./components/Transform";
import { TransformText } from "./components/TransformText";

export const App = () => {
  return (
    <main className="">
      <Header />
      <Hero />
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <Transform />
        <TransformText />
        <StandOut />
        <StandOutText />
        <GraphicDesign />
        <Photography />
      </div>
      <ClientTestimonials />
      <Gallery />
      <Footer />
    </main>
  );
};
