import React from 'react';
import DashboardMenu from '../components/DashboardMenu';
import DashboardPostsCol from '../components/DashboardPostsCol';

const Dashboard = () => {

    return (
        <>
            <div className='grid grid-cols-6 h-screen font-roboto'>
                <DashboardMenu/>
                <DashboardPostsCol/>
            </div>
        </>
    );
};

export default Dashboard;