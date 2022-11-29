/** @format */

import * as THREE from "three";
import Experience from "./Experience.js";

export default class renderer {
    constructor() {
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;

        this.setRenderer();
    }

    setRenderer() {
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas, //document.querySelector(".experience-canvas") 이걸 말함
            antialias: true,
        });

        this.renderer.physicallyCorrectLights = true; //조명 설정
        this.renderer.outputEncoding = THREE.sRGBEncoding; //rgb모드 설정
        this.renderer.toneMapping = THREE.CineonToneMapping; //매핑 설정
        this.renderer.toneMappingExposure = 1.4; //노출량 설정
        this.renderer.shadowMap.enabled = true; //그림자 설정
        this.renderer.shadowMap.type = THREE.PCFShadowMap;
        this.renderer.setSize(this.sizes.width, this.sizes.height); //사이즈 설정
        this.renderer.setPixelRatio(this.sizes.pixelRatio); //픽셀 설정
    }
    resize() {
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(this.sizes.pixelRatio);
    }
    update() {
        this.renderer.render(this.scene, this.camera.perspectiveCamera);
    }
}
