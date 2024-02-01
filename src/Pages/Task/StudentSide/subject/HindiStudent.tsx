import type { FC } from 'react';
import TaskCards from '../TastCard';

interface HindiStudentProps {}

const HindiStudent: FC<HindiStudentProps> = () => {
    return (
        <>
         <TaskCards Subject={'Hindi'}/>
        </>
    );
}

export default HindiStudent;
