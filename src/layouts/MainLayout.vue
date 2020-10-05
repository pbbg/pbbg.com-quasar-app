<template>
  <q-layout view="lhh LpR lff">
    <q-header
      reveal
      elevated
    >
      <q-toolbar class="q-px-none">
        <q-btn
          class="lt-md q-ml-sm z-max"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title
          shrink
          class="q-px-sm"
        >
          <q-btn
            stretch
            flat
            label="pbbg.com"
            type="a"
            to="/"
          />
        </q-toolbar-title>
        <q-separator
          class="gt-sm"
          dark
          vertical
          inset
        />
        <div class="gt-sm q-pl-sm">
          <q-btn
            v-for="link of links"
            :key="link.id"
            stretch
            flat
            :label="link.label"
            type="a"
            :href="link.link"
            :target="link.targetBlank ? '_blank' : '_self'"
            :to="link.to ? link.to : null"
          />
        </div>
        <q-space />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      overlay
      behavior="mobile"
      elevated
      content-class="bg-grey-1 lt-md"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Navigation
        </q-item-label>
        <q-item
          v-for="link of links"
          :key="link.id"
          clickable
          v-ripple
          @click="clickNavItem(link)"
        >
          <q-item-section>{{ link.label }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer
      bordered
      dense
      class="bg-grey-1 text-grey-6"
    >
      <q-toolbar>
        <q-toolbar-title class="text-body2 text-center">
          by
          <a
            href="https://foohonpie.com/"
            target="_blank"
          >Foohon Pie LLC</a>
          with help from <a
            href="https://pbbg.com/humans.txt"
            target="_blank"
          >friends and supporters</a>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
      links: [
        {
          id: 0,
          label: 'Random Game',
          link: 'https://pbbg.com/random',
          targetBlank: false,
          to: '/games/random',
        },
        {
          id: 1,
          label: 'Submit a Game',
          link: 'https://pbbg.com/games/create',
          targetBlank: false,
          to: '/games/create',
        },
        {
          id: 2,
          label: 'About',
          link: 'https://www.patreon.com/foohonpie',
          targetBlank: true,
        },
        {
          id: 3,
          label: 'Forum',
          link: 'https://discourse.pbbg.com/',
          targetBlank: true,
        },
        {
          id: 4,
          label: 'Chat',
          link: 'https://discord.gg/KvwaEqC',
          targetBlank: true,
        },
        {
          id: 5,
          label: 'MakeWebGames',
          link: 'https://makewebgames.io/',
          targetBlank: true,
        },
      ],
    }
  },
  methods: {
    clickNavItem(link) {
      if (link.targetBlank) {
        window.location.href = link.href
      }
      if (link.to) {
        this.$router.push(link.to)
      }
    },
  },
}
</script>
