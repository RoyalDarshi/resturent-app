import React from 'react';

const FormComponent = (props) => {
    const [id, setId] = React.useState(0);
    const [price, setPrice] = React.useState(0);
    const [dish, setDish] = React.useState("");
    const [table, setTable] = React.useState("1");
    const idChangeHandler = (e) => {
        setId(e.target.value);
    }
    const priceChangeHandler = (e) => {
        setPrice(e.target.value);
    }
    const dishChangeHandler = (e) => {
        setDish(e.target.value);
    }
    const tableChangeHandler = (e) => {
        setTable(e.target.value);
    }
    const addBill=()=>{
        const bill={
            id,price,dish,table
        }
        localStorage.setItem(id, JSON.stringify(bill));
        props.addBill(bill);
        setPrice(0)
        setDish("")
        setTable("1")
    }
    return(
        <div>
            <label>Unique order ID: </label>
            <input onChange={idChangeHandler} value={id} type={"number"}/>
            <label>Choose Price: </label>
            <input onChange={priceChangeHandler} value={price} type={"number"}/>
            <label>Choose Dish: </label>
            <input onChange={dishChangeHandler} value={dish} />
            <label>Choose a Table: </label>
            <select onChange={tableChangeHandler} value={table}>
                <option value={1}>Table 1</option>
                <option value={2}>Table 2</option>
                <option value={3}>Table 3</option>
            </select>
            <button onClick={addBill}>Add to bill</button>
        </div>
    );
}
export default FormComponent;