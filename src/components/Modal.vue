<template>
    <div class="modal" id="modal">
        <div class="close-btn">
            <span class="close-btn__icon"></span>
        </div>
        <img src="../assets/img/left.png" alt="" class="larrow">
        <img src="../assets/img/right.png" alt="" class="rarrow">
        <div class="modal__content">
            <img src="#" alt="" class="modal__image">
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
export default {
    name: 'Modal',

    mounted() {
        $(document).ready(function() {
            $(".gallery__item").click(function(event) {
                window.location.href = "#modal";
                $(".modal__image").attr('src', event.target.src);

                var slides = $(".gallery__item");
                var curSlide = $(".gallery__item").index(this);

                $(function(){
                    $('html').keydown(function(e){
                        switch(e.which) {
                            case 39: // right
                            curSlide += 1;
                            if (curSlide > slides.length - 1) {
                                curSlide = 0;
                            }
                            break;
                    
                            case 37: // left
                            curSlide -= 1;
                            if (curSlide < 0) {
                                curSlide = slides.length -1;
                            }
                            break;
                    
                            default: return; // exit this handler for other keys
                        }
                        // console.log(e);
                        $(".modal__image").attr('src', slides[curSlide].children[0].currentSrc);
                    });
                });  
                
                $(".modal__image, .rarrow").click(function() {
                    curSlide += 1;
                    if (curSlide > slides.length - 1) {
                        curSlide = 0;
                    }
                    $(".modal__image").attr('src', slides[curSlide].children[0].currentSrc);
                });

                $(".larrow").click(function() {
                    curSlide -= 1;
                            if (curSlide < 0) {
                                curSlide = slides.length -1;
                            }
                    $(".modal__image").attr('src', slides[curSlide].children[0].currentSrc);
                });

                $(function(){
                    $('html').keyup(function(e) {
                        if (e.keyCode === 27) window.location.href = "#";   // esc
                    });
                });
            });
        });


        $(document).ready(function() {
            $(".modal").click(function(event) {
                if (event.target !== this)
                return;
                window.location.href = "#";
            });

            $(".close-btn").click(function() {
                window.location.href = "#";
                console.log('test')
            });
        });
    }
}
</script>

<style lang="scss" scoped>
    @import "../assets/styles/components/_modal.scss";
</style>