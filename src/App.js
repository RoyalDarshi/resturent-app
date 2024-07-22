import './App.css';
import FormComponent from "./components/FormComponent";
import ListComponent from "./components/ListComponent";
import {useState} from "react";

function App() {
    const [bill, setBill] = useState({});
    const addBill=(newBill)=>{
        setBill(newBill)
    }
  return (
    <div>
      <FormComponent addBill={addBill} />
        <ListComponent bill={bill} />
    </div>
  );
}

export default App;
