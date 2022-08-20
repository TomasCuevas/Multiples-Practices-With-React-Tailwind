export const Client = ({ img, testimonial, name, occupation }) => {
  return (
    <article className="flex flex-col items-center gap-4">
      <img className="h-16 w-16 rounded-full" src={img} alt="testimonial-img" />
      <p className="max-w-[400px] text-center font-medium leading-7 text-gray-700">
        {testimonial}
      </p>
      <h3 className="flex flex-col gap-1 text-center font-bold text-gray-900">
        {name}
        <span className="font-light text-[#aaa]">{occupation}</span>
      </h3>
    </article>
  );
};
