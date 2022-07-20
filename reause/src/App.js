import './App.css';
import CTA from './Components/CTA';

function App() {
  return (
    <div className="App">
     <CTA>
      <h1>Passward Reset Sent</h1>
      <p>We just sent a message to the email you provided with a link to reset your password.
         Please check your inbox and follow the instructions in the email.</p>
     </CTA>

     <CTA>
      <form>
      <fieldset>
    <legend>Personalia:</legend>
    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname"/><br></br>
    <label for="lname">Last name:</label>
    <input type="text" id="lname" name="lname"/><br></br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email"/><br></br>
    <label for="birthday">Birthday:</label>
    <input type="date" id="birthday" name="birthday"/><br></br>
    <input type="submit" value="Submit"/>
    </fieldset>
      </form>
     </CTA>

    </div>
  );
}

export default App;
