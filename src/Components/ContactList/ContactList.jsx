import { Component } from 'react/cjs/react.production.min';
import { nanoid } from 'nanoid';
import s from './ContactList.module.css'

class ContactList extends Component {

  render() {
    
  return (
      <ul className={s.ContactList}>
          {this.props.contacts.map(contact => (
              <li key={nanoid()}
                  className={s.item}>{contact.name}:{contact.number}</li>
          )
          )}
          
   </ul>
  );}
}

export default ContactList;