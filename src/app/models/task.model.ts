export type TaskInfoModle = {
    title: string;
    summary: string;
    data: string;
}

export type TaskModel = {
    id: string;
    userId: string;
    
} & TaskInfoModle;