import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Exercises from "../pages/Exercises";
import ExerciseNew from "../pages/ExercisesNew";

export default function App() {
    return (
      <BrowserRouter>
        <Route path="/exercise" component={Exercises} />
        <Route path="/exercise/new" component={ExerciseNew} />
      </BrowserRouter>
    );
}
