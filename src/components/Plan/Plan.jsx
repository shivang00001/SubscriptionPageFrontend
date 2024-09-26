import React from "react";

const Plan = (props) => {
    return <th>
    <h2 className="plan-name">{props.name}</h2>
    <div className="price">
      <p className="per-month margin-b25 margin-t0 min-h60">{props.description}</p>
      <div className="price-wrapper-tab">
        <div className="biannual active">
          <div className="price-content discount-wrapper">
            <p className="dollar-sign js-currency-symbol">₹</p>
            {/* <p className="dollars js-price-basic-monthlyx">{props.previousPrice}</p> */}
          </div>
          <div className="price-content">
            <p className="dollar-sign js-currency-symbol">₹</p>
            <p className="dollars js-price-basic-biannualx">{props.cost}</p>
            <div className="per-month-flex">/mo</div>
          </div>
          {/* <div className="per-month notranslate">{`Billed ${props.billingPeriod!==1 ? props.billingPeriod : ""} Yearly`}</div> */}
        </div>
      </div>
    </div>
    <div className="price">
      <div className="per-month margin-t5">Tax may apply</div>
    </div>
  </th>
};

export default Plan;
