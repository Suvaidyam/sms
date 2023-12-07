import type { FC } from 'react';

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => {
    return (
        <>
            <div className='mt-[9vh] bg-red-600 h-96'>Dashboard</div>
        </>
    );
}

export default Dashboard;
