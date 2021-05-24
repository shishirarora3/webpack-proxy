const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  devServer: {
    proxy: {
      changeOrigin: true,
      "/owa": "https://outlook-sdf.office.com/owa",
      open: { app: ["Google Chrome", "--disable-web-security"] },
      onProxyReq: (proxyReq) => {
        // Browers may send Origin headers even with same-origin
        // requests. To prevent CORS issues, we have to change
        // the Origin to match the target URL.
        console.log(proxyReq);
        if (proxyReq.getHeader("origin")) {
          proxyReq.setHeader("origin", "https://outlook-sdf.office.com");
        }
      }
    }
  },
  plugins: [new HtmlWebpackPlugin()]
};
