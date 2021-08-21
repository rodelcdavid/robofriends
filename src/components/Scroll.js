const Scroll = (props) => {
    return (
        <div style = {{ overflow: 'scroll', border: '5px solid black', height: '55vh', padding: '2rem', marginTop: '3rem' }}>
        {props.children}
        </div>
    );
}

export default Scroll;