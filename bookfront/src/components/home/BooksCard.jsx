import SingleBook from "./SingleBook"


const BooksCard = ({ books }) => {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {
                books.map((items) => (
                    <SingleBook  key={items._id} books={items} />
                ))
            }
        </div>
    )
}

export default BooksCard

