import React from "react";
const ImageComp = function (props)
{
    const ItemImage = "../honeybadger1.jpeg"; //insert image URL or file name from public folder here
    const ItemIMG = React.createElement("img",{src: ItemImage, className: "itemImage"});
    return(
        <div id = "itemIMGDiv">
            {ItemIMG}
        </div>
    );
}

export default ImageComp;