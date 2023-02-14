import Section from '../components/Section/Section';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import Loader from '../components/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectLoading, selectError } from '../redux/selectors';
import { Div } from './Phonebook.styled';

function Phonebook() {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <Div>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        {isLoading && !error && <Loader />}
        <ContactList />
      </Section>
    </Div>
  );
}

export default Phonebook;
