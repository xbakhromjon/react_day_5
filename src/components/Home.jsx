import useFetch from "../utils/FetchData.jsx";

function Home() {
    const {data: blogs, isPending, errorMessage} = useFetch("http://localhost:8000/blogs");

    return (
        <>
            <h1>Home</h1>
            {errorMessage && <p>{errorMessage}</p>}
            {isPending && <p>Loading...</p>}
            {blogs && blogs.map((blog) => (
                <>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </>
            ))}
        </>
    )
}


export default Home