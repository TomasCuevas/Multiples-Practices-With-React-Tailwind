import { Bottom } from './components/Bottom';
import { Middle } from './components/Middle';
import { Top } from './components/top';

export const App = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-[#f7e9dc] px-[5%]">
      <article className="flex w-full max-w-[500px] flex-col">
        <Top />
        <Middle />
        <Bottom />
      </article>
    </main>
  );
};
