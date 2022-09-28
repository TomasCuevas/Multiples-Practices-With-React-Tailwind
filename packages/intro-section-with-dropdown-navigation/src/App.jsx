import { Content } from './components/Content';
import { Header } from './components/Header';
import { Hero } from './components/Hero';

export const App = () => {
  return (
    <main className="flex h-screen w-screen flex-col items-center">
      <Header />
      <div className="flex w-full max-w-[1500px] flex-col justify-center lg:w-[80%]  2xl:h-[70%] 2xl:flex-row-reverse">
        <Hero />
        <Content />
      </div>
    </main>
  );
};
