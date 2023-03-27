import css from './ContactList.module.css';

export const ContactList = ({visibleContact, deleteContact }) => {
  return (
    <ul className={css.list}>
        {visibleContact.map(({id, name, number}) => {
          return (
            <li className={css.item} key={id}>
              {name}: {number}
              <button
                onClick={() => deleteContact(id)}
                className={css.delete}
              >
                Delete
              </button>
            </li>
          )
        })}
      </ul>
  )
}