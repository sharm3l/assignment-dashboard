import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Chart from "./Chart";

function Student({ data, students, student }) {
  return (
    <Box>
      {students.includes(student) ? (
        <div>
          <h2>Student {student}</h2>
          <Chart data={data} filter="all" />
        </div>
      ) : (
        <div>Student unknown</div>
      )}

      <Button to="/" component={Link}>
        Back to overview
      </Button>
    </Box>
  );
}

export default Student;
