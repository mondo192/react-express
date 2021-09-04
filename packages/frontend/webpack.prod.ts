import webpack from "webpack";
import common from "./webpack.common";
import { merge } from "webpack-merge";

const production: webpack.Configuration = merge(common, {
    mode: "production"
});

export default production;