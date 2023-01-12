import React, { useState } from "react";

const AddContact = () => {
  let [name, setName] = useState("");
  let [surName, setSurname] = useState("");
  let [phone, setPhone] = useState("");

  return (
    <div>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Имя"
      />
      <input
        onChange={(e) => setSurname(e.target.value)}
        type="text"
        placeholder="Фамилия"
      />
      <input
        onChange={(e) => setPhone(e.target.value)}
        type="text"
        placeholder="Номер телефона"
      />
      <button>Add Contact</button>
    </div>
  );
};

export default AddContact;
