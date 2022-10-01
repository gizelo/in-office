import {useAppSelector} from "../../app/hooks";
import {selectPosts} from "../../app/slices/postsSlice";
import {Post} from "../post/Post";

export function Feed() {
    const posts = useAppSelector(selectPosts)

    return (
        <div className="flex-col my-6 px-4 py-2 rounded-xl bg-neutral-200 dark:bg-neutral-700">
            {posts.length > 0 ? posts.map(post => {
                if (post) {
                    return <Post id={post.id} text={post.text}/>
                } else {
                    return null
                }
            }) : (
                <h1 className="font-bold text-center p-1 dark:text-neutral-50">No posts yet :(</h1>
            )}
        </div>
    )
}