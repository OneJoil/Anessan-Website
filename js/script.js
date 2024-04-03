import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/DFzoNkX0hCc2VMDf/scene.splinecode');

// LOADER LOGO

const loader_logo = document.getElementById('loader_logo');
const loader_logo_app = new Application(loader_logo);
loader_logo_app.load('https://prod.spline.design/ZrimQbtzzwhn5vDM/scene.splinecode');