const ImageComp = function (props)
{
    const ItemImage = ""; //insert image URL or file name from public folder here
    const ItemIMG = React.createElement("img",{src: ItemImage, className: "itemImage"});
    return(
        <div id = "itemIMGDiv">
            {ItemIMG}
        </div>
    );
}