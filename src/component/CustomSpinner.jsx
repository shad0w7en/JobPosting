import ClipLoader from 'react-spinners/ClipLoader';

const override = {
    display: 'block',
    margin: '100px auto'
};

const CustomSpinner = ({ loading }) => {
    const spinnerContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    };

    return (
        <div style={spinnerContainerStyle}>
            <ClipLoader
                color="#4338ca"
                loading={loading}
                size={150}
                cssOverride={override}
            />
        </div>
    );
}

export default CustomSpinner