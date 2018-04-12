import React, { PureComponent } from 'react';
import PropTypes, { any } from 'prop-types';
import _ from 'lodash';
import { Card } from 'antd';
import config2Cell from '../utils/config-to-cell';

export default class CardContainer extends PureComponent {
  render() {
    const {
      actions,
      childItems,
    } = this.props;
    const extras = _.map(actions, action => config2Cell(action));
    return (
      <div
        {...this.props}
      >
        <Card
          title={this.props.title}
          extra={extras}
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            cursor: 'move',
          }}
          bodyStyle={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            role="presentation"
            onMouseDown={(e) => { e.stopPropagation(); }}
            onMouseUp={(e) => { e.stopPropagation(); }}
            style={{
              cursor: 'initial',
              flex: 1,
            }}
          >
            {_.map(childItems, item => config2Cell(item))}
          </div>
        </Card>
      </div>
    );
  }
}

CardContainer.propTypes = {
  actions: PropTypes.arrayOf(any),
  childItems: PropTypes.node,
  title: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.objectOf(any),
};

CardContainer.defaultProps = {
  actions: [],
  childItems: [],
  title: '',
  className: '',
  style: {},
};