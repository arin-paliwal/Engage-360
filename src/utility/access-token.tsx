export const create_access_token = (role: 1 | 2) => {
    const token = Math.random().toString(36).substr(2);
    return `${role}-${token}`;
};
