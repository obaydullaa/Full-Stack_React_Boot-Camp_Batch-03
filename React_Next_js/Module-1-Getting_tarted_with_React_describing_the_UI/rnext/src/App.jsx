// const people = [
//     "Creola Katherine Johnson: mathematician",
//     "Mario José Molina-Pasquel Henríquez: chemist",
//     "Mohammad Abdus Salam: physicist",
//     "Percy Lavon Julian: chemist",
//     "Subrahmanyan Chandrasekhar: astrophysicist",
// ];

// let itemList = people.map((person) => <li>{person}</li>);

// export default function app() {
//     return (
//         <div>
//             <ul>{itemList}</ul>
//         </div>
//     );
// }

const people = [
    {
        id: 0,
        name: "Creola Katherine Johnson",
        profession: "mathematician",
    },
    {
        id: 1,
        name: "Mario José Molina-Pasquel Henríquez",
        profession: "chemist",
    },
    {
        id: 2,
        name: "Mohammad Abdus Salam",
        profession: "physicist",
    },
    {
        id: 3,
        name: "Percy Lavon Julian",
        profession: "chemist",
    },
    {
        id: 4,
        name: "Subrahmanyan Chandrasekhar",
        profession: "astrophysicist",
    },
];

export default function app() {
    let chemists = people.filter((person) => person.profession === "chemist");
    let itemList = chemists.map((chemist) => <li key={chemist.id}>{chemist.name}</li>);

    return (
        <div>
            <ul>
                <li>{itemList}</li>
            </ul>
        </div>
    );
}
