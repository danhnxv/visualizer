"use client"
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const TreeGraph = dynamic(() => import('../components/TreeGraph'), {
    ssr: false,
});

const Home: NextPage = () => {
    return <TreeGraph />;
};

export default Home;
