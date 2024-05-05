/* eslint-disable react/prop-types */
import "./blogcard.css"
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Card, CardContent, CardHeader, IconButton } from "@mui/material";
import { useState } from "react";

const BlogCard = ({username,userLogo,title,description}) => {
  const [iconColor, setIconColor] = useState("disabled");
  function changeColor() {
    if (iconColor == "disabled") {
      setIconColor("error");
    }
    else {
      setIconColor("disabled");
    }
  }
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              {userLogo}
            </Avatar>
          }
          title={username}
        />
        <CardContent>
          <h3>{title}</h3>
          <p>{description}</p>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton onClick={()=>changeColor()} aria-label="add to favorites">
            <FavoriteIcon color={iconColor} />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default BlogCard;
