function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                {props.children}
                <button className="popup-inner-btn" onClick={props.closePopup}>Close</button>
            </div>
        </div>
    ) : "";
}

export default Popup;