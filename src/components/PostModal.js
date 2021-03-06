import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "react-modal";
import { useHistory } from "react-router-dom";
import { CloseIcon } from "../icons";
import Post from "./Post";

const usePostModalStyles = makeStyles((theme) => ({
  container: {
    fontSize: "10px",
  },
  overlay: {
    position: "fixed !important",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5) !important",
    zIndex: "1200 !important",
    padding: "0 40px !important",
    pointerEvents: "auto",
  },
  close: {
    padding: 12,
    top: 0,
    right: 0,
    position: "fixed",
    zIndex: 1201,
    cursor: "pointer",
  },
}));

function PostModal() {
  const classes = usePostModalStyles();
  const history = useHistory();

  return (
    <Grid className={classes.container}>
      <Modal
        isOpen
        ariaHideApp={false}
        overlayClassName={classes.overlay}
        onRequestClose={() => history.goBack()}
        style={{
          content: {
            display: "flex",
            alignItems: "center",
            maxWidth: "935px",
            minWidth: "935px",
            height: "600px",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            margin: 0,
            padding: 0,
            overflow: "none",
            WebkitOverflowScrolling: "touch",
          },
        }}
      >
        <Post modal />
      </Modal>
      <div className={classes.close}>
        <CloseIcon onClick={() => history.goBack()} />
      </div>
    </Grid>
  );
}

export default PostModal;
