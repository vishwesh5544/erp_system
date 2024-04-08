export type CreateInvoice = {
    // userId: string;
    amount: number;
    status: string;
    dueDate: Date;
}


export type UpdateInvoice = {
    amount: number;
    status: string;
    dueDate: Date;
}
