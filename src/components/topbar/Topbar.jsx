import "./topbar.css"
const mystyle = {
    flex: 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
};
const centerStyle = {
    flex: 6,
    // backgroundColor: "Blue"
};
export default function TopBar() {
    return (
        <div className='top'>
            <div className="topLeft"
                style={mystyle}
            >
                <i className="topIcon fa-brands fa-square-facebook"></i>
                <i className="topIcon fa-brands fa-twitter"></i>
                <i className="topIcon fa-brands fa-pinterest"></i>
                <i className="topIcon fa-brands fa-square-instagram"></i>
            </div>
            <div className="topCenter"
                style={centerStyle}
            >
                <ul className="topList">
                    <li className="topListItems">HOME</li>
                    <li className="topListItems">ABOUT</li>
                    <li className="topListItems">CONTACT</li>
                    <li className="topListItems">WRITE</li>
                    <li className="topListItems">LOGOUT</li>
                </ul>
            </div>
            <div className="topRight"
                style={mystyle}
            >
                <img
                    className="topImg"
                    src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=400" alt=""></img>
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
