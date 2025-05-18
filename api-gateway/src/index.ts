import dotenv from "dotenv";
import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  "/api/auth",
  createProxyMiddleware({
    target: process.env.AUTH_BASE_URL,
    changeOrigin: true,
    pathRewrite: { "^/api/auth": "" },
  })
);

app.use(
  "/api/profiles",
  createProxyMiddleware({
    target: process.env.PROFILE_BASE_URL,
    changeOrigin: true,
    pathRewrite: { "^/api/profiles": "" },
  })
);

app.listen(PORT, () => {
  console.log(`api gateway listening on port ${PORT}`);
});
