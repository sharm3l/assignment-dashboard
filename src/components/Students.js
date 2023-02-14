import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

function Students({ data, setStudent }) {
  return (
    <List>
      {data.map((student) => {
        return (
          <ListItem disablePadding key={student}>
            <ListItemButton
              component={Link}
              to={`/${student}`}
              onClick={() => setStudent(student)}
            >
              <ListItemText primary={student} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

export default Students;
