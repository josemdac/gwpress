class Expo {
    constructor(slides, target = 'expo_text', frame = 'expo_frame',
        end_message = 'Fin') {
        this.slides = slides;
        this.eh = document.createElement('div');
        this.target_div = target;
        this.target_frame = frame;
        this.end_message = end_message;
        this.duration = 1000;
    }

    slide_render_0(slide) {

        this.data_buff = slide;
        this.tpl_buff = '';
        this.get_template(slide.template);

    }

    slide_render_1() {
        var data = this.data_buff;
        var html = this.tpl_buff;
        var subtpls = $(html).find('for').get().map(el => $(el).html());
        console.log(subtpls);
        for (let i in subtpls) {
            var t = subtpls[i];
            var name = $(t).attr('tpl');
            var subdata = data[name];
            var result = '';
            for (let ind in subdata) {
                var thtml = t;
                var item = subdata[ind];
                for (let l in item) {
                    let v = item[l];
                    let tag = `[${l.toUpperCase()}]`;
                    //console.log(v, tag, subdata.length);
                    thtml = thtml.replace(tag, v);
                }
                console.log(thtml);
                result += thtml;
            }
            html = html.replace(subtpls[i], result);

        }


        for (let m in data.tags) {
            let v = data.tags[m];
            html = html.replace(`[${m.toUpperCase()}]`, v);
        }
        this.tpl_buff = html;
        var pO = this;
        $(pO.eh).on('slide_loaded', function() {
            pO.show();
            $(pO.eh).off('slide_loaded');
        });
        $(this.eh).trigger('slide_loaded');

    }

    get_template(tpl) {
        var pO = this;
        pO.tpl_buff = '';

        $.ajax({
            url: `templates/${tpl}.html`,
            type: 'GET',
            success: function(data) {
                pO.tpl_buff = data;
                console.log(data);
                pO.slide_render_1();
            }
        })

    }

    show() {
        $(`.${this.target_div}`).html(this.tpl_buff).fadeIn(this.duration);
        $(`.${this.target_frame}`).fadeIn(this.duration);

    }

    hide() {
        var pO = this;
        $(`.${this.target_div}`).fadeOut(pO.duration, function() {
            $(pO.eh).trigger('hidden');
        });
        $(`.${this.target_frame}`).fadeOut(pO.duration);
    }

    next() {
        if (this.next_slide != undefined) {
            this.slides.push(this.next_slide);
        }

        this.next_slide = this.slides.shift();
        var pO = this;
        $(this.eh).on('hidden', function() {
            pO.slide_render_0(pO.next_slide);
            $(pO.eh).off('hidden');
        });
        this.hide();
    }
    prev() {
        if (this.next_slide != undefined) {
            this.slides.unshift(this.next_slide);
        }

        this.next_slide = this.slides.pop();
        var pO = this;
        $(this.eh).on('hidden', function() {
            pO.slide_render_0(pO.next_slide);
            $(pO.eh).off('hidden');
        });
        this.hide();
    }

    end() {
        var pO = this;
        var msg = this.end_message;
        $(this.eh).on('hidden', function() {
            $(`.${pO.target_div}`).html(`
                <h2 class="end_msg">${msg}</h2>
                `).fadeIn(pO.duration);
            $(pO.eh).off('hidden');
        });
        this.hide();



    }
}