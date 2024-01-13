

const Books = () => {

    const favoriteBooks = [
        {id:"id-1", name:"Js pentru incepatori"},
        {id:"id-2", name:"React Basics "},
        {id:"id-3", name:"React Router"},
        {id:"id-4", name:"Redux in depth"}
    ];


    return(

        <section>
            <h1>Books</h1>
            <ul>
                {favoriteBooks.map( el => {
                    return <li key = {el.id} > {el.name}</li>
                })}
            </ul>

        </section>
    )
}

export default Books;