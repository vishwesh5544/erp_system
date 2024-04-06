import {Invoice} from '../models';
import {createInvoice} from "../@types";

export default interface IInvoiceService {
    createInvoice(createInvoice: createInvoice): Promise<Invoice>;
    getInvoice(invoiceId: string): Promise<Invoice | null>;
    getInvoices(): Promise<Invoice[]>;
    updateInvoice(invoiceId: string, invoice: Invoice): Promise<Invoice | null>;
    deleteInvoice(invoiceId: string): Promise<boolean>;
}
