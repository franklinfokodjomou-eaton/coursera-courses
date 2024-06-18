function Bag(props) {
    const bag = {
        padding: "20px",
        border: "1px solid gray",
        backgroundColor: "#fff",
        margin: "20px 0",
    }
    return (
        <div>
            {props.children}
        </div>
    )
}

export default Bag;