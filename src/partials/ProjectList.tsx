import { Section } from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section title={<span style={{ color: '#0a3859' }}>产品中心</span>}>
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
        </div>
      </div>
    </div>
  </Section>
);

export { ProjectList };
