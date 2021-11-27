import { Component } from 'react/cjs/react.production.min';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css'

class ContactForm extends Component {
    state = {
      name: '',
      number: '',
    }
    nameInputId = nanoid();
    numberInputId = nanoid();

    handleChange = e => {
        const { name, value } = e.currentTarget
        this.setState({
            [name]: value
        }
        )
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '' })
    };
  
    render() {
    
    return (
      <form className={s.ContactForm}
         onSubmit={this.handleSubmit}
      >
          <label htmlFor={this.nameInputId}>
          Name
            <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                id={this.nameInputId}
            />
            </label>
            
            <label htmlFor={this.numberInputId}>
                Number
                <input
                    type="tel"
                    name="number"
                    value={this.state.number}
                    onChange={this.handleChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    id={this.numberInputId}
                />
            </label>
          <button type="submit">Add contact</button>
     </form>
    );}
}

export default ContactForm;