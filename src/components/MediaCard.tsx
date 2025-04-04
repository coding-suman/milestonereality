// MediaCard.tsx

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface MediaCardProps {
  title: string;
  image: string;
  content: string[];
}

const MediaCard: React.FC<MediaCardProps> = ({ title, image, content }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        {content.map((text, index) => (
          <Typography key={index} variant="body2" sx={{ color: 'text.secondary' }}>
            {text}
          </Typography>
        ))}
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}

export default MediaCard;
