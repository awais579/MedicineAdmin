import React, { useEffect, useState } from "react";
import axios from "axios";
import { Input, Space } from 'antd'
import { toast } from 'react-toastify';
import "./Product.css"
import { AiOutlineCheckCircle } from "react-icons/ai"
import URL from "../../Url";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
    const [allGroup, setAllGroup] = useState([])
    const [allWarehouse, setAllWarehouse] = useState([])
    const [allSupplier, setAllSupplier] = useState([])
    const [allBrand, setAllBrand] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`${URL}/group`).then((res) => {
            setAllGroup(res?.data?.data)
        })
        axios.get(`${URL}/warehouse`).then((res) => {
            setAllWarehouse(res?.data?.data)
        })
        axios.get(`${URL}/supplier`).then((res) => {
            setAllSupplier(res?.data?.data)
        })
        axios.get(`${URL}/brand`).then((res) => {
            setAllBrand(res?.data?.data)
        })
    }, [])
    const arrWarehouse = []
    const fn_handleSubmitProduct = (e) => {
        e.preventDefault()
        arrWarehouse?.push(document.getElementsByName("warehouse")?.[0].value)
        const params = new FormData()
        params.append('productName', document.getElementsByName("productName")?.[0].value)
        params.append('productCode', document.getElementsByName("productCode")?.[0].value)
        params.append('group', document.getElementsByName("productGroup")?.[0].value)
        params.append('brand', document.getElementsByName("productBrand")?.[0].value)
        params.append('tax', document.getElementsByName("orderTax")?.[0].value)
        params.append('taxMethod', document.getElementsByName("taxMethod")?.[0].value)
        params.append('imageUrl', document.getElementsByName("image")?.[0].files[0])
        params.append('details', document.getElementsByName("productDetails")?.[0].value)
        params.append('productType', document.getElementsByName("productType")?.[0].value)
        params.append('productCost', document.getElementsByName("productCost")?.[0].value)
        params.append('productPrice', document.getElementsByName("productPrice")?.[0].value)
        params.append('unitProduct', document.getElementsByName("unitProduct")?.[0].value)
        params.append('unitSale', document.getElementsByName("unitSale")?.[0].value)
        params.append('unitPurchase', document.getElementsByName("unitPurchase")?.[0].value)
        params.append('quantity', document.getElementsByName("minSaleQty")?.[0].value)
        params.append('stockAlert', document.getElementsByName("stockAlert")?.[0].value)
        params.append('warehouse', arrWarehouse)
        params.append('supplier', document.getElementsByName("supplier")?.[0].value)
        params.append('imeiNum', document.getElementsByName("imeiNum")?.[0].checked)
        console.log(params?.get('warehouse'))
        axios.post(`${URL}/product`, params).then((res) => {
            if (res?.data?.status === 200) {
                toast.success("Product Added")
                navigate("/allproduct")
            } else {
                toast.error(res?.data?.message)
            }
        })
    }
    return (
        <div>
            <p className='dashboadHeading' >Add Product</p >
            <hr className='dashboardLine' />
            <form onSubmit={fn_handleSubmitProduct}>
                {/* box-1 */}
                <div className="productMainBox">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 d-flex flex-column px-3 mb-3">
                            <label className="productCreateTxt">Product Name*</label>
                            <input type="text" className="productCreateInput" placeholder="Product Name" name="productName" required />
                        </div>
                        <div className="col-md-4 col-sm-6 d-flex flex-column px-3 mb-3">
                            <label className="productCreateTxt">Product Code*</label>
                            <input type="text" className="productCreateInput" placeholder="Product Code" name="productCode" required />
                        </div>
                        <div className="col-md-4 col-sm-6 d-flex flex-column px-3 mb-3">
                            <label className="productCreateTxt">Group*</label>
                            <select className="productCreateInput" name="productGroup" required>
                                <option selected value={""}>---Select Group---</option>
                                {allGroup && allGroup?.map((item) => (
                                    <option value={item?._id}>{item?.grpName}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-4 col-sm-6 d-flex flex-column px-3 mb-3">
                            <label className="productCreateTxt">Brand</label>
                            <select className="productCreateInput" name="productBrand" required>
                                <option selected value={""}>---Choose Brand---</option>
                                {allBrand && allBrand?.map((item) => (
                                    <option value={item?._id}>{item?.brandName}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-4 col-sm-6 d-flex flex-column px-3 mb-3">
                            <label className="productCreateTxt">Order Tax</label>
                            <Space.Compact style={{ backgroundColor: "rgba(40, 129, 201, 0.055)", margin: "0.3rem 0", width: "100%" }}>
                                <Input type="number" addonBefore={"%"} placeholder="0" name="orderTax" />
                            </Space.Compact>
                        </div>
                        <div className="col-md-4 col-sm-6 d-flex flex-column px-3 mb-3">
                            <label className="productCreateTxt">Tax Method</label>
                            <select className="productCreateInput" name="taxMethod" required>
                                <option selected value={"exclusive"}>Exclusive</option>
                                <option value={"inclusive"}>Inclusive</option>
                            </select>
                        </div>
                        <div className="col-md-4 col-sm-6 d-flex flex-column px-3 mb-3">
                            <label className="productCreateTxt">Product Image*</label>
                            <input type="file" className="productCreateInput" placeholder="Order Tax" name="image" required style={{ paddingTop: "2.5px" }} />
                        </div>
                        <div className="col-12 d-flex flex-column px-3 mb-3">
                            <label className="productCreateTxt">Please Prove any Details*</label>
                            <textarea type="number" className="productCreateTextArea" name="productDetails" required />
                        </div>
                    </div>
                </div>
                {/* box-2 */}
                <div className="productMainBox">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 d-flex flex-column px-3 mb-3">
                            <label className="productCreateTxt">Product Type*</label>
                            <select className="productCreateInput" name="productType" required>
                                <option selected value={""}>---Select Product Type---</option>
                                <option value={"Standard Product"}>Standard Product</option>
                                <option value={"Variable Product"}>Variable Product</option>
                                <option value={"Service Product"}>Service Product</option>
                            </select>
                        </div>
                        <div className="col-md-4 col-sm-6 d-flex flex-column px-3 mb-3">
                            <label className="productCreateTxt">Product Cost*</label>
                            <input type="number" className="productCreateInput" placeholder="Product Cost" name="productCost" required />
                        </div>
                        <div className="col-md-4 col-sm-6 d-flex flex-column px-3 mb-3">
                            <label className="productCreateTxt">Product Price*</label>
                            <input type="number" className="productCreateInput" placeholder="Product Price" name="productPrice" required />
                        </div>
                        <div className="col-md-4 col-sm-6 d-flex flex-column px-3 mb-3">
                            <label className="productCreateTxt">Unit Product*</label>
                            <select className="productCreateInput" name="unitProduct" required>
                                <option selected value={""}>---Choose Product Unit---</option>
                                <option value={"kg"}>kilogram</option>
                                <option value={"meter"}>meter</option>
                                <option value={"piece"}>piece</option>
                            </select>
                        </div>
                        <div className="col-md-4 col-sm-6 d-flex flex-column px-3 mb-3">
                            <label className="productCreateTxt">Unit Sale*</label>
                            <select className="productCreateInput" name="unitSale" required>
                                <option selected value={""}>---Choose Sale Unit---</option>
                                <option value={"option1"}>Option 1</option>
                                <option value={"option2"}>Option 2</option>
                            </select>
                        </div>
                        <div className="col-md-4 col-sm-6 d-flex flex-column px-3 mb-3">
                            <label className="productCreateTxt">Unit Purchase*</label>
                            <select className="productCreateInput" name="unitPurchase" required>
                                <option selected value={""}>---Choose Purchase Unit---</option>
                                <option value={"option1"}>Option 1</option>
                                <option value={"option2"}>Option 2</option>
                            </select>
                        </div>
                        <div className="col-md-4 col-sm-6 d-flex flex-column px-3 mb-3">
                            <label className="productCreateTxt">Minimum Sale Quantity</label>
                            <input type="number" className="productCreateInput" defaultValue={0} name="minSaleQty" required />
                        </div>
                        <div className="col-md-4 col-sm-6 d-flex flex-column px-3 mb-3">
                            <label className="productCreateTxt">Stock Alert</label>
                            <input type="number" className="productCreateInput" defaultValue={0} name="stockAlert" required />
                        </div>
                    </div>
                </div>
                {/* box-3 */}
                <div className="productMainBox">
                    <div className="row">
                        <div className="col-md-6 d-flex flex-column px-3 mb-3">
                            <label className="productCreateTxt">Choose Warehouse*</label>
                            <select className="productCreateInput" name="warehouse" required>
                                <option selected value={""}>---Choose Warehouse---</option>
                                {allWarehouse && allWarehouse?.map((item) => (
                                    <option value={item?._id}>{item?.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-6 d-flex flex-column px-3 mb-3">
                            <label className="productCreateTxt">Choose Supplier*</label>
                            <select className="productCreateInput" name="supplier" required>
                                <option selected value={""}>---Choose Supplier---</option>
                                {allSupplier && allSupplier?.map((item) => (
                                    <option value={item?._id}>{item?.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="productMainBox ps-5">
                    <input type="checkbox" name="imeiNum" />
                    <label className="ms-3 productCreateTxt">Product has Imei/Serial Number</label>
                </div>
                <button type="submit" className="btn btn-info btn-md ms-3" style={{ width: "120px" }}>
                    <AiOutlineCheckCircle className="submitProductIcon text-dark" />Submit
                </button>
            </form>
            <br /><br />
        </div>
    )
}

export default CreateProduct