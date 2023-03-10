import {React, useState, useEffect} from 'react';

function List({getItems}){
    const [items, setItems] = useState([])

    useEffect(()=>{
        setItems(getItems())
        console.log('updating')
    }, [getItems])

    return items.map(item => <div key={item}>{item}</div>)
}

export default List