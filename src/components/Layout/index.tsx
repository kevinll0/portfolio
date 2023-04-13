import React from 'react';
import Header from './header';
import Footer from './footer';

interface LayoutProps {
    children: React.ReactNode;
}
function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout;