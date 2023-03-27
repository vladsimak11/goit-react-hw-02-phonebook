import React, { Component } from "react";
import css from './App.module.css'
import { nanoid } from 'nanoid';

export class App extends Component  {
  state = {
    contacts: [],
    name: '',
    number: ''
  }

  addContacts = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }))
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.addContacts(name, number);
    this.reset();
  };

  reset = () => {
    this.setState({ 
      name: '',
      number: ''
    });
  };

  render() {
    const { contacts, name, number } = this.state;

    return (
      <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
        paddingTop: 20
      }}
    >
      <h1>Phonebook</h1>
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            placeholder="Enter your name"
            name="name"
            value = {name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className={css.label}>
          Number
          <input
            className={css.input}
            type="text"
            placeholder="Enter your number"
            name="number"
            value = {number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button className={css.button} type="submit">Add contact</button>
      </form>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(({id, name, number}) => {
          return (
            <li className={css.item} key={id}>{name}: {number}</li>
          )
        })}
      </ul>
    </div>
    )
  };
};
