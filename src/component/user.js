import React from "react";

export default () => {
    return (
        <div style={{paddingTop: '10px', marginRight:"1%", marginLeft:"10%"}}>
            <svg
                width="0.811cm" height="0.952cm">
                <defs>
                    <filter id="Filter_0">
                        <feFlood flood-color="rgb(27, 161, 157)" flood-opacity="1" result="floodOut" />
                        <feComposite operator="atop" in="floodOut" in2="SourceGraphic" result="compOut" />
                        <feBlend mode="normal" in="compOut" in2="SourceGraphic" />
                    </filter>

                </defs>
                <g filter="url(#Filter_0)">
                    <path fill-rule="evenodd"  fill="rgb(0, 0, 0)"
                          d="M22.220,19.457 C20.981,17.915 19.483,16.914 17.337,16.346 L15.325,23.063 C15.325,23.682 14.794,24.188 14.146,24.188 C13.497,24.188 12.966,23.682 12.966,23.063 L12.966,17.718 C12.966,16.942 12.306,16.312 11.492,16.312 C10.678,16.312 10.017,16.942 10.017,17.718 L10.017,23.063 C10.017,23.682 9.487,24.188 8.838,24.188 C8.189,24.188 7.658,23.682 7.658,23.063 L5.647,16.346 C3.501,16.919 2.003,17.915 0.764,19.457 C0.274,20.064 0.009,21.285 -0.009,21.938 C-0.003,22.107 -0.009,22.304 -0.009,22.501 L-0.009,23.626 L-0.009,24.751 C-0.009,25.995 1.047,27.002 2.350,27.002 L20.633,27.002 C21.937,27.002 22.993,25.995 22.993,24.751 L22.993,23.626 L22.993,22.501 C22.993,22.304 22.987,22.107 22.993,21.938 C22.975,21.285 22.709,20.064 22.220,19.457 ZM5.299,5.948 C5.299,9.234 7.446,14.061 11.492,14.061 C15.467,14.061 17.685,9.234 17.685,5.948 C17.685,2.662 14.913,-0.005 11.492,-0.005 C8.071,-0.005 5.299,2.662 5.299,5.948 Z"/>
                </g>
            </svg>
        </div>
    )
}