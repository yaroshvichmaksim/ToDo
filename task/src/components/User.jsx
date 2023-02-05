import React, { useEffect, useState } from "react";
import GetService from "../API/GetService";

const User = () => {

    const [posts, setUsers] = useState([]);

    useEffect(() => {
        // Изменяем заголовок html-страницы   
        response();
        console.log("useEffect");
    }, []);
    async function response() {
        const data = await GetService.getAll();
        setUsers(data);

    }


    return (
        <div class="container">
            <div class="row">

                {posts.map((post) =>
                    <div class="col-md-4 col-sm-6 usercol" key={post.id} >
                        <div class="user-description">
                            <div class="user-image">
                                <img src="back.png" />
                                <p class="description">
                                    {post.description}
                                    <p class="address"> Address: {post.address.city}, {post.address.state}, {post.address.streetAddress}, {post.address.zip}</p>
                                </p>

                            </div>
                            <div class="user-info">
                                <div class="row">
                                    <div classs="col-md-4 col-sm-6">
                                        <h3 class="title">{post.firstName} {post.lastName}</h3>

                                    </div>
                                    <div classs="col-md-4 col-sm-6">
                                        <span class="title">{post.email}</span>
                                        <span class="post">{post.phone}</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                )
                }


            </div>
        </div >
    )
}

export default User;