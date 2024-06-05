
import React, { useState } from "react"
import "./../styles/home.scss";
import io from "socket.io-client";

const MainApp = () => {
    const socket = io("http://localhost:3001", { transports: ['websocket'] });

    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => {
        console.log(showModal);
        setShowModal(!showModal);
    };

    const [userItems, setUserItems] = useState([{ id: 1, name: "" }]); // Initial state with one user item

    // Function to add a new user item
    const addNewUserItem = () => {
        const newUserItem = { id: userItems.length + 1, name: "" };
        setUserItems([...userItems, newUserItem]);
    };

    const handleInputChange = (id, value) => {
        setUserItems(prevUserItems =>
            prevUserItems.map(userItem =>
                userItem.id === id ? { ...userItem, name: value } : userItem
            )
        );
        socket.emit('updateMobileUI', { id, name: value, userItems });
    };
    
    const handleDelete = (id) => {
        // Filter out the user item with the given id
        const updatedUserItems = userItems.filter(userItem => userItem.id !== id);
        // Update user items on the client-side
        setUserItems(updatedUserItems);
        // Emit the updated user items to the server (if needed)
        socket.emit('updateMobileUI', { userItems: updatedUserItems });
    };

    return (
        <>
            <section>
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-3">
                        <div className="left_bar">
                            <div className="d-flex flex-column">
                                <div className="logo">
                                    <i className="fa-solid fa-tree"></i>
                                </div>
                                <div>
                                    <div className="list">
                                        <div className="list_items ">
                                            <a href="#" className="menu_item active">
                                                <i className="fa-solid fa-bars"></i>
                                                Links
                                            </a>
                                        </div>
                                        <div className="list_items">
                                            <a href="#" className="menu_item">
                                                <i className="fa-solid fa-clone"></i>
                                                Appearance
                                            </a>
                                        </div>
                                        <div className="list_items">
                                            <a href="#" className="menu_item">
                                                <i className="fa-solid fa-signal"></i>
                                                Analytics
                                            </a>
                                        </div>
                                        <div className="list_items">
                                            <a href="#" className="menu_item">
                                                <i className="fa-solid fa-gear"></i>
                                                Settings
                                            </a>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div className="bottom">
                                <a href="#" className="d-block bottom_links bg">
                                    <i className="fa-solid fa-bolt"></i>
                                    Try For Free
                                </a>
                                <a href="#" className="d-block bottom_links border_line show_account" onClick={toggleModal}>
                                    <span className="first_letter">A</span> &nbsp;
                                    <span>
                                        @arshadiqbal
                                    </span>
                                </a>
                                {showModal && (
                                    <div className="info_modal flex-column" id="show_modal">
                                        <div className="">
                                            <a href="#" className="bottom_links border_line">
                                                <span className="first_letter">A</span>
                                                <div>
                                                    <span className="name">@arshadiqbal</span>
                                                    <br />
                                                    <span className="link">linktr.ee/arshadiqbal</span>
                                                </div>

                                            </a>

                                            <a href="#" className="d-block bottom_links bg">
                                                Create a New Linktree
                                            </a>

                                        </div>

                                        <div className="modal_wrapper_link">
                                            <div className="list">
                                                <h2 className="title">Account</h2>
                                                <div className="list_items ">
                                                    <a href="#" className="menu_item ">
                                                        <i className="fa-regular fa-circle-user"></i>
                                                        My Account
                                                    </a>
                                                </div>
                                                <div className="list_items">
                                                    <a href="#" className="menu_item">
                                                        <i className="fa-solid fa-dollar-sign"></i>
                                                        Billing
                                                    </a>
                                                </div>
                                                <div className="list_items">
                                                    <a href="#" className="menu_item">
                                                        <i className="fa-solid fa-circle-exclamation"></i>
                                                        Cookies Preference
                                                    </a>
                                                </div>

                                                <h2 className="title pt-3">Support</h2>
                                                <div className="list_items ">
                                                    <a href="#" className="menu_item ">
                                                        <i className="fa-regular fa-circle-question"></i>
                                                        My Ask a Question
                                                    </a>
                                                </div>
                                                <div className="list_items">
                                                    <a href="#" className="menu_item">

                                                        <i className="fa-regular fa-circle-user"></i>
                                                        Help topics
                                                    </a>
                                                </div>
                                                <div className="list_items">
                                                    <a href="#" className="menu_item">
                                                        <i className="fa-regular fa-comments"></i>
                                                        Submit Feedback
                                                    </a>
                                                </div>
                                                <div className="list_items">
                                                    <a href="#" className="menu_item">
                                                        <i className="fa-solid fa-signal"></i>
                                                        Sign out
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-6">
                        <div className="center_bar">
                            <div className="alert alert-primary" role="alert">
                                <span>Your linktree is live: </span>
                                <button className="btn btn-secondary">Copy your linktree URL</button>
                            </div>
                            <div className="row switch-link-shop">Switch</div>
                            <div className="row add_link_section">
                                <button className="add_link btn btn-secondary"><svg width="16" height="16" viewBox="0 0 16 16"
                                    fill="none" xmlns="http://www.w3.org/2000/svg" className=" " role="img" aria-hidden="true"
                                    aria-labelledby=" ">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M7.5 8.5V16H8.5V8.5H16V7.5H8.5V0H7.5V7.5H0V8.5H7.5Z" fill="currentColor"></path>
                                </svg> Add Link</button>
                            </div>
                            <div className="row button-space">
                                <div className="col-sm-12 col-md-3 col-lg-3">
                                    <button className="btn btn-secondary left-btn" onClick={addNewUserItem}><svg className="mr-xs" width="16" height="16"
                                        viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M0.5 -0.000244141H0V0.999755L0.5 0.999756L15.4999 0.999775L15.9999 0.999776L15.9999 -0.000224382L15.4999 -0.000225008L0.5 -0.000244141ZM0.500074 3.99976L7.37309e-05 4.49975L0 15.4998L0.5 15.9998H15.5L16 15.4998V4.49977L15.5 3.99977L0.500074 3.99976ZM1 14.9998L1.00007 4.99976L15 4.99977V14.9998H1Z"
                                            fill="black"></path>
                                    </svg> Add header</button>
                                </div>
                                <div className="col-sm-12 col-md-3 col-lg-3">
                                    <button className="btn btn-secondary right-btn"><svg width="16" height="16" viewBox="0 0 16 16"
                                        fill="none" xmlns="http://www.w3.org/2000/svg" className=" " role="img"
                                        aria-hidden="false" aria-labelledby="ltclid50_title ">
                                        <title id="ltclid50_title">Archive</title>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M1.65094 4.25035C1.65094 5.41906 1.65094 14.9234 1.65094 14.9234H14.3432C14.3306 11.3658 14.3432 7.80798 14.3432 4.25035"
                                            stroke="currentColor" strokeLinejoin="bevel"></path>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M15.5 1.07713H0.5V3.96175H15.5V1.07713Z" stroke="currentColor"
                                            strokeLinejoin="bevel"></path>
                                        <line fillRule="evenodd" clipRule="evenodd" x1="5" y1="6.49998" x2="11"
                                            y2="6.49998" stroke="currentColor"></line>
                                    </svg> Archive <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" className=" -rotate-90 " role="img"
                                        aria-hidden="false" aria-labelledby="ltclid38_title ltclid38_desc">
                                            <title id="ltclid38_title">Chevron</title>
                                            <desc id="ltclid38_desc">Chevron pointing right</desc>
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                d="M1.70711 4L2.06066 4.35355L7.70711 10L13.3536 4.35355L13.7071 4L14.4142 4.70711L14.0607 5.06066L8.06066 11.0607H7.35355L1.35355 5.06066L1 4.70711L1.70711 4Z"
                                                fill="currentColor"></path>
                                        </svg></button>
                                </div>
                            </div>

                            <div className="row">
                                <div className="dropzone-teams card-body">
                                    <div className="available-users dropzone-users">
                                        {userItems.map(userItem => (
                                            <div key={userItem.id} className="drag-user list list-row bg-white">
                                                <div className="list-item border mb-1 d-flex align-items-center">
                                                    {/* Left aligned div */}
                                                    <div className="text-muted">
                                                        <i className="user-handle fas fa-ellipsis-v"></i>
                                                    </div>

                                                    {/* Center aligned div */}
                                                    <div className="flex-grow-1" style={{ padding: "10px" }}>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            value={userItem.name}
                                                            onChange={(e) => handleInputChange(userItem.id, e.target.value)}
                                                        />
                                                    </div>

                                                    {/* Right aligned div */}
                                                    <div className="text-muted ml-auto" style={{ padding: "10px" }} onClick={() => handleDelete(userItem.id)}>
                                                        <i className="fas fa-trash"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-3">
                        <div className="right_bar" id="mobile-ui">
                            <iframe src="http://localhost:3001" style={{ width: "100%", height: "100%", border: "none" }}></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default MainApp
