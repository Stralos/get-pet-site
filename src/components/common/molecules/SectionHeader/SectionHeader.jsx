import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import BigText from 'src/components/common/atoms/BigText';
import MiniText from 'src/components/common/atoms/MiniText';

export default class SectionHeader extends PureComponent {
  render() {
    const { head, className, subHead } = this.props;
    return (
      <Fragment>
        <BigText className={className} text={head} />
        {subHead && (
          <MiniText text={subHead} />
        )}
      </Fragment>
    );
  }
}
SectionHeader.propTypes = {
  head: PropTypes.string.isRequired,
  className: PropTypes.string,
  subHead: PropTypes.string,
};
SectionHeader.defaultProps = {
  className: null,
  subHead: null,
};
