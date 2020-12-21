function Food({ fav }) {
    console.log({ fav });
    return <h1>I Like {fav}</h1>;
}

function App() {
    return (
        <div>
            <h1>je gal su love me haha</h1>
            <Food fav="kimchi" />
            <Food fav="ramen" />
            <Food fav="samgiopsal" />
            <Food fav="chukumi" />
        </div>
    );
}

export default App;
