import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Arrow from 'src/assets/icons/Arrow';
import style from './Question.module.scss';

export default class Question extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.onClick = this.onClick.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }

  onClick() {
    const { isOpen } = this.state;

    this.setState({
      isOpen: !isOpen,
    });
  }

  renderContent() {
    const { question, answer } = this.props;
    return (
      <React.Fragment>
        <div className={style.question}>
          {question}
        </div>
        <div className={style.answer}>
          {answer}
        </div>
      </React.Fragment>
    );
  }

  render() {
    const { head } = this.props;
    const { isOpen } = this.state;
    return (
      <div className={style.container}>
        <button className={style.button} onClick={this.onClick} type="button">
          <Arrow
            className={classnames(style.arrowButton, isOpen ? style.isOpen : style.isClosed)}
          />
          {head}
        </button>
        {isOpen && this.renderContent()}
      </div>
    );
  }
}

Question.propTypes = {
  head: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};
