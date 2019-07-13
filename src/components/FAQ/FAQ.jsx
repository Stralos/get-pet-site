import React from 'react';
import SectionHeader from 'src/components/common/molecules/SectionHeader';
import Question from './Question';
import style from './FAQ.module.scss';

export default class FAQ extends React.PureComponent {
  render() {
    return (
      <div className={style.faq}>
        <SectionHeader className={style.head} head="D.U.K." />
        <ul className={style.questions}>
          <li className={style.question}>
            <Question
              head="Kaip naudotis Get Pet ?"
              question="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
              answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
            />
          </li>
          <li className={style.question}>
            <Question
              head="Kaip naudotis Get Pet ?"
              question="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
              answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
          </li>
        </ul>
      </div>
    );
  }
}
