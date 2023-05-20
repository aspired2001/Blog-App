
import "./post.css"


export default function Post() {
    return (
        <div className="posts">
            <img
                src="https://images.pexels.com/photos/8752666/pexels-photo-8752666.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="postImg"
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Twitter is a popular social networking
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Although the cache improves usability, it also uses up storage space on your phone if you don’t clear it after some time, which limits available space and makes your device slower. Your daily user experience won't be impacted by clearing the cache memory because it is regenerated each time you scroll through your Twitter feed.
            </p>
        </div>
    )
}
