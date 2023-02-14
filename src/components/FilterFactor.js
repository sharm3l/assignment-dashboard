import * as React from "react";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function FilterFactor({ setFilter }) {
  const [value, setValue] = React.useState("all");

  const handleChange = (event) => {
    // set my central filter
    setFilter(event.target.value);
    // set component state
    // example at https://mui.com/material-ui/react-radio-button/
    setValue(event.target.value);
  };

  return (
    <Box p={4}>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">Filter</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="all" control={<Radio />} label="Both" />
          <FormControlLabel value="fun" control={<Radio />} label="Fun" />
          <FormControlLabel
            value="difficulty"
            control={<Radio />}
            label="Difficulty"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

export default FilterFactor;
