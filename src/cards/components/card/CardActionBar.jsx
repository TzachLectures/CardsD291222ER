import { Box, CardActions, IconButton } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { func, string } from "prop-types";
export default function CardActionBar({
  id,
  handleDelete,
  handleLike,
  handleEdit,
}) {
  return (
    <>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Box>
          <IconButton aria-label="Delete Card" onClick={() => handleDelete(id)}>
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="Edit Card" onClick={() => handleEdit(id)}>
            <ModeEditIcon />
          </IconButton>
        </Box>
        <Box>
          <IconButton aria-label="Call">
            <CallIcon />
          </IconButton>
          <IconButton
            aria-label="Add to favorite"
            onClick={() => handleLike(id)}
          >
            <FavoriteIcon />
          </IconButton>
        </Box>
      </CardActions>
    </>
  );
}

CardActionBar.propTypes = {
  id: string,
  handleDelete: func,
  handleLike: func,
  handleEdit: func,
};
