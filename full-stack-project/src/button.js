// Matthew Mawko
// Purpose: To create 3 buttons to be used on site
// Buttons should have the following: Buy, Sell, Description


const button = function(props)
{
    const buttonimage = ""; // << if you want custom buttom img
    const button1 = React.createElement("button",{src:buttonimage, className: "buttons"});
    return(
        <div id = 'buttons'>
            {button1};

            </div>
    )
}

export default button;