import React from 'react';
import ReactDOM from 'react-dom';
import {
  DaoFrame,
  ComponentRegistry,
} from '@daojs/ui';
import components from './components';
import {
  Fundamentals,
  AIOperations,
} from './stories/index';

ComponentRegistry.register(components);
ReactDOM.render(
  document.getElementById('container'),
  <DaoFrame
    title="索迪斯大数据平台"
    logo="/img/sodex.png"
    categories=[{
      name: '基础面板',
      stories: Fundamentals,
    }, {
      name: '智能运营助手',
      stories: AIOperations,
    }],
  />,
);