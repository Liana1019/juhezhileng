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
      <div className="mb-8 flex items-center gap-3">
        <svg
          className="h-6 w-6"
          style={{ color: '#0a3859' }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4"
            transform="translate(0, 4)"
          />
        </svg>
        <div>
          <div className="text-xl font-bold" style={{ color: '#0a3859' }}>
            Partner Brands{' '}
          </div>
          <div
            className="text-sm font-medium"
            style={{ color: '#0a3859', opacity: '0.8' }}
          >
            合作品牌
          </div>
        </div>
      </div>
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
                src="/assets/images/secop-logo.png"
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

export default Sponsors;
