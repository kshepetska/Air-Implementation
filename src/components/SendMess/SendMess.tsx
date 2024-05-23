import React from 'react';
import './SendMess.scss';
import { inputFields } from '../../data/InputFields';

export const SendMess: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
  };

  return (
    <div className="send-mess">
      <form
        action="#"
        method="post"
        className="send-mess__form"
        onSubmit={handleSubmit}
      >
        <h3 className="send-mess__title">Send us a message</h3>

        {inputFields.map(({ type, name, placeholder }) => (
          <input
            key={name}
            type={type}
            name={name}
            placeholder={placeholder}
            className="send-mess__input"
            required
          />
        ))}

        <button type="submit" className="send-mess__button">
          Send
        </button>
      </form>
    </div>
  );
};
