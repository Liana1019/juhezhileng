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
        <a href="https://juhezhileng.gys.cn/">
          <Logo
            icon={
              <svg
                className="mr-1 h-10 w-10 stroke-cyan-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M0 0h24v24H0z" stroke="none"></path>
                <rect x="3" y="12" width="6" height="8" rx="1"></rect>
                <rect x="9" y="8" width="6" height="12" rx="1"></rect>
                <rect x="15" y="4" width="6" height="16" rx="1"></rect>
                <path d="M4 20h14"></path>
              </svg>
            }
            name="杭州聚合制冷设备有限公司"
          />
        </a>

        <NavMenu>
          <span className="px-4 py-2 text-base font-medium text-black">
            公司简介
          </span>
          <span className="px-4 py-2 text-base font-medium text-black">
            产品中心
          </span>
          <span className="px-4 py-2 text-base font-medium text-black">
            联系方式
          </span>
        </NavMenu>
      </NavbarTwoColumns>
    </Section>
  );
};

export { Navbar };
