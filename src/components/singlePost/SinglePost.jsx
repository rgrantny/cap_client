import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                    className="singlePostImg"
                    src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                    className="singlePostImg"
                />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Author: <b>Grant</b>
                    </span>
                <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adnesciant minus 
                accucamas magni quaerat cumqueblanditis, maiores sed nehil sapiente 
                accusantium soluta aliquid facere excepturi! Cupiditate, earum! Molestiae, 
                voluptatum?
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adnesciant minus 
                accucamas magni quaerat cumqueblanditis, maiores sed nehil sapiente 
                accusantium soluta aliquid facere excepturi! Cupiditate, earum! Molestiae, 
                voluptatum?
                </p>
            </div>
        </div>
    );
}
