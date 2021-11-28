import { Component } from 'react/cjs/react.production.min';
import { nanoid } from 'nanoid';
import s from './ContactList.module.css'

class ContactList extends Component {

  render() {
    
  return (
      <ul className={s.ContactList}>
          {this.props.contacts.map(contact => (
              <li key={nanoid()}
              className={s.item}><span className={s.star}>&#10031;</span>{contact.name}:<span className={s.number}>{contact.number}</span>
              <button className={s.btn}
                onClick={() => this.props.onDeleteBtn(contact.name)}
                type="button">Delete</button>
            </li>
          )
          )}
          
   </ul>
  );}
}

export default ContactList;