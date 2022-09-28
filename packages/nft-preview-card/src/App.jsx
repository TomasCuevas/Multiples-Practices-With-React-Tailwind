import { CardContent } from './components/CardContent';
import { CardCreator } from './components/CardCreator';
import { CardImage } from './components/CardImage';

export const App = () => {
  return (
    <main className="grid h-screen w-screen place-content-center place-items-center bg-[#041932] ">
      <article className="flex w-11/12 max-w-sm flex-col gap-5 rounded-lg bg-[#202D3C] p-7">
        <CardImage />
        <CardContent />
        <CardCreator />
      </article>
    </main>
  );
};
