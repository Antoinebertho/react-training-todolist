export{}

type TaskProps = {
    taskId : string;
};

export interface TaskType = ({taskId}: TaskProps) => {
    return (
    id: number;
    title: string;
    description: string;
    done: boolean;
    )
}

