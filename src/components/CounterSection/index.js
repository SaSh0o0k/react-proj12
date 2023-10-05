import React, { Component } from 'react';
// import StepCounter1 from './StepCounter1';
import StepCounter2 from './StepCounter2';
import styles from './CounterSection.module.scss';

class CounterSection extends Component {
  render() {
    return (
      <section className={styles.counterSectionContainer}>
        <h2>COUNTER SECTION:</h2>
        {/* <StepCounter1 /> */}
        <StepCounter2 />

      </section>
    );
  }
}

export default CounterSection;
