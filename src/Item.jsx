function Item({source, onClick}) { 
    return (
        <img 
            src={source}
            width={150}
            height={150}
            alt="Item"
            onClick={onClick}
        />
    );
}

export default Item;