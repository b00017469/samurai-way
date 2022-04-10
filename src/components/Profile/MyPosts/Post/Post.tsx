import React from "react";
import s from './Post.module.css'

type PostType = {
    message: string
}

const Post = (props: PostType) => {
    return <div>
        <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRALZAcoGIUr4WMJpsN3PqonWdIMd1oGXpbow&usqp=CAU'/>
            {props.message}
        </div>
    </div>
}

export default Post;