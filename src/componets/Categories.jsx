import React from 'react';

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

function Categories({ categoryId, onClickCategory }) {
    return (
        <div className="categories">
            <ul>
                {CATEGORIES.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => {
                            onClickCategory(item.id);
                        }}
                        className={categoryId === item.id ? 'active' : ''}>
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Categories;
