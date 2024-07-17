import { useEffect, useState } from "react"
import { Card } from "./Card";

import './MainSection.css'
export const MainSection = ()=>{

    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('https://dummyjson.com/recipes')
        .then(response=> response.json())
        .then(result => setData(result.recipes));
    }, [])

    return(
        <main>
            <div className="card-container">
            {
                data.map((item)=>{
                    return (
                        <Card key={item.id} recipe={item}/>
                    )
                })
            }
            </div>
        </main>
    )
}