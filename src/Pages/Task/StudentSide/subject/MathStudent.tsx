import type { FC } from 'react';
import TaskCards from '../TastCard';



interface MathStudentProps {}

const MathStudent: FC<MathStudentProps> = () => {
    return (
        <>
                     <TaskCards Subject={'Math'}/>

        </>
    );
}

export default MathStudent;
