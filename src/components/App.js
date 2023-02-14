import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { fetchContacts } from '../redux/operations';
import  Phonebook  from '../Pages/Phonebook';

 const App = () => {
   const dispatch = useDispatch();

   useEffect(() => {
     dispatch(fetchContacts());
   }, [dispatch]);

   return (
     <>
       <Phonebook />
     </>
   );
 };

export default App;
