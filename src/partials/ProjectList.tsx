import { Section } from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <div className="mb-8 flex items-center gap-3">
        <svg
          className="h-6 w-6 text-[#0a5891]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
        <div>
          <div className="text-xl font-bold" style={{ color: '#0a3859' }}>
            Product Center
          </div>
          <div className="text-sm font-medium" style={{ color: '#0a3859' }}>
            产品中心
          </div>
        </div>
      </div>
    }
  >
    <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
      {/* 产品卡片1 */}
      <div className="flex h-80 flex-col overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="flex grow items-center justify-center px-[10%] pt-4">
          <img
            src="/assets/images/R290.png"
            alt="杭州钱江万胜R290冰箱冰柜压缩机"
            className="h-full w-full object-contain"
            style={{ maxHeight: '100%', maxWidth: '100%' }}
          />
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <h3 className="mb-2 text-center text-lg font-bold text-black">
            杭州钱江万胜R290冰箱冰柜压缩机
          </h3>
          <p className="text-center text-sm text-gray-600">
            Hangzhou Qianjiang Wansheng R290 Refrigerator
          </p>
        </div>
      </div>
      {/* 产品卡片2 */}
      <div className="flex h-80 flex-col overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="flex grow items-center justify-center px-[10%] pt-4">
          <img
            src="/assets/images/R600A.png"
            alt="东贝R600A冰箱冰柜压缩机"
            className="h-full w-full object-contain"
            style={{ maxHeight: '100%', maxWidth: '100%' }}
          />
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <h3 className="mb-2 text-center text-lg font-bold text-black">
            东贝R600A冰箱冰柜压缩机
          </h3>
          <p className="text-center text-sm text-gray-600">
            Donper R600A Refrigerator & Freezer Compressor
          </p>
        </div>
      </div>
      {/* 产品卡片3 */}
      <div className="flex h-80 flex-col overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="flex grow items-center justify-center px-[10%] pt-4">
          <img
            src="/assets/images/R134A.png"
            alt="东贝R134A冰箱冰柜压缩机"
            className="h-full w-full object-contain"
            style={{ maxHeight: '100%', maxWidth: '100%' }}
          />
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <h3 className="mb-2 text-center text-lg font-bold text-black">
            东贝R134A冰箱冰柜压缩机
          </h3>
          <p className="text-center text-sm text-gray-600">
            Donper R134A Refrigerator & Freezer Compressor
          </p>
        </div>
      </div>
      {/* 产品卡片4 */}
      <div className="flex h-80 flex-col overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="flex grow items-center justify-center px-[10%] pt-4">
          <img
            src="/assets/images/东贝R290.png"
            alt="东贝R290冰箱冰柜压缩机"
            className="h-full w-full object-contain"
            style={{ maxHeight: '100%', maxWidth: '100%' }}
          />
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <h3 className="mb-2 text-center text-lg font-bold text-black">
            东贝R290冰箱冰柜压缩机
          </h3>
          <p className="text-center text-sm text-gray-600">
            Donper R290 Refrigerator & Freezer Compressor
          </p>
        </div>
      </div>
    </div>
  </Section>
);

export default ProjectList;
