import React, {useEffect} from 'react';
import Order from "./Order";

const ListComponent = (props) => {
    const [table1, setTable1] = React.useState([]);
    const [table2, setTable2] = React.useState([]);
    const [table3, setTable3] = React.useState([]);
    useEffect(() => {
        if (props.bill.table==='1'){
            setTable1(prevState => [...prevState,props.bill]);
        }
        else if (props.bill.table==='2'){
            setTable2(prevState => [...prevState,props.bill]);
        }
        else if(props.bill.table==='3'){
            setTable3(prevState => [...prevState,props.bill]);
        }
    },[props.bill]);
    const deleteOrder = (id,table) => {
        let data;
        if(table==="1"){
            data=table1;
        }
        else if(table==="2"){
            data=table2;
        }
        else{
            data = table3;
        }
        const newData=data.filter(item => item.id !== id);
        if(table==="1"){
            setTable1(newData)
        }
        else if(table==="2"){
            setTable2(newData)
        }
        else{
            setTable3(newData)
        }
        localStorage.removeItem(id)
    }
    return(
        <div>
            <h2>Orders</h2>
            <h3>Table 1</h3>
            <ul>
                {table1.map((item, index) => (
                    <Order deleteOrder={deleteOrder} order={item} key={index} />
                ))}
            </ul>
            <h3>Table 2</h3>
            <ul>
                {table2.map((item, index) => (
                <Order deleteOrder={deleteOrder} order={item} key={index} />
            ))}
            </ul>
            <h3>Table 3</h3>
            <ul>
                {table3.map((item, index) => (
                    <Order deleteOrder={deleteOrder} order={item} key={index} />
                ))}
            </ul>
        </div>
    );
}
export default ListComponent;