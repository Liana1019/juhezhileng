import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => {
  return (
    <Section>
      <NavbarTwoColumns>
        <a href="https://shop30a7397851794.1688.com/page/index.htm?spm=0.0.wp_pc_common_topnav_38229151.0">
          <Logo
            icon={
              <svg
                className="mr-1 h-10 w-10"
                style={{ stroke: '#1179c4' }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M0 0h24v24H0z" stroke="none" />
                <rect x="3" y="12" width="6" height="8" rx="1" />
                <rect x="9" y="8" width="6" height="12" rx="1" />
                <rect x="15" y="4" width="6" height="16" rx="1" />
                <path d="M4 20h14" />
              </svg>
            }
            name={<span style={{ color: '#1179c4' }}>Juhe Refrigeration</span>}
          />
        </a>

        <NavMenu>
          <a href="/" className="px-4 py-2 text-base font-medium text-black">
            公司简介
          </a>

          <a href="/" className="px-4 py-2 text-base font-medium text-black">
            产品中心
          </a>
          <a
            href="/contact/"
            className="px-4 py-2 text-base font-medium text-black"
          >
            联系方式
          </a>
        </NavMenu>
      </NavbarTwoColumns>
    </Section>
  );
};

export { Navbar };
