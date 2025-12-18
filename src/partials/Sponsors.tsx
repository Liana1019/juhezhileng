import { Section } from 'astro-boilerplate-components';

// import betterStackLogo from '../../public/assets/images/better-stack-white.png';
// import clerkLogo from '../../public/assets/images/clerk.png';
// import crowdinLogo from '../../public/assets/images/crowdin-white.png';
// import nextlessLogo from '../../public/assets/images/nextlessjs.png';
// import sentryLogo from '../../public/assets/images/sentry-white.png';
// import tursoLogo from '../../public/assets/images/turso.png';

const Sponsors = () => (
  <Section
    title={
      <span style={{ color: '#0a3859' }} className="text-2xl">
        合作品牌
      </span>
    }
  >
    <table
      className="mx-auto border-collapse text-lg"
      style={{ borderSpacing: '2px' }}
    >
      <tbody>
        <tr>
          <td className="border-2 border-gray-300 p-0 align-middle">
            <a href="https://www.donper.com/" target="_blank">
              <img
                src="/assets/images/donper-logo.png"
                alt="东贝"
                width={160}
                height={80}
                className="mx-auto block"
                style={{ margin: '0 2px' }}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-0 align-middle">
            <a href="http://www.qjzl.com/" target="_blank">
              <img
                src="/assets/images/wansheng.png"
                alt="万胜"
                width={160}
                height={80}
                className="mx-auto block"
                style={{ margin: '0 2px' }}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-0 align-middle">
            <a href="https://www.embraco.com/">
              <img
                src="/assets/images/embraco-logo.png"
                alt="Embraco"
                width={160}
                height={120}
                className="mx-auto block"
                style={{ margin: '0 2px' }}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-0 align-middle">
            <a href="https://www.secop.com/cn/" target="_blank">
              <img
                src="/assets/images/secop.png"
                alt="思科普"
                width={160}
                height={80}
                className="mx-auto block"
                style={{ margin: '0 2px' }}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-0 align-middle">
            <a href="http://www.hznhzl.com/" target="_blank">
              <img
                src="/assets/images/nihong-logo.png"
                alt="霓虹"
                width={160}
                height={80}
                className="mx-auto block"
                style={{ margin: '0 2px' }}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-0 align-middle">
            <a href="" target="_blank">
              <img
                src="/assets/images/huayun-logo.png"
                alt="阿诺丹"
                width={160}
                height={80}
                className="mx-auto block"
                style={{ margin: '0 2px' }}
              />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </Section>
);

export { Sponsors };
