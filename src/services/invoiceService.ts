import {CreateInvoice, UpdateInvoice} from "../@types";
import {IInvoiceService} from "../interfaces";
import {Invoice} from "../models";
import ServiceResult from "../models/ServiceResult";

class InvoiceService implements IInvoiceService {
    async getInvoice(invoiceId: number): Promise<ServiceResult<Invoice | Error>> {
        try {
            const invoice = await Invoice.findByPk(invoiceId);
            if (invoice) {
                return {success: true, data: invoice};
            } else {
                return {success: false, error: new Error("Invoice not found")};
            }
        } catch (e) {
            return {success: false, error: (e as Error)};
        }
    }

    async createInvoice(createInvoice: CreateInvoice): Promise<ServiceResult<Invoice>> {
        try {
            const invoice = await Invoice.create(createInvoice);
            return {success: true, data: invoice};
        } catch (error) {
            return {success: false, error: (error as Error)};
        }
    }

    async updateInvoice(invoiceId: number, invoice: UpdateInvoice): Promise<ServiceResult<Invoice | Error>> {
        try {
            const invoiceToUpdate = await Invoice.findByPk(invoiceId);
            if (invoiceToUpdate) {
                invoiceToUpdate.amount = invoice.amount;
                invoiceToUpdate.status = invoice.status;
                invoiceToUpdate.dueDate = invoice.dueDate;
                await invoiceToUpdate.save();
                return {success: true, data: invoiceToUpdate};
            } else {
                return {success: false, error: new Error("Invoice not found")};
            }
        } catch (error) {
            return {success: false, error: (error as Error)};
        }
    }

    async deleteInvoice(invoiceId: number): Promise<ServiceResult<boolean | Error>> {
        try {
            await Invoice.destroy({where: {id: invoiceId}});
            return {success: true, data: true};
        } catch (error) {
            return {success: false, error: (error as Error)};
        }
    }

    async getInvoices(): Promise<Invoice[]> {
        try {
            return await Invoice.findAll();
        } catch (e) {
            throw new Error("Method not implemented.");
        }
    }
}
