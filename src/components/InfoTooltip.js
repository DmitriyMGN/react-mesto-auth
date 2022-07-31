function InfoToolTip (props) {
  return (
    <div className={`
    popup 
    ${props.card ? "popup_sucess" : "popup_fail"}
    ${Object.keys(props.card).length ? "popup_open" : ""}
    `}
    >
      <div className="popup__content popup__content_card-image">
        <button type="button" className="popup__cross" onClick={props.onClose}></button>
        <img className="popup__card-image" alt={props.card.name} src={` ${props.card ? props.card.link : ""} `} />
        <p className="popup__caption">{props.card.name}</p>
      </div>
    </div>
  )
}

export default InfoToolTip;