import express from "express";
import {
  followUser,
  unfollowUser,
  getFollowers,
} from "../controllers/follower.js";

const router = express.Router();

router.post("/", followUser);
router.post("/", unfollowUser);
router.get("/", getFollowers);

export default router;
