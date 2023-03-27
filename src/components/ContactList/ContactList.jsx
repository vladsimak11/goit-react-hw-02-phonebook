import css from './ContactList.module.css';

export const ContactList = ({visibleContact }) => {
  return (
    <ul>
        {visibleContact.map(({id, name, number}) => {
          return (
            <li className={css.item} key={id}>{name}: {number}</li>
          )
        })}
      </ul>
  )
}