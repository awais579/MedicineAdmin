import React, { useState } from "react";
import { FiDelete, FiEye } from "react-icons/fi";
import { Button, Modal } from "antd";
import CreateSuplier from "./CreateSuplier";
import { useEffect } from "react";
import URL from "../../../Url";
import axios from "axios";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { LiaCommentDollarSolid } from "react-icons/lia";
import { FiEdit } from "react-icons/fi";
import { BsEye } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import ViewSuplier from "./ViewSuplier";
import { toast } from "react-toastify";

const Suplier = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [getSuplier, setGetSuplier] = useState([{}]);
  const [title, setTitle] = useState("");
  useEffect(() => {
    axios
      .get(`${URL}/supplier`)
      .then((res) => {
        if (res?.data?.status === 200) {
          setGetSuplier(res?.data?.data);
        } else {
          console.log("Error: getting supplier error");
        }
      })
      .catch((error) => {
        console.error("Fetching data error : ", error);
      });
  }, []);
  const fn_deleteSupplier = (id) => {
    axios.delete(`${URL}/supplier/${id}`).then((res) => {
      if (res?.data?.status === 200) {
        toast.success("Record Deleted");
        axios.get(`${URL}/supplier`).then((res) => {
          setGetSuplier(res?.data?.data);
        });
      } else {
        toast.error(res?.data?.msg);
      }
    });
  };
  return (
    <div className="content-section p-3 pt-3">
      <CreateSuplier
        modalOpen={modalOpen}
        title={title}
        setTitle={setTitle}
        setModalOpen={setModalOpen}
        Modal={Modal}
        Button={Button}
        setGetSuplier={setGetSuplier}
      />
      {/* <ViewSuplier getSuplier={getSuplier} /> */}
      <p className="dashboadHeading">Supplier</p>
      <hr className="dashboardLine" />
      <div id="section_Warehouse_list" className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="text-end mb-3">
                <button
                  className="new_Warehouse btn btn-outline-primary btn-md m-1"
                  onClick={() => {
                    setModalOpen(true);
                    setTitle("Create");
                  }}
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
                  className="display table dataTable no-footer"
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr>
                      <th style={{ width: "105px" }}>Full Name</th>
                      <th style={{ width: "105px" }}>Image</th>
                      <th style={{ width: "105px" }}>Email</th>
                      <th style={{ width: "105px" }}>Password</th>
                      <th style={{ width: "135px" }}>Phone</th>
                      <th style={{ width: "105px" }}>Address</th>
                      <th style={{ width: "105px" }}>Status</th>
                      <th style={{ width: "105px" }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {getSuplier?.map((item, i) => (
                                            <tr>
                                                <td>{item.name}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.city}</td>
                                                <td>$ 0.00</td>
                                                <td>$ 0.00 </td>
                                                <td>
                                                    <div class="dropdown drp_action">
                                                        <button class=" dropdown-toggle drp_suplier " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                                                            <span>Action</span>
                                                        </button>
                                                        <ul class="dropdown-menu" style={{ zIndex: "999" }}>
                                                            <li><Link to={`/viewsupplier/${item?._id}`} class="dropdown-item"><BsEye /> Provider details</Link></li>
                                                            <li><Link onClick={() => { setModalOpen(true); setTitle("Edit"); }} class="dropdown-item" ><FiEdit /> Edit provider</Link></li>
                                                            <li><Link class="dropdown-item"><LiaCommentDollarSolid /> Pay all purchase due at time</Link></li>
                                                            <li><Link class="dropdown-item"><LiaCommentDollarSolid /> Pay all purchase return due at time</Link></li>
                                                            <li><Link class="dropdown-item" onClick={() => fn_deleteSupplier(item?._id)}><IoIosCloseCircleOutline /> Delete Provider</Link></li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))} */}
                    <tr>
                      <td>Umar</td>
                      <td>...</td>
                      <td>awais@gmail.com</td>
                      <td>12345</td>
                      <td>03157488</td>
                      <td>Main Sillanwali road</td>
                      <td>Active</td>
                      <td>
                        {" "}
                        <i
                          className="fa-solid text-danger fa-trash "
                          style={{ cursor: "pointer" }}
                        >
                          {" "}
                        </i>
                        <i
                          className="fa-solid text-warning fa-pen-to-square ms-2 "
                          style={{ cursor: "pointer" }}
                        ></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
  );
};

export default Suplier;
