// function User (props){
//     return (
//     <h1>
//         { props.isLoggedIn ? `${props.name} ${props.surname}` : "Giriş yapmadınız"}
//     </h1>
//     );
// };

function User ({name, surname, age, isLoggedIn}){
    return (
    <h1>
        { isLoggedIn ? `${name} ${surname} ${age}` : "Giriş yapmadınız"}
    </h1>
    );
};

export default User;