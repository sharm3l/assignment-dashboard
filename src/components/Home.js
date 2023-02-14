import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Chart from "./Chart";
import Students from "./Students";
import FilterFactor from "./FilterFactor";

function Home({ data, students, setStudent, setFilter, filter }) {
  // example at https://mui.com/material-ui/react-drawer/
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  return (
    <div>
      <h2>Dashboard Overview</h2>

      <Button onClick={toggleDrawer(true)}>Filter</Button>

      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <FilterFactor setFilter={setFilter} />
      </Drawer>

      <Box p={4}>
        <Chart data={data} filter={filter} />
      </Box>

      <h2>Students</h2>
      <Students data={students} setStudent={setStudent} />
    </div>
  );
}

export default Home;
