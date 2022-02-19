/* eslint-disable vue/no-unused-components */
<template>
    <div id="globeViz"></div>
</template>

<script>
    import * as THREE from "three";
    import ThreeGlobe from "three-globe";
    import {TrackballControls} from "three/examples/jsm/controls/TrackballControls";
    export default {
        name: "Globe",
        mounted() {
            
            fetch('/ne_110m_admin_0_countries.geojson').then(res => res.json()).then(countries =>
            {
              const Globe = new ThreeGlobe()
                .polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
                .polygonSideColor(() => 'rgba(0, 200, 0, 0.1)')
                .polygonStrokeColor(() => '#059669')
                .polygonCapMaterial(() => new THREE.MeshPhongMaterial({wireframe: false, color: '#059669'}))
                .labelsData([{
                    lat: 40.7128,
                    lng: -74.0060,
                    text: "One Management",
                    color: "black",
                    altitude: 0.1
                }])
                .labelText('text')
                .labelColor('color')
                .labelAltitude('altitude')
                .labelSize(2)
                .labelDotRadius(0.5);

            const globeMaterial = Globe.globeMaterial();
            globeMaterial.color = new THREE.Color( 0xffffff );

            Globe.showAtmosphere(false);
        
            // Setup renderer
            const renderer = new THREE.WebGLRenderer();
            const globeElement = document.getElementById('globeViz');
            renderer.setSize(globeElement.clientWidth, globeElement.clientHeight);
            renderer.setClearColor( 0xffffff, 1);
            globeElement.appendChild(renderer.domElement);
        
            // Setup scene
            const scene = new THREE.Scene();
            scene.add(Globe);
            scene.add(new THREE.AmbientLight(0xffffff));
            // scene.add(new THREE.DirectionalLight(0xffffff, 0.6));
        
            // Setup camera
            const camera = new THREE.PerspectiveCamera();
            camera.aspect = globeElement.clientWidth/ globeElement.clientHeight;
            camera.updateProjectionMatrix();
            camera.position.z = 500;
        
            // Add camera controls
            const tbControls = new TrackballControls(camera, renderer.domElement);
            tbControls.minDistance = 101;
            tbControls.rotateSpeed = 5;
            tbControls.zoomSpeed = 0.8;
            tbControls.noPan = true;
            tbControls.noZoom = true;
        
            // Kick-off renderer
            (function animate() { // IIFE
                // Frame cycle
                tbControls.update();
                renderer.render(scene, camera);
                requestAnimationFrame(animate);
            })();
            });
        }
    };
</script>

<style scoped>

</style>