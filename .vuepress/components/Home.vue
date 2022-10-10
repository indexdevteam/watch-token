<template>
  <b-row class="p-0 pt-4">
    <b-col lg="8" offset-lg="2">
      <b-jumbotron bg-variant="light" header-level="4">
        <template slot="header">
          WatchToken
        </template>
        <template slot="lead">
          {{ $site.title }}
        </template>
        <hr class="my-4">
        <p>
          Widget used to generate MetaMask links for <a href="https://www.dogelonindex.org">Dogelon Index</a> website.<br>
          It can add any ERC-20 Token to DApp browsers or MetaMask both on Ethereum, Optimism, Ethereum Classic, Binance Smart Chain, Polygon Network, KuCoin Community Chain, Dogechain, Arbitrum, Avalanche or Harmony.
        </p>
        <b-button size="sm"
                  variant="blue"
                  class="mt-2 text-uppercase p-3 btn-sm-block"
                  to="/create/?network=mainnet">
          Ethereum
        </b-button>
        <b-button size="sm"
                  variant="warning"
                  class="mt-2 text-uppercase p-3 btn-sm-block"
                  to="/create/?network=optimism_mainnet">
          Optimism
        </b-button>
        <b-button size="sm"
                  variant="warning"
                  class="mt-2 text-uppercase p-3 btn-sm-block"
                  to="/create/?network=etc_mainnet">
          Ethereum Classic
        </b-button>
        <b-button size="sm"
                  variant="warning"
                  class="mt-2 text-uppercase p-3 btn-sm-block"
                  to="/create/?network=bsc_mainnet">
          Binance Smart Chain
        </b-button>
        <b-button size="sm"
                  variant="warning"
                  class="mt-2 text-uppercase p-3 btn-sm-block"
                  to="/create/?network=gnosis_mainnet">
          Gnosis
        </b-button>
        <b-button size="sm"
                  variant="violet"
                  class="mt-2 text-uppercase p-3 btn-sm-block"
                  to="/create/?network=polygon_mainnet">
          Polygon
        </b-button>
        <b-button size="sm"
                  variant="violet"
                  class="mt-2 text-uppercase p-3 btn-sm-block"
                  to="/create/?network=kcc_mainnet">
          KCC
        </b-button>
        <b-button size="sm"
                  variant="violet"
                  class="mt-2 text-uppercase p-3 btn-sm-block"
                  to="/create/?network=dogechain_mainnet">
          Dogechain
        </b-button>
        <b-button size="sm"
                  variant="violet"
                  class="mt-2 text-uppercase p-3 btn-sm-block"
                  to="/create/?network=arbitrum_mainnet">
          Arbitrum
        </b-button>
        <b-button size="sm"
                  variant="violet"
                  class="mt-2 text-uppercase p-3 btn-sm-block"
                  to="/create/?network=avalanche_mainnet">
          Avalanche
        </b-button>
        <b-button size="sm"
                  variant="violet"
                  class="mt-2 text-uppercase p-3 btn-sm-block"
                  to="/create/?network=harmony_mainnet">
          Harmony
        </b-button>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>
  export default {
    name: 'Home',
  };
</script>
