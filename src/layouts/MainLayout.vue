<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          pbbg.com
        </q-toolbar-title>

        <!--        <div>Login</div>-->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Github',
    caption: 'Help is appreciated!',
    icon: 'code',
    link: 'https://github.com/foohonpie/pbbg.com',
  },
  {
    title: 'Discord Chat',
    caption: 'Come hang out. :)',
    icon: 'chat',
    link: 'https://discord.gg/KvwaEqC',
  },
  {
    title: 'Twitter',
    caption: '@pbbgsite',
    icon: 'rss_feed',
    link: 'https://twitter.com/pbbgsite',
  },
]

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
    }
  },
}
</script>
