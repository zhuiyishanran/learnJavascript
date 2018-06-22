import React, { Component } from "react";
import PostItem from "./PostItem";

const data = [
	{title:"javascript", author:"li", date:"2018-6-22 21:07"},
	{title:"python", author:"li", date:"2018-6-22 21:07"},
	{title:"java", author:"Yang", date:"2018-6-22 21:07"}
];


class PostList extends Component {
	render() {
		return (
			<div>
				帖子列表：
				<ul>
					{data.map(item => 
						<PostItem
							title={item.title}
							author={item.author}
							date={item.date}
						/>
					)}
				</ul>
			</div>
			);
	}
}

export default PostList;