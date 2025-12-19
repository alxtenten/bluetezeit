import * as THREE from './node_modules/three/build/three.module.js';

import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
//renderer.setAnimationLoop( animate );
document.getElementById('3DScene').appendChild( renderer.domElement );

camera.lookAt(0,0,0);

const controls = new OrbitControls(camera, renderer.domElement);

/*const mtlLoader = new MTLLoader().setPath( 'models/' );
const materials = await mtlLoader.loadAsync( 'primary_roses.mtl' );
materials.preload();

const loader = new OBJLoader().setPath('models/');
loader.setMaterials(materials);

const object = await loader.loadAsync( 'primary_roses.obj' );*/


const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
const light = new THREE.PointLight( 0xff0040, 1, 5000 );
light.position.set( 500, 500, 500 );
scene.add(light); 
scene.add( cube );
//scene.add(object);

camera.position.z = 5;

function animate() {
  

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render( scene, camera );
  

}