import axios from 'axios'
import Qs from 'qs'

// Format nested params correctly
axios.interceptors.request.use(config => {

  config.paramsSerializer = params => {
    // Qs is not included in the Axios package
    return Qs.stringify(params, {
      arrayFormat: "brackets",
      encode: false
    });
  };

  return config;
});

export const state = () => ({
  // Term List
  deckList: [],
  // Individual Term
  deck: {},
  // List of card Nodes
  cardList: [],
  // Card Node
  card: {}
})

export const mutations = {
  setDeckList: (state, decks) => (state.deckList = decks),
  setDeck: (state, deck) => (state.deck = deck),
  setCardList: (state, cards) => (state.cardList = cards),
  setCard: (state, card) => (state.card = card)
}

export const actions = {

  // Fetch a list of 'deck' taxonomy terms.
  getDeckList ({ commit }, params) {
    axios.get('https://live-cards-demo.pantheonsite.io/jsonapi/taxonomy_term/deck', {
      params: params,
      headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json'
      }
    })
    .then((resp) => {
      // Set the list of decks.
      commit('setDeckList', resp.data.data)
    })
    .catch((err) => {
      console.error('There was an error fetching the deck list!')
      console.error(err)
    })
  },

  getDeck ({ commit }, deckUuid) {
    axios.get(`https://live-cards-demo.pantheonsite.io/jsonapi/taxonomy_term/deck/${deckUuid}`, {
      headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json'
      }
    })
    .then((resp) => {
      // Set the deck state.
      commit('setDeck', resp.data.data)
    })
    .catch((err) => {
      console.error('There was an error fetching the deck!')
      console.error(err)
    })
  },

  // Fetch a list of 'card' nodes.
  getCardList ({ commit }, params) {
    // Since we're fetching a deck at a time, include the deck
    // term in the reponce.
    params.include = 'field_deck'

    axios.get('https://live-cards-demo.pantheonsite.io/jsonapi/node/card', {
      params: params,
      headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json'
      }
    })
    .then((resp) => {
      console.log(resp)
      // Set the list of cards.
      commit('setCardList', resp.data.data)

      // Set the deck state.
      if (resp.data.included !== undefined) {
        commit('setDeck', resp.data.included.shift())
      }
    })
    .catch(() => {
      console.error('There was an error fetching the card list!')
    })
  }
}

export const getters = {
  deckList: state => state.deckList,
  deck: state => state.deck,
  cardList: state => state.cardList
}
