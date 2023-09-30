import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Dashin from "./components/Dashin";
import Dashboard from "./screen/Pages/Dashboard/Dashboard";
import Roles from "./screen/Pages/UserManagment/Roles/Roles";
import User from "./screen/Pages/UserManagment/User/User";
import ProftAndLoss from "./screen/Pages/Report/ProfiAndLoss";
import Customer from "./screen/Pages/People/Customer/Customer";
import Suplier from "./screen/Pages/People/Suplier/Suplier";
import AllProducts from "./screen/Pages/Products/AllProduct";
import Category from "./screen/Pages/Products/Category";
import Unit from "./screen/Pages/Products/Unit/Unit";
import Brands from "./screen/Pages/Products/Brand/Brand";
import Adjustment from "./screen/Pages/Adjustment/AllAdjustment";
import AllTransfer from "./screen/Pages/Transfer/AllTransfer";
import Qutation from "./screen/Pages/Qutations/AllQutatin";
import Purchase from "./screen/Pages/Purchase/AllPurchase";
import AllSale from "./screen/Pages/Sales/AllSale";
import SalesReturn from "./screen/Pages/SalesReturn/SalesReturn";
import PurchaseReturn from "./screen/Pages/PurchaseReturn/PurchaseReturn";
import Account from "./screen/Pages/Accounting/Account";
import Deposit from "./screen/Pages/Accounting/Deposit";
import Expense from "./screen/Pages/Expense/Expense";
import DepositCategory from "./screen/Pages/Accounting/DepositCategory";
import PaymentMethod from "./screen/Pages/Accounting/PaymentMethods";
import PrintLabels from "./screen/Pages/Products/PrintLebel";
import CreateProduct from "./screen/Pages/Products/CreateProduct";
import CreateAdjustment from "./screen/Pages/Adjustment/CreateAdjustment";
import CreateTransfer from "./screen/Pages/Transfer/CreateTransfer";
import CreateQuotation from "./screen/Pages/Qutations/AddQutation";
import CreatePurchase from "./screen/Pages/Purchase/CreatePurchase";
import CreateSale from "./screen/Pages/Sales/CreateSales";
import SmsSettings from "./screen/Pages/Settings/SmsSettings";
import SystemSettings from "./screen/Pages/Settings/SystemSettings";
import PosSettings from "./screen/Pages/Settings/PosReceptSettings";
import SmsTemplate from "./screen/Pages/Settings/SmsTemplate";
import Curency from "./screen/Pages/Settings/Curency";
import BackUp from "./screen/Pages/Settings/BackUp";
import SaleReport from "./screen/Pages/Report/SaleReport";
import PurchaseReport from "./screen/Pages/Report/PurchaseReport";
import InventoryReport from "./screen/Pages/Report/InventoryReport";
import ProductReport from "./screen/Pages/Report/ProductReport";
import CustomerReport from "./screen/Pages/Report/CustomerReport";
import SuplierReport from "./screen/Pages/Report/SupplierReport";
import PaymentSale from "./screen/Pages/Report/PaymentSale";
import PaymentPurchase from "./screen/Pages/Report/PaymentPurchase";
import PaymentSaleReturn from "./screen/Pages/Report/PaymentSaleReturn";
import PaymentPurchaseReturn from "./screen/Pages/Report/PaymentPurchaseReturn";
import ProductQuantityAlert from "./screen/Pages/Report/ProductQuantityAlert";
import Warehouse from "./screen/Pages/Products/Warehouse/Warehouse";
import Pos from "./screen/Pages/Pos/Pos";
import CreateCutomer from "./screen/Pages/People/Customer/CreateCustomer";
import Permissions from "./screen/Pages/UserManagment/Roles/Permissions";
import ViewSuplier from "./screen/Pages/People/Suplier/ViewSuplier";
import Medicine from "./screen/Pages/Medicine/Medicine";
import Company from "./screen/Pages/Company/Company";
import UnitTab from "./screen/Pages/Unit/UnitTab";
import MedicineCategory from "./screen/Pages/Category/MedicineCategory";
import MedicinePOS from "./screen/Pages/MedicinePos/MedicinePOS";
import ReceivePayment from "./screen/Pages/ReceivePayment/ReceivePayment";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Dashin />}>
            <Route index element={<Dashboard />} />
            <Route path="/pos" element={<Pos />} />
            {/* User Managment Pages */}
            <Route path="/user" element={<User />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/roles/permission" element={<Permissions />} />
            {/* People Pages */}
            <Route path="/customer" element={<Customer />} />
            <Route path="/customer/create" element={<CreateCutomer />} />
            <Route path="/supplier" element={<Suplier />} />
            <Route path="/viewsupplier/:id" element={<ViewSuplier />} />

            {/* Purchase Pages */}
            <Route path="/allpurchase" element={<Purchase />} />
            <Route path="/createpurchase" element={<CreatePurchase />} />
            {/* Sales Pages */}
            <Route path="/allsales" element={<AllSale />} />
            <Route path="/createsale" element={<CreateSale />} />
            <Route path="/salesreturn" element={<SalesReturn />} />
            <Route path="/purchasereturn" element={<PurchaseReturn />} />

            {/* Medicine Pages */}
            <Route path="/medicine" element={<Medicine />} />

            {/* Company Pages */}
            {/* <Route path="/company" element={<Company />} /> */}

            {/* category */}
            {/* <Route path="/medicine_category" element={<MedicineCategory />} /> */}

            {/* unit */}
            {/* <Route path="/unit_tab" element={<UnitTab />} /> */}

            {/* Expnse */}
            <Route path="/expense" element={<Expense />} />

            {/* medicine pos */}
            <Route path="/medicine_pos" element={<MedicinePOS />} />

            {/* ReceivePayment */}
            <Route path="/receive_payment" element={<ReceivePayment />} />

            {/* Report Pages */}
            <Route path="/profitandloss" element={<ProftAndLoss />} />
            <Route path="/salereport" element={<SaleReport />} />
            <Route path="/purchasereport" element={<PurchaseReport />} />
            <Route path="/inventoryreport" element={<InventoryReport />} />
            <Route path="/productreport" element={<ProductReport />} />
            <Route path="/customerreport" element={<CustomerReport />} />
            <Route path="/supplierreport" element={<SuplierReport />} />
            <Route path="/paymentsale" element={<PaymentSale />} />
            <Route path="/paymentpurchase" element={<PaymentPurchase />} />
            <Route path="/paymentsalereturn" element={<PaymentSaleReturn />} />
            <Route
              path="/paymentpurchasereturn"
              element={<PaymentPurchaseReturn />}
            />
            <Route
              path="/productquantityalert"
              element={<ProductQuantityAlert />}
            />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
