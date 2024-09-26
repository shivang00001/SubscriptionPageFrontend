import React from "react";
import Feature from "../Feature/Feature";


const Package = (props) => {
  return <>
    <tr className="tr-heading">
      <td className="plan-title padding-t30">
        {props.name}
      </td>
      <td></td>
      <td></td>
      <td className="bg-lgrey-03"></td>
      <td></td>
    </tr>
    {
      Array.isArray(props.data) && !!props.data.length && props.data.map((f) => {
        return <Feature {...f} numberOfSubs={props.numberOfSubs} />
      })
    }
  </>
}

export default Package;
