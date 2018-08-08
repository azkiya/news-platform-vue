<template>
    <v-app>
    <v-navigation-drawer 
        fixed
        clipped
        app
        v-model="slideNav">
        <v-list dense>
            <v-list-tile
            v-for="item in menutItems"
            :key="item.title"
            >
                <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content  v-text="item.title"></v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
    <v-toolbar>
        <v-toolbar-side-icon @click="slideNav = !slideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>        
        <v-toolbar-title>WhatNews</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items 
            v-for="(item, i) in menutItems"
            :key="i"
            class="hidden-xs-only"
        >
            <v-btn>
                <v-icon flat left>{{ item.icon }}</v-icon>
                {{ item.title }}
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            slideNav: false,
            menutItems:[
                { icon: 'add_circle', title: 'Create Story' },
                { icon: 'face', title: 'Sign Up / Sign In' },                
            ]
        }
    }
}
</script>
