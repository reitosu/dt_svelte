import { writable } from 'svelte/store';

function create_current_month() {
    const { subscribe, set, update } = writable(0);

};