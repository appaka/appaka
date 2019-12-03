import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Status } from "../../types/types";

interface StatusSelectProps {
  value: string;
  setFieldValue: any;
}

const items: Status[] = ["new", "wip", "done", "rejected", "closed"];

const StatusSelect = ({ value, setFieldValue }: StatusSelectProps) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Status</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        onChange={evt => setFieldValue("status", evt.target.value)}
      >
        {items.map(item => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default StatusSelect;
