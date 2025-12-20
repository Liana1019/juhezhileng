// src/partials/CompanyCredentials.tsx
import { Section } from 'astro-boilerplate-components';
import React from 'react';

// 示例数据，根据你的实际图片文件名修改
const credentialsData = [
  {
    title: '营业执照',
    titleEn: 'Business License',
    image: '/assets/images/营业执照.png',
  },
];

const CompanyCredentials: React.FC = () => {
  return (
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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <div>
            <div className="text-xl font-bold text-[#0a3859]">
              Company Qualification
            </div>
            <div className="text-sm font-medium text-[#0a3859]">公司资质</div>
          </div>
        </div>
      }
    >
      <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-3">
        {credentialsData.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={item.image}
              alt={item.titleEn}
              className="object-contain"
              style={{ width: '300px', height: '200px' }} // 图片大小可调
            />
            <p className="mt-2 text-base font-semibold">{item.title}</p>
            <p className="text-sm text-gray-600">{item.titleEn}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default CompanyCredentials;
