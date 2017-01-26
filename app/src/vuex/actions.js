export const setLoaderDisplayerState = function ({ dispatch, state }, display) {
  dispatch('LOADERDISPLAYER', display);
}

export const setProgressValueState = function ({ dispatch, state }, progress) {
  dispatch('PROGRESSVALUE', progress);
}

export const setListOfRessourcesState = function ({ dispatch, state }, resource) {
  dispatch('RESOURCES', resource);
}
