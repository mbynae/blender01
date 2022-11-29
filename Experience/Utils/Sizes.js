/** @format */
import { EventEmitter } from "events";

//리사이징만 따로 빼서 클래스화 시킴
export default class Sizes extends EventEmitter {
    constructor() {
        super();
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.aspect = this.width / this.height; //비율 설정
        this.pixelRatio = Math.min(window.devicePixelRatio, 2); //this.renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);와 같은거

        window.addEventListener("resize", () => {
            //반응형
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.aspect = this.width / this.height; //비율 설정
            this.pixelRatio = Math.min(window.devicePixelRatio, 2);
            this.emit("resize");
        });
    }
}
