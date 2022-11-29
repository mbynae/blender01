/** @format */

import * as THREE from "three"; //three.js 연동시키는 명령어

import Sizes from "./Utils/Sizes.js";
import Time from "./Utils/Time.js";
import Resources from "./Utils/Resources.js";
import assets from "./Utils/assets.js";

import Camera from "./Camera.js";
import Renderer from "./Renderer.js";

import World from "./World/World.js";

export default class Experience {
    //한페이지에 다 만들땐 안썼지만 이번엔 페이지를 세분화하기 떄문에 export를 써야됨

    static instance; //로딩중이거나 다른곳으로 갈때도 실행되는것을 방지하여 계속 소스를 잡아먹지 않도록 방지해줌

    constructor(canvas) {
        if (Experience.instance) {
            return Experience.instance;
        }
        Experience.instance = this;

        this.canvas = canvas;
        this.scene = new THREE.Scene();
        this.sizes = new Sizes();
        this.time = new Time();
        this.camera = new Camera();
        this.renderer = new Renderer();
        this.resources = new Resources(assets);
        this.World = new World();

        this.sizes.on("update", () => {
            this.resize();
        });

        this.time.on("update", () => {
            this.update();
        });
    }
    resize() {
        this.camera.resize();
        this.World.update();
        this.renderer.resize();
    }

    update() {
        this.camera.update();
        this.World.update();
        this.renderer.update();
    }
}
