import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';
import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils.js';

@Component({
  selector: 'app-interactvie',
  templateUrl: './interactvie.component.html',
  styleUrls: ['./interactvie.component.css'],
})
export class InteractvieComponent implements AfterViewInit {
  //requestAnimationFrame( ()=>this.animate());
  stats: any;
  camera: any;
  scene: any;
  raycaster: any;
  renderer: any;

  INTERSECTED: any;
  theta = 0;

  pointer = new THREE.Vector2();
  radius = 5;
  container: any;

  async ngAfterViewInit(): Promise<void> {
    this.init();
    this.animate();
  }

  constructor(
    private renderer2: Renderer2,
    private elementRef: ElementRef
  ){}

  private init() {
    this.container = document.getElementById('inter_container');

    this.camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xf0f0f0);

    const light = new THREE.DirectionalLight(0xffffff, 3);
    light.position.set(1, 1, 1).normalize();
    this.scene.add(light);

    const geometry = new THREE.BoxGeometry();

    for (let i = 0; i < 2000; i++) {
      const object = new THREE.Mesh(
        geometry,
        new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff })
      );

      object.position.x = Math.random() * 40 - 20;
      object.position.y = Math.random() * 40 - 20;
      object.position.z = Math.random() * 40 - 20;

      object.rotation.x = Math.random() * 2 * Math.PI;
      object.rotation.y = Math.random() * 2 * Math.PI;
      object.rotation.z = Math.random() * 2 * Math.PI;

      object.scale.x = Math.random() + 0.5;
      object.scale.y = Math.random() + 0.5;
      object.scale.z = Math.random() + 0.5;

      this.scene.add(object);
    }

    this.raycaster = new THREE.Raycaster();

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.useLegacyLights = false;
    this.container.appendChild(this.renderer.domElement);
    this.renderer.domElement.style.position="fixed";

    this.stats = new Stats();
    this.container.appendChild(this.stats.dom);

    this.container.addEventListener('mousemove', this.onPointerMove.bind(this));

    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  private onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  private onPointerMove(event: MouseEvent) {
    //const A=this.container.getBoundingClientRect();
    let B= this.renderer.domElement.getBoundingClientRect();

    this.pointer.x = ( (event.clientX-B.left) / (B.right-B.left) ) * 2 - 1;
		this.pointer.y = - ( (event.clientY-B.top) /(B.bottom-B.top) ) * 2 + 1;

    /*
    const canvas = document.querySelector('canvas');
    const rect=canvas!.getBoundingClientRect();
    this.pointer.x=(event.clientX-rect.left)*(canvas!.width/rect.width);
    this.pointer.y=(event.clientY-rect.top)*(canvas!.height/rect.height);*/
  }

  //

  private animate() {
    requestAnimationFrame(() => this.animate());

    this.render();
    this.stats.update();
  }

  private render() {
    this.theta += 0.1;

    this.camera.position.x =
      this.radius * Math.sin(THREE.MathUtils.degToRad(this.theta));
    this.camera.position.y =
      this.radius * Math.sin(THREE.MathUtils.degToRad(this.theta));
    this.camera.position.z =
      this.radius * Math.cos(THREE.MathUtils.degToRad(this.theta));
    this.camera.lookAt(this.scene.position);

    this.camera.updateMatrixWorld();

    // find intersections

    this.raycaster.setFromCamera(this.pointer, this.camera);

    const intersects = this.raycaster.intersectObjects(
      this.scene.children,
      false
    );

    if (intersects.length > 0) {
      if (this.INTERSECTED != intersects[0].object) {
        if (this.INTERSECTED)
          this.INTERSECTED.material.emissive.setHex(
            this.INTERSECTED.currentHex
          );

        this.INTERSECTED = intersects[0].object;
        this.INTERSECTED.currentHex =
          this.INTERSECTED.material.emissive.getHex();
        //console.log(this.pointer);
        //console.log(this.INTERSECTED);
        this.INTERSECTED.material.emissive.setHex(0xff0000);
      }
    } else {
      if (this.INTERSECTED)
        this.INTERSECTED.material.emissive.setHex(this.INTERSECTED.currentHex);

      this.INTERSECTED = null;
    }

    this.renderer.render(this.scene, this.camera);
  }
}
