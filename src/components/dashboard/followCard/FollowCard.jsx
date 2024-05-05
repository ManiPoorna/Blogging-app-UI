/* eslint-disable react/prop-types */
import "./followcard.css"
import { Card, CardHeader, Avatar, Button } from "@mui/material";

const FollowCard = ({badgeInfo}) => {
  return (
    <>
      <Card className="follow-card" sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "#00803a85" }} aria-label="recipe">
              R
            </Avatar>
          }
          title="Shrimp and Chorizo Paella"
        />
        <Button size="small" variant="contained" color="error">
          {badgeInfo}
        </Button>
      </Card>
    </>
  );
};

export default FollowCard;
