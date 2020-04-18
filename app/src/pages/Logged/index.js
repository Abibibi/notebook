import React, { useEffect } from 'react';

import Header from 'src/components/Header';
import LoggedWrapper from './Logged';


const Logged = ({
  valueChanged,
  newThought,
  thoughtPosted,
  thoughtsCaught, 
  thoughts,
}) => {

  useEffect(() => {
    document.title = 'Bienvenue - Notes';
  });

  useEffect(() => {
    thoughtsCaught()
  }, []);

  const handleChange = (event) => {
    const { name, value: inputValue } = event.target;
    valueChanged(name, inputValue);
  };

  const handleSubmit = (event) => {
    console.log(thoughts);
    event.preventDefault();
    
    if (!newThought) return;

    thoughtPosted();
  }

  return (
    <>
      <Header />
      <LoggedWrapper>
        <form onSubmit={handleSubmit}>
          <label htmlFor="newThought">Une idée ? C'est noté !</label>
          <input
            id="newThought"
            name="newThought"
            title="Veuillez saisir votre idée"
            placeholder="Et si je me remettais à la peinture..."
            value={newThought}
            onChange={handleChange}
          />
          <button type="submit">Sauvegarder</button>
        </form>
        <h3>Idées sauvegardées</h3>
        <ul>
          {thoughts && thoughts.slice().reverse().map(({ _id, content }) => {
            return (
              <li key={_id}>{content}</li>
            );
          })}
        </ul>
        {thoughts && !thoughts.length && (<div>Vos pensées sauvegardées apparaîtront ici.</div>)}
      </LoggedWrapper>
    </>
  );
};

export default Logged;
