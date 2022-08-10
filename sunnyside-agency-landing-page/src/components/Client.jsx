export const Client = ({ img, testimonial, name, occupation }) => {
  return (
    <article className="flex flex-col items-center gap-4">
      <img className="w-16 h-16 rounded-full" src={img} alt="testimonial-img" />
      <p className="font-medium leading-7 text-center text-gray-700 max-w-[400px]">
        {testimonial}
      </p>
      <h3 className="flex flex-col gap-1 font-bold text-center text-gray-900">
        {name}
        <span className="font-light text-[#aaa]">{occupation}</span>
      </h3>
    </article>
  );
};
