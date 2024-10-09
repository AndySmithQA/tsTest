interface Blog {
    id: number;
    title: string;
    author: string;
}

interface BlogsProps {
    blogs: Blog[];
}

const Blogs = ({ blogs }: BlogsProps) => {

    return (
        <div className="blog-list">
            {blogs.map((blog) => (
                <div className="blog" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    )
}

export default Blogs;