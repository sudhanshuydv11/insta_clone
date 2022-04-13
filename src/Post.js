import React from "react";
import "./Post.css";
import Avatar from "@mui/material/Avatar";
export default function Post({caption,imgurl,username})
{
  

    return(
    <div className="post">

        {/*header avatar*/}
        <div className="post__header">
        <Avatar
        className="Post__avatar"
        src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAUS0VG.img?w=612&h=304&q=60&m=6&f=jpg&x=3060&y=1078&u=t"
        alt={username}
        />
        <h3>{username}</h3>
        </div>
        
        <img
        className="Post_image"
        alt="nothin wong"
        src={imgurl}
        />
        {/* post*/}~
        <h4 className="post__text">{caption}</h4>
        {/*username caption */}
    </div>);
}