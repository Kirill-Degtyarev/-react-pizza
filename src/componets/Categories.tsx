import React from 'react';

type CategoriesType = {
    id: number;
    title: string;
};

type CategoriesProps = {
    categoryId: number;
    onChangeCategory: any;
};

const CATEGORIES: CategoriesType[] = [
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

const Categories: React.FC<CategoriesProps> = ({ categoryId, onChangeCategory }) => {
    return (
        <div className="categories">
            <ul>
                {CATEGORIES.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => {
                            onChangeCategory(item.id);
                        }}
                        className={categoryId === item.id ? 'active' : ''}>
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Categories;
