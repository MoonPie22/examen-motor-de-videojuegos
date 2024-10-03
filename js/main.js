import * as THREE from 'three'
//scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop( animate );
document.body.appendChild ( renderer.domElement );

//geometria 
const geometry = new THREE.BoxGeometry (1,1,1);
const material = new THREE.MeshStandardMaterial ({color: 0x00ff00});
const cube = new THREE.Mesh (geometry, material);

const geometry2 = new THREE.BoxGeometry (5,0.5,0.5);
const material2 = new THREE.MeshStandardMaterial ({color: 0xC765F5});
const cube2 = new THREE.Mesh (geometry2, material2);

const light = new THREE.AmbientLight( 0x404040 );
const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5);

const geometry3 = new THREE.PlaneGeometry( 10, 10 );
const material3 = new THREE.MeshStandardMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
const plane = new THREE.Mesh( geometry3, material3 );
scene.add( plane );

scene.add(cube);
scene.add(light);
scene.add(directionalLight);

scene.add(cube);
camera.position.z = 5;
scene.add(cube2)

camera.position.set(1,1,1);
directionalLight.position.set(10,1,5);
camera.lookAt (cube.position);



function animate(){
    plane.rotation.x = Math.PI / 2;
    plane.position.y = -1;
    renderer.render( scene, camera);
    
    //cube.rotation.y +=0.01;
    //cube.rotation.x +=0.01;
    renderer.render(scene, camera);
}

console.log(THREE.AmbientLight);