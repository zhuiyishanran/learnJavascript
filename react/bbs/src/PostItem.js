import React, { Component } from "react";
import "./PostItem.css";
import like from "./like-default.png";

function PostItem(props) {
	const handleClick = () => {
		props.onVote(props.post.id);
	};

	const { post } = props;
	return (
		<li>
			<div>{post.title}</div>
			<div>创建人：<span>{post.author}</span></div>
			<div>时间：<span>{post.date}</span></div>
			<div><button onClick={handleClick}>点 赞</button>
			&nbsp;
			<span>{post.vote}</span>
			</div>
		</li>
	);
}


export default PostItem;