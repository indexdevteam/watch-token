<template>
  <b-navbar toggleable="md" variant="light">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand to="/">
      WatchToken
    </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item :href="$withBase('/create/')">Ethereum</b-nav-item>
        <b-nav-item :href="$withBase('/create/?network=optimism_mainnet')">Optimism</b-nav-item>
        <b-nav-item :href="$withBase('/create/?network=etc_mainnet')">Ethereum Classic</b-nav-item>
        <b-nav-item :href="$withBase('/create/?network=bsc_mainnet')">Binance Smart Chain</b-nav-item>
        <b-nav-item :href="$withBase('/create/?network=gnosis_mainnet')">Gnosis</b-nav-item>
        <b-nav-item :href="$withBase('/create/?network=polygon_mainnet')">Polygon</b-nav-item>
        <b-nav-item :href="$withBase('/create/?network=kcc_mainnet')">KCC</b-nav-item>
        <b-nav-item :href="$withBase('/create/?network=dogechain_mainnet')">Dogechain</b-nav-item>
        <b-nav-item :href="$withBase('/create/?network=arbitrum_mainnet')">Arbitrum</b-nav-item>
        <b-nav-item :href="$withBase('/create/?network=avalanche_mainnet')">Avalanche</b-nav-item>
        <b-nav-item :href="$withBase('/create/?network=harmony_mainnet')">Harmony</b-nav-item>
        <b-nav-item
            :href="$withBase('/page/?hash=0x7b2261646472657373223a22307831623137303136613930313246333562373946303833354635313365624530613641383632334430222c226c6f676f223a2268747470733a2f2f7765622e617263686976652e6f72672f7765622f3230323231303130303335303538696d5f2f68747470733a2f2f617263686976652e70682f5471544f352f653032356137393864623337386438663333386636366162346537386133613163656436666465322e706e67227d')">
          <small>Example</small>
        </b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item target="_blank" href="https://www.dogelonindex.org">
          <small>About</small>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  export default {
    name: 'Header',
  };
</script>
