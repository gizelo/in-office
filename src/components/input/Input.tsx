import React, {useState} from 'react';

import {useAppDispatch} from '../../app/hooks';
import {addPost} from '../../app/slices/postsSlice';

import {IoMdSend} from "react-icons/io"
import {CustomButton} from "../customButton/CustomButton";

export function Input() {
    const dispatch = useAppDispatch();

    const [value, setValue] = useState('')

    const handleChange = (e: { target: { value: string } }) => {
        const val = e.target.value
        setValue(val)
    }

    const handlePost = () => {
        const id = Date.now().toString()

        if (value.trim() !== '') {
            dispatch(addPost({id, text: value}))
            setValue('')
        }
    }

    return (
        <div className="flex justify-between items-center my-6 p-4 rounded-xl bg-neutral-200 dark:bg-neutral-700">
            <input
                className="w-full px-6 py-4 rounded-xl bg-neutral-50 dark:bg-neutral-800 dark:text-neutral-50"
                placeholder="What's new???"
                type="text"
                aria-label="Type your post"
                value={value}
                onChange={e => handleChange(e)}
                onKeyDown={e => {
                    if (e.key === 'Enter') {
                        handlePost()
                    }
                }}
            />
            <div className="ml-4">
                <CustomButton name={'Post'} onClick={handlePost} Icon={IoMdSend}/>
            </div>
        </div>
    );
}