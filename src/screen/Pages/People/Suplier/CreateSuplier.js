import React, { useState } from 'react'
import axios from 'axios';
import URL from '../../../Url';
import { toast } from 'react-toastify';
const CreateSuplier = ({ modalOpen, setModalOpen, Modal, Button, setGetSuplier, title }) => {

    const [suplierData, setSuplierData] = useState({ name: "", email: "", country: "", city: "", phone: "", address: "" });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSuplierData({ ...suplierData, [name]: value })
    }

    const submit = () => {
        console.log("Submitted!")
        console.log(suplierData);
        if (suplierData.name === "" || suplierData.email === "" || suplierData.country === "" || suplierData.city === "" || suplierData.phone === "" || suplierData.address === "") {
            toast.error("Fill all the fields")
        }
        else {
            axios.post(`${URL}/supplier`, suplierData)
                .then((res) => {
                    if (res?.data?.status === 200) {
                        setModalOpen(false)
                        toast.success("Supplier Added!")
                        axios.get(`${URL}/supplier`)
                            .then((res) => {
                                console.log(res?.data?.data)
                                setGetSuplier(res?.data?.data?.reverse())
                            })
                    }
                    else {
                        toast.success(res.data.message)
                    }
                })
        }
    }
    return (
        <div>
            <Modal
                title={title}
                style={{ top: 20 }}
                width={800}
                open={modalOpen}
                onOk={() => { setModalOpen(false) }}
                onCancel={() => { setModalOpen(false) }}
                footer={[<Button key="cancel" onClick={() => { setModalOpen(false) }}>Cancel</Button>,
                <Button key="ok" type="primary" onClick={submit}>Submit</Button>]
                }
            >

<div className="row">
                <div className="col-md-6 d-flex flex-column px-3 mb-3">
                    <label className="productCreateTxt">Full Name*</label>
                    <input type="text" className="productCreateInput" placeholder="Enter Full Name" id="fullName" required />
                </div>
                <div className="col-md-6 d-flex flex-column px-3 mb-3">
                    <label className="productCreateTxt">Email Address*</label>
                    <input type="text" className="productCreateInput" placeholder="Enter Email Address" id="emailAddress" required />
                </div>
                <div className="col-md-6 d-flex flex-column px-3 mb-3">
                    <label className="productCreateTxt">Password*</label>
                    <input type="password" className="productCreateInput" placeholder="minimum: 6 character" id="password" required />
                </div>
                <div className="col-md-6 d-flex flex-column px-3 mb-3">
                    <label className="productCreateTxt">Phone*</label>
                    <input type="text" className="productCreateInput" placeholder="Phone" id="repeatPassword" required />
                </div>
                <div className="col-md-6 d-flex flex-column px-3 mb-3">
                    <label className="productCreateTxt">Status*</label>
                    <select className="productCreateInput" id="status" required>
                        <option value={"Active"}>Active</option>
                        <option value={"Inactive"}>Inactive</option>
                    </select>
                </div>
                <div className="col-md-6 d-flex flex-column px-3 mb-3">
                    <label className="productCreateTxt">Account Type*</label>
                    <select className="productCreateInput" id="role" required>
                        <option value={""}>Cash</option>
                        <option value={"Super Admin"}>Bank</option>
                    </select>
                </div>
                <div className="col-md-12 d-flex flex-column px-3 mb-3">
                    <label className="productCreateTxt">Address*</label>
                    <textarea rows={6} type="text" className="productCreateInput" id="image" required style={{ paddingTop: "2.5px" }} ></textarea>
                        
                </div>
                <div className="col-md-6 d-flex flex-column px-3 mb-3">
                    <label className="productCreateTxt">Choose Avatar*</label>
                    <input type="file" className="productCreateInput" id="image" required style={{ paddingTop: "2.5px" }} />
                </div>
                <hr />
                {/* <div className="d-flex flex-column px-3 mb-3">
                    <label className="productCreateTxt">Choose Warehouse*</label>
                    <select className="productCreateInput" id="warehouse" required>
                        <option value={""}>---Choose Warehouse---</option>
                        {allWarehouse && allWarehouse?.map((item) => (
                            <option value={item?._id}>{item?.name}</option>
                        ))}
                    </select>
                </div> */}
            </div>



            </Modal>


        </div>
    )
}

export default CreateSuplier 
