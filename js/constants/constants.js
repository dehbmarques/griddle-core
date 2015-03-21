var keyMirror = require('react/lib/keyMirror');

/*
  It should be noted that the action types that are like 
  GRIDDLE_FILTER mean that the operation has started. 
  Past tense action types mean that the operation 
  has completed.
*/
module.exports = keyMirror({
  GRIDDLE_FILTER: null,
  GRIDDLE_FILTERED: null,
  GRIDDLE_FILTER_BY_COLUMN: null,
  GRIDDLE_FILTERED_BY_COLUMN: null,
  GRIDDLE_FILTER_BY_ADDITIONAL_COLUMN: null,
  GRIDDLE_FILTERED_BY_ADDITIONAL_COLUMN: null,
  GRIDDLE_SORT: null,
  GRIDDLE_SORTED: null,
  GRIDDLE_SORT_ADDITIONAL: null,
  GRIDDLE_SORTED_ADDITIONAL: null,
  GRIDDLE_LOAD_DATA: null,
  GRIDDLE_LOADED_DATA: null,
  GRIDDLE_NEXT: null,
  GRIDDLE_PREVIOUS: null,
  GRIDDLE_GET_PAGE: null, 
  GRIDDLE_PAGE_LOADED: null
});