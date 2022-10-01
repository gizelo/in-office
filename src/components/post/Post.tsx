import {CustomButton} from "../customButton/CustomButton";
import {AiFillDelete} from "react-icons/ai"
import {useAppDispatch} from "../../app/hooks";
import {deletePost} from '../../app/slices/postsSlice';

interface IProps {
    id: string;
    text: string;
}

export function Post({id, text}: IProps) {
    const dispatch = useAppDispatch();

    const handleDelete = () => {
        dispatch(deletePost(id))
    }

    return (
        <div
            className="flex justify-between items-center p-4 my-4 rounded-xl bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-50"
            key={id}
        >
            <span>{text}</span>
            <div className="ml-4">
                <CustomButton name={'Delete'} onClick={handleDelete} Icon={AiFillDelete}/>
            </div>
        </div>
    )
}