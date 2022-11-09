import React, { useState } from 'react';

const CATEGORIES = [
    {
        id: 0,
        title: 'Все',
    },
    {
        id: 1,
        title: 'Мясные',
    },
    {
        id: 2,
        title: 'Вегетарианская',
    },
    {
        id: 3,
        title: 'Гриль',
    },
    {
        id: 4,
        title: 'Острые',
    },
    {
        id: 5,
        title: 'Закрытые',
    },
];

function Categories() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="categories">
            <ul>
                {CATEGORIES.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => {
                            setActiveIndex(item.id);
                        }}
                        className={activeIndex === item.id ? 'active' : ''}>
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Categories;
