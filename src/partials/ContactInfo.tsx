// src/partials/ContactInfo.tsx
import { Section } from 'astro-boilerplate-components';
import React from 'react';

const ContactInfo: React.FC = () => {
  return (
    <Section title={<span style={{ color: '#0a3859' }}>联系方式</span>}>
      <div className="space-y-3 text-lg">
        {/* 地址 */}
        <div className="flex items-start">
          <span
            className="min-w-[80px] font-semibold"
            style={{ color: '#0a3859' }}
          >
            地址：
          </span>
          <span>浙江省杭州市余杭区瓶窑镇西施坞19号后面100米</span>
        </div>

        {/* 电话 */}
        <div className="flex items-start">
          <span
            className="min-w-[80px] font-semibold"
            style={{ color: '#0a3859' }}
          >
            电话：
          </span>
          <div>
            <p>王先生：18072745457</p>
            <p>黄先生：18356097015</p>
          </div>
        </div>

        {/* 邮箱 */}
        <div className="flex items-start">
          <span
            className="min-w-[80px] font-semibold"
            style={{ color: '#0a3859' }}
          >
            邮箱：
          </span>
          <div>
            <p>674125529@qq.com</p>
            <p>563962133@qq.com</p>
          </div>
        </div>

        {/* 邮编 */}
        <div className="flex items-start">
          <span
            className="min-w-[80px] font-semibold"
            style={{ color: '#0a3859' }}
          >
            邮编：
          </span>
          <span>311100</span>
        </div>
      </div>
    </Section>
  );
};

export default ContactInfo;
