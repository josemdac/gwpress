/**
 * @author mrdoob / http://mrdoob.com/
 */
class Handler {

    static set_scene(scene) {
        this.scene = scene;
        this.canvas_obj = {};
    }

    static set_camera(camera) {
        this.camera = camera;
        this.step_size = 1000;
        this.s = function(a, b) {
            return ((a - b) / Handler.step_size);
        }
        this.end = steps.start.coords;
        this.l = steps.start.look_at;
        this.ll = this.l;
        this.camera.lookAt(this.l[0], this.l[1], this.l[2]);
        this.sl = [0, 0, 0];
        this.sp = [0, 0, 0];
        this.eh = document.createElement('div');
        this.expo = new Expo(slides);
    }

    static add_canvas(name) {
        var canvas = document.createElement('canvas');
        canvas.setAttribute('id', 'name');
        this.canvas_obj[name] = canvas;
        return canvas;
    }

    static change_canvas() {

    }

    /*    static slide(n) {
           this.step_size = 500;
           var pO = this;

           $(this.eh).on(`movedroom_center`, function() {
               console.log('room_center');
               Handler.move(`slide_${n}`);
               $(pO.eh).off('movedroom_center');
           });
           $(this.eh).on(`movedslide_${n}`, function() {
               $(pO.eh).off(`movedslide_${n}`);
           });
           this.move('room_center');
       } */

    static intro() {
        $(this.eh).trigger('intro');
        this.step_size = 100;
        this.speed = 1;
        var pO = this;
        this.open_door();
        this.move('intro_1');
        setTimeout(function() {

            pO.move('intro_2');
            setTimeout(function() {
                pO.move('room_in');
                setTimeout(function() {
                    pO.move('door_start');
                    setTimeout(function() {
                        pO.move('room_center');
                        pO.close_door();
                        pO.slide_seq = [1, 2, 3, 4, 5, 6, 7];
                        pO.curr_slide = pO.slide_seq.shift();
                    }, 4000);
                }, 4000);
            }, 5000);
        }, 9000);
    }

    static toggle_slide() {
        $(this.eh).trigger('toggled_slide');
        this.slide_seq.push(this.curr_slide);
        this.curr_slide = this.slide_seq.shift();
        console.log(`Moving to slide ${this.curr_slide}`);
        this.slide(this.curr_slide);
    }


    static move(step) {
        this.moving = step;
        if (step != 0) {
            var cp = this.camera.position.toArray();
            var cl = this.l == undefined ? cp : this.l;
            //this.camera.lookAt(cl[0], cl[1], cl[2]);

            this.end = steps[step].coords;
            var e = this.end;
            this.ll = steps[step].look_at;
            var le = this.ll;

            this.sp = [this.s(e[0], cp[0]), this.s(e[1], cp[1]), this.s(e[2], cp[2])];
            this.sl = [this.s(le[0], cl[0]), this.s(le[1], cl[1]), this.s(le[2], cl[2])];

            this.moved = false;
        }

    }

    static open_door() {
        var pO = this;
        var door = this.scene.getObjectByName('Puerta');
        var sz = 3 / 6000;
        var count = 0
        var callme = function() {
            door.position.x += sz;
            count += 1;
            //console.log(`Opened ${count}`);
            if (count < 6000) {
                setTimeout(callme, 1);
            } else {
                $(pO.this).trigger('door_opened');
            }
        }
        callme();
    }

    static final() {
        $(this.eh).trigger('toggled_slide');
        this.step_size = 300;
        var pO = this;
        this.move('door_end');
        this.open_door();
        setTimeout(function() {

            pO.move('end');

        }, 7000);

    }

    static slide(n) {
        this.step_size = 500;
        this.speed = 4;
        var pO = this;
        this.move('room_center');
        setTimeout(function() {

            pO.move(`slide_${n}`);

        }, 2000);

    }
    static close_door() {
        var pO = this;
        var door = this.scene.getObjectByName('Puerta');
        var sz = 3 / 6000;
        var count = 0
        var callclose = function() {
            door.position.x -= sz;
            count += 1;
            //console.log(`Opened ${count}`);
            if (count < 6000) {
                setTimeout(callclose, 1);
            } else {
                $(pO.this).trigger('door_closed');
            }
        }

        callclose();

    }

    static update() {
        var p = this.camera.position.toArray();
        if (this.check_move()) {
            //this.check_look();
            this.l[0] += this.sl[0];
            this.l[1] += this.sl[1];
            this.l[2] += this.sl[2];
            p[0] += this.sp[0];
            p[1] += this.sp[1];
            p[2] += this.sp[2];
            this.camera.position.set(p[0], p[1], p[2]);
            this.camera.lookAt(this.l[0], this.l[1], this.l[2]);
        }
        this.moved = true;
        $(this.eh).trigger(`moved${this.moving}`);

    }
    static check_look() {
        var p = this.l;
        var e = this.ll;
        if (Math.abs(e[0] - p[0]) <= 0.01) {
            this.sl[0] = 0;
            if (Math.abs(e[1] - p[1]) <= 0.01) {
                this.sl[1] = 0;
                if (Math.abs(e[0] - p[0]) <= 0.01) {
                    this.sl[2] = 0;
                    return true;
                }
            }
        }
        return false;


    }

    static check_move() {
        var p = this.camera.position.toArray();
        var e = this.end;
        if (Math.abs(e[0] - p[0]) <= 0.1) {
            this.sp[0] = 0;
            if (Math.abs(e[1] - p[1]) <= 0.1) {
                this.sp[1] = 0;
                if (Math.abs(e[0] - p[0]) <= 0.1) {
                    this.sp[2] = 0;
                    if (this.check_look()) {
                        return false;
                    }
                }
            }


        }
        return true;

    }



    static animate() {
        for (const x of Array(this.speed).keys()) {
            this.update();
        }

    }
}


var APP = {

    Player: function() {

        var loader = new THREE.ObjectLoader();
        var camera, scene, renderer;

        var events = {};

        var dom = document.createElement('div');

        this.dom = dom;

        this.width = 500;
        this.height = 500;

        this.load = function(json) {

            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.gammaOutput = true;
            renderer.setClearColor(0x000000);
            renderer.setPixelRatio(window.devicePixelRatio);

            var project = json.project;

            if (project.shadows) renderer.shadowMap.enabled = true;
            if (project.vr) renderer.vr.enabled = true;

            dom.appendChild(renderer.domElement);

            this.setScene(loader.parse(json.scene));
            this.setCamera(loader.parse(json.camera));

            events = {
                init: [],
                start: [],
                stop: [],
                keydown: [],
                keyup: [],
                mousedown: [],
                mouseup: [],
                mousemove: [],
                touchstart: [],
                touchend: [],
                touchmove: [],
                update: []
            };

            var scriptWrapParams = 'player,renderer,scene,camera';
            var scriptWrapResultObj = {};

            for (var eventKey in events) {

                scriptWrapParams += ',' + eventKey;
                scriptWrapResultObj[eventKey] = eventKey;

            }

            var scriptWrapResult = JSON.stringify(scriptWrapResultObj).replace(/\"/g, '');

            for (var uuid in json.scripts) {

                var object = scene.getObjectByProperty('uuid', uuid, true);

                if (object === undefined) {

                    console.warn('APP.Player: Script without object.', uuid);
                    continue;

                }

                var scripts = json.scripts[uuid];

                for (var i = 0; i < scripts.length; i++) {

                    var script = scripts[i];

                    var functions = (new Function(scriptWrapParams, script.source + '\nreturn ' + scriptWrapResult + ';').bind(object))(this, renderer, scene, camera);

                    for (var name in functions) {

                        if (functions[name] === undefined) continue;

                        if (events[name] === undefined) {

                            console.warn('APP.Player: Event type not supported (', name, ')');
                            continue;

                        }

                        events[name].push(functions[name].bind(object));

                    }

                }

            }

            dispatch(events.init, arguments);

        };

        this.setCamera = function(value) {

            camera = value;
            camera.aspect = this.width / this.height;
            camera.updateProjectionMatrix();
            Handler.set_camera(camera);

            if (renderer.vr.enabled) {

                dom.appendChild(THREE.WEBVR.createButton(renderer));

            }

        };

        this.setScene = function(value) {
            Handler.set_scene(value);
            scene = value;

        };

        this.setSize = function(width, height) {

            this.width = width;
            this.height = height;

            if (camera) {

                camera.aspect = this.width / this.height;
                camera.updateProjectionMatrix();

            }

            if (renderer) {

                renderer.setSize(width, height);

            }

        };

        function dispatch(array, event) {

            for (var i = 0, l = array.length; i < l; i++) {

                array[i](event);

            }

        }

        var time, prevTime;

        function animate() {

            time = performance.now();
            Handler.animate();

            try {

                dispatch(events.update, { time: time, delta: time - prevTime });

            } catch (e) {

                console.error((e.message || e), (e.stack || ""));

            }

            renderer.render(scene, camera);

            prevTime = time;

        }

        this.play = function() {

            prevTime = performance.now();

            document.addEventListener('keydown', onDocumentKeyDown);
            document.addEventListener('keyup', onDocumentKeyUp);
            document.addEventListener('mousedown', onDocumentMouseDown);
            document.addEventListener('mouseup', onDocumentMouseUp);
            document.addEventListener('mousemove', onDocumentMouseMove);
            document.addEventListener('touchstart', onDocumentTouchStart);
            document.addEventListener('touchend', onDocumentTouchEnd);
            document.addEventListener('touchmove', onDocumentTouchMove);

            dispatch(events.start, arguments);

            renderer.setAnimationLoop(animate);

        };

        this.stop = function() {

            document.removeEventListener('keydown', onDocumentKeyDown);
            document.removeEventListener('keyup', onDocumentKeyUp);
            document.removeEventListener('mousedown', onDocumentMouseDown);
            document.removeEventListener('mouseup', onDocumentMouseUp);
            document.removeEventListener('mousemove', onDocumentMouseMove);
            document.removeEventListener('touchstart', onDocumentTouchStart);
            document.removeEventListener('touchend', onDocumentTouchEnd);
            document.removeEventListener('touchmove', onDocumentTouchMove);

            dispatch(events.stop, arguments);

            renderer.setAnimationLoop(null);

        };

        this.dispose = function() {

            while (dom.children.length) {

                dom.removeChild(dom.firstChild);

            }

            renderer.dispose();

            camera = undefined;
            scene = undefined;
            renderer = undefined;

        };

        //

        function onDocumentKeyDown(event) {

            dispatch(events.keydown, event);

        }

        function onDocumentKeyUp(event) {

            dispatch(events.keyup, event);

        }

        function onDocumentMouseDown(event) {

            dispatch(events.mousedown, event);

        }

        function onDocumentMouseUp(event) {

            dispatch(events.mouseup, event);

        }

        function onDocumentMouseMove(event) {

            dispatch(events.mousemove, event);

        }

        function onDocumentTouchStart(event) {

            dispatch(events.touchstart, event);

        }

        function onDocumentTouchEnd(event) {

            dispatch(events.touchend, event);

        }

        function onDocumentTouchMove(event) {

            dispatch(events.touchmove, event);

        }

    }

};