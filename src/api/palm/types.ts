export type User = {
    id: bigint,
    username_internal: string,
    username: string,
    joinDate: Date,
}
export type PreUser = Omit<User, "joinDate"> & { joinDate: string };
export const user = (user: PreUser): User => {
    return {
        ...user,
        joinDate: new Date(user.joinDate)
    };
}