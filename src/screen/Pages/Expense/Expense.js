import axios from "axios";
import CreateExpense from "./CreateExpense";
import React, { useEffect, useState } from "react";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { Button, Modal } from "antd";
import URL from "../../Url";
import { FiDelete, FiEye } from "react-icons/fi";
import { toast } from "react-toastify";
import CreateUser from "../UserManagment/User/CreateUser";
import UpdateUser from "../UserManagment/User/UpdateUser";
import { Oval } from "react-loader-spinner";
const { confirm } = Modal;

const Expense = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [userDetail, setUserDetail] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    axios.get(`${URL}/user`).then((res) => {
      setAllUsers(res?.data?.data.reverse());
    });
  }, []);
  const showDeleteConfirm = (id) => {
    confirm({
      title: "Are you sure delete this User?",
      icon: <ExclamationCircleFilled />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        axios.delete(`${URL}/user/${id}`).then((res) => {
          console.log(res?.data);
          if (res?.data?.status === 200) {
            toast.success("User Deleted");
            axios.get(`${URL}/user`).then((res) => {
              setAllUsers(res?.data?.data?.reverse());
            });
          }
        });
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  return (
    <div className="content-section p-3">
      <CreateExpense
        Modal={Modal}
        Button={Button}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        URL={URL}
        toast={toast}
        setAllUsers={setAllUsers}
        Oval={Oval}
      />
      <UpdateUser
        Modal={Modal}
        Button={Button}
        modalOpen={updateModalOpen}
        setModalOpen={setUpdateModalOpen}
        URL={URL}
        toast={toast}
        setAllUsers={setAllUsers}
        userDetail={userDetail}
      />
      <p className="dashboadHeading">Expense</p>
      <hr className="dashboardLine" />
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
                <div className="d-flex">
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
                  className="table mt-3 w-100"
                  aria-describedby="warehouse_table_info"
                >
                  <thead>
                    <tr>
                      <th>Sr No.</th>
                      <th>Amount</th>
                      <th>Descripton</th>
                      <th>Created At</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Ahmed</td>
                      <td>Ahmed</td>
                      <td>Ahmed</td>
                      <td>Ahmed</td>
                      <td>
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
                    {/* {allUsers && allUsers?.map((item) => (
                                            <tr style={{ lineHeight: "4rem" }}>
                                                <td>
                                                    <div>
                                                        <img src={`http://192.168.18.47:8003/images/${item?.imageUrl}`} height={"65px"} style={{ borderRadius: "0.5rem" }} />
                                                    </div>  
                                                </td>
                                                <td>{item?.fullName}</td>
                                                <td>{item?.email}</td>
                                                <td>{item?.status}</td>
                                                <td>{item?.role}</td>
                                                <td>
                                                    <FiEye className='text-info' style={{ cursor: "pointer", fontSize: "1.2rem" }} onClick={() => {
                                                        setUserDetail(item)
                                                        setUpdateModalOpen(true)
                                                    }} />
                                                    &nbsp;
                                                    <FiDelete className='text-danger ms-2' style={{ cursor: "pointer", fontSize: "1.2rem" }} onClick={() => showDeleteConfirm(item?._id)} />
                                                </td>
                                            </tr>
                                        ))} */}
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

export default Expense;
