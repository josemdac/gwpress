class Controls{

    constructor(listid){
        this.items = $(`.${listid}`).toArray();
        $(`.${listid}`).hide();
        this.create_event();

        
    }

    next(){
        $(this.items.shift()).fadeIn();
    }

    create_event(){
        var pO = this;
        $(document).ready(function() {
            $(document).on('keydown', function(e) {
                if (e.key == "ArrowRight") {
                   pO.next();
                   console.log(e.key)
                };
            });
        });
    }
    
}