import { useState } from "react";

function ClickablePicture(props) {
    const [image, setImage] = useState(props.img);
    const [isClicked, setIsClicked] = useState(false)

    const toggleImg = () => {
        setIsClicked(!isClicked)
        setImage(isClicked ? props.img : props.imgClicked)
    }

    return ( 
        <div className="ClickableImg">
            <a onClick={toggleImg} href="#">
            <img src={image} alt="cool pic"/>
            </a>
        </div>
     );
}

export default ClickablePicture;