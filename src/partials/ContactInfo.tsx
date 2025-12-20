// src/partials/ContactInfo.tsx
import { Section } from 'astro-boilerplate-components';
import React from 'react';

const ContactInfo: React.FC = () => {
  return (
    <Section
      title={
        <div className="mb-6 flex items-center gap-2">
          {' '}
          {/* 标题整体缩小，间距也稍微减小 */}
          <svg
            className="h-5 w-5" // 图标缩小一号
            // style={{ color: '#0a3859' }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {/* 电话/联系方式图标 */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <div>
            <div className="text-lg font-bold" style={{ color: '#0a3859' }}>
              Contact Information
            </div>
            <div
              className="text-xs font-medium"
              // style={{ color: '#0a3859', opacity: 0.8 }}
            >
              联系方式
            </div>
          </div>
        </div>
      }
    >
      <div className="space-y-3 text-base">
        {/* 地址 */}
        <div className="grid grid-cols-[120px_1fr] items-start gap-2">
          <span className="text-sm font-semibold" style={{ color: '#0a3859' }}>
            Address:
          </span>
          <div className="flex flex-col text-sm">
            <p>浙江省杭州市余杭区闲林街道孙家坞村5组38-1号3层301</p>
            <p>
              Room301，3F，Group5-38-1,Sunjiawu Village, Xianlin Street, Yuhang
              District, Hangzhou, Zhejiang
            </p>
          </div>
        </div>

        {/* 电话 */}
        <div className="grid grid-cols-[120px_1fr] items-start gap-2">
          <span className="text-sm font-semibold" style={{ color: '#0a3859' }}>
            Phone:
          </span>
          <div className="flex flex-col text-sm">
            <p>Mr. Wang: +86 180 7274 5457</p>
            <p>Mr. Huang: +86 183 5609 7015</p>
          </div>
        </div>

        {/* 邮箱 */}
        <div className="grid grid-cols-[120px_1fr] items-start gap-2">
          <span className="text-sm font-semibold" style={{ color: '#0a3859' }}>
            Email:
          </span>
          <div className="flex flex-col text-sm">
            <p>674125529@qq.com</p>
            <p>563962133@qq.com</p>
          </div>
        </div>

        {/* 邮编 */}
        <div className="grid grid-cols-[120px_1fr] items-start gap-2">
          <span className="text-sm font-semibold" style={{ color: '#0a3859' }}>
            Postal Code:
          </span>
          <span className="text-sm">311100</span>
        </div>
      </div>
    </Section>
  );
};

export default ContactInfo;
