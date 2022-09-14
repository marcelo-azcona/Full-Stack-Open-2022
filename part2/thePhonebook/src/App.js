import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import PersonForm from './components/PersonForm';
import Button from './components/Button';
import Notification from './components/Notification';
import {
  getAll,
  createPhoneNumber,
  deletePhoneNumber,
  updatePhoneNumber,
} from './services/phoneServices';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filteredPersons, setFilteredPersons] = useState(persons);
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  const resetInputs = () => {
    setNewName('');
    setNewNumber('');
  };

  const onChangeNameHandler = (e) => {
    setNewName(e.target.value);
  };

  const onChangeNumberHandler = (e) => {
    setNewNumber(e.target.value);
  };

  const onDeletePhoneHandler = (id) => {
    const [personToDelete] = persons.filter((persons) => persons.id === id);
    const remainingPersons = persons.filter((persons) => persons.id !== id);

    const deleteFromServer = async () => {
      try {
        await deletePhoneNumber(
          `http://localhost:3001/persons/${personToDelete.id}`
        );
      } catch (error) {
        setError(personToDelete.name + 'was already delete');
      }
    };

    setPersons(remainingPersons);
    deleteFromServer();
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const checkSamePerson = persons.find((item) => item.name === newName);

    const submittedPerson = {
      name: newName,
      number: newNumber,
    };

    const addPhoneNumberToServer = async () => {
      const newPhone = await createPhoneNumber(
        'http://localhost:3001/persons',
        submittedPerson
      );

      setPersons(() => persons.concat(newPhone));
      setSuccessMessage(newPhone.name + ' was added to the book');
    };

    if (checkSamePerson) {
      const updateNumberToServer = async () => {
        try {
          await updatePhoneNumber(
            `http://localhost:3001/persons/${checkSamePerson.id}`,
            submittedPerson
          );

          setSuccessMessage(submittedPerson.name + ' was updated');
        } catch (error) {
          setError(error.message);
        }
      };

      updateNumberToServer();

      persons[checkSamePerson.id - 1] = { ...submittedPerson };

      setPersons(() => [...persons]);
      resetInputs();
    } else {
      addPhoneNumberToServer();
      resetInputs();
    }
  };

  const onFilterHandler = (e) => {
    const filteredArray = persons.filter((item) =>
      item.name.includes(e.target.value)
    );

    setFilteredPersons(filteredArray);
  };

  useEffect(() => {
    setFilteredPersons(persons);
  }, [persons]);

  useEffect(() => {
    const getPhoneNumbers = async () => {
      try {
        const phoneData = await getAll('http://localhost:3001/persons');
        setPersons(phoneData);
      } catch (error) {
        setError(error.message);
      }
    };

    getPhoneNumbers();
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification error={error} message={successMessage} />
      <SearchBar onFilter={onFilterHandler} />
      <PersonForm
        onSubmit={onSubmitHandler}
        onChangeName={onChangeNameHandler}
        onChangeNumber={onChangeNumberHandler}
        nameValue={newName}
        numberValue={newNumber}
      />
      <h2>Numbers</h2>

      {filteredPersons.map((person) => (
        <p key={person.id}>
          {person.name} {person.number}
          <Button id={person.id} onDeletePhone={onDeletePhoneHandler}>
            Delete
          </Button>
        </p>
      ))}
    </div>
  );
};

export default App;
