import webpack from "webpack";
import common from "./webpack.common";
import { merge } from "webpack-merge";
import "webpack-dev-server"

const development: webpack.Configuration = merge(common, {
    mode: "development",
    devtool: "inline-source-map",  
});

export default development;