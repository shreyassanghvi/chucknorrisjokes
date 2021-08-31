import React from "react";

const Card =  function ({Text}) {
    try {
        return (
            <div className={"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"}>
                <p>Lorem Epsum</p>
                <div>
                    <button>{Text}</button>
                </div>
            </div>
        );
    } catch (e) {
        console.log(e);
    }

};
export default Card
;