import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';


class Card extends React.Component {
    
    render() { 
        return ( 
        <section className={styles.component}>
            <p>{this.props.title}</p>
        </section> );
    }
}
 
export default Card;