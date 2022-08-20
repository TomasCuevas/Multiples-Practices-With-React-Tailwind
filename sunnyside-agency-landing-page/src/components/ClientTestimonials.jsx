import { Client } from './Client';

const testimonials = [
  {
    id: 1,
    name: 'Emily R.',
    img: 'image-emily.jpg',
    testimonial:
      'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
    occupation: 'Marketing Director',
  },
  {
    id: 2,
    name: 'Thomas S.',
    img: 'image-thomas.jpg',
    testimonial:
      "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
    occupation: 'Chief Operating Officer',
  },
  {
    id: 3,
    name: 'Jennie F.',
    img: 'image-jennie.jpg',
    testimonial:
      'Incredible end result! Our sales increased over 400% when we worked with Synnyside. Highly recommended!',
    occupation: 'Business Owner',
  },
];

export const ClientTestimonials = () => {
  return (
    <section className="2xl: mt-10 h-full w-full lg:mt-16 xl:mt-20">
      <div className="m-auto flex w-10/12 flex-col items-center py-10">
        <h2 className="text-center text-xl font-bold uppercase tracking-[4px] text-gray-400">
          Client Testimonials
        </h2>

        <div className="my-8 grid w-full grid-rows-3 gap-4 lg:grid-cols-3 lg:grid-rows-1">
          {testimonials.map((testimonial) => (
            <Client key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
