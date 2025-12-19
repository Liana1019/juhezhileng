// // @ts-ignore
// import {
//   GradientText,
//   // HeroSocial,
//   Section,
// } from 'astro-boilerplate-components';

// // @ts-ignore
// const Hero = () => (
//   <Section>
//     <div className="flex items-center">
//       <div className="mr-8 flex h-[360px] w-[480px] min-w-[420px] items-center justify-center rounded-lg bg-white">
//         <img
//           className="h-[200px] w-[1000px] object-cover"
//           src="/assets/images/版头.png"
//           alt="Avatar image"
//           loading="lazy"
//         />
//       </div>
//       <div className="flex h-[340px] w-[860px] min-w-[760px] flex-col justify-center">
//         <span className="mb-4 text-3xl font-bold text-[#0a3859]"></span>
//         <p className="ml-4 text-lg text-gray-800">
//           <GradientText>联系方式：</GradientText>
//           <br />
//           王先生：18072745457
//           <br />
//           黄先生：18356097015
//         </p>
//       </div>
//     </div>
//   </Section>
// );

// export { Hero };

// @ts-ignore

// @ts-ignore
const Hero = () => (
  <section className="w-screen">
    <img
      src="/assets/images/版头.png"
      alt="Hero banner"
      className="h-[360px] w-screen object-cover"
      loading="lazy"
    />
  </section>
);

export { Hero };
