import React from "react";

const FirstSectionDashBoard = () => {
    return (
        <div className="row">
            <div className="col-lg-6 col-md-12 mb-4">
                <div className="dashboardSectionBox ms-4 p-4 d-flex flex-row align-items-center justify-content-between">
                    <div>
                        <p className="text-primary fw-semibold mb-1">
                            Good Morning, William Castillo!
                        </p>
                        <p className="p-0 mb-4 dashboardTxt">
                            Here’s what happening with your store today!
                        </p>
                        <div className="dashboard_today_purchases">
                            <p className="mb-1 dashboardTxtHead">
                                $ 1,040.00
                            </p>
                            <p className="p-0 mb-4 dashboardTxt">
                                Today’s total Purchases
                            </p>
                        </div>
                        <div>
                            <p className="mb-1 dashboardTxtHead">
                                $ 399.00
                            </p>
                            <p className="p-0 m-0 dashboardTxt">
                                Today’s total Sales
                            </p>
                        </div>
                    </div>
                    <img className="pe-lg-3" width="194" height="170" src="https://posly.getstocky.com/images/overview.png" alt="" />
                </div>
            </div>
            <div className="col-lg-6 col-md-12">
                <div className="row me-3">
                    <div className="col-md-6 col-sm-6">
                        <div className="mb-4 dashboardSectionBox ps-4">
                            <p className="dashboardTxt">
                                Sales
                            </p>
                            <h4 className="dashboardTxtHead">
                                $ 399.00
                            </h4>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="mb-4 dashboardSectionBox ps-4">
                            <p className="dashboardTxt">
                                Purchases
                            </p>
                            <h4 className="dashboardTxtHead">
                                $ 1,040.00
                            </h4>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="mb-4 dashboardSectionBox ps-4">
                            <p className="dashboardTxt">
                                Sales Return
                            </p>
                            <h4 className="dashboardTxtHead">
                                $ 0.00
                            </h4>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="mb-4 dashboardSectionBox ps-4">
                            <p className="dashboardTxt">
                                Purchases Return
                            </p>
                            <h4 className="dashboardTxtHead">
                                $ 0.00
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstSectionDashBoard