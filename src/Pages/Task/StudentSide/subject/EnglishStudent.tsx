import type { FC } from 'react';
import TaskCards from '../TastCard'
interface EnglishStudentProps {
}

const EnglishStudent: FC<EnglishStudentProps> = () => {
    return (
        <>
            <TaskCards Subject={'English'}/>
        </>
    );
}

export default EnglishStudent;
