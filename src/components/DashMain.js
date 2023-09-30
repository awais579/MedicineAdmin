import React from "react";
import { Link } from "react-router-dom";
function ScrollableSection({ left }) {
  return (
    <>
      <div id="sidebar_mobile" className="sidebar p-3 pt-3 " style={{ left: left, backgroundColor: "#2B3445" }}>
        <div>
          <img
            src={require("../assets/images/logo-default.png")}
            width="100px"
            height=""
            alt=""
            style={{ marginLeft: "5px" }}
          />
        </div>
        <ul className="pb-5 mt-5">
          <li className="nav-item">
            <Link to="/" className="fw-semi-bold nav-link active pt-0">
              <i class="fa-solid fa-table-cells-large"></i>Dashboard
            </Link>
          </li>
          <div class="accordion accordion-flush" id="accordionFlushExample5">
            <div class="accordion-item" style={{ backgroundColor: "#2B3445" }}>
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed p-0 pe-3 onfocus-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive1"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive1"
                >
                  <li className="nav-item" >
                    <Link to="#" className="fw-semi-bold nav-link">
                      <i class="fa-solid fa-people-carry-box"></i>User Management
                    </Link>
                  </li>
                </button>
              </h2>
              <div
                id="flush-collapseFive1"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo1"
                data-bs-parent="#accordionFlushExample51"
              >
                <div class="accordion-body">
                  <li className="nav-item">
                    <Link to="/user" className="fw-semi-bold nav-link pt-0" aria-current="page">
                      Users
                    </Link>
                    <Link to="/roles" className="fw-semi-bold nav-link pt-0" aria-current="page">
                      Roles
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion accordion-flush" id="accordionFlushExample52">
            <div class="accordion-item" style={{ backgroundColor: "#2B3445" }}>
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed p-0 pe-3 onfocus-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive2"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive2"
                >
                  <li className="nav-item" >
                    <Link to="#" className="fw-semi-bold nav-link" aria-current="page">
                      <i class="fa-solid fa-people-carry-box"></i>People
                    </Link>
                  </li>
                </button>
              </h2>
              <div
                id="flush-collapseFive2"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo2"
                data-bs-parent="#accordionFlushExample52"
              >
                <div class="accordion-body">
                  <li className="nav-item">
                    <Link to="/customer" className="fw-semi-bold nav-link pt-0" aria-current="page">
                      Customers
                    </Link>
                    <Link to="/supplier" className="fw-semi-bold nav-link pt-0" aria-current="page">
                      Suppliers
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>

          <div class="accordion accordion-flush" id="accordionFlushExample57">
            <div class="accordion-item" style={{ backgroundColor: "#2B3445" }}>
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed p-0 pe-3 onfocus-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive7"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive7"
                >
                  <li className="nav-item" >
                    <Link to="#" className="fw-semi-bold nav-link active" aria-current="page">
                      <i class="fa-solid fa-people-carry-box"></i>Purchases
                    </Link>
                  </li>
                </button>
              </h2>
              <div
                id="flush-collapseFive7"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo7"
                data-bs-parent="#accordionFlushExample57"
              >
                <div class="accordion-body">
                  <li className="nav-item">
                    <Link to="/allpurchase" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                      All Purchases
                    </Link>
                    <Link to="/createpurchase" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                      Create Purchases
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion accordion-flush" id="accordionFlushExample58">
            <div class="accordion-item" style={{ backgroundColor: "#2B3445" }}>
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed p-0 pe-3 onfocus-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive8"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive8"
                >
                  <li className="nav-item" >
                    <Link to="#" className="fw-semi-bold nav-link active" aria-current="page">
                      <i class="fa-solid fa-people-carry-box"></i>Sales
                    </Link>
                  </li>
                </button>
              </h2>
              <div
                id="flush-collapseFive8"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo8"
                data-bs-parent="#accordionFlushExample58"
              >
                <div class="accordion-body">
                  <li className="nav-item">
                    <Link to="/allsales" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                      All Sales
                    </Link>
                    <Link to="/createsale" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                      Create Sales
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <li className="nav-item">
            <Link
              to="/salesreturn"
              className="fw-semi-bold nav-link active "
              aria-current="page"
            >
              <i class="fa-solid fa-table-cells-large"></i>Sales Return
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/purchasereturn"
              className="fw-semi-bold nav-link active "
              aria-current="page"
            >
              <i class="fa-solid fa-table-cells-large"></i>Purchases Return
            </Link>
          </li>
          {/* medicine */}
          <li className="nav-item">
            <Link
              to="medicine"
              className="fw-semi-bold nav-link active "
              aria-current="page"
            >
              <i class="fa-solid fa-table-cells-large"></i>Medicine
            </Link>

          </li>
          {/* Company */}
          {/* <li className="nav-item">
            <Link
              to="/company"
              className="fw-semi-bold nav-link active "
              aria-current="page"
            >
              <i class="fa-solid fa-table-cells-large"></i>Company
            </Link>
          </li> */}
          {/* category */}
          {/* <li className="nav-item">
            <Link
              to="/medicine_category"
              className="fw-semi-bold nav-link active "
              aria-current="page"
            >
              <i class="fa-solid fa-table-cells-large"></i>Category
            </Link>
          </li> */}
          {/* unit */}
          {/* <li className="nav-item">
            <Link
              to="/unit_tab"
              className="fw-semi-bold nav-link active "
              aria-current="page"
            >
              <i class="fa-solid fa-table-cells-large"></i>Unit
            </Link>
          </li> */}
          {/* medicine Pos */}
          <li className="nav-item">
            <Link
              to="/expense"
              className="fw-semi-bold nav-link active "
              aria-current="page"
            >
              <i class="fa-solid fa-table-cells-large"></i>Expense
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/receive_payment"
              className="fw-semi-bold nav-link active "
              aria-current="page"
            >
              <i class="fa-solid fa-table-cells-large"></i>Receive Payment
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/medicine_pos"
              className="fw-semi-bold nav-link active "
              aria-current="page"
            >
              <i class="fa-solid fa-table-cells-large"></i>Medicine POS
            </Link>
          </li>
          <div class="accordion accordion-flush" id="accordionFlushExample511">
            <div class="accordion-item" style={{ backgroundColor: "#2B3445" }}>
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed p-0 pe-3 onfocus-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive11"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive11"
                >
                  <li className="nav-item" >
                    <Link to="#" className="fw-semi-bold nav-link active" aria-current="page">
                      <i class="fa-solid fa-people-carry-box"></i>Reports
                    </Link>
                  </li>
                </button>
              </h2>
              <div
                id="flush-collapseFive11"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo11"
                data-bs-parent="#accordionFlushExample511"
              >
                <div class="accordion-body">
                  <li className="nav-item">
                    <Link to="/profitandloss" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                     Daily Reports
                    </Link>
                    <Link to="/salereport" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                    Total  Sale Report
                    </Link>
                    <Link to="/purchasereport" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                    Total  Purchase Report
                    </Link>
                    <Link to="/inventoryreport" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                      Total customers
                    </Link>
                    <Link to="/productreport" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                      Total Supplier
                    </Link>
                    <Link to="/customerreport" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                      OverAll
                    </Link>
                    {/* <Link to="/supplierreport" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                      Supplier Report
                    </Link>
                    <Link to="/paymentsale" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                      Payment Sale
                    </Link>
                    <Link to="/paymentpurchase" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                      Payment Purchase
                    </Link>
                    <Link to="/paymentsalereturn" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                      Payment Sale Return
                    </Link>
                    <Link to="/paymentpurchasereturn" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                      Payment Purchase Return
                    </Link>
                    <Link to="/productquantityalert" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                      Product Quantity Alerts
                    </Link> */}
                  </li>
                </div>
              </div>
            </div>
          </div>

        </ul>
      </div>
    </>
  );
}

export default ScrollableSection;
