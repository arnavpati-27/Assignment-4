import { useEffect, useState } from "react"
import { Card } from "./Card";

import './about.css'
export const About = ()=>{

    const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then(response => response.json())
      .then(result => {
        setData(result.recipes);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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