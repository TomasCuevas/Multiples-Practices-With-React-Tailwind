import { CardContent } from "./components/CardContent";
import { CardCreator } from "./components/CardCreator";
import { CardImage } from "./components/CardImage";

export const App = () => {
  return (
    <main className="h-screen w-screen grid place-content-center place-items-center bg-[#041932] ">
      <article className="w-11/12 max-w-sm p-7 bg-[#202D3C] rounded-lg flex flex-col gap-5">
        <CardImage />
        <CardContent />
        <CardCreator />
      </article>
    </main>
  );
};
