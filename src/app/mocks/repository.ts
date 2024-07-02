export interface Repository {
        id: number;
        icon:String;
        name: String;
        current_version:String;
        latest_version_used:String;
        latest_release:String;
}

export const DEPENDENCIES_LIST = [
    {
        id: 1,
        icon:"./assets/images/node.png",
        name: "gulp",
        current_version:"3.9.1",
        latest_version_used:"4.0.2",
        latest_release:"5.0.0",
    },
    {
        id: 2,
        icon:"./assets/images/node.png",
        name: "gulp-autoprefixer",
        current_version:"3.1.1",
        latest_version_used:"7.0.1",
        latest_release:"9.0.0",
    },
    {
        id: 3,
        icon:"./assets/images/node.png",
        name: "gulp-concat",
        current_version:"2.6.1",
        latest_version_used:"2.6.1",
        latest_release:"2.6.1",
    },
    {
        id: 4,
        icon:"./assets/images/node.png",
        name: "gulp-cssnano",
        current_version:"2.1.2",
        latest_version_used:"2.1.3",
        latest_release:"2.1.3",
    },
    {
        id: 5,
        icon:"./assets/images/node.png",
        name: "gulp-imagemin",
        current_version:"3.4.0",
        latest_version_used:"7.1.0",
        latest_release:"9.1.0",
    },
    {
        id: 6,
        icon:"./assets/images/node.png",
        name: "gulp-sass",
        current_version:"3.1.0",
        latest_version_used:"4.1.0",
        latest_release:"5.1.0",
    },
    {
        id: 7,
        icon:"./assets/images/node.png",
        name: "gulp-sass-glob",
        current_version:"1.0.8",
        latest_version_used:"1.1.0",
        latest_release:"1.1.0",
    },
    {
        id: 8,
        icon:"./assets/images/node.png",
        name: "gulp-sourcemaps",
        current_version:"1.12.0",
        latest_version_used:"2.6.5",
        latest_release:"3.0.0",
    },
    {
        id: 9,
        icon:"./assets/images/node.png",
        name: "gulp-stylelint",
        current_version:"3.9.0",
        latest_version_used:"13.0.0",
        latest_release:"13.0.0",
    },
    {
        id: 10,
        icon:"./assets/images/node.png",
        name: "gulp-watch",
        current_version:"4.3.11",
        latest_version_used:"4.3.11",
        latest_release:"5.0.1",
    },
    {
        id: 11,
        icon:"./assets/images/node.png",
        name: "husky",
        current_version:"0.12.0",
        latest_version_used:"9.0.11",
        latest_release:"9.0.11",
    },
    {
        id: 12,
        icon:"./assets/images/node.png",
        name: "node-aigis",
        current_version:"1.4.1",
        latest_version_used:"1.4.1",
        latest_release:"1.4.1",
    },
    {
        id: 13,
        icon:"./assets/images/node.png",
        name: "node-sass",
        current_version:"4.7.2",
        latest_version_used:"4.14.1",
        latest_release:"9.0.0",
    },
    {
        id: 14,
        icon:"./assets/images/node.png",
        name: "reset-css",
        current_version:"2.2.1",
        latest_version_used:"5.0.1",
        latest_release:"5.0.2",
    },
    {
        id: 15,
        icon:"./assets/images/node.png",
        name: "stylelint-config-standard",
        current_version:"15.0.1",
        latest_version_used:"36.0.0",
        latest_release:"36.0.0",
    },
]