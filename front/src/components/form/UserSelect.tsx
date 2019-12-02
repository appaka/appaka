import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { User } from "../../types/types";

const users: User[] = [
  {
    id: 1,
    email: "hello@gmail.com",
    firstName: "hello",
    lastName: "vlad"
  },
  {
    id: 1,
    email: "hello@gmail.com",
    firstName: "hello",
    lastName: "javier"
  },
  {
    id: 1,
    email: "hello@gmail.com",
    firstName: "hello",
    lastName: "loick"
  }
];

const UserSelect: React.FC = () => {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={users}
      getOptionLabel={(option: User) =>
        `${option.firstName} ${option.lastName}`
      }
      style={{ width: 300 }}
      renderInput={params => (
        <TextField {...params} label="choose user" fullWidth />
      )}
    />
  );
};

export default UserSelect;
