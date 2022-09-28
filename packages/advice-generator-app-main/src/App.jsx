import { useEffect, useState } from 'react';

export const App = () => {
  const [quote, setQuote] = useState();
  const [quoteId, setQuoteId] = useState();

  const voices = speechSynthesis.getVoices();

  const speechMessage = new SpeechSynthesisUtterance();
  speechMessage.volume = 1;
  speechMessage.voice = voices[2];

  const onSpeak = () => {
    speechSynthesis.resume();
    speechSynthesis.speak(speechMessage);
  };

  const onPause = () => {
    speechSynthesis.cancel();
  };

  const getQuote = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const { slip } = await response.json();
    const { advice, id } = slip;

    setQuote(advice);
    setQuoteId(id);

    speechMessage.text = advice;
    onSpeak();
  };

  return (
    <main className="flex h-screen w-screen items-center justify-center bg-[#202632]">
      <section className="relative flex w-[90%] max-w-[500px] flex-col items-center gap-5 rounded-xl bg-[#313a49] px-4 py-10 sm:gap-8 sm:px-6">
        {quoteId && (
          <>
            <span className="text-sm font-bold uppercase tracking-[3px] text-[#4ad093]">{`advice #${quoteId}`}</span>
            <p className="text-center text-3xl font-medium text-[#c6dbe0] sm:text-4xl">{`"${quote}".`}</p>
            <picture>
              <source
                srcSet="pattern-divider-desktop.svg"
                media="(min-width: 640px)"
              />
              <img
                alt="separator"
                className="mb-6 h-4 w-full cursor-pointer sm:mb-8"
                onClick={onPause}
                src="pattern-divider-mobile.svg"
              />
            </picture>
          </>
        )}
        <button
          onClick={getQuote}
          className="absolute left-[calc(50%_-_35px)] bottom-[calc(0px_-_35px)] grid h-[70px] w-[70px] place-items-center rounded-full border-none bg-[#4ad093] outline-none transition-all duration-100 hover:shadow-2xl hover:shadow-[#4ad093]"
        >
          <img src="icon-dice.svg" alt="button" />
        </button>
      </section>
    </main>
  );
};
