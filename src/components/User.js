import PropTypes from "prop-types";


// function User (props){
//     return (
//     <h1>
//         { props.isLoggedIn ? `${props.name} ${props.surname}` : "Giriş yapmadınız"}
//     </h1>
//     );
// };

function User ({name, surname, age, isLoggedIn, friends, address}){

    // if(!isLoggedIn){ return <div>Giriş yapmadınız</div>}

    return (
    <>
        <h1>
            { isLoggedIn ? `${name} ${surname} ${age}` : "Giriş yapmadınız"}
        </h1>

        {address.title} {address.zip}
        <br/>

        {friends && 
            friends.map((friend, index) => (
                <div key={index}>
                {index + 1} - {friend}
                </div>))}
    </>
    );
};

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    // age: PropTypes.number.isRequired,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    friends: PropTypes.array,
    address: PropTypes.shape({ 
        title: PropTypes.string,
        zip: PropTypes.number,
    })
};

User.defaultProps ={
    isLoggedIn: false
}

export default User;