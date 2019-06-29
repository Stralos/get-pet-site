import React from 'react';
import Question from './Question';
import style from './FAQ.module.scss';

export default class FAQ extends React.PureComponent {
  render() {
    return (
      <div className={style.faq}>
        D.U.K.

        <ul className={style.questions}>
          <li className={style.question}>
            <Question
              head="Kaip naudotis get pet ?"
              question="Kaip naudotis get pet ?"
              answer="Super easy ;)"
            />
          </li>
          <li className={style.question}>
            <Question
              head="Kaip naudotis get pet ?"
              question="Kaip naudotis get pet ?"
              answer="Super easy ;)"
            />
          </li>
        </ul>
      </div>
    );
  }
}
