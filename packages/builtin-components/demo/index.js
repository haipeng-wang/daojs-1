import Promise from 'bluebird';
import _ from 'lodash';
import metadataList from './meta';

function getDemoComp(key) {
  return import(/* webpackMode: "eager" */`./demo/${key}.demo`)
    .then(_.property('default'));
}

function getDemoSource(key) {
  return import(/* webpackMode: "eager" */`!raw-loader!./demo/${key}.demo.js`)
    .then(_.property('default'))
    .catch(() => '');
}

function getReadme(key) {
  return import(/* webpackMode: "eager" */`./md/${key}.md`)
    .then(_.property('default'))
    .catch(() => '');
}

export default Promise.map(metadataList, (metadata) => {
  const { key } = metadata;

  return Promise.all([
    getDemoComp(key),
    getDemoSource(key),
    getReadme(key),
  ]).then(([demoComp, demoSource, readme]) => ({
    demo: {
      Comp: demoComp,
      source: demoSource,
    },
    readme,
    ...metadata,
  }));
});
