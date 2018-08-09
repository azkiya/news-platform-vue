<template>
        <v-container
            fluid
            grid-list-lg
        >
            <v-layout row wrap align-center justify-center>
                <v-flex xs12 sm7>
                    <v-card 
                        v-for="news in multiNews"
                        :key= "news.id"
                    > 
                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0"  >{{ news.title }}</h3>
                            </div>
                        </v-card-title>
                        <v-card-media
                            :src="news.imageUrl"
                            height="300px"
                            contain
                        ></v-card-media>
                        <v-card-text class="text-lg-left">
                            <div>{{ news.content }}</div>
                        </v-card-text>
                        <v-chip outline color="primary"
                            v-for="topic in news.topics"
                            :key="topic.id"
                        >
                            {{ topic.title }}
                        </v-chip>
                        <v-card-actions>
                        <v-btn flat color="orange">
                            <v-icon flat left>favorite</v-icon>
                            Likes
                        </v-btn>
                        <v-btn flat color="orange">
                            <v-icon flat left>mode_comment</v-icon>
                            Coment
                        </v-btn>
                        <v-btn flat color="orange">
                            <v-icon flat left>share</v-icon>
                            Share
                        </v-btn>                        
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
</template>

<script>
export default {
    data() {
        return {
            multiNews: [
                { imageUrl: "https://cdn.vuetifyjs.com/images/cards/docks.jpg", id: "124kkj",
                title: "news 1", content:"Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.",
                topics:[
                    { title:"politik", id:"12" },
                    { title:"ekonomi", id:"123" },
                    { title:"sosial", id:"124" }                   
                ],
                }
            ]
        }
    }
}
</script>
