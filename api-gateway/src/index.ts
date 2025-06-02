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

app.use(
  "/api/jobs",
  createProxyMiddleware({
    target: process.env.JOB_BASE_URL,
    changeOrigin: true,
    pathRewrite: { "^/api/jobs": "" },
  })
);

app.use(
  "/api/proposals",
  createProxyMiddleware({
    target: process.env.PROPOSAL_BASE_URL,
    changeOrigin: true,
    pathRewrite: { "^/api/jobs": "" },
  })
);

app.use(
  "/api/contracts",
  createProxyMiddleware({
    target: process.env.CONTRACT_BASE_URL,
    changeOrigin: true,
    pathRewrite: {
      "^/api/contracts": "",
    },
  })
);

app.listen(PORT, () => {
  console.log(`api gateway listening on port ${PORT}`);
});
