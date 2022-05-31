import React from 'react';
import Link from 'next/link';

const HeaderLink = ({href, text}) => {
    return (
        <Link href={href}>
            <a>{text}</a>
        </Link>
    );
};

export default HeaderLink;