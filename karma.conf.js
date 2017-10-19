
{% set p = contents|first or content %}
<div class="hot-post-header">
<div class="wrapper">
     <div class="row-fluid-wrapper">
            <div class="row-fluid ">
                <div class="span12" style="">
                    <div class="cell-wrapper layout-widget-wrapper">
                        <span class="blog-listing-item-container">
                            <h1 class="blog-post-title">
                                <a href="{{ p.absolute_url }}">{{ p.name }}</a>
                            </h1>
                            
                       
           
<p class="blog-post-date">By <a class="author-link" href="{{ group.absolute_url }}/author/{{ p.blog_post_author.slug }}">{{p.blog_post_author.display_name }}</a> in
                                {% if p.topic_list %}
                                        {% for topic in p.topic_list %}
                                            <a class="topic-link" href="{{ group.absolute_url }}/topic/{{ topic.slug }}">{{ topic.name }}</a>
                                        {% endfor %}
                                    
                                {% endif %}</p>

 
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    




{% choice "featured_image" label='Select Banner Image Option', value='FeaturedImage', choices='FeaturedImage,CustomImage' export_to_template_context=True %}
{% text "header_background_color" label="Background Color", value="#E4F8FF", export_to_template_context=True %}

{% if widget_data.featured_image.value == 'FeaturedImage' %}

<div class="post_featured_image" alt="last-image-blog" style="background:{{ p.widgets.header_background_color.body.value}} url({{ p.featured_image }});"></div>

{% elif widget_data.featured_image.value == 'CustomImage' %}

<div class="post_featured_image" alt="blog-header-image" style="background-color:{{ p.widgets.header_background_color.body.value}}; background-image:url('{{ p.widgets.custom_background_image.body.src}}'); background-size:98%!important;"></div>

{% else %}

<div class="post_featured_image false-condition" style="background: {{ widget_data.header_background_color.value }} url({{ p.featured_image }});"></div>

{% endif %}      



</div>
<div id ="article"></div>


<style>
   
body .container-fluid .row-fluid .hot-post-header .wrapper{
    position:relative;
    z-index:2;
}   
   
body .container-fluid .row-fluid .post_featured_image {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    background-position: bottom center !important;
    background-repeat: no-repeat !important;
    background-size: 580px !important;
}

@media (max-width:580px){
    
   body .container-fluid .row-fluid .post_featured_image {
        background-size: contain !important;
    } 
    
}

body .container-fluid .row-fluid .post_featured_image:before {
    content: "";
    position: absolute;
    background: rgba(255, 255, 255, 0);
    background-position: top center;
    background-size: contain!important;
    width: 100%;
    height: 23%;
    top: 0;
    left: 0;
}

@media (max-width:767px){

        body .container-fluid .row-fluid .post_featured_image:before{
            height:11%;
        }
        
}

.hot-post-header{
    position:relative;
}

body.author-page .post_featured_image,
body.author-page .hot-post-header{
    display:none;
}
    
</style>


