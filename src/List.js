import React from "react";
import { FiDelete } from "react-icons/fi";
const List = (props) => {
  return (
    <ul className="user-list">
      {props.data.map((person) => (
        <li key={person.id}>
          <Person {...person} removeItem={props.removeItem} />
        </li>
      ))}
    </ul>
  );
};

const Person = ({ id, nome, stato, img, removeItem }) => {
  return (
    <article>
      <img src={img} alt={nome} className="person-img" />
      <div className="person-info">
        <div className="person-action">
          <h4>{nome}</h4>
          <button className="btn">
            <FiDelete className="icon" onClick={() => removeItem(id)} />
          </button>
        </div>
        <p>{stato}</p>
      </div>
    </article>
  );
};

export default List;
