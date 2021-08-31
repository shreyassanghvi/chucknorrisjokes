import React from "react";

const Card = function ({Joke}) {
    try {

        return (
            <div className={"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"}>
                <p>{Joke}</p>
            </div>
        );
    } catch (e) {
        console.log(e);
    }
};
export default Card
;