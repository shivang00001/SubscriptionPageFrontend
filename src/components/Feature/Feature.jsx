import React from "react";

const Feature = (props) => {
    return <tr>
        <td class="tooltip">
            {props.name}
            <span class="svg-icons">
                <svg viewBox="0 0 448 512">
                </svg>
            </span>
            {/* <div class="tooltiptext">
                {props.description}
            </div> */}
        </td>
        {
            Array.isArray(props.subsriptions) ? props.subsriptions.map((pl) => {
                const supprtClass = pl.support ? "has" : "hasnot"
                return <td><span class={supprtClass}></span></td>
            }) : [...Array(props.numberOfSubs).keys()].map((s) => {
                return <td><span class="has"></span></td>
            })
        }
    </tr>
}

export default Feature;
