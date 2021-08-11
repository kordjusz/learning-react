import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon.js';
import {settings} from '../../data/dataStore';

class Column extends React.Component {
    
    state = {
      cards: this.props.cards || [],
    }

    static propTypes ={
      title: PropTypes.node.isRequired,
    }

    propTypes ={
      cards: PropTypes.node,
      icon: PropTypes.node,
    }
    
    addCard(title){
      this.setState(state => (
        {
          cards: [
            ...state.cards,
            {
              key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
              title,
            },
          ],
        }
      ));
    }

    render() { 
      return ( 
        <section className={styles.component}>
          <h3 className={styles.title}>{this.props.title}<span className={styles.icon}> <Icon name={this.props.icon} /></span></h3>
            
          {this.state.cards.map(({key, title}) => 
            <Card key={key} title={title}/>
          )}
          <div>
            <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
          </div>
        </section> );
    }
}
 
export default Column;
