
const HOC = (props) => {
    console.log(props);
    return (
        <div>
            <props.icon />
        </div>
    );
};

export default HOC;