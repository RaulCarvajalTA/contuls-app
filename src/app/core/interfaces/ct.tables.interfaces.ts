export interface IUsersTable {
    name: string,
    email: string,
    role: string
}

export interface IRolesTable {
    name: string,
    description: string
}

export interface IMaintenanceTable {
    asset: string,
    area: string,
    client: string,
    programed: Date,
    start: Date,
    end: Date,
    atendedBy: string,
    status: string
}