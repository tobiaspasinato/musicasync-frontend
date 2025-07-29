import React, { type ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className='bg-gray-800 min-h-screen flex flex-col w-screen'>
        {/* layout content */}
        {children}
        </div>
    );
};

export default Layout;