<template>
    <v-card>
        <v-container
            fluid
            grid-list-lg
        >
            <v-layout row wrap align-center justify-center>
                <v-flex xs12 sm4>
                    <v-card 
                        v-for="news in multiNews"
                        :key= "news.id"
                    >
                        <v-card-media
                            :src="news.imageUrl"
                            height="200px"
                        ></v-card-media>

                        <v-card-title primary-title @click="onLoadNews(news.id)">
                            <div style="cursor: pointer">
                                <h3 class="headline mb-0">{{ news.title }}</h3>
                            </div>
                        </v-card-title>
                        <v-card-text>
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
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            multiNews: [
                { imageUrl: "https://cdn.vuetifyjs.com/images/cards/docks.jpg", id: "1",
                title: "news 1", content:"Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...",
                topics:[
                    { title:"politik", id:"12" },
                    { title:"ekonomi", id:"123" },
                    { title:"sosial", id:"124" }                   
                ],
                },
                { imageUrl: "https://cdn.vuetifyjs.com/images/cards/desert.jpg", id: "ewrewr2",
                title: "news 2", content:"Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...",
                topics: [
                    { title:"politik", id:"12" },
                    { title:"ekonomi", id:"123" },                   
                ], 
                },
            ]
        }
    },
    methods: {
        onLoadNews(id) {
            this.$router.push('/news/' + id)
        }
    }
}
</script>
