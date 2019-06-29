import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
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
          <span className={cn(style.iconPlaceHolder, isOpen ? style.iconOpen : style.iconClosed)} />
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
