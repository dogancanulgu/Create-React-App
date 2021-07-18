// function User (props){
//     return (
//     <h1>
//         { props.isLoggedIn ? `${props.name} ${props.surname}` : "Giriş yapmadınız"}
//     </h1>
//     );
// };

function User ({name, surname, age, isLoggedIn, friends}){
    return (
    <>
        <h1>
            { isLoggedIn ? `${name} ${surname} ${age}` : "Giriş yapmadınız"}
        </h1>
        {friends.map((friend, index) => (
            <div key={index}>
              {index + 1} - {friend}
            </div>))}
    </>
    );
};

export default User;