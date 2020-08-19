import React from "react";

export default function User({ id, name, email }) {
  return (
    <tr>
      {/* here we call the data with the variable and the keys from the json data */}
      <td style={{padding: "5px"}}>{id}</td>
      <td style={{padding: "5px"}}>{name}</td>
      <td style={{padding: "5px"}}>{email}</td>
    </tr>
  );
}
