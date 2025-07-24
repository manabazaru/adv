'use client';

import React from 'react';
import FilledTab from '@/components/common/elements/FilledTab';

// テスト用のタブデータを定義
const tabProps = [
  {
    title: 'Home',
    eventKey: 'home',
    content: <div>Welcome to the Home tab!</div>,
  },
  {
    title: 'Profile',
    eventKey: 'profile',
    content: <div>This is your Profile tab.</div>,
  },
  {
    title: 'Contact',
    eventKey: 'contact',
    content: <div>Contact us at contact@example.com.</div>,
  },
];

// FilledTab コンポーネントに渡す設定
const tabsProp = {
  activeKey: 0,              // 初期表示するタブのインデックス
  id: 'filled-tab-test',     // <Tabs> の id 属性
  className: 'mb-3',         // CSS クラス
  variant: 'pills',          // react-bootstrap の variant
  color: 'primary',          // カスタムカラー（必要に応じて FilledTab が対応）
};

export default function FilledTabTestPage() {
  return (
    <div style={{ padding: '1rem' }}>
      <h2>FilledTab コンポーネント テストページ</h2>
      <FilledTab tabProps={tabProps} tabsProp={tabsProp} />
    </div>
  );
}
