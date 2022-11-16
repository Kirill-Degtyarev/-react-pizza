import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzaSkeleton = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={465}
        viewBox="0 0 280 465"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}>
        <circle cx="130" cy="130" r="130" />
        <rect x="0" y="275" rx="10" ry="10" width="260" height="15" />
        <rect x="2" y="299" rx="10" ry="10" width="260" height="88" />
        <rect x="0" y="404" rx="10" ry="10" width="84" height="27" />
        <rect x="110" y="398" rx="30" ry="30" width="150" height="45" />
        <rect x="138" y="336" rx="0" ry="0" width="6" height="22" />
    </ContentLoader>
);

export default PizzaSkeleton;
