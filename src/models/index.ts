import {Employee} from './Employee';
import {Payment} from './Payment';
import {Invoice} from './Invoice';
import {User} from './User';

const syncModels = async () => {
    await Employee.sync();
    await Payment.sync();
    await Invoice.sync();
    await User.sync();
}

export {
    Employee,
    Payment,
    Invoice,
    User,
    syncModels
}
