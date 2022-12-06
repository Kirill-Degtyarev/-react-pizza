import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const FullPizza: React.FC = () => {
    const [pizza, setPizza] = useState<{ title: string }>();
    const { id } = useParams();
    useEffect(() => {
        try {
            const fetchPizza = async () => {
                const { data } = await axios.get(
                    `https://6374eb8a48dfab73a4ece0b6.mockapi.io/items/${id}`,
                );
                setPizza(data);
            };
            fetchPizza();
        } catch (error) {
            console.log(error);
        }
    }, [id]);
    return (
        <div className="container">
            FullPizza <h2>{pizza && pizza.title}</h2>
        </div>
    );
};
export default FullPizza;
