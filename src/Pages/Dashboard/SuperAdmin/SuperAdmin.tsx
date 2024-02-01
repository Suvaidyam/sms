import type { FC } from 'react';
import PieCharts from '../../../Charts/PieCharts'
interface SuperAdminProps {}

const SuperAdmin: FC<SuperAdminProps> = () => {
    return (
        <>
            <div className='grid grid-cols-3'>
                <PieCharts/>
            </div>
        </>
    );
}

export default SuperAdmin;
