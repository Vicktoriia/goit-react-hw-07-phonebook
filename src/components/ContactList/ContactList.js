import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/selectors';
import { List} from './ContactList.styled';
import ContactListItem from '../ContactList/ContactItem';
import Notification from '../Notifications/Notifications';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (filteredContacts.length === 0) {
    return <Notification message="There is no contacts" />;
  }

  return (
    <div>
      <List>
        {filteredContacts.map((contact, id) => (
          <ContactListItem key={id} contact={contact} />
        ))}
      </List>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
};

export default ContactList;
