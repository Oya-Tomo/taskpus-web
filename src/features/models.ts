export type User = {
    name: string;
    email: string;
};

export enum Permission {
    owner = 0,
    admin = 1,
    member = 2,
}

export type Task = {
    name: string;
    description: string;
    expiration: Date;
    members: string[];
    steps: Step[];
    comments: Comment[];
};

export type Member = {
    id: string;
    nickname: string;
    permission: Permission;
};

export type Step = {
    status: "waiting" | "doing" | "finish";
    name: string;
    detail: string;
};

export type Comment = {
    member: string;
    text: string;
    postedAt: Date;
};

export type Project = {
    name: string;
    description: string;
    members: Member[];
    tasks: Task[];
};
