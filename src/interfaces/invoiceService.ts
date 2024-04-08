import {Invoice} from '../models';
import {CreateInvoice, UpdateInvoice} from "../@types";
import ServiceResult from "../models/ServiceResult";

export default interface IInvoiceService {
    getInvoice(invoiceId: number): Promise<ServiceResult<Invoice | Error>>;

    createInvoice(createInvoice: CreateInvoice): Promise<ServiceResult<Invoice>>;

    updateInvoice(invoiceId: number, invoice: UpdateInvoice): Promise<ServiceResult<Invoice | Error>>;

    deleteInvoice(invoiceId: number): Promise<ServiceResult<boolean | Error>>;

    getInvoices(): Promise<Invoice[]>;
}
