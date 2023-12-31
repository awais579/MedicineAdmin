import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiEye, FiDelete } from "react-icons/fi";
import CreateMedicine from "./CreateMedicine";
import { Button, Modal } from "antd";
import { useNavigate } from "react-router-dom";

const Medicine = () => {
  const [item, setItem] = useState();
  console.log(item);
  const [modalOpen, setModalOpen] = useState(false);
  // get the data of medicine
  const [medicineData, setMedicineData] = useState([]);
  const navigate = useNavigate();
  const getData = () => {
    axios
      .get("http://192.168.18.47:8003/api/v1/medicine/get")
      .then((res) => {
        setMedicineData(res.data.data);
      })
      .then((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  // deleting Data
  const deleteMedicine = (id) => {
    axios
      .delete(`http://192.168.18.47:8003/api/v1/medicine/delete/${id}`)
      .then((res) => {
        console.log(res);
        getData();
      })
      .then((err) => {
        console.log(err);
      });
  };

  // update data
  const updateData = (id) => {
    const param = {
      name: document.getElementById("name")?.value,
      price: document.getElementById("price")?.value,
      description: document.getElementById("description")?.value,
    };
    console.log(param);
    axios
      .put(`http://192.168.18.47:8003/api/v1/medicine/update/${id}`, param)
      .then((res) => {
        window.location.reload();
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="content-section p-3">
        <CreateMedicine
          Modal={Modal}
          Button={Button}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
        <div className="breadcrumb">
          <h5>All Medicines</h5>
        </div>

        <div className="separator-breadcrumb border-top"></div>

        <div id="section_Warehouse_list" className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="text-end mb-3">
                  <button
                    className="new_Warehouse btn btn-outline-primary btn-md m-1"
                    onClick={() => setModalOpen(true)}
                  >
                    Create
                  </button>
                </div>
                <section
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="d-flex ">
                    <label>
                      <select
                        name="warehouse_table_length"
                        aria-controls="warehouse_table"
                        class="form-select form-select-sm"
                      >
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="-1">All</option>
                      </select>
                    </label>

                    <label style={{ marginLeft: "5px" }}>
                      <select
                        name="warehouse_table_length"
                        aria-controls="warehouse_table"
                        class="form-select form-select-sm"
                      >
                        <option value="10">Export</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="-1">All</option>
                      </select>
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="search"
                        class="form-control form-control-sm"
                        placeholder="Search..."
                        aria-controls="warehouse_table"
                      />
                    </label>
                  </div>
                </section>

                <div className="table-responsive">
                  <table
                    id="warehouse_table"
                    className="display table dataTable no-footer"
                    aria-describedby="warehouse_table_info"
                    style={{ width: "995px" }}
                  >
                    {/* Table Header */}
                    <thead>
                      <tr>
                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="warehouse_table"
                          rowspan="1"
                          colspan="1"
                          style={{ width: "105px" }}
                          aria-label="Name: activate to sort column ascending"
                        >
                          #
                        </th>
                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="warehouse_table"
                          rowspan="1"
                          colspan="1"
                          style={{ width: "105px" }}
                          aria-label="Phone: activate to sort column ascending"
                        >
                          Company Name
                        </th>
                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="warehouse_table"
                          rowspan="1"
                          colspan="1"
                          style={{ width: "105px" }}
                          aria-label="Country: activate to sort column ascending"
                        >
                          Category Name
                        </th>
                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="warehouse_table"
                          rowspan="1"
                          colspan="1"
                          style={{ width: "105px" }}
                          aria-label="City: activate to sort column ascending"
                        >
                          Name
                        </th>

                        <th
                          className="not_show sorting_disabled"
                          rowspan="1"
                          colspan="1"
                          style={{ width: "105px" }}
                          aria-label="Action"
                        >
                          Purchase Price
                        </th>
                        <th
                          className="not_show sorting_disabled"
                          rowspan="1"
                          colspan="1"
                          style={{ width: "105px" }}
                          aria-label="Action"
                        >
                          Sale Price
                        </th>
                        <th
                          className="not_show sorting_disabled"
                          rowspan="1"
                          colspan="1"
                          style={{ width: "105px" }}
                          aria-label="Action"
                        >
                          Qty
                        </th>
                        <th
                          className="not_show sorting_disabled"
                          rowspan="1"
                          colspan="1"
                          style={{ width: "105px" }}
                          aria-label="Action"
                        >
                          Reorder
                        </th>
                        <th
                          className="not_show sorting_disabled"
                          rowspan="1"
                          colspan="1"
                          style={{ width: "105px" }}
                          aria-label="Action"
                        >
                          Type
                        </th>
                        <th
                          className="not_show sorting_disabled"
                          rowspan="1"
                          colspan="1"
                          style={{ width: "105px" }}
                          aria-label="Action"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                      {/* {medicineData?.map((medicine, index) => {
                        return ( */}
                          <>
                            <tr className="even">
                              <td>02</td>
                              <td>medicine</td>
                              <td>jkllj</td>
                              <td>hello world!</td>
                              <td>hello world!</td>
                              <td>hello world!</td>
                              <td>hello world!</td>
                              <td>hello world!</td>
                              <td>hello world!</td>
                              <td>
                                <a
                                  id="1"
                                  className="edit cursor-pointer ul-link-action text-success"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Edit"
                                  style={{ cursor: "pointer" }}
                                >
                                  <i
                                    className=""
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={() => {
                                    //   setItem(medicine);
                                    }}
                                  >
                                    {" "}
                                    <FiEye />
                                  </i>
                                </a>
                                &nbsp;&nbsp;
                                <a
                                  id="1"
                                  className="delete cursor-pointer ul-link-action text-danger"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Remove"
                                  onClick={() => {
                                    // deleteMedicine(medicine?._id);
                                  }}
                                  style={{ cursor: "pointer" }}
                                >
                                  <FiDelete />
                                </a>
                                &nbsp;&nbsp;
                              </td>
                            </tr>
                          </>
                    {/* //     );
                    //   })} */}
                      {/* Add more rows as needed */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for Creating Warehouse */}
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div role="document" className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Update</h5>
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  className="btn-close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    {/* Form Fields */}
                    <div className="form-group col-md-6">
                      <label htmlFor="name">
                        Medicine Name <span className="field_required"></span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        defaultValue={item?.name}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="mobile">Price </label>
                      <input
                        type="text"
                        name="mobile"
                        id="price"
                        defaultValue={item?.price}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="country">Description </label>
                      <input
                        type="text"
                        name="country"
                        id="description"
                        defaultValue={item?.description}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="country">Description </label>
                      <input
                        type="text"
                        name="country"
                        id="description"
                       
                        className="form-control"
                      />
                    </div>
                  </div>
                </form>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <button
                      type="button"
                      className="btn "
                      style={{ backgroundColor: "#4E97FD", color: "white" }}
                      onClick={() => updateData(item?._id)}
                    >
                      <i className="i-Yes me-2 font-weight-bold"></i> Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="app-footer">
          <div class="row">
            <div class="col-md-9">
              <p>
                <strong>Posly - POS With Ultimate Inventory</strong>
              </p>
              <div class="footer-bottom border-top pt-3 d-flex flex-column flex-sm-row align-items-center">
                <img
                  class="logo"
                  src="https://posly.getstocky.com/images/logo-default.svg"
                  alt=""
                />
                <div>
                  <p class="m-0">© 2023 Posly v1.1</p>
                  <p class="m-0">All rights reserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Medicine;
