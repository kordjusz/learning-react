import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js'
import PropTypes from 'prop-types';
import Column from '../Column/Column';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string,
    children: PropTypes.node,
  }
  static defaultProps = {
    children: <p className={styles.description}>I can do all the things!!!</p>,
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} backgroundImage={this.props.image}/>
        {this.props.children}
        <div className={styles.columns}>
          <Column columnTitle='Animals' />
          <Column columnTitle='Plants' />
          <Column columnTitle='Minerals' />
        </div>
      </section>
    )
  }
}

export default List;
