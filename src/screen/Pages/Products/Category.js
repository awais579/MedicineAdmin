import React from 'react';
import { useState, useEffect } from 'react';
import { FiDelete, FiEye } from 'react-icons/fi';
import axios from 'axios';
import { toast } from "react-toastify";
import CreateCategory from './CreateCategory';
import UpdateCategory from './UpdateCategory'
import URL from '../../Url';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Modal } from 'antd';
import UpdateProduct from './Warehouse/UpdateProduct';
const { confirm } = Modal;

const Category = () => {
    const [modal1Open, setModal1Open] = useState(false);
    const [modalUpdate, setModalUpdate] = useState(false);
    const [updateProductModal, setUpdateProductModal] = useState(false);
    const [groupDetail, setGroupDetail] = useState({});

    const [data, setDate] = useState([]);
    useEffect(() => {
        axios.get(`${URL}/group`)
            .then((res) => {
                setDate(res?.data?.data?.reverse())
            })
            .catch(
                (error) => {
                    console.error('Error fetching data : ', error)
                }
            );
    }, []);
    const showDeleteConfirm = (id) => {
        confirm({
            title: 'Do you want to delete it?',
            icon: <ExclamationCircleFilled />,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                axios.delete(`${URL}/group/${id}`).then((res) => {
                    if (res?.data?.status === 200) {
                        toast.success("Group Deleted")
                        setModalUpdate(false)
                        axios.get(`${URL}/group`).then((res) => {
                            setDate(res?.data?.data?.reverse())
                        })
                    }
                })
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };
    return (
        <div className="content-section p-3 pt-0">
            <CreateCategory key="model1" modalOpen={modal1Open} setModalOpen={setModal1Open} setDate={setDate} URL={URL} />
            <UpdateCategory key="model2" modalUpdate={modalUpdate} setModalUpdate={setModalUpdate} setDate={setDate} groupDetail={groupDetail} setGroupDetail={setGroupDetail} />
            <UpdateProduct key="model3" modalOpen={updateProductModal} setModalOpen={setUpdateProductModal} URL={URL} toast={toast} />
            <p className='dashboadHeading' >Groups</p>
            <hr className='dashboardLine' />
            <div id="section_Warehouse_list" className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="text-end mb-3">
                                <button className="new_Warehouse btn btn-outline-primary btn-md m-1" onClick={() => setUpdateProductModal(true)}>
                                    Update Product
                                </button>
                                <button className="new_Warehouse btn btn-outline-primary btn-md m-1" onClick={() => setModal1Open(true)}>
                                    Create
                                </button>
                            </div>
                            <section style={{ display: "flex", justifyContent: "space-between" }}>
                                <div className='d-flex '>
                                    <label>
                                        <select name="warehouse_table_length" aria-controls="warehouse_table" class="form-select form-select-sm">
                                            <option value="10">10</option>
                                            <option value="25">25</option>
                                            <option value="50">50</option>
                                            <option value="-1">All</option>
                                        </select>
                                    </label>

                                    <label style={{ marginLeft: "5px" }}>
                                        <select name="warehouse_table_length" aria-controls="warehouse_table" class="form-select form-select-sm">
                                            <option value="10">Export</option>
                                            <option value="25">25</option>
                                            <option value="50">50</option>
                                            <option value="-1">All</option>
                                        </select>
                                    </label>

                                </div>
                                <div>
                                    <label><input type="search" class="form-control form-control-sm" placeholder="Search..." aria-controls="warehouse_table" /></label>
                                </div>
                            </section>

                            <div className="table-responsive">
                                <table
                                    id="warehouse_table"
                                    className="display table dataTable no-footer"
                                    aria-describedby="warehouse_table_info"
                                    style={{ width: "100%" }}
                                >
                                    <thead>
                                        <tr >
                                            <th className="sorting" tabIndex="0" aria-controls="warehouse_table" rowspan="1" colspan="1" style={{ width: "105px" }} aria-label="Zip Code: activate to sort column ascending"> Code</th>
                                            <th className="sorting" tabIndex="0" aria-controls="warehouse_table" rowspan="1" colspan="1" style={{ width: "105px" }} aria-label="Name: activate to sort column ascending">Name</th>
                                            <th className="not_show sorting_disabled" rowspan="1" colspan="1" style={{ width: "105px" }} aria-label="Action">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data?.map((item, i) => (
                                                <tr className="odd" key={item._id}>
                                                    <td>{item.grpCode}</td>
                                                    <td>{item.grpName}</td>
                                                    <td>
                                                        <a id="1" className="text-success" title="Edit" style={{ cursor: "pointer" }}>
                                                            <FiEye onClick={() => {
                                                                setGroupDetail(item)
                                                                setModalUpdate(true)
                                                            }} />
                                                        </a>&nbsp;&nbsp;
                                                        <a id="1" className="text-danger" title="Remove" style={{ cursor: "pointer" }}>
                                                            <FiDelete onClick={() => showDeleteConfirm(item?._id)} />
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))
                                        }
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
                        <p><strong>Posly - POS With Ultimate Inventory</strong></p>
                        <div class="footer-bottom border-top pt-3 d-flex flex-column flex-sm-row align-items-center">
                            <img class="logo" src="https://posly.getstocky.com/images/logo-default.svg" alt="" />
                            <div>
                                <p class="m-0">© 2023  Posly v1.1</p>
                                <p class="m-0">All rights reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
