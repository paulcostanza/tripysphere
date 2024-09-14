import * as THREE from "three"

const scene = new THREE.Scene()

const w = window.innerWidth
const h = window.innerHeight
const camera = new THREE.PerspectiveCamera(75, w / h, 10, 0.1)

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(w, h)
document.body.appendChild(renderer.domElement) // adds render element to dom. This is a canavas element the renderer uses to display the scene to us

camera.position.z = 2

// geometry -> perimitives
const geo = new THREE.IcosahedronGeometry(1.0, 2)

const mat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    flatShading: true
})

const mesh = new THREE.Mesh(geo, mat)
scene.add(mesh)

const wireMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true,
})

// adds outline
const wireMesh = new THREE.Mesh(geo, wireMat)
wireMesh.scale.setScalar(1.003) // makes outline thick
mesh.add(wireMesh)

const hemiLight = new THREE.HemisphereLight(0x0099ff, 0xaa5500)
scene.add(hemiLight)

function animate(t = 0) {
    requestAnimationFrame(animate)
    mesh.rotation.y = t * 0.0007
    renderer.render(scene, camera)
}

animate()
