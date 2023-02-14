import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import data from "./data";
import "./App.css";
import Home from "./components/Home";
import Student from "./components/Student";

class App extends React.Component {
  constructor(props) {
    super(props);
    // get student from URL if available
    const student = window.location.pathname.replace("/", "");

    this.state = {
      data,

      students: data.reduce(function (acc, item) {
        if (!acc.includes(item.student)) {
          acc.push(item.student);
        }
        return acc;
      }, []),
      // current student
      student,
      // data belonging to current student
      dataStudent: data.filter((item) => item.student === student),
      // filter on difficulty, fun or both
      filter: "all",
    };
  }

  setStudent = (student) => {
    this.setState({
      student,
      dataStudent: this.state.data.filter((item) => item.student === student),
    });
  };

  setFilter = (filter) => {
    this.setState({
      filter,
    });
  };

  render() {
    const { data, dataStudent, students, student, filter } = this.state;

    return (
      <BrowserRouter>
        <header className="header">
          <Link to="/">
            <img src="/winc-logo.svg" className="logo" alt="winc academy" />
            <h1>Student Dashboard</h1>
          </Link>
        </header>

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  data={data}
                  students={students}
                  setStudent={this.setStudent}
                  setFilter={this.setFilter}
                  filter={filter}
                />
              }
            />
            <Route
              path="/*"
              element={
                <Student
                  data={dataStudent}
                  student={student}
                  students={students}
                />
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
