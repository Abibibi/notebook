import React, { useEffect } from 'react';

import Header from 'src/components/Header';
import LoggedWrapper from './Logged';

const thoughts = [
  'Je dois contacter Cécile pour qu\'elle me donne son bon plan sport',
  'Et si je me faisais un marathon Rougon-Macquart ?',
  'Je viens d\'écouter du Vivaldi... Je dois trouver un moyen de commencer le violon.',
];

const Logged = ({ thought, changeValue }) => {

  useEffect(() => {
    document.title = 'Bienvenue - Notes';
  });

  const handleChange = (event) => {
    const { name, value: inputValue } = event.target;
    changeValue(name, inputValue);
  };

  return (
    <>
      <Header />
      <LoggedWrapper>
        <form>
          <label htmlFor="thought">Une idée ? C'est noté !</label>
          <textarea
            id="thought"
            name="thought"
            title="Veuillez saisir votre idée"
            placeholder="Et si je me remettais à la peinture..."
            value={thought}
            onChange={handleChange}
          />
          <button type="submit">Sauvegarder</button>
        </form>
        <h3>Idées précédentes</h3>
        <ol>
          {thoughts.map((singleThought) => {
            return (
              <li>{singleThought}</li>
            );
          })}
        </ol>
      </LoggedWrapper>
    </>
  );
};

export default Logged;
