import React from "react";
import { Story } from "../../types/types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from "@material-ui/core";
import { useDrag } from "react-dnd";

interface StoryCardProps {
  story: Story;
}

const StoryCard = ({ story }: StoryCardProps) => {
  const [connectDrag, drag] = useDrag({
    item: { id: story.id, type: "story" }
  });
  return (
    <div ref={drag}>
      <Card style={{ width: "200px" }}>
        <CardContent>
          <Typography>{story.title}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default StoryCard;
