import type { FC } from 'react';
import TaskCards from '../TastCard'

interface ScienceStudentProps {}

const ScienceStudent: FC<ScienceStudentProps> = () => {
    return (
        <>
                        <TaskCards Subject={'Science'}/>

        </>
    );
}

export default ScienceStudent;
