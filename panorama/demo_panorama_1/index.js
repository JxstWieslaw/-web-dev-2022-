pannellum.viewer('panorama', {   
    "default": {
        "firstScene": "circle",
        "author": "Matthew Petroff",
        "sceneFadeDuration": 1000
    },

    "scenes": {
        "circle": {
            "title": "Mason Circle",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "1.jpg",
            "hotSpots": [
                {
                    "pitch": -2.1,
                    "yaw": 132.9,
                    "type": "scene",
                    "text": "Spring House or Dairy",
                    "sceneId": "house"
                }
            ]
        },

        "house": {
            "title": "Spring House or Dairy",
            "hfov": 110,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "2.jpg",
            "hotSpots": [
                {
                    "pitch": -0.6,
                    "yaw": 37.1,
                    "type": "scene",
                    "text": "Mason Circle",
                    "sceneId": "circle",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        }
    }
});
// Create viewer
viewer = pannellum.viewer('panorama', {
    "default": {
        "firstScene": "circle",
        "author": "Matthew Petroff",
        "sceneFadeDuration": 1000
    },

    "scenes": {
        "circle": {
            "title": "Mason Circle",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "1.jpg",
            "hotSpots": [
                {
                    "pitch": -2.1,
                    "yaw": 132.9,
                    "type": "scene",
                    "text": "Spring House or Dairy",
                    "sceneId": "house"
                }
            ]
        },

        "house": {
            "title": "Spring House or Dairy",
            "hfov": 110,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "2.jpg",
            "hotSpots": [
                {
                    "pitch": -0.6,
                    "yaw": 37.1,
                    "type": "scene",
                    "text": "Mason Circle",
                    "sceneId": "circle",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        }
    },
    "autoLoad": true,
    "showControls": false
});
// Make buttons work
document.getElementById('pan-up').addEventListener('click', function(e) {
    viewer.setPitch(viewer.getPitch() + 10);
});
document.getElementById('pan-down').addEventListener('click', function(e) {
    viewer.setPitch(viewer.getPitch() - 10);
});
document.getElementById('pan-left').addEventListener('click', function(e) {
    viewer.setYaw(viewer.getYaw() - 10);
});
document.getElementById('pan-right').addEventListener('click', function(e) {
    viewer.setYaw(viewer.getYaw() + 10);
});
document.getElementById('zoom-in').addEventListener('click', function(e) {
    viewer.setHfov(viewer.getHfov() - 10);
});
document.getElementById('zoom-out').addEventListener('click', function(e) {
    viewer.setHfov(viewer.getHfov() + 10);
});
document.getElementById('fullscreen').addEventListener('click', function(e) {
    viewer.toggleFullscreen();
});