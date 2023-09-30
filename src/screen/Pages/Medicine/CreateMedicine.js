import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const CreateMedicine = ({ Modal, Button, modalOpen, setModalOpen }) => {
    const [companyId, setCompanyId] = useState('')
    const [categoryId, setCategoyrId] = useState('')
    const [itemName, setItemName] = useState('')
    const [description, setDescription] = useState('')
    const [salePrcie, setsalePrice] = useState('')
    const [purchasePrice, setPurchasePrice] = useState('')
    const [qty, setQty] = useState('')
    const [reorder, setReorder] = useState('')
    const [typeId, setTypeId] = useState('')

    const navigate = useNavigate()
    const addMecicine = () => {
        // const param = {
        //     'name': name,
        //     'price': price,
        //     'description': description
        // }
        // axios.post('http://192.168.18.47:8003/api/v1/medicine/create', param).then((res) => {
        //     navigate('/medicine')
        //     window.location.reload()
        // }).then((err) => { console.log(err); })

    }
    return (
        <>
            <Modal
                title="Create Medicine"
                style={{ top: 20 }}
                open={modalOpen}
                onOk={() => setModalOpen(false)}
                onCancel={() => setModalOpen(false)}
                width={600}
                footer={[
                    <div>
                        <Button key="cancel" onClick={() => setModalOpen(false)}>Cancel</Button>
                        <Button key="ok" onClick={addMecicine} type="primary" >
                            Create
                        </Button>

                    </div>
                ]}
            >
                <hr />
                <div className="row">
                    <div className="col-md-6 d-flex flex-column px-3 mb-3">
                        <label className="productCreateTxt">Company Name*</label>
                        <input type="text" className="productCreateInput" value={companyId} placeholder="Company Name" id="fullName" required onChange={(e) => setCompanyId(e.target.value)} />

                    </div>
                    <div className="col-md-6 d-flex flex-column px-3 mb-3">
                        <label className="productCreateTxt">Category Name*</label>
                        <input type="text" className="productCreateInput" value={categoryId} placeholder="Category Name" id="fullName" required onChange={(e) => setCategoyrId(e.target.value)} />

                    </div>

                    <hr />
                </div>
                <div className="row">
                    <div className="col-md-6 d-flex flex-column px-3 mb-3">
                        <label className="productCreateTxt">Item Name*</label>
                        <input type="text" className="productCreateInput" value={itemName} placeholder="Item name" id="emailAddress" required onChange={(e) => setItemName(e.target.value)} />

                    </div>
                    <div className="col-md-6 d-flex flex-column px-3 mb-3">
                        <label className="productCreateTxt">Purchase Price*</label>
                        <input type="text" className="productCreateInput" value={purchasePrice} placeholder="Description" id="password" required onChange={(e) => setPurchasePrice(e.target.value)} />

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 d-flex flex-column px-3 mb-3">
                        <label className="productCreateTxt">Sale Price*</label>
                        <input type="text" className="productCreateInput" value={salePrcie} onChange={(e) => setsalePrice(e.target.value)} placeholder="Sale Price" id="emailAddress" required />
                    </div>
                    <div className="col-md-6 d-flex flex-column px-3 mb-3">
                        <label className="productCreateTxt">Qty*</label>
                        <input type="text" className="productCreateInput" value={qty} onChange={(e) => setQty(e.target.value)} placeholder="Qty" id="password" required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 d-flex flex-column px-3 mb-3">
                        <label className="productCreateTxt">Reorder*</label>
                        <input type="text" className="productCreateInput" value={reorder} onChange={(e) => setReorder(e.target.value)} placeholder="Reorder" id="emailAddress" required />
                    </div>
                    {/* <div className="col-md-6 d-flex flex-column px-3 mb-3">
                        <label className="productCreateTxt">Type Id*</label>
                        <input type="text" className="productCreateInput" value={typeId} onChange={(e) => setTypeId(e.target.value)} placeholder="Type Id" id="password" required />
                    </div> */}
                     <div className="col-md-6 d-flex flex-column px-3 mb-3">
                        <label className="productCreateTxt">Medicine Type*</label>
                       <select name="" id="" className="form-control">
                        <option value="">Liquid</option>
                        <option value="">Powder</option>
                       </select>
                    </div>
                </div>
            </Modal>
        </>
    )


}
export default CreateMedicine